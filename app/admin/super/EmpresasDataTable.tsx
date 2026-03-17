'use client';

import { useState } from 'react';
import EmpresaActions from './EmpresaActions';
import { useRouter } from 'next/navigation';
import BillingModal from './BillingModal';
import { useUI } from '@/components/UIProvider';

export default function EmpresasDataTable({ empresas }: { empresas: any[] }) {
    const router = useRouter();
    const { toast, confirm } = useUI();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isImpersonating, setIsImpersonating] = useState(false);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Estado para el modal de facturación
    const [selectedEmpresaBilling, setSelectedEmpresaBilling] = useState<any | null>(null);

    const itemsPerPage = 10;

    // Filtration
    const filteredEmpresas = empresas.filter((e) =>
        e.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const totalPages = Math.ceil(filteredEmpresas.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredEmpresas.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular días restantes para el cartel de Trial
    const getTrialBadgeText = (empresa: any) => {
        if (empresa.estadoCrm !== 'TRIAL') return empresa.estadoCrm;
        if (!empresa.fechaVencimiento) return 'TRIAL';
        
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const venc = new Date(empresa.fechaVencimiento);
        venc.setHours(0, 0, 0, 0);
        
        const diffTime = venc.getTime() - hoy.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) return 'TRIAL VENCIDO';
        if (diffDays === 0) return 'VENCE HOY';
        return `TRIAL (${diffDays} DÍAS)`;
    };

    const handleImpersonate = async (empresaId: string, empresaNombre: string) => {
        const ok = await confirm({
            title: 'Impersonar empresa',
            message: `¿Querés entrar temporalmente como Administrador de "${empresaNombre}"?`,
            confirmLabel: 'Sí, impersonar',
            variant: 'info'
        });
        if (!ok) return;

        setIsImpersonating(true);
        try {
            const res = await fetch('/api/admin/impersonate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ empresaId, action: 'START' })
            });

            if (res.ok) {
                toast(`Impersonando a ${empresaNombre}. Redirigiendo...`, 'success');
                setTimeout(() => { window.location.href = '/admin/empresa'; }, 1200);
            } else {
                toast('Error al iniciar la impersonación.', 'error');
                setIsImpersonating(false);
            }
        } catch (error) {
            console.error(error);
            toast('Error crítico activando impersonación.', 'error');
            setIsImpersonating(false);
        }
    }

    if (empresas.length === 0) {
        return (
            <p className="text-slate-400 bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
                No hay empresas registradas todavía. Comienza creando una a la izquierda.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {/* Buscador */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar empresa por nombre..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary pl-10"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to page 1 on search
                    }}
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>

            {/* Lista Principal */}
            {filteredEmpresas.length === 0 ? (
                <p className="text-sm text-slate-400 text-center py-4 bg-slate-800 rounded-lg">No se encontraron empresas con ese nombre.</p>
            ) : (
                <div className="grid gap-4">
                    {currentItems.map((empresa) => (
                        <div key={empresa.id} className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary/50 transition gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-bold text-lg text-white">{empresa.nombre}</h4>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${empresa.activo ? 'bg-green-600/20 text-green-400 border border-green-600/30' : 'bg-red-600/20 text-red-400 border border-red-600/30'}`}>
                                        {empresa.activo ? 'AL DÍA' : 'SUSPENDIDA'}
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-600/20 text-indigo-400 border border-indigo-600/30">
                                        PLAN {empresa.planType || 'BASIC'}
                                    </span>
                                    {empresa.estadoCrm && (
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold border ${empresa.estadoCrm === 'CLIENTE' ? 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30' : 'bg-amber-600/20 text-amber-400 border-amber-600/30'}`}>
                                            {getTrialBadgeText(empresa)}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 mt-1 -mb-1">
                                    <p className="text-sm text-slate-400">Registrada el: {new Date(empresa.createdAt).toLocaleDateString()}</p>
                                    <p className="text-sm text-slate-400 hidden sm:block">•</p>
                                    <p className="text-sm text-slate-400">
                                        Vence el: <span className={empresa.fechaVencimiento && new Date(empresa.fechaVencimiento) < new Date() ? 'text-red-400 font-bold' : 'text-slate-300'}>
                                            {empresa.fechaVencimiento ? new Date(empresa.fechaVencimiento).toLocaleDateString() : 'N/A'}
                                        </span>
                                    </p>
                                    <p className="text-sm text-slate-400 hidden sm:block">•</p>
                                    <p className="text-sm text-slate-400">
                                        Último Login: <span className="text-slate-300">
                                            {empresa.usuarios?.[0]?.lastLogin ? new Date(empresa.usuarios[0].lastLogin).toLocaleString() : 'N/A'}
                                        </span>
                                    </p>
                                </div>
                                {/* Contacto del administrador */}
                                {(() => {
                                    const admin = empresa.usuarios?.find((u: any) => u.role === 'ADMIN_EMPRESA');
                                    if (!admin) return null;
                                    return (
                                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                                            <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            <span className="text-xs text-slate-400">{admin.nombre || 'Sin nombre'}</span>
                                            <span className="text-slate-600">·</span>
                                            <a href={`mailto:${admin.email}`} className="text-xs text-primary/80 hover:text-primary transition truncate max-w-[200px]" title={admin.email}>
                                                {admin.email}
                                            </a>
                                        </div>
                                    );
                                })()}

                                {/* Toggle cajeros */}
                                {(() => {
                                    const cajeros = empresa.usuarios?.filter((u: any) => u.role === 'USER') ?? [];
                                    if (cajeros.length === 0) return null;
                                    const isOpen = expandedId === empresa.id;
                                    return (
                                        <div className="mt-2">
                                            <button
                                                onClick={() => setExpandedId(isOpen ? null : empresa.id)}
                                                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition"
                                            >
                                                <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                {isOpen ? 'Ocultar' : 'Ver'} {cajeros.length} cajero{cajeros.length !== 1 ? 's' : ''}
                                            </button>
                                            {isOpen && (
                                                <div className="mt-2 space-y-1.5 pl-4 border-l border-slate-700">
                                                    {cajeros.map((c: any, idx: number) => (
                                                        <div key={idx} className="flex items-center gap-2 flex-wrap">
                                                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.activo ? 'bg-emerald-400' : 'bg-red-400'}`} />
                                                            <span className="text-xs text-slate-300">{c.nombre || 'Sin nombre'}</span>
                                                            <span className="text-slate-600">·</span>
                                                            <a href={`mailto:${c.email}`} className="text-xs text-slate-400 hover:text-primary transition">{c.email}</a>
                                                            {!c.activo && <span className="text-xs text-red-400">suspendido</span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>

                            <div className="flex flex-col items-end gap-3 w-full md:w-1/2 justify-end">
                                <span className="bg-slate-700 text-sm px-3 py-1 rounded-full text-slate-300 w-fit shrink-0">
                                    {empresa._count.usuarios} / {empresa.maxCajeros} Cajeros
                                </span>

                                <div className="flex flex-wrap items-center justify-end gap-2 mt-1 w-full">
                                    <button
                                        onClick={() => setSelectedEmpresaBilling(empresa)}
                                        className="text-xs bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white px-3 py-1.5 rounded transition font-medium border border-green-500/30 flex items-center gap-1 shrink-0"
                                        title="Gestionar Pagos y Vencimientos"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                        Facturación
                                    </button>
                                    <button
                                        onClick={() => handleImpersonate(empresa.id, empresa.nombre)}
                                        disabled={isImpersonating}
                                        className="text-xs bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600 hover:text-white px-3 py-1.5 rounded transition font-medium border border-cyan-500/30 shrink-0"
                                        title="Entrar temporalmente a la vista de esta empresa"
                                    >
                                        Inpersonar
                                    </button>
                                    <EmpresaActions empresaId={empresa.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Renderizar el Modal si hay una empresa seleccionada */}
            <BillingModal
                isOpen={!!selectedEmpresaBilling}
                onClose={() => setSelectedEmpresaBilling(null)}
                empresa={selectedEmpresaBilling}
            />

            {/* Paginación */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700 text-sm">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:hover:bg-slate-700 rounded transition"
                    >
                        Anterior
                    </button>
                    <span className="text-slate-300">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:hover:bg-slate-700 rounded transition"
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}
