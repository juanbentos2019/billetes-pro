import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const { id } = params;
        const body = await req.json();
        const { planType, fechaVencimiento, notasPagos } = body;

        if (!id) {
            return new NextResponse('Missing ID', { status: 400 });
        }

        // Verificar si la empresa existe
        const existingEmpresa = await prisma.empresa.findUnique({
            where: { id }
        });

        if (!existingEmpresa) {
            return new NextResponse('Empresa no encontrada', { status: 404 });
        }

        // @ts-ignore
        const updatedEmpresa = await prisma.empresa.update({
            where: { id },
            data: {
                // @ts-ignore
                planType: planType !== undefined ? planType : existingEmpresa.planType,
                // @ts-ignore
                fechaVencimiento: fechaVencimiento !== undefined ? (fechaVencimiento ? new Date(fechaVencimiento) : null) : existingEmpresa.fechaVencimiento,
                // @ts-ignore
                notasPagos: notasPagos !== undefined ? notasPagos : existingEmpresa.notasPagos
            }
        });

        return NextResponse.json(updatedEmpresa);

    } catch (error) {
        console.error('UPDATE_BILLING_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
