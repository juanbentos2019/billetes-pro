import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.id || !session.user.empresaId) {
            return NextResponse.json({ error: 'No autorizado / Sesión de empresa no válida' }, { status: 401 });
        }

        const body = await req.json();
        const { asunto, mensaje } = body;

        if (!asunto || !mensaje) {
            return NextResponse.json({ error: 'Asunto y mensaje son requeridos' }, { status: 400 });
        }

        // @ts-ignore Prisma client needs regeneration on Windows
        const ticket = await prisma.ticket.create({
            data: {
                asunto,
                mensaje,
                autorId: session.user.id,
                empresaId: session.user.empresaId,
                estado: "OPEN"
            }
        });

        return NextResponse.json(ticket, { status: 201 });
    } catch (error) {
        console.error('Error al crear el ticket:', error);
        return NextResponse.json({ error: 'Error interno del servidor al crear el ticket' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'SUPER_MASTER' && session.user.role !== 'ADMIN_EMPRESA')) {
            return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
        }

        const isAdminEmpresa = session.user.role === 'ADMIN_EMPRESA';

        // @ts-ignore Prisma client needs regeneration on Windows
        const tickets = await prisma.ticket.findMany({
            where: isAdminEmpresa ? { empresaId: session.user.empresaId as string } : undefined,
            orderBy: { createdAt: 'desc' },
            include: {
                autor: { select: { nombre: true, email: true } },
                empresa: { select: { nombre: true } }
            }
        });

        return NextResponse.json(tickets, { status: 200 });
    } catch (error) {
        console.error('Error al obtener los tickets:', error);
        return NextResponse.json({ error: 'Error interno del servidor al obtener los tickets' }, { status: 500 });
    }
}
