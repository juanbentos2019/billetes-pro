'use client';

import { useState, useEffect } from 'react'; // Importa hooks de React para manejar el estado y los efectos secundarios.
import Image from 'next/image';             // Importa el componente optimizado de imágenes de Next.js.

// Define la estructura de las propiedades (props) que el componente recibirá.
interface Props {
  isOpen: boolean;           // Un booleano que indica si el modal está abierto o cerrado.
  onClose: () => void;       // Una función para cerrar el modal, que se recibe del componente padre.
  imagenFrente: string;      // La URL de la imagen del anverso del billete.
  imagenDorso: string;       // La URL de la imagen del reverso del billete.
}

export default function BilleteModal({ isOpen, onClose, imagenFrente, imagenDorso }: Props) {
  // Define una variable de estado 'isFlipped' para saber si el billete está girado. Su valor inicial es 'false'.
  const [isFlipped, setIsFlipped] = useState(false);

  // Hook que ejecuta código cuando cambian las props 'isOpen' o 'onClose'.
  useEffect(() => {
    // Función interna para manejar el cierre del modal con la tecla 'Escape'.
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose(); // Si se presiona 'Escape', llama a la función onClose.
    };

    // Busca en el DOM el elemento del header para aplicarle estilos.
    const headerElement = document.querySelector('.header-padding') as HTMLElement | null;

    // Este bloque se ejecuta solo si el modal se está abriendo (isOpen es true).
    if (isOpen) {
      // Calcula el ancho de la barra de scroll del navegador.
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Aplica estilos al <body> para evitar el scroll del fondo.
      document.body.style.overflow = 'hidden';
      // Añade un padding a la derecha del body para compensar el espacio de la barra de scroll y evitar que la página "salte".
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Si el header existe, le aplica el mismo padding para que no se desplace.
      if (headerElement) {
        headerElement.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Añade un event listener para detectar la pulsación de teclas en todo el documento.
      document.addEventListener('keydown', handleEscape);
      // Resetea el estado del billete a 'no girado' cada vez que se abre el modal.
      setIsFlipped(false);
    }

    // Función de limpieza: se ejecuta cuando el modal se cierra o el componente se desmonta.
    return () => {
      // Elimina el event listener para no afectar a otras partes de la web.
      document.removeEventListener('keydown', handleEscape);
      // Restaura los estilos por defecto del <body> para permitir el scroll de nuevo.
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      // Restaura los estilos del header.
      if (headerElement) {
        headerElement.style.paddingRight = '0px';
      }
    };
  }, [isOpen, onClose]); // Este efecto se volverá a ejecutar solo si 'isOpen' o 'onClose' cambian.

  // Si el modal no está abierto, no renderiza nada (retorna null).
  if (!isOpen) return null;

  // Función para cambiar el estado de 'isFlipped' al valor opuesto.
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // JSX que se renderizará en la pantalla.
  return (
    // Contenedor principal del modal (overlay oscuro).
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" // Fijo, cubre toda la pantalla, fondo oscuro, centrado con Flexbox.
      onClick={onClose} // Cierra el modal si se hace clic en el fondo oscuro.
    >
      {/* Contenedor del contenido del modal. */}
      <div
        className="relative w-[95%] max-w-4xl lg:max-w-7xl h-auto flex flex-col items-center justify-center gap-4" // Ancho responsivo, centrado vertical, con Flexbox.
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal.
      >
        {/* Contenedor con perspectiva para el efecto 3D del giro. */}
        <div className="relative w-full aspect-[16/8] perspective-container cursor-pointer" onClick={handleFlip}>
          {/* Elemento que aplica la rotación 3D. */}
          <div className="flipper" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            {/* Cara frontal del billete. */}
            <div className="front-face">
              <Image
                src={imagenFrente}                     // Ruta de la imagen del anverso.
                alt="Billete ampliado - Anverso"     // Texto alternativo para accesibilidad.
                fill                                 // Rellena el contenedor padre.
                className="object-contain"           // Asegura que la imagen se vea completa sin deformarse.
                quality={100}                        // Máxima calidad de imagen.
                priority                             // Carga esta imagen con prioridad.
              />
              {/* --- MARCA DE AGUA AÑADIDA --- */}
              <span className="watermark-specimen">Specimen</span>
            </div>
            {/* Cara trasera del billete. */}
            <div className="back-face">
              <Image
                src={imagenDorso}                      // Ruta de la imagen del reverso.
                alt="Billete ampliado - Reverso"      // Texto alternativo.
                fill
                className="object-contain"
                quality={100}
                priority
              />
              {/* --- MARCA DE AGUA AÑADIDA --- */}
              <span className="watermark-specimen">Specimen</span>
            </div>
          </div>
        </div>
        {/* Botón para girar el billete. */}
        <button
          onClick={handleFlip}
          className="px-6 py-2 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg shadow-lg transition-all"
          aria-label="Girar billete" // Etiqueta para accesibilidad.
        >
          Girar Billete
        </button>
      </div>
      {/* Botón para cerrar el modal. */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 rounded-full p-2 transition-all hover:bg-black/70"
        aria-label="Cerrar modal"
      >
        {/* Ícono de 'X' para cerrar. */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}