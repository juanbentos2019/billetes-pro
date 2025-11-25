// app/page.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';
import BilleteSelector from '@/components/BilleteSelector';
import InfoBoxMapa from '@/components/InfoBoxMapa'; // Importamos el InfoBox

const MapaMundial = dynamic(() => import('@/components/MapaMundialWrapper'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-slate-800 animate-pulse rounded-lg" />
});

// En app/page.tsx
export default function Home() {
  const [paisSeleccionado, setPaisSeleccionado] = useState<string>('');

  const handleScrollToBilletes = () => {
    document.getElementById('billetes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main> 
        {/* El componente Hero ya tiene min-h-screen, solo necesita la clase de anclaje */}
        <section className="scroll-snap-start">
          <Hero />
        </section>
        
        {/* Añadimos clases para altura, centrado y anclaje */}
        <section 
          id="mapa-section" 
          className="py-12 bg-slate-900 scroll-snap-start min-h-screen flex flex-col justify-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Selecciona un País en el Mapa
            </h2>
            <div className="relative">
              <MapaMundial 
                onPaisSeleccionado={setPaisSeleccionado}
                paisSeleccionado={paisSeleccionado} 
              />
              <InfoBoxMapa 
                pais={paisSeleccionado} 
                onScrollClick={handleScrollToBilletes} 
              />
            </div>
          </div>
        </section>

        {/* Añadimos clases para altura, centrado y anclaje */}
        <section 
          id="billetes-section" 
          className="py-12 bg-slate-800 scroll-snap-start flex flex-col justify-center"
        >
          <div className="container mx-auto px-4">
            <BilleteSelector 
              paisSeleccionado={paisSeleccionado}
              setPaisSeleccionado={setPaisSeleccionado}
            />
          </div>
        </section>
      </main>
  );
}