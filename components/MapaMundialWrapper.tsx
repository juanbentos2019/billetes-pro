'use client'; // Directiva de Next.js que indica que este es un Componente de Cliente (necesita interactividad en el navegador).

import dynamic from 'next/dynamic'; // Importa la función 'dynamic' de Next.js para cargar componentes de forma dinámica.

// Carga el componente 'MapaMundialClient' de forma dinámica y solo en el lado del cliente.
const MapaMundialClient = dynamic(() => import('./MapaMundialClient'), {
  ssr: false, // Desactiva el renderizado del lado del servidor (SSR) para este componente, ya que Leaflet necesita el objeto 'window' del navegador.
  
  // Define un componente de carga que se mostrará mientras el componente del mapa se está cargando.
  loading: () => ( // Define el componente JSX que se mostrará mientras el mapa carga.
  <div 
    className="
      h-[600px]               // Fija la altura a 600px para que coincida con el mapa y evitar saltos de layout.
      w-full                   // Ocupa el 100% del ancho del contenedor.
      rounded-lg shadow-lg     // Aplica esquinas redondeadas y una sombra para un efecto de tarjeta.
      bg-slate-200             // Establece un color de fondo gris oscuro.
      animate-pulse            // Añade una animación de pulso suave para indicar que algo está cargando.
      flex items-center        // Usa Flexbox para centrar el contenido verticalmente.
      justify-center           // Usa Flexbox para centrar el contenido horizontalmente.
    "
  >
    {/* Párrafo con el texto que se mostrará al usuario. */}
    <p className="text-slate-400"> {/* Aplica un color de texto gris claro. */}
      Cargando mapa...
    </p>
  </div>
)

});

// Define la estructura de las propiedades (props) que el componente recibirá.
interface Props {
  onPaisSeleccionado: (pais: string) => void; // Una función que se ejecutará cuando un país sea seleccionado en el mapa.
  paisSeleccionado: string;                   // El nombre del país que está actualmente seleccionado.
}

// Exporta el componente "Wrapper" o "Contenedor" para que pueda ser usado en otras partes de la aplicación (como en page.tsx).
export default function MapaMundialWrapper({ onPaisSeleccionado, paisSeleccionado }: Props) {
  // El componente simplemente renderiza el 'MapaMundialClient' (cargado dinámicamente) y le pasa las propiedades que recibió.
  return <MapaMundialClient onPaisSeleccionado={onPaisSeleccionado} paisSeleccionado={paisSeleccionado} />;
}