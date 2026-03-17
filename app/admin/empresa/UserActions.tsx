"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/UIProvider";

interface UserActionsProps {
    userId: string;
    isActive: boolean;
    currentName: string | null;
}

export default function UserActions({ userId, isActive, currentName }: UserActionsProps) {
    const router = useRouter();
    const { toast, confirm } = useUI();
    const [loading, setLoading] = useState(false);

    const handleToggleEstado = async () => {
        const ok = await confirm({
            title: isActive ? 'Suspender usuario' : 'Reactivar usuario',
            message: isActive
                ? '¿Estás seguro de suspender el acceso de este cajero?'
                : '¿Deseas reactivar el acceso de este cajero?',
            confirmLabel: isActive ? 'Sí, suspender' : 'Sí, reactivar',
            variant: isActive ? 'warning' : 'info'
        });
        if (!ok) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ activo: !isActive }),
            });

            if (!res.ok) throw new Error("Error al actualizar estado");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast("Error al cambiar el estado del usuario.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleEditName = async () => {
        const newName = prompt("Ingresa el nuevo nombre completo para este cajero:", currentName || "");
        
        if (newName === null) return;
        if (newName.trim() === "") {
            toast("El nombre no puede estar vacío.", "warning");
            return;
        }
        if (newName.trim() === currentName) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre: newName.trim() }),
            });

            if (!res.ok) throw new Error("Error al actualizar el nombre");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast("Error al cambiar el nombre del cajero.", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const ok = await confirm({
            title: '⚠️ Eliminar usuario',
            message: 'Esta acción es irreversible. ¿Estás seguro de que querés eliminar a este cajero de forma definitiva?',
            confirmLabel: 'Sí, eliminar',
            variant: 'danger'
        });
        if (!ok) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });

            if (!res.ok) throw new Error("Error al eliminar usuario");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast("Error al eliminar el usuario.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={handleEditName}
                disabled={loading}
                className="text-xs px-3 py-1.5 rounded-md transition-colors font-medium border border-blue-600/50 text-blue-500 hover:bg-blue-600/10"
                title="Editar nombre"
            >
                Editar
            </button>

            <button
                onClick={handleToggleEstado}
                disabled={loading}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors font-medium border ${isActive
                        ? 'border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10'
                        : 'border-green-600/50 text-green-500 hover:bg-green-600/10'
                    }`}
            >
                {isActive ? 'Suspender' : 'Reactivar'}
            </button>

            <button
                onClick={handleDelete}
                disabled={loading}
                className="text-xs px-3 py-1.5 rounded-md transition-colors font-medium border border-red-600/50 text-red-500 hover:bg-red-600/10"
                title="Eliminar permanentemente"
            >
                Eliminar
            </button>
        </div>
    );
}
