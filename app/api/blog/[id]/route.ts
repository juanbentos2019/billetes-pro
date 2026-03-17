import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const { id } = params;

        if (!id) {
            return new NextResponse('Missing post ID', { status: 400 });
        }

        // Verify it exists
        // @ts-ignore
        const existingPost = await prisma.post.findUnique({
            where: { id }
        });

        if (!existingPost) {
            return new NextResponse('Post no encontrado', { status: 404 });
        }

        // @ts-ignore
        await prisma.post.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE_POST_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
