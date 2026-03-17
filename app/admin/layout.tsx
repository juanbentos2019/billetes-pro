"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import ImpersonationBanner from "@/components/ImpersonationBanner";
import { UIProvider } from "@/components/UIProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/api/auth/signin");
        } else if (status === "authenticated" && session?.user?.role === "USER") {
            // Un usuario cajero normal no tiene acceso a las herramientas de admin
            router.push("/");
        }
    }, [status, session, router]);

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Cargando acceso seguro...</div>;
    }

    if (!session || session.user.role === "USER") {
        return null; // El hook useEffect lo redirigirá
    }

    return (
        <UIProvider>
        <div className="min-h-screen bg-slate-900 text-slate-100 flex">
            {/* Sidebar de Admin */}
            <aside className="w-64 bg-slate-800 p-6 border-r border-slate-700 hidden md:block">
                <h2 className="text-2xl font-bold text-primary mb-8">Panel SaaS</h2>
                <nav className="space-y-4">
                    {session.user.role === "SUPER_MASTER" && (
                        <Link href="/admin/super" className="block px-4 py-2 rounded-lg bg-primary/20 text-primary font-medium hover:bg-primary/30 transition">
                            Gestión de Empresas (Master)
                        </Link>
                    )}

                    <Link href="/admin/empresa" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition">
                        Mis Cajeros / Usuarios
                    </Link>

                    <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-slate-700 transition mt-auto pt-8 border-t border-slate-700">
                        ← Volver a Billetes
                    </Link>
                </nav>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
                    <div>
                        <h1 className="text-3xl font-bold">Bienvenido, {session.user.name || session.user.email}</h1>
                        <p className="text-slate-400">Nivel de Acceso: <span className="text-primary font-bold">{session.user.role}</span></p>
                    </div>
                    <div>
                        <Link href="/api/auth/signout" className="text-red-400 hover:text-red-300 font-medium">Cerrar Sesión</Link>
                    </div>
                </header>

                <ImpersonationBanner />
                {children}
            </main>
        </div>
        </UIProvider>
    );
}
