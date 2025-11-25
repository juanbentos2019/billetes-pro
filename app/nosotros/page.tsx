
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros | FinanzaPro',
  description: 'Conoce la historia, misión y visión de FinanzaPro, tu portal al mundo de la numismática y las finanzas globales.',
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
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Sobre FinanzaPro
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            Apasionados por la historia que cuenta el dinero. Conectamos a coleccionistas, historiadores y entusiastas con el fascinante universo de los billetes del mundo.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/50 z-0"></div>
      </section>

      {/* --- MISIÓN Y VISIÓN --- */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Misión */}
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg">
              <h2 className="text-3xl font-bold text-secondary mb-4">Nuestra Misión</h2>
              <p className="text-slate-300 leading-relaxed">
                Ser la plataforma de referencia global para la exploración y el coleccionismo de billetes, ofreciendo herramientas innovadoras, datos precisos y una comunidad vibrante para todos los aficionados a la numismática.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg">
              <h2 className="text-3xl font-bold text-accent mb-4">Nuestra Visión</h2>
              <p className="text-slate-300 leading-relaxed">
                Crear un futuro donde cada billete sea visto como una obra de arte y un documento histórico, accesible para ser estudiado y apreciado por cualquier persona, en cualquier lugar del mundo, a través de la tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUESTRA HISTORIA --- */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">El Origen de FinanzaPro</h2>
            <div className="text-left space-y-6 text-slate-300 leading-relaxed">
              <p>
                FinanzaPro nació de una fascinación compartida por los viajes y la historia. Nuestro fundador, un ávido coleccionista, se dio cuenta de que no existía un lugar centralizado que combinara la belleza visual de los billetes con datos accesibles y herramientas modernas para coleccionistas.
              </p>
              <p>
                Lo que comenzó como un proyecto personal para catalogar una pequeña colección, rápidamente se convirtió en una ambiciosa misión: crear el atlas de billetes más completo y visualmente impactante del mundo. Hoy, FinanzaPro es el resultado de miles de horas de desarrollo, investigación y, sobre todo, pasión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a la Aventura</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            ¿Estás listo para explorar el mundo a través de su moneda? Comienza tu colección, descubre billetes raros o simplemente viaja con nosotros desde la comodidad de tu hogar.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-primary hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            Explorar Billetes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
