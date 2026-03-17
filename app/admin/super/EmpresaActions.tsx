"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/UIProvider";

interface EmpresaActionsProps {
    empresaId: string;
}

export default function EmpresaActions({ empresaId }: EmpresaActionsProps) {
    const router = useRouter();
    const { toast, confirm } = useUI();
    const [loading, setLoading] = useState(false);

    const handleEditNombre = async () => {
        const nuevoNombre = prompt("Introduce el nuevo nombre de la empresa:");
        if (!nuevoNombre || nuevoNombre.trim() === "") return;

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${empresaId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre: nuevoNombre.trim() }),
            });

            if (!res.ok) throw new Error("Error al actualizar nombre");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast("Error al cambiar el nombre.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleEditMaxCajeros = async () => {
        const maxCajerosInput = prompt("Introduce el nuevo límite máximo de cajeros para la empresa:");
        if (!maxCajerosInput) return;

        const nuevoLímite = parseInt(maxCajerosInput, 10);
        if (isNaN(nuevoLímite) || nuevoLímite < 1) {
            toast("Por favor introduce un número válido mayor a 0.", "warning");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${empresaId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ maxCajeros: nuevoLímite }),
            });

            if (!res.ok) throw new Error("Error al actualizar cajeros máximos");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast("Error al cambiar la capacidad de cajeros.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleSuspend = async () => {
        const ok = await confirm({
            title: 'Suspender empresa',
            message: 'Esto inhabilitará el acceso de TODOS los empleados de esta empresa inmediatamente.',
            confirmLabel: 'Sí, suspender',
            variant: 'warning'
        });
        if (!ok) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${empresaId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ suspender: true }),
            });

            if (!res.ok) throw new Error("Error al suspender");
            router.refresh();
            toast("Empresa y empleados suspendidos exitosamente.", "success");
        } catch (error) {
            console.error(error);
            toast("Error al suspender a la empresa.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handlReactivate = async () => {
        const ok = await confirm({
            title: 'Reactivar empresa',
            message: '¿Deseas reactivar a esta empresa y a todos sus empleados?',
            confirmLabel: 'Sí, reactivar',
            variant: 'info'
        });
        if (!ok) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${empresaId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ suspender: false }),
            });

            if (!res.ok) throw new Error("Error al reactivar");
            router.refresh();
            toast("Empresa y empleados reactivados correctamente.", "success");
        } catch (error) {
            console.error(error);
            toast("Error al reactivar a la empresa.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const ok = await confirm({
            title: '🚨 Eliminar empresa permanentemente',
            message: 'Vas a eliminar esta empresa y ABSOLUTAMENTE TODOS sus usuarios de la base de datos. Esta acción es IRREVERSIBLE.',
            confirmLabel: 'Sí, eliminar para siempre',
            cancelLabel: 'Cancelar',
            variant: 'danger'
        });
        if (!ok) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${empresaId}`, { method: "DELETE" });

            if (!res.ok) throw new Error("Error al eliminar");
            router.refresh();
            toast("Empresa y personal eliminados del sistema permanentemente.", "success");
        } catch (error) {
            console.error(error);
            toast("Error al intentar borrar la empresa.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleEditNombre}
                disabled={loading}
                className="text-xs px-2 py-1.5 rounded-md transition-colors font-medium border border-blue-600/50 text-blue-500 hover:bg-blue-600/10 shrink-0"
            >
                Editar Nom.
            </button>

            <button
                onClick={handleEditMaxCajeros}
                disabled={loading}
                className="text-xs px-2 py-1.5 rounded-md transition-colors font-medium border border-cyan-600/50 text-cyan-500 hover:bg-cyan-600/10 shrink-0"
            >
                Límite Cajeros
            </button>

            <button
                onClick={handleSuspend}
                disabled={loading}
                className="text-xs px-2 py-1.5 rounded-md transition-colors font-medium border border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10 shrink-0"
            >
                Suspender Todos
            </button>

            <button
                onClick={handlReactivate}
                disabled={loading}
                className="text-xs px-2 py-1.5 rounded-md transition-colors font-medium border border-green-600/50 text-green-500 hover:bg-green-600/10 shrink-0"
            >
                Reactivar Todos
            </button>

            <button
                onClick={handleDelete}
                disabled={loading}
                className="text-xs px-2 py-1.5 rounded-md transition-colors font-medium border border-red-600/50 text-red-500 hover:bg-red-600/10 shrink-0"
            >
                Eliminar Físico
            </button>
        </>
    );
}
