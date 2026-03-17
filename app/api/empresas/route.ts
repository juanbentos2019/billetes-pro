import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
        }

        const body = await request.json();
        const { nombre, adminEmail, adminPassword, adminName, maxCajeros } = body;

        if (!nombre || !adminEmail || !adminPassword) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        // Verificar si el email ya existe en todo el sistema SaaS
        const existingUser = await prisma.user.findUnique({
            where: { email: adminEmail }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Ese email ya está registrado en el sistema' }, { status: 400 });
        }

        // Transacción: Creamos la empresa y su primer administrador atado a ella
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const nuevaEmpresa = await prisma.$transaction(async (tx) => {
            // Por defecto, damos 30 días de gracia a las empresas nuevas
            const fechaVencimiento = new Date();
            fechaVencimiento.setDate(fechaVencimiento.getDate() + 30);

            const empresa = await tx.empresa.create({
                data: {
                    nombre,
                    maxCajeros: maxCajeros ? parseInt(maxCajeros, 10) : 1,
                    fechaVencimiento: fechaVencimiento,
                    planType: 'BASIC'
                },
            });

            await tx.user.create({
                data: {
                    email: adminEmail,
                    password: hashedPassword,
                    nombre: adminName || null,
                    role: 'ADMIN_EMPRESA',
                    empresaId: empresa.id,
                }
            });

            return empresa;
        });

        return NextResponse.json(nuevaEmpresa, { status: 201 });

    } catch (error) {
        console.error('Error al crear empresa:', error);
        return NextResponse.json({ error: 'Hubo un error interno en el servidor' }, { status: 500 });
    }
}
