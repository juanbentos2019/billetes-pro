import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        // Protección middleware: Solo SUPER_MASTER puede agregar o editar info de seguridad
        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
        }

        const body = await req.json();
        const { pais, denominacion, anioEmision, titulo, contenido, detalles } = body;

        if (!pais || !denominacion || !anioEmision || !titulo) {
            return NextResponse.json({ error: 'Faltan parámetros requeridos (país, denominación, año de emisión, título)' }, { status: 400 });
        }

        // Usamos upsert para crear o actualizar el registro basado en la clave única
        const infoBillete = await prisma.billeteInfo.upsert({
            where: {
                pais_denominacion_anioEmision: {
                    pais,
                    denominacion,
                    anioEmision
                }
            },
            update: {
                titulo,
                contenido: contenido || null,
                detalles: detalles || []
            },
            create: {
                pais,
                denominacion,
                anioEmision,
                titulo,
                contenido: contenido || null,
                detalles: detalles || []
            }
        });

        return NextResponse.json({ success: true, info: infoBillete, message: 'Información de seguridad guardada exitosamente' });

    } catch (error) {
        console.error('Error al guardar información de billete:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
