import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        // Protección middleware: Solo SUPER_MASTER puede ocultar o revelar billetes
        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
        }

        const body = await req.json();
        const { pais, denominacion, anioEmision } = body;

        if (!pais || !denominacion || !anioEmision) {
            return NextResponse.json({ error: 'Faltan parámetros requeridos (pais, denominacion, anioEmision)' }, { status: 400 });
        }

        // Buscar si el billete ya está oculto
        const billeteExistente = await prisma.billeteOculto.findUnique({
            where: {
                pais_denominacion_anioEmision: {
                    pais,
                    denominacion,
                    anioEmision
                }
            }
        });

        if (billeteExistente) {
            // Si ya está oculto, lo REVELAMOS (borrando el registro)
            await prisma.billeteOculto.delete({
                where: { id: billeteExistente.id }
            });
            return NextResponse.json({ success: true, isHidden: false, message: 'Billete re-activado y ahora visible para todos' });
        } else {
            // Si NO está oculto, lo OCULTAMOS (creando el registro)
            await prisma.billeteOculto.create({
                data: {
                    pais,
                    denominacion,
                    anioEmision
                }
            });
            return NextResponse.json({ success: true, isHidden: true, message: 'Billete ocultado exitosamente para cajeros' });
        }

    } catch (error) {
        console.error('Error al hacer toggle en visibilidad de billete:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
