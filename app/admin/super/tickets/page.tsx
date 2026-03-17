import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import TicketsDataTable from "./TicketsDataTable";

export default async function TicketsAdminPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "SUPER_MASTER") {
        redirect("/");
    }

    // @ts-ignore: Prisma client needs regeneration on Windows
    const ticketsRaw = await prisma.ticket.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            autor: { select: { nombre: true, email: true, role: true } },
            empresa: { select: { nombre: true } }
        }
    });

    const tickets = ticketsRaw as any[];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 p-6 rounded-xl border border-slate-700 gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/admin/super" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <h2 className="text-2xl font-bold text-white">Centro de Soporte SaaS</h2>
                    </div>
                    <p className="text-slate-400 text-sm ml-12">Bandeja de entrada de tickets técnicos y comerciales de las empresas.</p>
                </div>
                
                <div className="bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-bold text-white">
                        {tickets.filter(t => t.estado === 'OPEN').length} Abiertos
                    </span>
                </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <TicketsDataTable tickets={tickets} />
            </div>
        </div>
    );
}
