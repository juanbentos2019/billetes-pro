import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import CreateEmpresaForm from "./CreateEmpresaForm";
import EmpresasDataTable from "./EmpresasDataTable";
import PanicButton from "./PanicButton";
import SolicitudesTable from "./SolicitudesTable";

export default async function SuperAdminPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "SUPER_MASTER") {
        redirect("/");
    }

    // Métricas para KPIs
    const [
        totalEmpresas,
        totalCajeros,
        agregadoCajeros,
        empresasNuevas
    ] = await Promise.all([
        prisma.empresa.count(),
        prisma.user.count({ where: { role: 'USER' } }),
        prisma.empresa.aggregate({ _sum: { maxCajeros: true } }),
        prisma.empresa.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) // Primer día del mes actual
                }
            }
        })
    ]);

    const cuposVendidos = agregadoCajeros._sum.maxCajeros || 0;
    const porcentajeUso = cuposVendidos > 0 ? Math.round((totalCajeros / cuposVendidos) * 100) : 0;

    // Obtener todas las empresas con su total de usuarios
    // @ts-ignore: Prisma client needs regeneration on Windows
    const empresasRaw = await prisma.empresa.findMany({
        select: {
            id: true,
            nombre: true,
            createdAt: true,
            activo: true,
            estadoCrm: true,
            planType: true,
            maxCajeros: true,
            fechaVencimiento: true,
            _count: {
                select: {
                    usuarios: {
                        where: { role: 'USER' }
                    }
                }
            },
            // @ts-ignore: Prisma client needs regeneration on Windows
            usuarios: {
                select: { lastLogin: true, email: true, nombre: true, activo: true, role: true },
                orderBy: { role: 'asc' as const }
            }
        },
        orderBy: { createdAt: 'desc' }
    });

    const empresas = empresasRaw as any[];

    // Solicitudes de registro pendientes (estadoCrm = 'SOLICITUD')
    // @ts-ignore: Prisma client needs regeneration on Windows
    const solicitudesRaw = await prisma.empresa.findMany({
        where: { estadoCrm: 'SOLICITUD' },
        select: {
            id: true,
            nombre: true,
            createdAt: true,
            notasPagos: true,
            usuarios: {
                select: { email: true, nombre: true },
                take: 1
            }
        },
        orderBy: { createdAt: 'desc' }
    });
    const solicitudes = solicitudesRaw as any[];

    return (
        <div className="space-y-8">
            {/* BANNER DE SOLICITUDES PENDIENTES */}
            {solicitudes.length > 0 && (
                <div className="bg-amber-500/10 border border-amber-500/50 rounded-xl p-4 flex items-center gap-4">
                    <span className="text-2xl">🔔</span>
                    <div className="flex-1">
                        <p className="font-bold text-amber-400">{solicitudes.length} solicitud{solicitudes.length > 1 ? 'es' : ''} de registro pendiente{solicitudes.length > 1 ? 's' : ''}</p>
                        <p className="text-amber-300/70 text-sm">Hay empresas que completaron el formulario y esperan activación manual.</p>
                    </div>
                </div>
            )}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 p-6 rounded-xl border border-slate-700 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Centro de Comando (Super Master)</h2>
                    <p className="text-slate-400 text-sm">Visión global del negocio y licenciamiento de software.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Link
                        href="/admin/super/blog"
                        className="flex items-center justify-center gap-2 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-600/50 px-4 py-2 rounded-lg font-bold transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        Publicar Noticias
                    </Link>
                    <Link
                        href="/admin/super/tickets"
                        className="flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-600/50 px-4 py-2 rounded-lg font-bold transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                        Tickets
                    </Link>
                    <Link
                        href="/admin/super/ventas"
                        className="flex items-center justify-center gap-2 bg-amber-600/20 hover:bg-amber-600 text-amber-500 hover:text-white border border-amber-600/50 px-4 py-2 rounded-lg font-bold transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Leads Ventas
                    </Link>
                    <PanicButton />
                </div>
            </div>

            {/* SECCIÓN DE KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric 1 */}
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col justify-center">
                    <p className="text-slate-400 text-sm font-medium mb-1">Empresas Activas</p>
                    <div className="flex items-end justify-between">
                        <h3 className="text-3xl font-bold text-white">{totalEmpresas}</h3>
                        <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-md">+{empresasNuevas} este mes</span>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col justify-center">
                    <p className="text-slate-400 text-sm font-medium mb-1">Total Usuarios (Cajeros)</p>
                    <h3 className="text-3xl font-bold text-white">{totalCajeros}</h3>
                </div>

                {/* Metric 3 */}
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col justify-center">
                    <p className="text-slate-400 text-sm font-medium mb-1">Cupos / Licencias Vendidas</p>
                    <h3 className="text-3xl font-bold text-primary">{cuposVendidos}</h3>
                </div>

                {/* Metric 4 */}
                <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col justify-center">
                    <div className="flex justify-between mb-1">
                        <p className="text-slate-400 text-sm font-medium">Uso de Cupos</p>
                        <span className="text-sm font-bold text-white">{porcentajeUso}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${porcentajeUso}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-right">{cuposVendidos - totalCajeros} cupos libres globalmente</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Formulario de Creación + Solicitudes Pendientes */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                        <h3 className="text-xl font-semibold mb-6">Alta de Nueva Empresa</h3>
                        <CreateEmpresaForm />
                    </div>

                    {/* Solicitudes de registro web */}
                    <div className="bg-slate-800 p-6 rounded-xl border border-amber-900/40">
                        <h3 className="text-xl font-semibold mb-4 text-amber-400 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Solicitudes Pendientes
                            {solicitudes.length > 0 && (
                                <span className="ml-auto bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">{solicitudes.length}</span>
                            )}
                        </h3>
                        <SolicitudesTable solicitudes={solicitudes} />
                    </div>

                    {/* Vencimientos Próximos */}
                    <div className="bg-slate-800 p-6 rounded-xl border border-red-900/50">
                        <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Vencimientos Próximos
                        </h3>
                        <div className="space-y-3">
                            {empresas.filter(e => e.fechaVencimiento && new Date(e.fechaVencimiento).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000).length === 0 ? (
                                <p className="text-sm text-slate-400">No hay empresas por vencer en los próximos 7 días.</p>
                            ) : (
                                empresas
                                    .filter(e => e.fechaVencimiento && new Date(e.fechaVencimiento).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000)
                                    .map(emp => {
                                        const isExpired = emp.fechaVencimiento && new Date(emp.fechaVencimiento) < new Date();
                                        return (
                                            <div key={emp.id} className={`p-3 rounded border text-sm flex justify-between items-center ${isExpired ? 'bg-red-900/20 border-red-500/50' : 'bg-orange-900/20 border-orange-500/50'}`}>
                                                <span className="font-semibold text-white truncate max-w-[150px]">{emp.nombre}</span>
                                                <span className={isExpired ? 'text-red-400 font-bold text-xs' : 'text-orange-400 font-bold flex-shrink-0 text-xs'}>
                                                    {isExpired ? '¡VENCIDA!' : `${new Date(emp.fechaVencimiento!).toLocaleDateString()}`}
                                                </span>
                                            </div>
                                        )
                                    })
                            )}
                        </div>
                    </div>
                </div>

                {/* Listado de Empresas */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-semibold border-b border-slate-700 pb-2">Empresas Activas (Búsqueda y Gestión)</h3>
                    <EmpresasDataTable empresas={empresas} />
                </div>
            </div>
        </div>
    );
}
