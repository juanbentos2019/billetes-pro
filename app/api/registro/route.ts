import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nombreEmpresa, nombreContacto, email, password, telefono } = body;

        // Validaciones básicas
        if (!nombreEmpresa || !nombreContacto || !email || !password) {
            return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ error: 'La contraseña debe tener al menos 6 caracteres.' }, { status: 400 });
        }

        // 1. Validar que el email no esté ya registrado
        // @ts-ignore Prisma Windows bug
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: 'El email ya está registrado.' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // 2. Transacción: crear Empresa + Usuario con acceso bloqueado hasta activación manual del admin
        // @ts-ignore Prisma Windows bug
        const result = await prisma.$transaction(async (tx) => {
            // A. Empresa en estado SOLICITUD (inactiva, pendiente de activación)
            const nuevaEmpresa = await tx.empresa.create({
                data: {
                    nombre: nombreEmpresa,
                    maxCajeros: 1,
                    activo: false,
                    estadoCrm: "SOLICITUD",
                    planType: "SIN PLAN",
                    fechaVencimiento: new Date(Date.now() - 24 * 60 * 60 * 1000),
                    notasPagos: `Solicitud web. Contacto: ${nombreContacto}${telefono ? ` | Tel: ${telefono}` : ''}. Pendiente de pago y activación.`
                }
            });

            // B. Usuario inactivo hasta que el admin active la empresa
            const nuevoAdmin = await tx.user.create({
                data: {
                    nombre: nombreContacto,
                    email: email,
                    password: hashedPassword,
                    role: "ADMIN_EMPRESA",
                    empresaId: nuevaEmpresa.id,
                    activo: false
                }
            });

            return { empresa: nuevaEmpresa, admin: nuevoAdmin };
        });

        return NextResponse.json(
            { message: 'Solicitud recibida. El equipo se pondrá en contacto para coordinar el acceso.', data: { email: result.admin.email } },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error en el registro B2B:', error);
        return NextResponse.json({ error: 'Error interno del servidor durante el registro.' }, { status: 500 });
    }
}
