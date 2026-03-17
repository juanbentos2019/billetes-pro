'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TicketsDataTable({ tickets }: { tickets: any[] }) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    const filteredTickets = tickets.filter(ticket => {
        const matchesSearch = 
            ticket.empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.asunto.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesStatus = statusFilter === 'ALL' || ticket.estado === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (estado: string) => {
        switch (estado) {
            case 'OPEN': return 'bg-rose-500/20 text-rose-400 border-rose-500/50';
            case 'IN_PROGRESS': return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
            case 'RESOLVED': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
            case 'CLOSED': return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
            default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
        }
    };

    const getStatusLabel = (estado: string) => {
        switch (estado) {
            case 'OPEN': return 'Abierto';
            case 'IN_PROGRESS': return 'En Proceso';
            case 'RESOLVED': return 'Resuelto';
            case 'CLOSED': return 'Cerrado';
            default: return estado;
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
                router.refresh(); // Recargar datos de servidor
            } else {
                const data = await res.json();
                alert(data.error || 'Error al actualizar estado.');
            }
        } catch (error) {
            console.error(error);
            alert('Error de red al actualizar estado.');
        } finally {
            setUpdatingId(null);
        }
    };

    return (
        <div>
            {/* Controles de tabla */}
            <div className="p-4 border-b border-slate-700 bg-slate-800/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <input
                    type="text"
                    placeholder="Buscar por empresa o asunto..."
                    className="w-full sm:w-64 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none"
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
                                    No se encontraron tickets que coincidan con los filtros.
                                </td>
                            </tr>
                        ) : (
                            filteredTickets.map((ticket) => (
                                <tr key={ticket.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">
                                        #{ticket.id.substring(ticket.id.length - 6).toUpperCase()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-white mb-0.5">{ticket.empresa.nombre}</div>
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-xs text-slate-400 truncate max-w-[160px]" title={ticket.autor.email}>
                                                {ticket.autor.nombre || ticket.autor.email}
                                            </span>
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                                                ticket.autor.role === 'ADMIN_EMPRESA'
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
                                                disabled={updatingId === ticket.id}
                                                className={`appearance-none w-full px-2.5 py-1 text-xs font-semibold rounded-md border outline-none cursor-pointer text-center ${getStatusColor(ticket.estado)} ${updatingId === ticket.id ? 'opacity-50' : ''}`}
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
                                            className="text-primary hover:text-white bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors"
                                            title="Ver detalle del ticket"
                                            onClick={() => alert(`Funcionalidad para responder ticket en desarrollo. \n\nMensaje: ${ticket.mensaje}`)}
                                        >
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
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
