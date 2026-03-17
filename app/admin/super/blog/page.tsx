import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import CreatePostForm from "./CreatePostForm";
import PostsTable from "./PostsTable";

export default async function SuperAdminBlogPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "SUPER_MASTER") {
        redirect("/");
    }

    // Obtener los posts
    // @ts-ignore
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            author: { select: { nombre: true } }
        }
    });

    return (
        <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 p-6 rounded-xl border border-slate-700 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">CMS Numismático (Blog)</h2>
                    <p className="text-slate-400 text-sm">Crea, edita y elimina noticias para el portal público.</p>
                </div>
                <Link
                    href="/admin/super"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-bold transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Volver al Dashboard
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario de Redacción */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit sticky top-24">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            Nueva Noticia
                        </h3>
                        <CreatePostForm />
                    </div>
                </div>

                {/* Listado de Noticias */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            Noticias Publicadas ({posts.length})
                        </h3>
                        <PostsTable posts={posts} />
                    </div>
                </div>
            </div>
        </div>
    );
}
