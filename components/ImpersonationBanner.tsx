'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ImpersonationBanner() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isReverting, setIsReverting] = useState(false);

    if (!session?.user?.isImpersonating) return null;

    const handleStopImpersonating = async () => {
        setIsReverting(true);
        try {
            const res = await fetch('/api/admin/impersonate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'STOP' })
            });

            if (res.ok) {
                // Hard reload to refresh the session token from the server
                window.location.href = '/admin/super';
            } else {
                alert('No se pudo detener la inpersonación.');
                setIsReverting(false);
            }
        } catch (error) {
            console.error(error);
            setIsReverting(false);
        }
    }

    return (
        <div className="fixed top-16 left-0 w-full bg-cyan-600/90 text-white p-2 z-40 flex justify-center items-center gap-4 backdrop-blur shadow-md font-medium text-sm">
            <span>
                👀 Estás inpersonando la cuenta de <strong>{session.user.empresaNombre}</strong>
            </span>
            <button
                onClick={handleStopImpersonating}
                disabled={isReverting}
                className="bg-black/20 hover:bg-black/40 px-3 py-1 rounded transition disabled:opacity-50 border border-white/10"
            >
                {isReverting ? 'Saliendo...' : 'Salir y volver al Master'}
            </button>
        </div>
    );
}
