'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface Ticket {
  id: string;
  asunto: string;
  mensaje: string;
  estado: string;
  createdAt: string;
}

export default function SoportePage() {
  const { data: session } = useSession();
  const [asunto, setAsunto] = useState('duda');
  const [mensaje, setMensaje] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);

  useEffect(() => {
    if (session?.user?.role === 'ADMIN_EMPRESA') {
      fetchTickets();
    } else {
      setIsLoadingTickets(false);
    }
  }, [session]);

  const fetchTickets = async () => {
    try {
      const res = await fetch('/api/tickets');
      if (res.ok) {
        const data = await res.json();
        setTickets(data);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setIsLoadingTickets(false);
    }
  };

  if (session?.user?.role === 'SUPER_MASTER') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Acceso Denegado</h1>
          <p className="text-slate-400 mb-8">Como Super Administrador, la gestión y recepción de soporte se realiza desde el Panel SaaS.</p>
          <Link href="/admin/super/tickets" className="bg-primary text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-white transition-colors">
            Ir a Gestión de Tickets
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      alert("Debes iniciar sesión para enviar un ticket de soporte.");
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ asunto, mensaje })
      });
      
      if (res.ok) {
        setSuccess(true);
        setMensaje('');
        fetchTickets(); // Recargar la lista de tickets
      } else {
        const data = await res.json();
        setError(data.error || 'Hubo un error al enviar el ticket.');
      }
    } catch (err) {
      setError('Error de conexión al servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header / Hero Section */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6 mt-4">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Centro de Soporte <span className="text-primary">Técnico</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Bienvenido al portal de ayuda de BilletesNext SaaS. Aquí encontrarás herramientas para contactar a nuestro equipo y una guía completa para aprovechar al máximo tu suscripción.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Formulario de Soporte (1/3) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-700/50 sticky top-28">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Abrir un Ticket
              </h2>
              {success ? (
                <div className="bg-green-900/40 border border-green-500/50 p-6 rounded-xl flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-green-500/20 text-green-400 flex items-center justify-center rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Ticket Enviado</h3>
                  <p className="text-slate-300 text-sm">El equipo de soporte ha recibido tu solicitud y se contactará a la brevedad.</p>
                  <button onClick={() => setSuccess(false)} className="text-primary text-sm font-semibold hover:underline mt-2">
                    Enviar otro ticket
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-900/40 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm text-center">
                      {error}
                    </div>
                  )}
                  {session && (
                    <div className="space-y-1.5 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 mb-4">
                      <p className="text-sm text-slate-400">Enviando como:</p>
                      <p className="text-white font-medium">{session.user.name || session.user.email}</p>
                      <p className="text-primary text-sm font-semibold">{session.user.empresaNombre}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-1.5">Motivo de contacto</label>
                    <select
                      id="asunto"
                      value={asunto}
                      onChange={(e) => setAsunto(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="duda">Duda sobre la plataforma</option>
                      <option value="problema">Reportar problema técnico</option>
                      <option value="facturacion">Facturación y Planes</option>
                      <option value="sugerencia">Sugerir nueva funcionalidad</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-1.5">Descripción detallada</label>
                    <textarea
                      id="mensaje"
                      required
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-500 resize-none"
                      placeholder="Describe en qué podemos ayudarte..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !session}
                    className="w-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-bold py-3.5 px-6 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        Enviar Solicitud
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Evolución de Tickets (Historial) */}
            {session?.user?.role === 'ADMIN_EMPRESA' && (
              <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-700/50 mt-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Tus Tickets
                </h2>
                
                {isLoadingTickets ? (
                  <div className="flex justify-center py-8">
                    <span className="relative flex h-8 w-8">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-8 w-8 bg-primary"></span>
                    </span>
                  </div>
                ) : tickets.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
                    <p>Aún no has enviado ningún ticket de soporte.</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {tickets.map(ticket => {
                      let statusColor = 'bg-slate-500/20 text-slate-400 border-slate-500/50';
                      let statusLabel = ticket.estado;
                      
                      if (ticket.estado === 'OPEN') { statusColor = 'bg-rose-500/20 text-rose-400 border-rose-500/50'; statusLabel = 'Abierto'; }
                      else if (ticket.estado === 'IN_PROGRESS') { statusColor = 'bg-amber-500/20 text-amber-400 border-amber-500/50'; statusLabel = 'En Proceso'; }
                      else if (ticket.estado === 'RESOLVED') { statusColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'; statusLabel = 'Resuelto'; }
                      else if (ticket.estado === 'CLOSED') { statusColor = 'bg-slate-500/20 text-slate-400 border-slate-500/50'; statusLabel = 'Cerrado'; }

                      return (
                        <div key={ticket.id} className="p-4 bg-slate-900/80 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                          <div className="flex justify-between items-start mb-2 gap-2">
                            <h4 className="font-semibold text-white capitalize text-sm">{ticket.asunto}</h4>
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md border whitespace-nowrap ${statusColor}`}>
                              {statusLabel}
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 mb-3 line-clamp-2" title={ticket.mensaje}>{ticket.mensaje}</p>
                          <div className="flex justify-between items-center text-xs text-slate-500">
                            <span className="font-mono">#{ticket.id.substring(ticket.id.length - 6).toUpperCase()}</span>
                            <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Guía de Usuario (2/3) */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in">
            <div className="bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Guía de Usuario Integral
              </h2>

              <div className="space-y-10">
                {/* Intro */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">1. Introducción a la Plataforma</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Bienvenido a BilletesNext, el sistema integral de consulta numismática diseñado para optimizar el trabajo de cajeros profesionales. Nuestra plataforma digitaliza los bancos centrales permitiéndote revisar medidas de seguridad, conversiones y advertencias sobre billetes circulantes a nivel mundial en tiempo real.
                  </p>
                </section>

                {/* Búsqueda */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">2. Búsqueda y Navegación Rápida</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base ml-2">
                    <li><strong className="text-white">A través del Mapa:</strong> En la página de inicio, gira y haz zoom en el mapa mundial. Un clic sobre un territorio iluminado te redirigirá instantáneamente a la colección de la moneda de ese país.</li>
                    <li><strong className="text-white">Buscador Inteligente:</strong> Usa el buscador predictivo (Combobox) escribiendo el nombre del país (Ej. "Estados Unidos"). La interfaz autocompletará y mostrará las opciones válidas.</li>
                  </ul>
                </section>

                {/* Visor de Billetes y Versiones */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">3. Inspección de Billetes (Anverso/Reverso)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-3">
                    Una vez seleccionado un país, verás una matriz con todas las denominaciones existentes (Ej. 1, 5, 20, 100).
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg border-l-2 border-primary">
                    <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base">
                      <li><strong>Cambio de Año/Versión:</strong> Muchos billetes de la misma denominación tienen versiones (Ej. Dólar 1996 vs 2013). Usa el selector desplegable sobre las imágenes para alternar entre ellos.</li>
                      <li><strong>Zoom de Alta Definición:</strong> Haz clic sobre cualquier imagen de anverso o reverso para abrir el modal en pantalla completa. Pasa el cursor sobre la imagen ampliada para inspeccionar detalles tipográficos minuciosos (microimpresión).</li>
                    </ul>
                  </div>
                </section>

                {/* InfoSec */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">4. Info de Seguridad y Alertas (InfoSec)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-3">
                    El sistema está dotado de fichas técnicas de seguridad curadas por administradores expertos:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base ml-2">
                    <li>Debajo de las imágenes del billete, busca el panel rotulado como <strong>"Guía de Verificación Detallada"</strong>.</li>
                    <li>Allí encontrarás capturas de detalle (hologramas, tintas OVI, marcas de agua) acompañadas de descripciones sobre cómo validar físicamente el billete.</li>
                    <li><span className="text-amber-400 font-medium">Nota:</span> Si un billete está marcado en rojo como "Oculto", el Administrador de tu empresa ha restringido temporalmente su visibilidad para las sucursales, usualmente como protocolo de seguridad ante falsificaciones masivas.</li>
                  </ul>
                </section>

                {/* Favoritos */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">5. Sistema de Favoritos (Tramos Frecuentes)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    Para agilizar la atención en caja, puedes anclar las divisas que más consultas:
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mt-2 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                    Al visualizar un billete, haz clic en el botón con forma de <strong>Estrella</strong> en el encabezado. Esto guardará el País, Denominación y Versión exacta. Podrás acceder a ellos en menos de un segundo desde el botón "Favoritos" en la barra de herramientas principal.
                  </p>
                </section>

                {/* Admin SaaS */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 text-primary">6. Funciones Avanzadas (Sólo Administradores)</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                    Si eres un usuario con perfil <code className="bg-slate-700 px-1 py-0.5 rounded text-primary">ADMIN_EMPRESA</code>, al ingresar verás el botón <strong>"Panel SaaS"</strong> en la navegación superior, desde donde puedes:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        Gestión de Cajeros
                      </h4>
                      <p className="text-xs text-slate-400">Crear usuarios para tus empleados, resetear contraseñas y monitorear sus accesos dentro del cupo de tu licencia.</p>
                    </div>
                    <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                        Monitor de Alertas
                      </h4>
                      <p className="text-xs text-slate-400">Revisar avisos globales críticos emitidos por la central sobre nuevas falsificaciones detectadas mundialmente.</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
            
            <div className="text-center pt-4">
              <Link href="/" className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 py-3 rounded-xl transition-colors font-medium">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
