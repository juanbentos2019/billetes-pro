'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="text-2xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
              FinanzaPro
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <ul className="hidden lg:flex lg:items-center lg:gap-6">
            <li><Link href="/" className="py-2 hover:text-primary transition-colors">Billetes</Link></li>
            <li><Link href="/nosotros" className="py-2 hover:text-primary transition-colors">Nosotros</Link></li>
            <li><Link href="/contacto" className="py-2 hover:text-primary transition-colors">Contacto</Link></li>
            {session ? (
              <li>
                <button onClick={() => signOut()} className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md transition-colors">
                  Cerrar Sesión
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => signIn('google')} className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                  Iniciar Sesión
                </button>
              </li>
            )}
          </ul>

          {/* BOTÓN HAMBURGUESA (SÓLO MÓVIL) */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5"
              aria-label="Abrir menú"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* PANEL DE MENÚ MÓVIL */}
      <div
        className={`
          lg:hidden
          fixed top-0 left-0 h-full w-64
          bg-slate-800 shadow-xl
          transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="flex flex-col h-full p-8 pt-24 space-y-4">
          <li><Link href="/" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
          <li><Link href="/" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Billetes del Mundo</Link></li>
          <li><Link href="/nosotros" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
          <li><Link href="/contacto" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
          <li className="pt-4">
            {session ? (
              <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md transition-colors">
                Cerrar Sesión
              </button>
            ) : (
              <button onClick={() => { signIn('google'); setIsMenuOpen(false); }} className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                Iniciar Sesión
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* OVERLAY OSCURO */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}