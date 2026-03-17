import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        // Solo un ADMIN_EMPRESA puede crear cajeros, y SOLO para su propia empresa.
        if (!session || session.user.role !== 'ADMIN_EMPRESA' || !session.user.empresaId) {
            return NextResponse.json({ error: 'No autorizado para crear cajeros' }, { status: 403 });
        }

        const body = await request.json();
        const { nombre, email, password } = body;

        if (!nombre || !email || !password) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        // Verificar si el email ya existe en todo el sistema SaaS
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Ese email ya está registrado en el sistema. Debe ser único.' }, { status: 400 });
        }

        // Verificar límite de cajeros de la empresa
        const empresaId = session.user.empresaId;
        const empresa = await prisma.empresa.findUnique({
            where: { id: empresaId },
            include: {
                _count: {
                    select: {
                        usuarios: { where: { role: 'USER' } }
                    }
                }
            }
        });

        if (!empresa) {
            return NextResponse.json({ error: 'Empresa no encontrada' }, { status: 404 });
        }

        if (empresa._count.usuarios >= empresa.maxCajeros) {
            return NextResponse.json({
                error: `Límite alcanzado. Tu plan actual solo permite crear hasta ${empresa.maxCajeros} cajero(s).`
            }, { status: 403 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoCajero = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                nombre: nombre,
                role: 'USER',
                empresaId: session.user.empresaId, // SE ATA EL CAJERO A LA EMPRESA DEL ADMIN
            }
        });

        // Removemos la contraseña antes de devolver el objeto
        const { password: _, ...userSinPassword } = nuevoCajero;

        return NextResponse.json(userSinPassword, { status: 201 });

    } catch (error) {
        console.error('Error al crear cajero/usuario:', error);
        return NextResponse.json({ error: 'Hubo un error interno en el servidor' }, { status: 500 });
    }
}
