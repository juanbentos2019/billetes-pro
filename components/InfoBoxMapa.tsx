'use client';

import { nombresPaises } from "@/lib/constants";

interface Props {
  pais: string | null;
  onScrollClick: () => void;
}

export default function InfoBoxMapa({ pais, onScrollClick }: Props) {
  if (!pais) {
    return null;
  }

  return (
    // ***** INICIO DE LA SOLUCIÓN *****
    // Se ha cambiado el método de centrado horizontal para móviles.
    <div className="absolute 
                   top-1/2 left-0 right-0 mx-auto -translate-y-1/2 w-4/5 max-w-xs 
                   sm:top-3 sm:right-3 sm:left-auto sm:w-52 sm:translate-x-0
                   bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl z-[1000] animate-fade-in-scale">
      {/* ***** FIN DE LA SOLUCIÓN ***** */}
      <h3 className="text-base font-bold text-white mb-2 truncate text-center" title={nombresPaises[pais] || pais}>
        {nombresPaises[pais] || pais}
      </h3>
      <button
        onClick={onScrollClick}
        className="w-full px-3 py-1.5 bg-primary hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-sm"
      >
        Ver Billetes
      </button>
    </div>
  );
}