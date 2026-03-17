import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nombre, empresa, email, telefono, mensaje } = body;

        // Validaciones básicas
        if (!nombre || !empresa || !email || !mensaje) {
            return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
        }

        // Crear el Lead Corporativo
        // @ts-ignore
        const newLead = await prisma.corporateLead.create({
            data: {
                nombre,
                empresa,
                email,
                telefono: telefono || null,
                mensaje,
                estado: "PENDING"
            }
        });

        return NextResponse.json(
            { message: 'Solicitud enviada exitosamente.', leadId: newLead.id },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error al guardar lead corporativo:', error);
        return NextResponse.json({ error: 'Error interno del servidor al procesar la solicitud.' }, { status: 500 });
    }
}
