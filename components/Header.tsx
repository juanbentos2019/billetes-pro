'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Si la sesión trae un error indicando que expiró (porque iniciaron sesión en otra PC)
    // forzamos a cerrar sesión en este cliente
    if (session?.error === "SessionExpired") {
      alert("Tu sesión ha sido cerrada porque alguien inició sesión con este usuario en otro dispositivo.");
      signOut({ callbackUrl: '/' });
    }
  }, [session]);

  return (
    <>
    <header className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="text-2xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
              Billetes del Mundo
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <ul className="hidden lg:flex lg:items-center lg:gap-6">
            <li><Link href="/" className="py-2 hover:text-primary transition-colors">Billetes</Link></li>
            <li>
              <Link href="/nosotros" className="text-slate-300 hover:text-white transition font-medium">
                Nosotros
              </Link>
            </li>
            {session?.user?.role !== 'USER' && (
            <li>
              <Link href="/precios" className="text-slate-300 hover:text-white transition font-medium">
                Precios
              </Link>
            </li>
            )}
            <li>
              <Link href="/noticias" className="text-slate-300 hover:text-white transition font-medium">
                Noticias
              </Link>
            </li>
            {session && session.user?.role !== 'SUPER_MASTER' && (
              <li><Link href="/soporte" className="py-2 hover:text-primary transition-colors">Soporte</Link></li>
            )}
            {session ? (
              <>
                <li className="flex items-center text-sm font-medium text-slate-300 bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600/50 mr-2">
                  <span className="truncate max-w-[120px]" title={session.user.name || session.user.email || undefined}>
                    Hola, {session.user.name || session.user.email?.split('@')[0]}
                  </span>
                  {session.user.empresaNombre && (
                    <>
                      <span className="mx-2 text-slate-500">|</span>
                      <span className="text-primary truncate max-w-[120px]" title={session.user.empresaNombre}>
                        {session.user.empresaNombre}
                      </span>
                    </>
                  )}
                </li>
                {(session.user?.role === 'SUPER_MASTER' || session.user?.role === 'ADMIN_EMPRESA') && (
                  <li>
                    <Link href={session.user.role === 'SUPER_MASTER' ? '/admin/super' : '/admin/empresa'} className="py-2 px-4 bg-primary/20 text-primary hover:bg-primary/30 rounded-md transition-colors font-medium">
                      Panel SaaS
                    </Link>
                  </li>
                )}
                <li>
                  <button onClick={() => signOut()} className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md transition-colors">
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="flex gap-2">
                <Link href="/registro" className="py-2 px-4 bg-primary hover:bg-white text-slate-900 font-bold rounded-md transition-colors hidden xl:inline-block">
                  Registrar Empresa
                </Link>
                <button onClick={() => signIn()} className="py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors">
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
    </header>

      {/* PANEL DE MENÚ MÓVIL */}
      <div
        className={`
          lg:hidden
          fixed top-0 left-0 h-full w-64
          bg-slate-800 shadow-xl
          transition-transform duration-300 ease-in-out z-[60]
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="flex flex-col h-full p-8 pt-24 space-y-4">
          <li><Link href="/" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
          <li><Link href="/" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Billetes del Mundo</Link></li>
          <li><Link href="/nosotros" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
          {session?.user?.role !== 'USER' && (
          <li><Link href="/precios" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Precios / Planes</Link></li>
          )}
          {session && session.user?.role !== 'SUPER_MASTER' && (
            <li><Link href="/soporte" className="block py-2 text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Soporte</Link></li>
          )}
          <li className="pt-4 space-y-3">
            {session ? (
              <>
                <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <p className="text-sm text-slate-300 font-medium">Hola, {session.user.name || session.user.email?.split('@')[0]}</p>
                  {session.user.empresaNombre && (
                    <p className="text-xs text-primary font-bold mt-1 max-w-full truncate" title={session.user.empresaNombre}>{session.user.empresaNombre}</p>
                  )}
                </div>
                {(session.user?.role === 'SUPER_MASTER' || session.user?.role === 'ADMIN_EMPRESA') && (
                  <Link href={session.user.role === 'SUPER_MASTER' ? '/admin/super' : '/admin/empresa'} className="block w-full text-center py-2 px-4 bg-primary/20 text-primary hover:bg-primary/30 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                    Panel SaaS
                  </Link>
                )}
                <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md transition-colors">
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { signIn(); setIsMenuOpen(false); }} className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors">
                  Iniciar Sesión
                </button>
                <Link href="/registro" className="block text-center w-full py-2 px-4 bg-primary hover:bg-white text-slate-900 font-bold rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Registrar Empresa
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>

      {/* OVERLAY OSCURO */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}