import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        // Para forzar el cierre de sesión de todos los usuarios (incluyendo otros SUPER_MASTER si los hubiera)
        // generamos un nuevo loginToken para todos, excepto el usuario que está realizando la acción.
        // Opcionalmente podemos hacerlo para TODOS sin exclusión (saca al propio admin también).
        // Vamos a sacarlos a todos menos al superadmin actual que apretó el botón.

        await prisma.user.updateMany({
            where: {
                id: {
                    not: session.user.id
                }
            },
            data: {
                loginToken: crypto.randomUUID()
            }
        });

        return NextResponse.json({ success: true, message: 'Todas las sesiones activas han sido invalidadas.' });

    } catch (error) {
        console.error('PANIC_LOGOUT_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
