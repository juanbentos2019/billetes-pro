'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ExpirationAlert() {
    const { data: session, status } = useSession();
    const [daysLeft, setDaysLeft] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.empresaVencimiento) {
            const expirationDate = new Date(session.user.empresaVencimiento);
            const today = new Date();

            // Set times to midnight to calculate purely by calendar days
            expirationDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            const diffTime = expirationDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            setDaysLeft(diffDays);

            // Mostrar solo si faltan 3 días o menos, e incluso si ya venció (0 o negativos)
            if (diffDays <= 3) {
                setIsVisible(true);
            }
        }
    }, [session, status]);

    if (!isVisible || daysLeft === null) return null;

    let alertColor = 'bg-amber-500/10 border-amber-500/30 text-amber-500';
    let iconColor = 'text-amber-500';
    let message = `⚠️ Su licencia de uso expira en ${daysLeft} ${daysLeft === 1 ? 'días' : 'días'}.`;

    if (daysLeft === 0) {
        alertColor = 'bg-red-500/20 border-red-500/50 text-red-400 font-bold shadow-lg shadow-red-900/20';
        iconColor = 'text-red-400';
        message = '⚠️ Su licencia expira el día de HOY.';
    } else if (daysLeft < 0) {
        alertColor = 'bg-red-900 border-red-500 text-white font-bold shadow-lg shadow-red-900/50';
        iconColor = 'text-white';
        message = '🛑 SU LICENCIA HA EXPIRADO. El servicio podría interrumpirse. Comuníquese urgente con soporte.';
    }

    return (
        <div className={`w-full py-2.5 px-4 text-center text-sm  border-b z-50 flex items-center justify-center gap-2 ${alertColor}`}>
            <svg className={`w-5 h-5 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>{message} Por favor comuníquese con su Administrador Master para renovarla y evitar cortes de servicio.</span>

            <button
                onClick={() => setIsVisible(false)}
                className={`ml-4 opacity-70 hover:opacity-100 transition-opacity ${iconColor}`}
                title="Ocultar por ahora"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
}
