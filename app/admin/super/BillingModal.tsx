'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BillingModalProps {
    isOpen: boolean;
    onClose: () => void;
    empresa: any; // Ideally use proper type
}

export default function BillingModal({ isOpen, onClose, empresa }: BillingModalProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [planType, setPlanType] = useState(empresa?.planType || 'BASIC');

    // Format date to YYYY-MM-DD for input[type="date"]
    const formatDateForInput = (dateString?: string | null) => {
        if (!dateString) return '';
        const d = new Date(dateString);
        if (isNaN(d.getTime())) return '';
        return d.toISOString().split('T')[0];
    };

    const [fechaVencimiento, setFechaVencimiento] = useState(formatDateForInput(empresa?.fechaVencimiento));
    const [notasPagos, setNotasPagos] = useState(empresa?.notasPagos || '');
    const [dateError, setDateError] = useState('');

    const handleQuickAddDays = (days: number) => {
        const currentDate = fechaVencimiento ? new Date(fechaVencimiento) : new Date();
        currentDate.setDate(currentDate.getDate() + days);
        setFechaVencimiento(currentDate.toISOString().split('T')[0]);
        setDateError('');
    };

    const handleSave = async () => {
        if (dateError) {
            setError('Corrige los errores de fecha antes de guardar.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/empresas/${empresa.id}/billing`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    planType,
                    fechaVencimiento: fechaVencimiento || null,
                    notasPagos
                })
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text || 'Error al actualizar la facturación');
            }

            router.refresh(); // Refresh table
            onClose(); // Close modal

        } catch (err: any) {
            console.error(err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen || !empresa) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-slate-700 shrink-0">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        Facturación: {empresa.nombre}
                    </h2>
                </div>

                <div className="p-6 overflow-y-auto flex-1 space-y-6">
                    {error && (
                        <div className="p-3 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-sm">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Tipo de Plan</label>
                        <select
                            value={planType}
                            onChange={(e) => setPlanType(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        >
                            <option value="BASIC">Básico (BASIC)</option>
                            <option value="PRO">Profesional (PRO)</option>
                            <option value="CORPORATE">Corporate (CORPORATE)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Fecha de Vencimiento</label>
                        <input
                            type="date"
                            value={fechaVencimiento}
                            onChange={(e) => {
                                if (e.target.validity.badInput) {
                                    setDateError('La fecha ingresada es inválida o no existe en el calendario (ej: año no bisiesto).');
                                } else {
                                    setDateError('');
                                }
                                setFechaVencimiento(e.target.value);
                            }}
                            className={`w-full bg-slate-900 border ${dateError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700'} rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${dateError ? 'mb-1' : 'mb-2'}`}
                        />
                        {dateError && (
                            <p className="text-red-400 text-xs font-semibold mb-2">{dateError}</p>
                        )}
                        <div className="flex gap-2 text-xs">
                            <span className="text-slate-400 py-1">Atajos rápidos:</span>
                            <button onClick={() => handleQuickAddDays(30)} className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 transition">+ 30 Días</button>
                            <button onClick={() => handleQuickAddDays(365)} className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 transition">+ 1 Año</button>
                            <button onClick={() => { setFechaVencimiento(''); setDateError(''); }} className="px-2 py-1 bg-red-900/30 hover:bg-red-900/60 text-red-300 rounded transition ml-auto border border-red-900/50">Quitar Vencimiento</button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Registro de Pagos e Historial Comercial</label>
                        <textarea
                            value={notasPagos}
                            onChange={(e) => setNotasPagos(e.target.value)}
                            rows={6}
                            placeholder="Ej: 15/05/2026: Empresa pagó $100 dólares por 3 meses mediante transferencia bancaria. Próxima revisión en Agosto."
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                        <p className="text-xs text-slate-500 mt-1">Este texto es privado y sólo visible para administradores Super Master.</p>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-700 bg-slate-800/50 flex justify-end gap-3 shrink-0">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-colors shadow-lg shadow-green-900/20 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            'Guardar Cambios'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
