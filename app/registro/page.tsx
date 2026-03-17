'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    nombreContacto: '',
    email: '',
    password: '',
    telefono: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Error en el registro');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-700">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            🔔
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Solicitud Recibida</h2>
          <p className="text-slate-300 mb-3">
            Recibimos la solicitud de <span className="text-amber-400 font-bold">{formData.nombreEmpresa}</span>.
          </p>
          <p className="text-slate-400 text-sm mb-6">
            El equipo de Billetes del Mundo se pondrá en contacto a <span className="text-white font-medium">{formData.email}</span> para coordinar el pago y habilitar tu acceso.
          </p>
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 text-left text-sm text-slate-300 space-y-2 mb-6">
            <p className="font-semibold text-white">Próximos pasos:</p>
            <p>1. Nuestro equipo revisa tu solicitud</p>
            <p>2. Te contactamos para coordinar el pago</p>
            <p>3. Activamos tu acceso al panel</p>
          </div>
          <Link href="/" className="text-primary hover:underline text-sm">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 flex flex-col justify-center animate-fade-in relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-md relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Registrá tu Empresa</h1>
          <p className="text-slate-400">Completá el formulario y nuestro equipo se contactará para habilitar tu acceso.</p>
        </div>

        {/* Info banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6 flex gap-3 items-start">
          <span className="text-amber-400 text-lg mt-0.5">ℹ️</span>
          <div className="text-sm text-amber-300/80">
            <p className="font-semibold text-amber-400 mb-1">Proceso de activación manual</p>
            <p>Al enviar este formulario, tu solicitud llegará al equipo. Una vez confirmado el pago, activamos tu acceso en el día.</p>
          </div>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm text-center mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="nombreEmpresa">Nombre de la Empresa o Sucursal</label>
              <input
                id="nombreEmpresa"
                name="nombreEmpresa"
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Ej. Cambio Seguro S.A."
                value={formData.nombreEmpresa}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="nombreContacto">Tu Nombre Completo (Responsable)</label>
              <input
                id="nombreContacto"
                name="nombreContacto"
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Ej. Juan Pérez"
                value={formData.nombreContacto}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">Email Comercial</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="juan@empresa.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="telefono">Teléfono de Contacto <span className="text-slate-500">(Opcional)</span></label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="+598 99 000 000"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="password">Contraseña (Mín. 6 caracteres)</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-white text-slate-900 font-bold py-3.5 rounded-xl transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando solicitud...' : 'Enviar Solicitud de Acceso'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Al registrarte aceptas nuestros <Link href="#" className="text-primary hover:underline">Términos de Servicio</Link> y <Link href="#" className="text-primary hover:underline">Política de Privacidad</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
