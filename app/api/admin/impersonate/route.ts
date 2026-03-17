import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user.role !== 'SUPER_MASTER' && session.user.originalRole !== 'SUPER_MASTER')) {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const body = await req.json();
        const { empresaId, action } = body;

        const cookieStore = cookies();

        if (action === 'START') {
            if (!empresaId) return new NextResponse('Missing empresaId', { status: 400 });

            // Set cookie for 1 hour to impersonate
            cookieStore.set('impersonate_empresa_id', empresaId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 // 1 hour
            });

            return NextResponse.json({ success: true, message: 'Impersonation started' });
        }
        else if (action === 'STOP') {
            cookieStore.delete('impersonate_empresa_id');
            return NextResponse.json({ success: true, message: 'Impersonation stopped' });
        }

        return new NextResponse('Invalid Action', { status: 400 });

    } catch (error) {
        console.error('IMPERSONATE_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
