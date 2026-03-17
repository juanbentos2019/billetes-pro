"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCajeroForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        const nombre = formData.get("nombre");

        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                    nombre
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Error al crear cajero");
            }

            form.reset();
            router.refresh();

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Nombre y Apellido <span className="text-red-400">*</span></label>
                <input
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej: Marcelo Suarez"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email <span className="text-red-400">*</span></label>
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="cajero1@tuempresa.com"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Contraseña Temporal <span className="text-red-400">*</span></label>
                <input
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg transition disabled:opacity-50 mt-4"
            >
                {loading ? "Registrando Cajero..." : "Registrar Cajero"}
            </button>
        </form>
    );
}
