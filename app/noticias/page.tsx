import Link from 'next/link';
import prisma from '@/lib/prisma';
import Image from 'next/image';

export const metadata = {
    title: 'Noticias Numismáticas | Billetes Next',
    description: 'Manténgase al día con las últimas noticias del mercado de divisas y numismática internacional.',
};

export default async function NoticiasPage() {
    // @ts-ignore
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        include: { author: { select: { nombre: true } } }
    });

    return (
        <main className="min-h-screen bg-slate-900 py-20 px-4 mt-16">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog y Noticias Numismáticas</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Actualizaciones del mercado internacional de divisas, nuevos sistemas antihurtos, emisión de nuevos billetes y análisis directo para empresas de cambio.
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center text-slate-400 p-12 bg-slate-800 rounded-2xl border border-slate-700">
                        Aún no hay noticias publicadas. Regrese pronto.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <Link key={post.id} href={`/noticias/${post.slug}`} className="group block h-full">
                                <article className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition duration-300 h-full flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    {post.imageUrl ? (
                                        <div className="relative h-48 w-full overflow-hidden bg-slate-700">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-48 w-full bg-slate-700 flex items-center justify-center text-slate-500">
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                                        </div>
                                    )}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                            <span className="bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">Numismática</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                            Leer artículo completo
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
