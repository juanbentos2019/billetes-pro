// app/terminos-y-condiciones/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Billetes del Mundo',
  description: 'Consulta los términos y condiciones de uso de nuestra plataforma de billetes del mundo.',
};

export default function TerminosYCondicionesPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-invert max-w-4xl mx-auto text-slate-300">
          <p className="text-lg">
            Bienvenido a Billetes del Mundo. Al acceder y utilizar nuestro sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones de uso. Por favor, léelos con atención.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">1. Aceptación de los Términos</h2>
          <p>
            Al usar este sitio, declaras que has leído, entendido y aceptado estos términos. Si no estás de acuerdo con alguna parte de los términos, no estás autorizado a utilizar el sitio.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">2. Uso del Sitio Web</h2>
          <p>
            Este sitio web proporciona información sobre billetes de todo el mundo con fines educativos y de referencia. Te comprometes a utilizar la información de manera lícita y para los fines previstos. Queda prohibido:
          </p>
          <ul>
            <li>Realizar cualquier acto que pueda dañar, sobrecargar o perjudicar el sitio web.</li>
            <li>Utilizar el contenido para fines comerciales sin nuestro consentimiento explícito.</li>
            <li>Intentar acceder a áreas restringidas del sitio o a nuestros sistemas informáticos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido presente en este sitio, incluyendo textos, gráficos, logos, imágenes de billetes y software, es propiedad de Billetes del Mundo o de sus proveedores de contenido y está protegido por las leyes de derechos de autor internacionales. Las imágenes de los billetes se utilizan con fines informativos y su derecho de autor pertenece a las respectivas autoridades monetarias.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">4. Exclusión de Garantías</h2>
          <p>
            La información en este sitio se proporciona "tal cual", sin garantías de ningún tipo, ya sean expresas o implícitas. Aunque nos esforzamos por mantener la información actualizada y correcta, no garantizamos su exhaustividad o precisión.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">5. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso Billetes del Mundo será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">6. Cambios en los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio web. Te recomendamos revisar esta página periódicamente.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">7. Ley Aplicable</h2>
          <p>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de [Tu País/Jurisdicción], sin dar efecto a ningún principio de conflicto de leyes.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">8. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes contactarnos a través de nuestra página de <a href="/contacto" className="text-primary hover:underline">Contacto</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
