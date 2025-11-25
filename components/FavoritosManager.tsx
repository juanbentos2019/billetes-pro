'use client'; // Indica que es un Componente de Cliente, necesario para usar hooks como useState y useEffect.

import { useState, useEffect, useRef } from 'react';     // Importa los hooks de React para manejar estado, efectos secundarios y referencias.
import type { FavoritoBillete, Billete } from '@/types/billetes'; // Importa las definiciones de tipos para asegurar que los datos sean correctos.
import { nombresPaises } from '@/lib/constants';            // Importa el objeto para traducir claves de países a nombres legibles.

// Define la estructura de las propiedades (props) que el componente recibirá desde su padre (BilleteSelector).
interface Props {
  paisActual: string;                               // El código del país seleccionado actualmente.
  billeteActual: Billete | null;                    // El objeto del billete seleccionado (o null si no hay ninguno).
  versionActual: number;                            // El índice de la versión del billete seleccionado.
  onSelectFavorito: (favorito: FavoritoBillete) => void; // Función para notificar al padre cuando se selecciona un favorito de la lista.
}

export default function FavoritosManager({ paisActual, billeteActual, versionActual, onSelectFavorito }: Props) {
  // --- ESTADOS Y REFERENCIAS ---
  const [favoritos, setFavoritos] = useState<FavoritoBillete[]>([]);         // Estado para almacenar la lista de billetes favoritos. Inicialmente un array vacío.
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);        // Estado para controlar la visibilidad del modal de favoritos.
  const isInitialMount = useRef(true);                                    // Una referencia para evitar que se escriba en localStorage en la primera carga del componente.

  // --- EFECTOS SECUNDARIOS (useEffect) ---

  // Efecto para cargar los favoritos desde localStorage cuando el componente se monta por primera vez.
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem('billetesFavoritos'); // Intenta obtener los favoritos guardados en el navegador.
    if (favoritosGuardados) {                                           // Si existen datos guardados...
      try {
        const favoritosParsed = JSON.parse(favoritosGuardados);       // Convierte el string JSON a un objeto/array de JavaScript.
        setFavoritos(favoritosParsed);                                // Actualiza el estado 'favoritos' con los datos cargados.
      } catch (error) {
        console.error('Error al cargar favoritos:', error);           // Si hay un error en el parseo, lo muestra en consola.
      }
    }
  }, []); // El array de dependencias vacío `[]` asegura que este efecto se ejecute solo una vez.

  // Efecto para guardar los favoritos en localStorage cada vez que la lista 'favoritos' cambia.
  useEffect(() => {
    // Evita la escritura en la carga inicial para no sobreescribir datos innecesariamente.
    if (isInitialMount.current) {
      isInitialMount.current = false; // Marca que el montaje inicial ya pasó.
    } else {
      // Guarda la lista actual de favoritos en localStorage, convirtiéndola a un string JSON.
      localStorage.setItem('billetesFavoritos', JSON.stringify(favoritos));
    }
  }, [favoritos]); // Este efecto se ejecuta cada vez que el estado 'favoritos' es modificado.

  // --- FUNCIONES MANEJADORAS ---

  // Función que comprueba si el billete actualmente seleccionado ya está en la lista de favoritos.
  const esFavorito = () => {
    if (!paisActual || !billeteActual) return false; // Si no hay país o billete seleccionado, no puede ser favorito.
    
    // Busca en el array 'favoritos' si algún elemento cumple todas las condiciones.
    return favoritos.some(fav => 
      fav.pais === paisActual && 
      fav.denominacion === billeteActual.denominacion &&
      fav.version === versionActual
    );
  };

  // Función para agregar o quitar el billete actual de la lista de favoritos.
  const toggleFavorito = () => {
    if (!paisActual || !billeteActual) return; // No hace nada si no hay un billete seleccionado.

    if (esFavorito()) { // Si ya es favorito, lo elimina.
      // Filtra la lista, manteniendo solo los que NO coinciden con el billete actual.
      setFavoritos(favoritos.filter(fav => 
        !(fav.pais === paisActual && 
          fav.denominacion === billeteActual.denominacion &&
          fav.version === versionActual)
      ));
    } else { // Si no es favorito, lo agrega.
      // Crea un nuevo objeto de favorito con los datos actuales.
      const nuevoFavorito: FavoritoBillete = {
        pais: paisActual,
        denominacion: billeteActual.denominacion,
        version: versionActual,
        fechaAgregado: new Date().toISOString() // Guarda la fecha actual en formato ISO.
      };
      // Actualiza el estado, añadiendo el nuevo favorito a la lista existente.
      setFavoritos([...favoritos, nuevoFavorito]);
    }
  };

  // Función para eliminar un favorito específico desde la lista del modal.
  const eliminarFavorito = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // Detiene la propagación del evento de clic para no seleccionar el favorito que se está eliminando.
    // Filtra la lista de favoritos, eliminando el elemento en la posición 'index'.
    setFavoritos(favoritos.filter((_, i) => i !== index));
  };

  // Función que se ejecuta cuando un usuario selecciona un favorito del modal.
  const handleSelect = (favorito: FavoritoBillete) => {
    onSelectFavorito(favorito); // Llama a la función del componente padre para cambiar el billete seleccionado.
    setMostrarFavoritos(false); // Cierra el modal de favoritos.
  };

  // --- RENDERIZADO DEL COMPONENTE (JSX) ---
  return (
    <> {/* Fragmento de React para agrupar elementos sin añadir un div extra al DOM. */}
      {/* Contenedor de los botones de acción principales. */}
      <div className="flex gap-2">
        {/* Renderizado condicional: El botón de "Agregar a Favorito" solo aparece si hay un billete seleccionado. */}
        {billeteActual && (
          <button
            onClick={toggleFavorito} // Llama a la función para agregar/quitar de favoritos.
            // Clases condicionales: Cambia el color del botón si el billete es favorito.
            className={`px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              esFavorito()
                ? 'bg-red-500 hover:bg-red-600 text-white' // Estilo si es favorito.
                : 'bg-slate-700 hover:bg-slate-600 text-white' // Estilo si no es favorito.
            }`}
            title={esFavorito() ? 'Quitar de favoritos' : 'Agregar a favoritos'} // Tooltip dinámico.
          >
            <span className="flex items-center gap-2"> {/* Contenedor para el ícono y el texto. */}
              <svg 
                className="w-5 h-5" 
                fill={esFavorito() ? 'currentColor' : 'none'} // Rellena el corazón si es favorito.
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              {esFavorito() ? 'En Favoritos' : 'Favorito'} {/* Texto dinámico del botón. */}
            </span>
          </button>
        )}
        
        {/* Botón para abrir/cerrar el modal de la lista de favoritos. */}
        <button
          onClick={() => setMostrarFavoritos(!mostrarFavoritos)} // Alterna la visibilidad del modal.
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Ver Favoritos ({favoritos.length}) {/* Muestra el número actual de favoritos. */}
          </span>
        </button>
      </div>

      {/* Renderizado condicional del modal de favoritos. */}
      {mostrarFavoritos && (
        // Overlay oscuro de fondo.
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setMostrarFavoritos(false)}>
          {/* Contenido del modal. */}
          <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Cabecera del modal. */}
            <div className="p-6 border-b border-slate-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold">Mis Billetes Favoritos</h3>
              <button
                onClick={() => setMostrarFavoritos(false)} // Botón para cerrar el modal.
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Cuerpo del modal con la lista de favoritos. */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Renderizado condicional: muestra un mensaje si no hay favoritos. */}
              {favoritos.length === 0 ? (
                <p className="text-center text-gray-400 py-8">
                  No tienes billetes en favoritos todavía.
                </p>
              ) : (
                // Si hay favoritos, los mapea y renderiza uno por uno.
                <div className="space-y-3">
                  {favoritos.map((fav, index) => (
                    <div 
                      key={index}
                      onClick={() => handleSelect(fav)} // Al hacer clic, selecciona ese favorito.
                      className="w-full bg-slate-700 rounded-lg p-4 flex justify-between items-center hover:bg-slate-600 transition-colors text-left cursor-pointer"
                    >
                      <div>
                        <h4 className="font-semibold">{nombresPaises[fav.pais] || fav.pais}</h4>
                        <p className="text-sm text-gray-400">
                          {fav.denominacion} - Versión {fav.version + 1}
                        </p>
                        <p className="text-xs text-gray-500">
                          Agregado: {new Date(fav.fechaAgregado).toLocaleDateString('es-ES')} {/* Formatea la fecha. */}
                        </p>
                      </div>
                      <button
                        onClick={(e) => eliminarFavorito(e, index)} // Al hacer clic, elimina el favorito.
                        className="text-red-400 hover:text-red-300 transition-colors z-10 p-2 rounded-full hover:bg-red-500/10"
                        title="Eliminar de favoritos"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Pie del modal, se muestra solo si hay favoritos. */}
            {favoritos.length > 0 && (
              <div className="p-4 border-t border-slate-700 bg-slate-900">
                <p className="text-sm text-gray-400 text-center">
                  Total: {favoritos.length} billete{favoritos.length !== 1 ? 's' : ''} favorito{favoritos.length !== 1 ? 's' : ''}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}