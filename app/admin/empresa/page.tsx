import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import CreateCajeroForm from "./CreateCajeroForm";
import UserActions from "./UserActions";

export default async function AdminEmpresaPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user.empresaId || (session.user.role !== "ADMIN_EMPRESA" && session.user.role !== "SUPER_MASTER")) {
        redirect("/");
    }

    const empresaId = session.user.empresaId;

    // Obtenemos los datos de la empresa y todos sus cajeros (usuarios con rol USER)
    const empresa = await prisma.empresa.findUnique({
        where: { id: empresaId },
        include: {
            usuarios: {
                where: { role: "USER" },
                orderBy: { createdAt: "desc" }
            }
        }
    });

    if (!empresa) {
        return <div className="text-red-500">Error: Tu cuenta no está atada a ninguna empresa válida.</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Panel de: {empresa.nombre}</h2>
                    <p className="text-slate-400 text-sm">Gestiona los accesos de tus cajeros o empleados al sistema.</p>
                </div>
                <div className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-bold">
                    {empresa.usuarios.length} / {empresa.maxCajeros} Empleados
                </div>
            </div>

            {/* Detalles Rápidos de Facturación y Plan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-800 p-6 rounded-xl border border-slate-700">
                 <div className="flex flex-col">
                     <span className="text-slate-400 text-sm mb-1">Plan Actual</span>
                     <div className="flex items-center gap-2">
                         <span className="text-xl font-bold text-white">{empresa.planType || 'BASIC'}</span>
                         {(empresa as any).estadoCrm === 'TRIAL' && (
                             <span className="bg-amber-600/20 text-amber-400 border border-amber-600/30 px-2 py-0.5 rounded text-xs font-bold">PRUEBA</span>
                         )}
                     </div>
                 </div>
                 <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
                     <span className="text-slate-400 text-sm mb-1">Vencimiento del Servicio</span>
                     <span className={`text-xl font-bold ${empresa.fechaVencimiento && new Date(empresa.fechaVencimiento) < new Date() ? 'text-red-400' : 'text-white'}`}>
                         {empresa.fechaVencimiento ? new Date(empresa.fechaVencimiento).toLocaleDateString() : 'Sin fecha'}
                     </span>
                     {empresa.fechaVencimiento && new Date(empresa.fechaVencimiento) < new Date() && (
                         <span className="text-xs text-red-400 mt-1">Servicio vencido. Contacta a soporte para renovar.</span>
                     )}
                 </div>
                 <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
                     <span className="text-slate-400 text-sm mb-1">Estado de la Licencia</span>
                     <span className={`text-xl font-bold flex items-center gap-2 ${empresa.activo ? 'text-green-400' : 'text-red-400'}`}>
                         <span className={`w-3 h-3 rounded-full ${empresa.activo ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                         {empresa.activo ? 'Activa' : 'Suspendida'}
                     </span>
                 </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Formulario de Creación de Cajero */}
                <div className="lg:col-span-1 bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                    <h3 className="text-xl font-semibold mb-6">Nuevo Empleado / Cajero</h3>
                    {empresa.usuarios.length >= empresa.maxCajeros ? (
                        <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-lg text-center font-medium">
                            Has alcanzado el límite máximo de cajeros asignados a tu cuenta ({empresa.maxCajeros}). Contacta al administrador para expandir tu plan.
                        </div>
                    ) : (
                        <CreateCajeroForm />
                    )}
                </div>

                {/* Listado de Cajeros */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-semibold border-b border-slate-700 pb-2">Empleados con Acceso</h3>
                    {empresa.usuarios.length === 0 ? (
                        <p className="text-slate-400 bg-slate-800 p-4 rounded-lg border border-slate-700 text-center">
                            No tienes empleados registrados. Usa el formulario para darles acceso a la plataforma.
                        </p>
                    ) : (
                        <div className="grid gap-4">
                            {empresa.usuarios.map((cajero) => (
                                <div key={cajero.id} className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:border-primary/50 transition gap-4">
                                    <div className="overflow-hidden">
                                        <h4 className="font-bold text-lg truncate">{cajero.nombre || 'Cajero Sin Nombre'}</h4>
                                        <p className="text-sm text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                                            <span className="truncate max-w-full">{cajero.email}</span>
                                            <span className={`shrink-0 w-2 h-2 rounded-full ${cajero.activo ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                            <span className="shrink-0">{cajero.activo ? 'Activo' : 'Suspendido'}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 items-center sm:items-end justify-between sm:justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-700/50">
                                        <span className="bg-slate-700 text-xs px-2 py-1 rounded-md text-slate-300 w-fit shrink-0">Cajero</span>
                                        <UserActions userId={cajero.id} isActive={cajero.activo} currentName={cajero.nombre} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
