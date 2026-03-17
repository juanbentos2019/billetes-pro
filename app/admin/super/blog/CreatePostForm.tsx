'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/components/UIProvider';

export default function CreatePostForm() {
    const router = useRouter();
    const { toast } = useUI();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        imageUrl: '',
        content: '',
        published: true
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast('Noticia publicada exitosamente.', 'success');
                setFormData({ title: '', excerpt: '', imageUrl: '', content: '', published: true });
                router.refresh();
            } else {
                const text = await res.text();
                toast(`Error al publicar: ${text}`, 'error');
            }
        } catch (error) {
            console.error(error);
            toast('Ocurrió un error crítico al publicar.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Título de la Noticia</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Ej. Nuevo billete de 100 Dólares..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">URL de Imagen (Opcional)</label>
                <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="https://ejemplo.com/imagen.jpg"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Resumen Corto (Para la tarjeta)</label>
                <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Escribe dos líneas sobre lo que trata el artículo..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Cuerpo Completo de la Noticia</label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Escribe todo el contenido aquí. Los saltos de línea se respetarán en la vista pública."
                />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary bg-slate-900 border-slate-700 rounded focus:ring-primary focus:ring-2"
                />
                <label htmlFor="published" className="text-sm font-medium text-slate-300">
                    Publicar inmediatamente (Visible al público)
                </label>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-white text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
                {isLoading ? 'Guardando Noticia...' : 'Redactar y Publicar Noticia'}
            </button>
        </form>
    );
}
