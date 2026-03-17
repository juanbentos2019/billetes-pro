import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Ingreso al Sistema',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "tu@empresa.com" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Por favor, ingresa correo y contraseña.');
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                    include: { empresa: { select: { nombre: true, fechaVencimiento: true } } }
                });

                if (!user || !user.password) {
                    throw new Error('Usuario no encontrado.');
                }

                if (!user.activo) {
                    throw new Error('Cuenta desactivada. Contacta al administrador.');
                }

                // 1. Verificar si la cuenta está bloqueada temporalmente
                if (user.lockedUntil && user.lockedUntil > new Date()) {
                    const minutosRestantes = Math.ceil((user.lockedUntil.getTime() - Date.now()) / 60000);
                    throw new Error(`Cuenta bloqueada por múltiples intentos fallidos. Intenta de nuevo en ${minutosRestantes} minutos.`);
                }

                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

                if (!isPasswordValid) {
                    // 2. Incrementar intentos fallidos atómicamente a nivel de base de datos
                    const updatedUser = await prisma.user.update({
                        where: { id: user.id },
                        data: { failedLoginAttempts: { increment: 1 } },
                        select: { failedLoginAttempts: true }
                    });

                    const nuevosIntentos = updatedUser.failedLoginAttempts;

                    if (nuevosIntentos >= 5) {
                        // Bloquear por 5 minutos (5 * 60 * 1000 ms)
                        await prisma.user.update({
                            where: { id: user.id },
                            data: {
                                lockedUntil: new Date(Date.now() + 5 * 60 * 1000)
                            }
                        });
                        throw new Error('Demasiados intentos incorrectos. Tu cuenta ha sido bloqueada por 5 minutos por seguridad.');
                    } else {
                        throw new Error(`Contraseña incorrecta. Te quedan ${5 - nuevosIntentos} intentos antes de bloquear la cuenta.`);
                    }
                }

                // 3. Login exitoso: Resetear los contadores
                const newLoginToken = crypto.randomUUID();

                await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        loginToken: newLoginToken,
                        failedLoginAttempts: 0,
                        lockedUntil: null,
                        lastLogin: new Date()
                    }
                });

                return {
                    id: user.id,
                    email: user.email,
                    name: user.nombre,
                    role: user.role,
                    empresaId: user.empresaId,
                    empresaNombre: user.empresa?.nombre || null,
                    // Convertimos la fecha a string para guardarla en el JWT
                    empresaVencimiento: user.empresa?.fechaVencimiento ? user.empresa.fechaVencimiento.toISOString() : null,
                    loginToken: newLoginToken,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            // Leer la cookie de impersonación (sólo si es SUPER_MASTER originalmente)
            let impersonateId = null;
            try {
                const cookieStore = cookies();
                impersonateId = cookieStore.get('impersonate_empresa_id')?.value;
            } catch (e) {
                // Prevenir fallos en contextos donde cookies() no esté disponible aún
            }

            // Si es el login inicial, 'user' estará definido
            if (user) {
                // Login fresco: eliminar cualquier cookie de impersonación residual
                // Esto evita que una sesión anterior de impersonación contamine el nuevo login
                try {
                    const cookieStoreOnLogin = cookies();
                    if (cookieStoreOnLogin.get('impersonate_empresa_id')) {
                        cookieStoreOnLogin.delete('impersonate_empresa_id');
                    }
                } catch (e) { /* Ignorar si no está disponible */ }
                token.role = user.role;
                token.empresaId = user.empresaId;
                token.empresaNombre = user.empresaNombre;
                // @ts-ignore
                token.empresaVencimiento = user.empresaVencimiento;
                token.id = user.id;
                token.loginToken = user.loginToken;
                token.originalRole = user.role; // Guardar rol original por si impersonamos
            } else if (token.id) {
                // En peticiones subsecuentes, validamos contra la BD
                const dbUser = await prisma.user.findUnique({
                    where: { id: token.id as string },
                    select: { loginToken: true, activo: true }
                });

                // Si la cuenta está inactiva o el token de login cambió
                if (!dbUser || !dbUser.activo || dbUser.loginToken !== token.loginToken) {
                    token.error = "SessionExpired";
                }
            }

            // APLICAR MODO INPERSONACIÓN
            if (token.originalRole === 'SUPER_MASTER' || token.role === 'SUPER_MASTER') {
                if (impersonateId) {
                    // Si quiere inpersonar, le cambiamos los valores de sesión
                    const empresaTarget = await prisma.empresa.findUnique({ where: { id: impersonateId }, select: { nombre: true } });
                    if (empresaTarget) {
                        token.role = 'ADMIN_EMPRESA';
                        token.empresaId = impersonateId;
                        token.empresaNombre = empresaTarget.nombre;
                        token.isImpersonating = true;
                    } else {
                        // La empresa fue eliminada mientras se impersonaba.
                        // Revertir al estado SUPER_MASTER y limpiar la cookie residual.
                        token.role = 'SUPER_MASTER';
                        token.empresaId = null;
                        token.empresaNombre = null;
                        token.isImpersonating = false;
                        try {
                            cookies().delete('impersonate_empresa_id');
                        } catch(e) { /* context may not allow cookie deletion here */ }
                    }
                } else {
                    // Si no hay cookie, asegurar que vuelve a ser SUPER_MASTER
                    token.role = 'SUPER_MASTER';
                    token.empresaId = null;
                    token.empresaNombre = null;
                    token.isImpersonating = false;
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (token.error) {
                session.error = token.error as string;
            }

            if (session.user) {
                session.user.role = token.role as string;
                session.user.empresaId = token.empresaId as string | null;
                session.user.empresaNombre = token.empresaNombre as string | null;
                // @ts-ignore
                session.user.empresaVencimiento = token.empresaVencimiento as string | null;
                session.user.id = token.id as string;
                session.user.originalRole = token.originalRole as string | undefined;
                session.user.isImpersonating = (token.isImpersonating as boolean) ?? false;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login', // Ruta personalizada para el login
    },
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,
};
