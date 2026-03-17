"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEmpresaForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const nombreEmpresa = formData.get("nombreEmpresa");
        const adminEmail = formData.get("adminEmail");
        const adminPassword = formData.get("adminPassword");
        const adminName = formData.get("adminName");
        const maxCajeros = formData.get("maxCajeros");

        try {
            const res = await fetch("/api/empresas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: nombreEmpresa,
                    adminEmail,
                    adminPassword,
                    adminName,
                    maxCajeros
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Error al crear empresa");
            }

            // Limpia el formulario y recarga los datos usando la variable guardada
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

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Nombre de la Empresa</label>
                    <input
                        name="nombreEmpresa"
                        type="text"
                        required
                        placeholder="Ej: Casa de Cambio Asunción"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Cajeros Máximos</label>
                    <input
                        name="maxCajeros"
                        type="number"
                        min="1"
                        defaultValue="1"
                        required
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>
            </div>

            <div className="pt-2 border-t border-slate-700">
                <h4 className="text-sm font-semibold text-primary mb-3">Administrador de la Empresa</h4>

                <div className="space-y-3">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Nombre (Opcional)</label>
                        <input
                            name="adminName"
                            type="text"
                            placeholder="Ej: Juan Perez"
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Email (Usuario)</label>
                        <input
                            name="adminEmail"
                            type="email"
                            required
                            placeholder="admin@empresa.com"
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Contraseña</label>
                        <input
                            name="adminPassword"
                            type="password"
                            required
                            placeholder="Minimo 6 caracteres"
                            minLength={6}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg transition disabled:opacity-50 mt-4"
            >
                {loading ? "Creando Empresa..." : "Crear Empresa y Admin"}
            </button>
        </form>
    );
}
