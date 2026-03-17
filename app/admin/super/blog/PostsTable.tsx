'use client';

import { useRouter } from 'next/navigation';
import { useUI } from '@/components/UIProvider';

export default function PostsTable({ posts }: { posts: any[] }) {
    const router = useRouter();
    const { toast, confirm } = useUI();

    const handleDelete = async (id: string, title: string) => {
        const ok = await confirm({
            title: 'Eliminar noticia',
            message: `¿Estás seguro de eliminar permanentemente la noticia: "${title}"?`,
            confirmLabel: 'Sí, eliminar',
            variant: 'danger'
        });
        if (!ok) return;

        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                toast('Noticia eliminada correctamente.', 'success');
                router.refresh();
            } else {
                toast('Error al eliminar la noticia.', 'error');
            }
        } catch (error) {
            console.error(error);
            toast('Ocurrió un error crítico.', 'error');
        }
    };

    if (posts.length === 0) {
        return <div className="text-slate-400 p-4 border border-slate-700 rounded-lg">No has publicado ninguna noticia aún.</div>
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800 text-slate-400">
                    <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Título</th>
                        <th className="px-4 py-3">Publicado</th>
                        <th className="px-4 py-3">Fecha</th>
                        <th className="px-4 py-3 text-right rounded-tr-lg">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                    {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-slate-800/50">
                            <td className="px-4 py-4 font-medium text-white max-w-[200px] truncate">{post.title}</td>
                            <td className="px-4 py-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${post.published ? 'bg-green-600/20 text-green-400' : 'bg-slate-600/20 text-slate-400'}`}>
                                    {post.published ? 'SÍ' : 'BORRADOR'}
                                </span>
                            </td>
                            <td className="px-4 py-4">{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-4 text-right">
                                <button
                                    onClick={() => handleDelete(post.id, post.title)}
                                    className="text-red-400 hover:text-red-300 font-bold px-2 py-1 hover:bg-red-400/10 rounded ml-2"
                                    title="Eliminar Noticia"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
