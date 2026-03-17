import type { Metadata } from 'next';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Precios | BilletesNext',
  description: 'Planes y precios de BilletesNext, el software de inteligencia numismática líder para casas de cambio e instituciones financieras.',
};

export default async function PreciosPage() {
  const session = await getServerSession(authOptions);

  // Si ya están registrados, no los dejamos ver el marketing, los enviamos a su sistema
  if (session?.user) {
    if (session.user.role === 'ADMIN_EMPRESA') {
      redirect('/admin/empresa');
    } else if (session.user.role === 'SUPER_MASTER') {
      redirect('/admin/super');
    } else {
      redirect('/'); // Cajeros regulares o cualquier otro al dashboard base
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 animate-fade-in">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Planes Diseñados para tu <span className="text-primary">Seguridad Operativa</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Estandariza la validación de divisas en toda tu red de sucursales con una única suscripción centralizada.
          </p>
          <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full font-bold text-sm">
            Protege tu sucursal hoy. Sin compromiso de permanencia.
          </div>
        </div>

        {/* TARJETAS DE PRECIOS */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Plan Básico */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl flex flex-col relative overflow-hidden group hover:border-slate-500 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Ideal para casas de cambio independientes o sucursales únicas.</p>
            <div className="text-primary text-4xl font-black mb-6 flex items-end">
              $49<span className="text-lg text-slate-500 font-medium ml-1">/año</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Hasta <strong>5 cajeros</strong> activos.</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Acceso a atlas global de +150 países.</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Soporte técnico estándar (48hs).</span>
              </li>
              <li className="flex items-start text-slate-500 gap-3 text-sm opacity-50">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                <span>InfoSec Avanzado (Alertas de falsificación).</span>
              </li>
            </ul>
            <Link href="/registro" className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition-colors">
              Registrar Empresa
            </Link>
          </div>

          {/* Plan Pro (Destacado) */}
          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-primary shadow-2xl shadow-primary/20 flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="absolute top-4 right-[-35px] bg-primary text-slate-900 text-xs font-black py-1 px-10 transform rotate-45 shadow-md">RECOMENDADO</div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Profesional</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">La mejor opción para redes medianas con un fuerte énfasis forense.</p>
            <div className="text-white text-4xl font-black mb-6 flex items-end">
              $120<span className="text-lg text-slate-500 font-medium ml-1">/año</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Hasta <strong>20 cajeros</strong> activos.</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Acceso a atlas global ilimitado.</span>
              </li>
              <li className="flex items-start text-white gap-3 text-sm font-semibold">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-amber-400">InfoSec Avanzado (Alertas Tempranas en tiempo real).</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Soporte técnico prioritario (12hs).</span>
              </li>
            </ul>
            <Link href="/registro" className="block w-full text-center bg-primary hover:bg-white text-slate-900 font-bold py-3 md:py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/50">
              Registra tu Empresa Ahora
            </Link>
            <p className="text-center text-xs text-slate-500 mt-3">Sin compromiso de permanencia.</p>
          </div>

          {/* Plan Enterprise */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col relative overflow-hidden group hover:border-slate-500 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">Corporate</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Bancos e instituciones financieras de la red interbancaria.</p>
            <div className="text-slate-300 text-3xl font-black mb-6 flex items-end">
              A Medida
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Cajeros ilimitados</strong> (Bajo licencia global).</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Panel de trazabilidad y auditoría de accesos.</span>
              </li>
              <li className="flex items-start text-slate-300 gap-3 text-sm">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Ejecutivo de cuentas dedicado e integraciones API.</span>
              </li>
            </ul>
            <Link href="/contacto-ventas" className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition-colors">
              Contactar Ventas
            </Link>
          </div>
        </div>

        {/* FAQS BASICAS */}
        <div className="mt-16 bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700/50 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas Frecuentes Comerciales</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                <div className="space-y-2">
                    <h4 className="font-bold text-primary">¿Cómo realizo el pago de mi suscripción?</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Primero debes completar el registro de tu empresa creando un usuario base. Una vez hecho, tu cuenta quedará lista para que tu ejecutivo o desde nuestro portal administremos el alta de tu facturación y te habiliten el servicio de inmediato.</p>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold text-primary">¿Qué pasa si necesito agregar un cajero temporal?</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Puedes reasignar tus asientos libremente. Si despides a un empleado hoy y sumas otro mañana, borras o suspendes al usuario original desde el Dashboard y liberas su cupo para el nuevo cajero inmediatamente, todo online.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
