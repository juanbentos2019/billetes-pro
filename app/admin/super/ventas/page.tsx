import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from 'next/link';

export default async function VentasDashboardPage() {
    const session = await getServerSession(authOptions);

    if (session?.user?.role !== "SUPER_MASTER") {
        redirect("/");
    }

    // Obtener los leads corporativos, ordenados por los más recientes
    const leads = await prisma.corporateLead.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">CRM de Ventas Corporate</h1>
                    <p className="text-slate-400">
                        Gestiona las solicitudes de clientes interesados en planes Enterprise o integraciones API.
                    </p>
                </div>
            </div>

            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left text-sm text-slate-300">
                        <thead className="bg-slate-900/50 text-xs uppercase font-semibold text-slate-400 border-b border-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-4">Empresa / Contacto</th>
                                <th scope="col" className="px-6 py-4">Datos de Contacto</th>
                                <th scope="col" className="px-6 py-4">Mensaje / Requerimiento</th>
                                <th scope="col" className="px-6 py-4">Estado</th>
                                <th scope="col" className="px-6 py-4">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/50">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No hay solicitudes de ventas corporativas por el momento.
                                    </td>
                                </tr>
                            ) : leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-bold text-white text-base">{lead.empresa}</div>
                                        <div className="text-indigo-400">{lead.nombre}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 mb-1">
                                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                                        </div>
                                        {lead.telefono && (
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                <span>{lead.telefono}</span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="max-w-xs xl:max-w-md bg-slate-900/50 p-3 rounded-lg border border-slate-700 max-h-32 overflow-y-auto custom-scrollbar text-xs">
                                            {lead.mensaje}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full border ${
                                            lead.estado === 'PENDING' ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' :
                                            lead.estado === 'CONTACTED' ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' :
                                            'bg-emerald-500/20 text-emerald-500 border-emerald-500/30'
                                        }`}>
                                            {lead.estado === 'PENDING' ? 'Nuevo' :
                                             lead.estado === 'CONTACTED' ? 'Contactado' : 'Cerrado'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-xs">
                                        {new Date(lead.createdAt).toLocaleDateString('es-ES', {
                                            day: '2-digit', month: 'short', year: 'numeric',
                                            hour: '2-digit', minute: '2-digit'
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
