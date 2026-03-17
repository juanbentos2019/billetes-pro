'use client';

import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

// --- TYPES ---
type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ConfirmOptions {
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: 'danger' | 'warning' | 'info';
}

interface UIContextValue {
    toast: (message: string, type?: ToastType) => void;
    confirm: (options: ConfirmOptions) => Promise<boolean>;
}

// --- CONTEXT ---
const UIContext = createContext<UIContextValue | null>(null);

export function useUI() {
    const ctx = useContext(UIContext);
    if (!ctx) throw new Error('useUI must be used within UIProvider');
    return ctx;
}

// --- ICONS ---
const icons: Record<ToastType, string> = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
};

const toastColors: Record<ToastType, string> = {
    success: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
    error:   'bg-red-500/20 border-red-500/40 text-red-300',
    warning: 'bg-amber-500/20 border-amber-500/40 text-amber-300',
    info:    'bg-sky-500/20 border-sky-500/40 text-sky-300',
};

const iconColors: Record<ToastType, string> = {
    success: 'bg-emerald-500 text-white',
    error:   'bg-red-500 text-white',
    warning: 'bg-amber-500 text-white',
    info:    'bg-sky-500 text-white',
};

// --- CONFIRM VARIANT STYLES ---
const confirmButtonColors: Record<string, string> = {
    danger:  'bg-red-600 hover:bg-red-500 text-white',
    warning: 'bg-amber-500 hover:bg-amber-400 text-black',
    info:    'bg-sky-600 hover:bg-sky-500 text-white',
};

const confirmIcons: Record<string, string> = {
    danger:  '🚨',
    warning: '⚠️',
    info:    'ℹ️',
};


// --- PROVIDER ---
export function UIProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [confirmState, setConfirmState] = useState<ConfirmOptions & { resolve: (v: boolean) => void } | null>(null);
    const counterRef = useRef(0);

    const toast = useCallback((message: string, type: ToastType = 'info') => {
        const id = ++counterRef.current;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }, []);

    const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
        return new Promise(resolve => {
            setConfirmState({ ...options, resolve });
        });
    }, []);

    const handleConfirm = (result: boolean) => {
        confirmState?.resolve(result);
        setConfirmState(null);
    };

    return (
        <UIContext.Provider value={{ toast, confirm }}>
            {children}

            {/* TOAST CONTAINER */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map(t => (
                    <div
                        key={t.id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl pointer-events-auto
                            max-w-sm w-full animate-slide-in ${toastColors[t.type]}`}
                        style={{ animation: 'slideInRight 0.3s ease-out' }}
                    >
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${iconColors[t.type]}`}>
                            {icons[t.type]}
                        </span>
                        <p className="text-sm font-medium leading-snug">{t.message}</p>
                    </div>
                ))}
            </div>

            {/* CONFIRM DIALOG */}
            {confirmState && (
                <div
                    className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) handleConfirm(false); }}
                >
                    <div
                        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md p-6 flex flex-col gap-4"
                        style={{ animation: 'scaleIn 0.2s ease-out' }}
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-3xl">{confirmIcons[confirmState.variant ?? 'info']}</span>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{confirmState.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{confirmState.message}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-2">
                            <button
                                onClick={() => handleConfirm(false)}
                                className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors"
                            >
                                {confirmState.cancelLabel ?? 'Cancelar'}
                            </button>
                            <button
                                onClick={() => handleConfirm(true)}
                                className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${confirmButtonColors[confirmState.variant ?? 'info']}`}
                            >
                                {confirmState.confirmLabel ?? 'Confirmar'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ANIMATIONS */}
            <style>{`
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.92); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </UIContext.Provider>
    );
}
