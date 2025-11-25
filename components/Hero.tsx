'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generar partículas solo en el cliente para evitar problemas de hidratación
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 20}s`
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?finance,money')] opacity-20 bg-cover bg-center" />
      </div>
      
      {/* Efecto de partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-20" />
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Billetes Vigentes del Mundo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Explore la diversidad monetaria global con nuestra completa guía de billetes vigentes. 
          Ideal para coleccionistas, viajeros y entusiastas de las finanzas internacionales.
        </p>
        
        {/* Botones de acción */}
        {/* Botones de acción */}
<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
  <button 
    onClick={() => document.getElementById('mapa-section')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    Explorar Mapa
  </button>
  <button 
    onClick={() => document.getElementById('billetes-section')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-3 bg-transparent border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    Ver Catálogo
  </button>
</div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-delay-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400">195+</div>
            <div className="text-gray-400">Países</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">2000+</div>
            <div className="text-gray-400">Billetes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">130+</div>
            <div className="text-gray-400">Monedas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400">2025</div>
            <div className="text-gray-400">Actualizado</div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
