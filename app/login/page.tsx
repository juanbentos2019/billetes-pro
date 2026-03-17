'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [credenciales, setCredenciales] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: credenciales.email,
                password: credenciales.password,
            });

            if (res?.error) {
                setError(res.error);
            } else {
                router.push('/');
                router.refresh();
            }
        } catch (err: any) {
            setError('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorativo */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

            <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">BilletesNext</h1>
                    <p className="text-slate-400 mt-2">Inicia sesión en tu cuenta</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl text-sm mb-6 text-center shadow-lg shadow-red-900/20">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">Email Empresarial</label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="tu@empresa.com"
                            value={credenciales.email}
                            onChange={(e) => setCredenciales({ ...credenciales, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="••••••••"
                            value={credenciales.password}
                            onChange={(e) => setCredenciales({ ...credenciales, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-white text-slate-900 font-bold py-3.5 rounded-xl transition-colors mt-4 disabled:opacity-50 flex justify-center items-center h-[52px]"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                        ) : (
                            'Ingresar al Sistema'
                        )}
                    </button>
                </form>

                {/* Return Home Link */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Volver a la Pantalla Inicial
                    </Link>
                </div>
            </div>
            
            <div className="mt-8 text-center text-slate-500 text-sm flex gap-4">
                <Link href="/registro" className="hover:text-primary transition-colors">¿No tienes cuenta? Prueba Gratis</Link>
                <span>•</span>
                <Link href="/soporte" className="hover:text-primary transition-colors">Necesito Ayuda</Link>
            </div>
        </div>
    );
}
