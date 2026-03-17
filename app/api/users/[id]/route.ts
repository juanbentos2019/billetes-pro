import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Revisa si el usuario actual que está haciendo la petición tiene permisos sobre el usuario destino.
async function checkAutorizacion(idDestino: string) {
    const session = await getServerSession(authOptions);

    if (!session) return { autorizado: false, error: "No autorizado" };

    const targetUser = await prisma.user.findUnique({ where: { id: idDestino } });
    if (!targetUser) return { autorizado: false, error: "Usuario no encontrado" };

    // El SUPER_MASTER puede tocar todo
    if (session.user.role === 'SUPER_MASTER') {
        return { autorizado: true, targetUser };
    }

    // El ADMIN_EMPRESA solo puede tocar a usuarios (cajeros) de su misma empresa, y no a otros admins.
    if (session.user.role === 'ADMIN_EMPRESA') {
        if (targetUser.empresaId !== session.user.empresaId) {
            return { autorizado: false, error: "Ese usuario pertenece a otra empresa." };
        }
        if (targetUser.role === 'ADMIN_EMPRESA' || targetUser.role === 'SUPER_MASTER') {
            return { autorizado: false, error: "No puedes editar a otro administrador o superior." };
        }
        return { autorizado: true, targetUser };
    }

    return { autorizado: false, error: "Permisos insuficientes" };
}


export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const { autorizado, error, targetUser } = await checkAutorizacion(params.id);
        if (!autorizado || !targetUser) return NextResponse.json({ error }, { status: 403 });

        const body = await request.json();
        const { nombre, password, activo } = body;

        // Objeto data a actualizar dinámicamente
        let dataToUpdate: any = {};
        if (nombre !== undefined) dataToUpdate.nombre = nombre;
        if (activo !== undefined) dataToUpdate.activo = activo; // suspender / reactivar

        if (password) {
            if (password.length < 6) return NextResponse.json({ error: "Contraseña muy corta" }, { status: 400 });
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }

        const usuarioActualizado = await prisma.user.update({
            where: { id: params.id },
            data: dataToUpdate
        });

        const { password: _, ...userSinPassword } = usuarioActualizado;
        return NextResponse.json(userSinPassword);

    } catch (err) {
        console.error('Error al actualizar usuario:', err);
        return NextResponse.json({ error: 'Hubo un error interno' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { autorizado, error, targetUser } = await checkAutorizacion(params.id);
        if (!autorizado || !targetUser) return NextResponse.json({ error }, { status: 403 });

        // Eliminación dura (Hard Delete) del usuario.
        await prisma.user.delete({
            where: { id: params.id }
        });

        return NextResponse.json({ message: "Usuario eliminado correctamente" }, { status: 200 });

    } catch (err) {
        console.error('Error al eliminar usuario:', err);
        return NextResponse.json({ error: 'Hubo un error interno' }, { status: 500 });
    }
}
