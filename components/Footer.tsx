// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Billetes del Mundo. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <Link href="/nosotros" className="text-slate-300 hover:text-primary transition-colors duration-300">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-slate-300 hover:text-primary transition-colors duration-300">
            Contacto
          </Link>
          <Link href="/terminos-y-condiciones" className="text-slate-300 hover:text-primary transition-colors duration-300">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
