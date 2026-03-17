import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
        }

        const empresaId = params.id;
        const body = await request.json();
        const { nombre, suspender, maxCajeros, activar, planType, fechaVencimiento, notasPagos } = body;

        // 0. Activar una solicitud de registro pendiente (con plan, cajeros y período)
        if (activar === true) {
            await prisma.$transaction(async (tx) => {
                await tx.empresa.update({
                    where: { id: empresaId },
                    data: {
                        activo: true,
                        estadoCrm: 'CLIENTE',
                        ...(planType && { planType }),
                        ...(maxCajeros && { maxCajeros: parseInt(maxCajeros, 10) }),
                        ...(fechaVencimiento && { fechaVencimiento: new Date(fechaVencimiento) }),
                        ...(notasPagos !== undefined && { notasPagos }),
                    }
                });
                await tx.user.updateMany({
                    where: { empresaId: empresaId },
                    data: { activo: true }
                });
            });
            return NextResponse.json({ message: 'Empresa activada exitosamente. Los usuarios ya pueden iniciar sesión.' });
        }
        // 1. Si piden suspender/reactivar a toda la empresa (Suspende también en cascada a sus usuarios)
        if (suspender !== undefined) {
            await prisma.$transaction(async (tx) => {
                // Suspendemos (o reactivamos) a la EMPRESA en sí
                await tx.empresa.update({
                    where: { id: empresaId },
                    data: { activo: !suspender }
                });

                // Y suspendemos a TODOS sus usuarios (admins y cajeros) en cascada
                await tx.user.updateMany({
                    where: { empresaId: empresaId },
                    data: { activo: !suspender }
                });
            });
            return NextResponse.json({ message: suspender ? "Empresa suspendida" : "Empresa reactivada" });
        }

        // 2. Si piden actualizar el nombre o maxCajeros
        if (nombre || maxCajeros !== undefined) {
            const dataToUpdate: any = {};
            if (nombre) dataToUpdate.nombre = nombre;
            if (maxCajeros !== undefined) dataToUpdate.maxCajeros = parseInt(maxCajeros, 10);

            const empresaActualizada = await prisma.empresa.update({
                where: { id: empresaId },
                data: dataToUpdate
            });
            return NextResponse.json(empresaActualizada);
        }

        return NextResponse.json({ error: "No se enviaron datos para actualizar" }, { status: 400 });

    } catch (error) {
        console.error('Error al actualizar empresa:', error);
        return NextResponse.json({ error: 'Hubo un error interno en el servidor' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);

        // Solo el dueño absoluto del software puede borrar una empresa entera de su BD
        if (!session || session.user.role !== 'SUPER_MASTER') {
            return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
        }

        const empresaId = params.id;

        // Transacción: Hay que borrar primero a todos los usuarios que pertenecen a esta empresa (por la Foreign Key) antes de borrar a la empresa en sí.
        await prisma.$transaction(async (tx) => {
            await tx.user.deleteMany({
                where: { empresaId: empresaId }
            });
            await tx.empresa.delete({
                where: { id: empresaId }
            });
        });

        return NextResponse.json({ message: "La empresa y todos sus usuarios han sido eliminados de la base de datos." }, { status: 200 });

    } catch (error) {
        console.error('Error al eliminar empresa:', error);
        return NextResponse.json({ error: 'Hubo un error interno en el servidor' }, { status: 500 });
    }
}
