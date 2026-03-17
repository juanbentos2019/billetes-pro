'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactoVentasPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/ventas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        const data = await res.json();
        setError(data.error || 'Ocurrió un error al procesar tu solicitud.');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-700">
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">¡Solicitud Recibida!</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Gracias por interesarte en nuestro plan <strong className="text-primary">Corporate</strong>. Un ejecutivo de cuentas dedicado revisará tus requisitos y se contactará contigo en las próximas 24 horas.
          </p>
          <div className="animate-pulse text-sm text-slate-500">Redirigiendo al inicio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 flex flex-col justify-center animate-fade-in relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 w-full max-w-5xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo - Copy Ventas */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 font-bold text-sm mb-2 shadow-sm">
            Soluciones Enterprise
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Escala tu Prevención de Fraude con la <span className="text-primary">Red Interbancaria</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Para instituciones financieras que procesan grandes volúmenes de transacciones físicas, ofrecemos implementaciones dedicadas, acceso API sin restricciones y licencias globales escalables.
          </p>
          
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Cajeros Ilimitados (Global)</h4>
                <p className="text-slate-400 text-sm">Despliega la plataforma en todas tus sucursales sin preocuparte por límites de asientos.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Integración Vía API Full</h4>
                <p className="text-slate-400 text-sm">Conecta tus propios sistemas internos directamente a nuestro motor base de datos numismático.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">InfoSec Plus (Nivel Bancario)</h4>
                <p className="text-slate-400 text-sm">Acceso a alertas de inteligencia militar sobre superdólares y lavado de primer nivel.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Lado Derecho - Formulario Lead */}
        <div className="bg-slate-800/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-2">Cuéntanos tus requerimientos</h3>
          <p className="text-slate-400 text-sm mb-8">Un especialista se comunicará para armar una propuesta a medida.</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="nombre">Nombre Completo *</label>
                <input
                  id="nombre" name="nombre" type="text" required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Tu nombre"
                  value={formData.nombre} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="empresa">Empresa / Banco *</label>
                <input
                  id="empresa" name="empresa" type="text" required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Ej. Banco Nación"
                  value={formData.empresa} onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">Email Corporativo *</label>
                <input
                  id="email" name="email" type="email" required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="nombre@banco.com"
                  value={formData.email} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="telefono">Teléfono <span className="text-slate-500 text-xs font-normal">(opcional)</span></label>
                <input
                  id="telefono" name="telefono" type="tel"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="+54 9 11..."
                  value={formData.telefono} onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="mensaje">¿Qué volumen operativo manejas? (Cajeros, sucursales) *</label>
              <textarea
                id="mensaje" name="mensaje" required rows={4}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none placeholder:text-slate-600"
                placeholder="Ej: Contamos con una red de 50 sucursales y la intención principal es consumir sus datos de billetes en tiempo real mediante API..."
                value={formData.mensaje} onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Procesando Envío...' : 'Solicitar Acceso Corporate'}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Tus datos están protegidos. No compartiremos esta información con terceros.
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
}
