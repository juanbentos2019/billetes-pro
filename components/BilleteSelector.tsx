'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Combobox } from '@headlessui/react';
import type { Billete, FavoritoBillete } from '@/types/billetes';
import { nombresPaises, paisesEuro, paisesCFA, codigosPaises, codigosMoneda } from '@/lib/constants'; 
import FavoritosManager from './FavoritosManager';
import BilleteModal from './BilleteModal';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { useSession, signIn } from 'next-auth/react';

interface Props {
  paisSeleccionado: string;
  setPaisSeleccionado: (pais: string) => void;
}

export default function BilleteSelector({ paisSeleccionado, setPaisSeleccionado }: Props) {
  const { data: session } = useSession();
  const [billetes, setBilletes] = useState<Billete[]>([]);
  const [billeteSeleccionado, setBilleteSeleccionado] = useState<Billete | null>(null);
  const [versionSeleccionada, setVersionSeleccionada] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenesModal, setImagenesModal] = useState({ frente: '', dorso: '' });
  const [cargando, setCargando] = useState(false);
  const [favoritoPendiente, setFavoritoPendiente] = useState<FavoritoBillete | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const { convert, isLoading: isLoadingRates, error: ratesError } = useCurrencyConverter();
  
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const paises = Object.keys(nombresPaises).sort((a, b) => {
    const nombreA = nombresPaises[a] || a;
    const nombreB = nombresPaises[b] || b;
    return nombreA.localeCompare(nombreB, 'es');
  });

  const paisesFiltrados = terminoBusqueda === ''
    ? paises
    : paises.filter(pais => 
        nombresPaises[pais].toLowerCase().includes(terminoBusqueda.toLowerCase())
      );

  useEffect(() => {
    if (paisSeleccionado) {
      const cargarBilletesDesdeAPI = async (pais: string) => {
        setCargando(true);
        setBilleteSeleccionado(null);
        setBilletes([]);

        try {
          const response = await fetch(`/api/billetes/${pais}`);
          if (!response.ok) {
            throw new Error('La respuesta de la API no fue exitosa.');
          }
          const data = await response.json();
          setBilletes(data);
        } catch (error) {
          console.error("Error al cargar billetes desde la API:", error);
          setBilletes([]);
        } finally {
          setCargando(false);
        }
      };

      cargarBilletesDesdeAPI(paisSeleccionado);
    } else {
      setBilletes([]);
      setBilleteSeleccionado(null);
    }
  }, [paisSeleccionado]);

  useEffect(() => {
    if (favoritoPendiente && billetes.length > 0) {
      const billete = billetes.find(b => b.denominacion === favoritoPendiente.denominacion);
      if (billete) {
        setBilleteSeleccionado(billete);
        setVersionSeleccionada(favoritoPendiente.version);
        setAnimationKey(prevKey => prevKey + 1); 
      }
      setFavoritoPendiente(null);
    }
  }, [billetes, favoritoPendiente]);

  const seleccionarBillete = (billete: Billete) => {
    setBilleteSeleccionado(billete);
    setVersionSeleccionada(0);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersionSeleccionada(Number(e.target.value));
    setAnimationKey(prevKey => prevKey + 1);
  };

  const abrirModal = (frente: string, dorso: string) => {
    setImagenesModal({ frente, dorso });
    setModalAbierto(true);
  };
  
  const handleSelectFavorito = (favorito: FavoritoBillete) => {
    setFavoritoPendiente(favorito);
    setPaisSeleccionado(favorito.pais);
  };
  const parseDenominacion = (denominacion: string): number => {
    const match = denominacion.match(/^[0-9.,]+/);
    return match ? parseFloat(match[0].replace(/,/g, '')) : 0;
  };

  const renderValorConvertido = () => {
    if (!billeteSeleccionado || !paisSeleccionado) return null;

    if (isLoadingRates) {
      return <p><strong>Valor en USD:</strong> Calculando...</p>;
    }
    
    if (ratesError) {
      return <p><strong>Valor en USD:</strong> <span className="text-critical">No disponible</span></p>;
    }

    const valorNumerico = parseDenominacion(billeteSeleccionado.denominacion);
    const codigoMoneda = codigosMoneda[paisSeleccionado];
    
    if (!codigoMoneda) {
      return <p><strong>Valor en USD:</strong> <span className="text-gray-400">Info no disponible</span></p>;
    }

    const valorConvertido = convert(valorNumerico, codigoMoneda);

    if (valorConvertido === null) {
      return <p><strong>Valor en USD:</strong> <span className="text-gray-400">Tasa no encontrada</span></p>;
    }
    
    return (
      <div className="flex items-baseline gap-2 flex-wrap">
        <p><strong>Valor en USD (aprox):</strong> {valorConvertido}</p>
        <a 
          href="https://www.exchangerate-api.com"
          target="_blank" 
          rel="noopener noreferrer"
          title="Tasas de ExchangeRate-API"
          className="text-xs text-slate-500 hover:text-primary transition-colors"
        >
          Rates by ExchangeRate-API
        </a>
      </div>
    );
  };

  const billetesAMostrar = session ? billetes : billetes.slice(0, 1);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-3xl font-bold text-primary">Explora Billetes por País</h2>
        <FavoritosManager 
          paisActual={paisSeleccionado}
          billeteActual={billeteSeleccionado}
          versionActual={versionSeleccionada}
          onSelectFavorito={handleSelectFavorito}
        />
      </div>

      <div className="relative">
        <label htmlFor="buscador-pais" className="block text-lg font-semibold mb-2">
          Buscar y seleccionar un país:
        </label>
        <Combobox value={paisSeleccionado} onChange={setPaisSeleccionado}>
          <Combobox.Input
            id="buscador-pais"
            onChange={(event) => setTerminoBusqueda(event.target.value)}
            displayValue={(paisKey: string) => nombresPaises[paisKey] || ''}
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Escribe para buscar..."
          />
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {paisesFiltrados.length === 0 && terminoBusqueda !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-400">
                No se encontró el país.
              </div>
            ) : (
              paisesFiltrados.map((pais) => (
                <Combobox.Option
                  key={pais}
                  value={pais}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-slate-200'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {nombresPaises[pais]}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          ✓
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Combobox>
      </div>
      
      {paisSeleccionado && (
        <div className="animate-fade-in-scale">
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="flex items-center justify-center gap-4 mb-2">
              {codigosPaises[paisSeleccionado] && (
                <Image
                  src={`https://flagcdn.com/w40/${codigosPaises[paisSeleccionado].toLowerCase()}.png`}
                  alt={`Bandera de ${nombresPaises[paisSeleccionado] || paisSeleccionado}`}
                  width={40}
                  height={27}
                  className="rounded-sm shadow-md"
                />
              )}
              <h3 className="text-xl font-bold">{nombresPaises[paisSeleccionado] || paisSeleccionado}</h3>
            </div>
            <p className="text-gray-400 text-center text-sm">
              {paisesEuro.includes(paisSeleccionado) && 'Este país utiliza el Euro como moneda oficial.'}
              {paisesCFA.includes(paisSeleccionado) && 'Este país utiliza el Franco CFA como moneda oficial.'}
            </p>
          </div>

          <div className="mt-6">
            {cargando ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-24 bg-slate-700 animate-pulse rounded-lg" />
                ))}
              </div>
            ) : billetes.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Denominaciones disponibles:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {billetesAMostrar.map((billete, index) => (
                    <button
                        key={index}
                        onClick={() => seleccionarBillete(billete)}
                        className={`p-4 rounded-lg border-2 transform transition-all duration-300 ease-in-out hover:scale-105 ${
                          billeteSeleccionado?.denominacion === billete.denominacion
                            ? 'border-primary bg-primary/20'
                            : 'border-slate-600 bg-slate-700 hover:border-primary/50'
                        }`}
>
                        <div className="text-center">
                          <div className="text-lg font-bold">{billete.denominacion}</div>
                          <div className="text-sm text-gray-400">
                            {billete.versiones.length} versión{billete.versiones.length > 1 ? 'es' : ''}
                         </div>
                        </div>
                      </button>
                  ))}
                </div>
                {!session && billetes.length > 1 && (
                  <div className="mt-4 text-center p-4 bg-slate-700/50 rounded-lg">
                    <p className="mb-2">✨ Para ver todas las denominaciones, inicia sesión.</p>
                    <button
                      onClick={() => signIn('google')}
                      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors font-semibold"
                    >
                      Iniciar Sesión con Google
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">
                No se encontraron billetes para este país.
              </p>
            )}
          </div>

          {billeteSeleccionado && (
            <div 
              key={animationKey} 
              className="mt-6 p-6 bg-slate-800 rounded-lg border border-slate-700 space-y-6 animate-fade-in-scale"
            >
              {billeteSeleccionado.versiones.length > 1 && (
                <div className="space-y-2">
                  <label className="block font-semibold">Versión del billete:</label>
                  <select
                    value={versionSeleccionada}
                    onChange={handleVersionChange}
                    className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg"
                  >
                    {billeteSeleccionado.versiones.map((version, index) => (
                      <option key={index} value={index}>
                        Año {version.anioEmision}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Anverso</h4>
                  <div 
                    className="relative w-full aspect-[16/9] cursor-pointer group"
                    onClick={() => abrirModal(billeteSeleccionado.versiones[versionSeleccionada].imagenFrente, billeteSeleccionado.versiones[versionSeleccionada].imagenDorso)}
                  >
                    <Image
                      src={billeteSeleccionado.versiones[versionSeleccionada].imagenFrente}
                      alt={`${billeteSeleccionado.denominacion} - Anverso`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x337/ef4444/ffffff?text=Error+cargando+imagen'; }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click para ampliar</span>
                    </div>
                    {/* --- MARCA DE AGUA AÑADIDA --- */}
                    <span className="watermark-specimen">Specimen</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Reverso</h4>
                  <div 
                    className="relative w-full aspect-[16/9] cursor-pointer group"
                    onClick={() => abrirModal(billeteSeleccionado.versiones[versionSeleccionada].imagenFrente, billeteSeleccionado.versiones[versionSeleccionada].imagenDorso)}
                  >
                    <Image
                      src={billeteSeleccionado.versiones[versionSeleccionada].imagenDorso}
                      alt={`${billeteSeleccionado.denominacion} - Reverso`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x337/ef4444/ffffff?text=Error+cargando+imagen'; }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click para ampliar</span>
                    </div>
                    {/* --- MARCA DE AGUA AÑADIDA --- */}
                    <span className="watermark-specimen">Specimen</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4 space-y-2">
                <p><strong>Denominación:</strong> {billeteSeleccionado.denominacion}</p>
                <p><strong>Año de emisión:</strong> {billeteSeleccionado.versiones[versionSeleccionada].anioEmision}</p>
                {renderValorConvertido()}
              </div>
            </div>
          )}
        </div>
      )}

      <BilleteModal
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        imagenFrente={imagenesModal.frente}
        imagenDorso={imagenesModal.dorso}
      />
    </div>
  );
}