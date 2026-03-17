// app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import HomeClient from "./HomeClient";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // Si el usuario es ADMIN_EMPRESA, mostramos un aviso profesional en lugar de la plataforma
  if (session?.user?.role === "ADMIN_EMPRESA") {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl max-w-xl text-center shadow-2xl">
          <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Acceso de Gestión Operativa</h1>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Estimado Administrador, usted ha iniciado sesión con un perfil de <span className="text-primary font-semibold">Supervisión y Gestión de Sucursal</span>.
          </p>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            La plataforma de consulta numismática, cálculo forense y comparativas está diseñada exclusivamente para uso del personal de caja de su empresa (rol Cajero). Su perfil está optimizado para la auditoría, altas de empleados y monitorización de cupos.
          </p>
          <Link
            href="/admin/empresa"
            className="inline-block bg-primary text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-white transition-colors"
          >
            Acceder a mi Panel de Control
          </Link>
        </div>
      </main>
    );
  }

  // Los demás (USER, SUPER_MASTER, o sin sesión) pueden ver la página (o manejarlo en otro lado)
  // Pero generalmente sólo usuarios logueados o públicos pueden ver esta landing
  return <HomeClient />;
}