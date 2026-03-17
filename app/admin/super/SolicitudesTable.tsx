'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/components/UIProvider';

interface Solicitud {
    id: string;
    nombre: string;
    createdAt: string;
    notasPagos: string | null;
    usuarios: { email: string; nombre: string | null }[];
}

interface ActivationForm {
    planType: string;
    maxCajeros: number;
    duracionDias: number | null;
    fechaPersonalizada: string;
    usarFechaPersonalizada: boolean;
    notasPagos: string;
}

const PLANES = [
    { value: 'BASIC', label: 'Básico (BASIC)' },
    { value: 'PRO', label: 'Profesional (PRO)' },
    { value: 'CORPORATE', label: 'Corporate (CORPORATE)' },
];

const DURACIONES = [
    { value: 30, label: '30 días' },
    { value: 90, label: '3 meses' },
    { value: 180, label: '6 meses' },
    { value: 365, label: '1 año' },
];

function getVencimientoFromDias(dias: number): string {
    const d = new Date();
    d.setDate(d.getDate() + dias);
    return d.toISOString().split('T')[0];
}

export default function SolicitudesTable({ solicitudes }: { solicitudes: Solicitud[] }) {
    const router = useRouter();
    const { toast } = useUI();

    const [activando, setActivando] = useState<Solicitud | null>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<ActivationForm>({
        planType: 'BASIC',
        maxCajeros: 2,
        duracionDias: 30,
        fechaPersonalizada: '',
        usarFechaPersonalizada: false,
        notasPagos: '',
    });

    const abrirModal = (s: Solicitud) => {
        setForm({
            planType: 'BASIC',
            maxCajeros: 2,
            duracionDias: 30,
            fechaPersonalizada: '',
            usarFechaPersonalizada: false,
            notasPagos: s.notasPagos || '',
        });
        setActivando(s);
    };

    const cerrarModal = () => setActivando(null);

    const handleActivar = async () => {
        if (!activando) return;

        const fechaVencimiento = form.usarFechaPersonalizada
            ? form.fechaPersonalizada
            : form.duracionDias
                ? getVencimientoFromDias(form.duracionDias)
                : null;

        if (!fechaVencimiento) {
            toast('Seleccioná una duración o una fecha de vencimiento.', 'warning');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`/api/empresas/${activando.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    activar: true,
                    planType: form.planType,
                    maxCajeros: form.maxCajeros,
                    fechaVencimiento,
                    notasPagos: form.notasPagos,
                })
            });

            if (res.ok) {
                toast(`✅ "${activando.nombre}" activada en plan ${form.planType}. Los usuarios ya pueden iniciar sesión.`, 'success');
                cerrarModal();
                router.refresh();
            } else {
                toast('Error al activar la empresa.', 'error');
            }
        } catch {
            toast('Error de red al activar.', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (solicitudes.length === 0) {
        return (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <p className="text-slate-400 text-sm">No hay solicitudes de registro pendientes. 🎉</p>
            </div>
        );
    }

    return (
        <>
            {/* LISTA DE SOLICITUDES */}
            <div className="space-y-3">
                {solicitudes.map(s => {
                    const adminUser = s.usuarios[0];
                    const fechaRegistro = new Date(s.createdAt).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' });
                    return (
                        <div key={s.id} className="bg-slate-800/80 border border-amber-500/30 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-amber-500/60 transition">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">PENDIENTE</span>
                                    <h4 className="font-bold text-white truncate">{s.nombre}</h4>
                                </div>
                                <div className="text-xs text-slate-400 space-y-0.5">
                                    <p>👤 {adminUser?.nombre || 'Sin nombre'} — <span className="text-slate-300">{adminUser?.email}</span></p>
                                    {s.notasPagos && <p className="truncate max-w-sm">📋 {s.notasPagos}</p>}
                                    <p>📅 {fechaRegistro}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => abrirModal(s)}
                                className="flex-shrink-0 flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 px-4 py-2 rounded-lg text-sm font-bold transition"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Activar Acceso
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* MODAL DE ACTIVACIÓN */}
            {activando && (
                <div
                    className="fixed inset-0 z-[9990] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) cerrarModal(); }}
                >
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]" style={{ animation: 'scaleIn 0.2s ease-out' }}>
                        {/* Header */}
                        <div className="px-6 pt-6 pb-4 border-b border-slate-700 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg">✅</div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Activar Empresa</h2>
                                    <p className="text-sm text-slate-400">{activando.nombre}</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-5 overflow-y-auto flex-1">
                            {/* Plan */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5">Plan contratado</label>
                                <select
                                    value={form.planType}
                                    onChange={e => setForm(f => ({ ...f, planType: e.target.value }))}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                >
                                    {PLANES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                                </select>
                            </div>

                            {/* Max Cajeros */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                    Límite de cajeros / usuarios
                                </label>
                                <input
                                    type="number"
                                    min={1}
                                    max={999}
                                    value={form.maxCajeros}
                                    onChange={e => setForm(f => ({ ...f, maxCajeros: parseInt(e.target.value) || 1 }))}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                />
                            </div>

                            {/* Período */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5">Período de acceso</label>
                                {!form.usarFechaPersonalizada ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        {DURACIONES.map(d => (
                                            <button
                                                key={d.value}
                                                type="button"
                                                onClick={() => setForm(f => ({ ...f, duracionDias: d.value }))}
                                                className={`py-2.5 rounded-lg text-sm font-semibold border transition ${form.duracionDias === d.value
                                                    ? 'bg-emerald-600 border-emerald-500 text-white'
                                                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-600/50'
                                                    }`}
                                            >
                                                {d.label}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <input
                                        type="date"
                                        value={form.fechaPersonalizada}
                                        onChange={e => setForm(f => ({ ...f, fechaPersonalizada: e.target.value }))}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                    />
                                )}
                                <button
                                    type="button"
                                    onClick={() => setForm(f => ({ ...f, usarFechaPersonalizada: !f.usarFechaPersonalizada, duracionDias: null }))}
                                    className="text-xs text-slate-400 hover:text-slate-200 mt-2 transition"
                                >
                                    {form.usarFechaPersonalizada ? '← Usar duración predefinida' : 'Ingresar fecha exacta →'}
                                </button>
                            </div>

                            {/* Preview vencimiento */}
                            {(form.duracionDias || form.fechaPersonalizada) && (
                                <div className="bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-sm">
                                    <span className="text-slate-400">Vence el: </span>
                                    <span className="text-emerald-400 font-bold">
                                        {form.usarFechaPersonalizada
                                            ? (form.fechaPersonalizada ? new Date(form.fechaPersonalizada + 'T12:00:00').toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' }) : '—')
                                            : new Date(getVencimientoFromDias(form.duracionDias!) + 'T12:00:00').toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })
                                        }
                                    </span>
                                </div>
                            )}

                            {/* Notas */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5">Notas del pago <span className="text-slate-500">(opcional)</span></label>
                                <textarea
                                    rows={3}
                                    value={form.notasPagos}
                                    onChange={e => setForm(f => ({ ...f, notasPagos: e.target.value }))}
                                    placeholder="Ej: Pagó $X por transferencia el 15/03. Próximo vencimiento en Junio."
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-slate-700 bg-slate-800/50 flex justify-end gap-3 shrink-0">
                            <button
                                onClick={cerrarModal}
                                disabled={loading}
                                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-medium transition text-sm"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleActivar}
                                disabled={loading}
                                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition shadow-lg shadow-emerald-900/30 disabled:opacity-50 flex items-center gap-2 text-sm"
                            >
                                {loading ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : '✅ Confirmar Activación'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.93); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </>
    );
}
