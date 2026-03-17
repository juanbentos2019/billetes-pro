'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/components/UIProvider';

export default function TicketsDataTable({ tickets }: { tickets: any[] }) {
    const router = useRouter();
    const { toast } = useUI();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [showArchived, setShowArchived] = useState(false);
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    const filteredTickets = tickets.filter(ticket => {
        // Mostrar archivados o no según el toggle
        if (ticket.archivado !== showArchived) return false;

        const matchesSearch =
            ticket.empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.asunto.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'ALL' || ticket.estado === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const archivedCount = tickets.filter(t => t.archivado).length;
    const activeCount = tickets.filter(t => !t.archivado).length;

    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'OPEN': return 'bg-rose-500/20 text-rose-400 border-rose-500/50';
            case 'IN_PROGRESS': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
            case 'RESOLVED': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
            case 'CLOSED': return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
            default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
        }
    };

    const handleStatusChange = async (ticketId: string, newStatus: string) => {
        setUpdatingId(ticketId);
        try {
            const res = await fetch(`/api/tickets/${ticketId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: newStatus })
            });
            if (res.ok) {
                router.refresh();
            } else {
                toast('Error al actualizar el estado.', 'error');
            }
        } catch {
            toast('Error de red.', 'error');
        } finally {
            setUpdatingId(null);
        }
    };

    const handleToggleArchive = async (ticketId: string, currentArchivado: boolean) => {
        setUpdatingId(ticketId);
        try {
            const res = await fetch(`/api/tickets/${ticketId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ archivado: !currentArchivado })
            });
            if (res.ok) {
                toast(
                    currentArchivado ? '📂 Ticket desarchivado.' : '🗃️ Ticket archivado.',
                    'success'
                );
                router.refresh();
            } else {
                toast('Error al archivar el ticket.', 'error');
            }
        } catch {
            toast('Error de red.', 'error');
        } finally {
            setUpdatingId(null);
        }
    };

    return (
        <div>
            {/* Controles */}
            <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex flex-col sm:flex-row gap-4 justify-between items-center flex-wrap">
                <div className="flex items-center gap-3 flex-wrap">
                    <input
                        type="text"
                        placeholder="Buscar por empresa o asunto..."
                        className="w-full sm:w-56 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="w-full sm:w-auto bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="ALL">Todos los Estados</option>
                        <option value="OPEN">Abiertos</option>
                        <option value="IN_PROGRESS">En Proceso</option>
                        <option value="RESOLVED">Resueltos</option>
                        <option value="CLOSED">Cerrados</option>
                    </select>
                </div>

                {/* Toggle archivo */}
                <button
                    onClick={() => setShowArchived(!showArchived)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition ${showArchived
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 hover:bg-amber-500/30'
                        : 'bg-slate-700/50 text-slate-400 border-slate-600 hover:bg-slate-700'
                    }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M10 12v4m4-4v4" />
                    </svg>
                    {showArchived ? `Ver activos (${activeCount})` : `Ver archivados (${archivedCount})`}
                </button>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="text-xs uppercase bg-slate-900/50 text-slate-400 border-b border-slate-700">
                        <tr>
                            <th className="px-6 py-4 font-medium">Ticket ID</th>
                            <th className="px-6 py-4 font-medium">Empresa / Contacto</th>
                            <th className="px-6 py-4 font-medium">Asunto</th>
                            <th className="px-6 py-4 font-medium">Fecha</th>
                            <th className="px-6 py-4 font-medium text-center">Estado</th>
                            <th className="px-6 py-4 font-medium text-right">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500 border-b border-slate-700/50">
                                    {showArchived ? 'No hay tickets archivados.' : 'No se encontraron tickets que coincidan con los filtros.'}
                                </td>
                            </tr>
                        ) : (
                            filteredTickets.map((ticket) => (
                                <tr
                                    key={ticket.id}
                                    className={`border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors group ${ticket.archivado ? 'opacity-60' : ''}`}
                                >
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">
                                        #{ticket.id.substring(ticket.id.length - 6).toUpperCase()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-white mb-0.5">{ticket.empresa.nombre}</div>
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-xs text-slate-400 truncate max-w-[160px]" title={ticket.autor.email}>
                                                {ticket.autor.nombre || ticket.autor.email}
                                            </span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${ticket.autor.role === 'ADMIN_EMPRESA'
                                                ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                                                : 'bg-slate-500/20 text-slate-400 border-slate-500/30'
                                            }`}>
                                                {ticket.autor.role === 'ADMIN_EMPRESA' ? 'Admin' : 'Cajero'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-slate-200">{ticket.asunto.charAt(0).toUpperCase() + ticket.asunto.slice(1)}</div>
                                        <div className="text-xs text-slate-500 truncate max-w-[250px]" title={ticket.mensaje}>
                                            {ticket.mensaje}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                                        {new Date(ticket.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="relative inline-block w-full min-w-[120px]">
                                            <select
                                                value={ticket.estado}
                                                onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                                                disabled={updatingId === ticket.id || ticket.archivado}
                                                className={`appearance-none w-full px-2.5 py-1 text-xs font-semibold rounded-md border outline-none cursor-pointer text-center ${getStatusColor(ticket.estado)} ${updatingId === ticket.id || ticket.archivado ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                <option value="OPEN" className="bg-slate-800 text-rose-400">Abierto</option>
                                                <option value="IN_PROGRESS" className="bg-slate-800 text-amber-400">En Proceso</option>
                                                <option value="RESOLVED" className="bg-slate-800 text-emerald-400">Resuelto</option>
                                                <option value="CLOSED" className="bg-slate-800 text-slate-400">Cerrado</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleToggleArchive(ticket.id, ticket.archivado)}
                                            disabled={updatingId === ticket.id}
                                            title={ticket.archivado ? 'Desarchivar ticket' : 'Archivar ticket'}
                                            className={`p-2 rounded-lg transition-colors disabled:opacity-50 ${ticket.archivado
                                                ? 'text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-500/20'
                                                : 'text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-600'
                                            }`}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M10 12v4m4-4v4" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
