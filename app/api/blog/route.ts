import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// Slugify function to generate URLs like "my-new-post"
function generateSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

export async function GET(req: Request) {
    try {
        const posts = await prisma.post.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
            include: {
                author: {
                    select: { nombre: true }
                }
            }
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.error('FETCH_POSTS_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'SUPER_MASTER') {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const body = await req.json();
        const { title, excerpt, content, imageUrl, published = true } = body;

        if (!title || !excerpt || !content) {
            return new NextResponse('Missing required fields', { status: 400 });
        }

        let slug = generateSlug(title);

        // Ensure slug is unique
        let slugExists = await prisma.post.findUnique({ where: { slug } });
        let counter = 1;
        while (slugExists) {
            slug = `${generateSlug(title)}-${counter}`;
            slugExists = await prisma.post.findUnique({ where: { slug } });
            counter++;
        }

        const post = await prisma.post.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                imageUrl: imageUrl || null,
                published,
                authorId: session.user.id
            }
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('CREATE_POST_ERROR', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
