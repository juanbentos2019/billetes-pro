import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    // @ts-ignore
    const post = await prisma.post.findUnique({
        where: { slug: params.slug },
    });

    if (!post) {
        return { title: 'Noticia no encontrada | Billetes Next' };
    }

    return {
        title: `${post.title} | Billetes Next`,
        description: post.excerpt,
    };
}

export default async function NoticiaIndividual({ params }: { params: { slug: string } }) {
    // @ts-ignore
    const post = await prisma.post.findUnique({
        where: { slug: params.slug },
        include: {
            author: { select: { nombre: true } }
        }
    });

    if (!post || !post.published) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-900 py-20 px-4 mt-16">
            <article className="container mx-auto max-w-4xl">
                <Link href="/noticias" className="inline-flex items-center text-primary hover:text-white transition font-medium mb-8">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                    Volver a Noticias
                </Link>

                <header className="mb-10 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 text-slate-400 text-sm font-medium mb-4">
                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Actualización de Mercado</span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Por {post.author?.nombre || 'Redacción Billetes Next'}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-slate-300 italic max-w-3xl">
                        {post.excerpt}
                    </p>
                </header>

                {post.imageUrl && (
                    <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-800 mb-12 shadow-2xl relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div
                    className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-white prose-headings:text-white prose-strong:text-white prose-li:text-slate-300"
                    dangerouslySetInnerHTML={{
                        // Para soportar saltos de línea de textarea como párrafos o brs de forma simple
                        __html: post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />')
                    }}
                />
            </article>
        </main>
    );
}
