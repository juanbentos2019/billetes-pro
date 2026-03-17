import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
        }

        const id = params.id;
        if (!id) return NextResponse.json({ error: 'ID de ticket no proporcionado' }, { status: 400 });

        const body = await req.json();
        const { estado, archivado } = body;

        const data: Record<string, unknown> = {};

        if (archivado !== undefined) {
            data.archivado = Boolean(archivado);
        }

        if (estado !== undefined) {
            if (!['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'].includes(estado)) {
                return NextResponse.json({ error: 'Estado inválido' }, { status: 400 });
            }
            data.estado = estado;
        }

        if (Object.keys(data).length === 0) {
            return NextResponse.json({ error: 'Nada que actualizar' }, { status: 400 });
        }

        // @ts-ignore Prisma client needs regeneration on Windows
        const updatedTicket = await prisma.ticket.update({ where: { id }, data });

        return NextResponse.json(updatedTicket, { status: 200 });
    } catch (error) {
        console.error('Error al actualizar el ticket:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
