
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros | Billetes del Mundo',
  description: 'Conoce la historia, misión y visión de Billetes del Mundo, tu portal al mundo de la numismática y las finanzas globales.',
};

const NosotrosPage = () => {
  return (
    <div className="animate-fade-in-scale">
      {/* --- HERO SECTION --- */}
      <section 
        className="relative bg-slate-800 text-white py-20 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(22, 24, 38, 0.9) 100%)' }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6 mt-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inteligencia Numismática para <span className="text-primary">Profesionales</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            BilletesNext es la herramienta SaaS definitiva diseñada para cajeros, casas de cambio e instituciones financieras. Optimizamos la verificación de divisas, prevenimos el fraude y agilizamos la operatoria diaria en ventanilla.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/50 z-0"></div>
      </section>

      {/* --- MISIÓN Y VISIÓN --- */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Misión */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl h-full">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Misión Operativa</h2>
              <p className="text-slate-300 leading-relaxed">
                Proteger las transacciones financieras proporcionando información técnica precisa y en tiempo real sobre billetes circulantes a nivel global. Nuestro objetivo es erradicar el fraude por falsificación y reducir drásticamente los tiempos de consulta y validación del personal de caja.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl h-full">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Estándar de Seguridad</h2>
              <p className="text-slate-300 leading-relaxed">
                Convertirnos en el ecosistema tecnológico estándar e indispensable para cada institución bancaria. Aspiramos a digitalizar y unificar el conocimiento de las bancas centrales del mundo en una única plataforma accesible, segura y fácil de auditar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUCIONES PRÁCTICAS --- */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">El Valor Real en tu Sucursal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sabemos que en la operatoria financiera cada segundo cuenta y un error cuesta dinero. BilletesNext soluciona problemas críticos del día a día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-primary mb-3">Auditoría Visual Extrema</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Olvídate de los manuales impresos desactualizados. Ofrecemos escaneos de altísima resolución con herramientas de zoom para inspeccionar microimpresiones, hologramas y tintas OVI directamente desde el mostrador.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-rose-400 mb-3">Alertas Tempranas</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sistema integrado de alertas (InfoSec) controlado remotamente por los administradores de la red. Restringe instantáneamente la validación de series defectuosas o bloquea denominaciones con alto índice de falsificación en todas tus sucursales.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Gestión de Acceso</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Control absoluto sobre tu equipo. Como administrador de empresa, puedes crear, suspender y monitorear los accesos de cada cajero, garantizando que solo el personal autorizado opera bajo los protocolos de la institución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Optimiza tu Gestión de Divisas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Reduce el riesgo operativo y dota a tus cajeros de la mejor herramienta forense digital del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-primary hover:bg-white text-slate-900 hover:text-slate-900 font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Ir a la Plataforma
            </Link>
            <Link 
              href="/soporte" 
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Contactar Ventas / Soporte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
