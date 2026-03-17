'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/components/UIProvider';

export default function PanicButton() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast, confirm } = useUI();

    const handlePanic = async () => {
        const step1 = await confirm({
            title: '⚠️ Atención: Acción Masiva',
            message: 'Esta acción invalidadá TODAS las sesiones activas de todos los usuarios del sistema (excepto la tuya). ¿Estás completamente seguro?',
            confirmLabel: 'Sí, continuar',
            variant: 'danger'
        });
        if (!step1) return;

        const step2 = await confirm({
            title: '🚨 Segunda confirmación requerida',
            message: '¿Estás 100% seguro de FORZAR EL CIERRE DE SESIÓN GLOBAL de todos los usuarios?',
            confirmLabel: 'Sí, cerrar todas las sesiones',
            variant: 'danger'
        });
        if (!step2) return;

        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/panic-logout', { method: 'POST' });

            if (res.ok) {
                toast('✅ Éxito. Todas las sesiones activas han sido cerradas.', 'success');
                router.refresh();
            } else {
                toast('Error al intentar invalidar las sesiones.', 'error');
            }
        } catch (error) {
            console.error(error);
            toast('Error crítico de red.', 'error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            onClick={handlePanic}
            disabled={isLoading}
            className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/50 px-4 py-2 rounded-lg font-bold transition disabled:opacity-50"
            title="Cerrar la sesión de todos los usuarios"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {isLoading ? 'Ejecutando...' : 'Botón de Pánico (Cerrar Sesiones)'}
        </button>
    );
}
