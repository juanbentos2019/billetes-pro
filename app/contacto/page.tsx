
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react'; // Usando lucide-react para iconos

export const metadata: Metadata = {
  title: 'Contacto | FinanzaPro',
  description: 'Ponte en contacto con el equipo de FinanzaPro. Estamos aquí para ayudarte con tus consultas sobre numismática y nuestra plataforma.',
};

const ContactoPage = () => {
  return (
    <div className="animate-fade-in-scale">
      {/* --- HERO SECTION --- */}
      <section 
        className="relative bg-slate-800 text-white py-20 md:py-32 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(22, 24, 38, 0.9) 100%)' }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            Hablemos
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            ¿Tienes una pregunta, sugerencia o simplemente quieres saludar? Nos encantaría saber de ti. Tu feedback es vital para nosotros.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/50 z-0"></div>
      </section>

      {/* --- INFORMACIÓN DE CONTACTO --- */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ponte en Contacto</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              Aunque no disponemos de un formulario, puedes contactarnos a través de los siguientes canales. Prometemos responder lo antes posible.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Email */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-slate-400 mb-4">La forma más directa de contactarnos.</p>
                <a href="mailto:contacto@finanzapro.com" className="text-secondary hover:text-green-400 transition-colors">
                  contacto@finanzapro.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Linkedin size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-slate-400 mb-4">Sigue nuestras actualizaciones profesionales.</p>
                <a href="#" className="text-secondary hover:text-green-400 transition-colors">FinanzaPro en LinkedIn</a>
              </div>

              {/* Twitter / X */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <Twitter size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Twitter / X</h3>
                <p className="text-slate-400 mb-4">Para noticias y conversaciones rápidas.</p>
                <a href="#" className="text-secondary hover:text-green-400 transition-colors">@FinanzaPro</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREGUNTAS FRECUENTES (FAQ) --- */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-10">Preguntas Frecuentes</h2>
            <div className="space-y-6">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="font-bold text-lg text-primary">¿Cómo puedo sugerir un billete que no está en la colección?</h3>
                    <p className="text-slate-300 mt-2">¡Nos encanta recibir sugerencias! Por favor, envíanos un email con los detalles del billete, incluyendo país, denominación y, si es posible, el año. Nuestro equipo de investigación lo revisará.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h3 className="font-bold text-lg text-primary">¿Planean añadir más funcionalidades a la web?</h3>
                    <p className="text-slate-300 mt-2">¡Sí! Estamos trabajando constantemente en nuevas herramientas para coleccionistas, incluyendo un sistema para gestionar tu propia colección, listas de deseos y más análisis de mercado. ¡Sigue nuestras redes para no perderte nada!</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ContactoPage;
