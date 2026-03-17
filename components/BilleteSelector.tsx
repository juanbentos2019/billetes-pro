'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Combobox } from '@headlessui/react';
import type { Billete, FavoritoBillete } from '@/types/billetes';
import { nombresPaises, paisesEuro, paisesCFA, codigosPaises, codigosMoneda } from '@/lib/constants';
import FavoritosManager from './FavoritosManager';
import BilleteModal from './BilleteModal';
import BilleteInfoModal from './BilleteInfoModal';
import ImageZoomModal from './ImageZoomModal';
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
  const [infoModalAbierto, setInfoModalAbierto] = useState(false);
  const [zoomModalAbierto, setZoomModalAbierto] = useState(false);
  const [imagenZoom, setImagenZoom] = useState('');
  const [imagenesModal, setImagenesModal] = useState({ frente: '', dorso: '' });
  const [cargando, setCargando] = useState(false);
  const [favoritoPendiente, setFavoritoPendiente] = useState<FavoritoBillete | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [errorFrente, setErrorFrente] = useState(false);
  const [errorDorso, setErrorDorso] = useState(false);

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
    setErrorFrente(false);
    setErrorDorso(false);
  };

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersionSeleccionada(Number(e.target.value));
    setAnimationKey(prevKey => prevKey + 1);
    setErrorFrente(false);
    setErrorDorso(false);
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
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary text-white' : 'text-slate-200'
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
                      className={`p-4 rounded-lg border-2 transform transition-all duration-300 ease-in-out hover:scale-105 ${billeteSeleccionado?.denominacion === billete.denominacion
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
                  <div className="mt-4 text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <p className="mb-2 font-medium">🔒 Para ver todas las denominaciones, inicia sesión con tu usuario de la empresa.</p>
                    <button
                      onClick={() => signIn()}
                      className="py-2 px-6 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors font-semibold"
                    >
                      Iniciar Sesión Segura
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
                  <div className="flex justify-between items-center">
                    <label className="block font-semibold">Versión del billete:</label>
                    {session?.user?.role === 'SUPER_MASTER' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setInfoModalAbierto(true)}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors bg-indigo-900/50 border-indigo-500 text-indigo-200 hover:bg-indigo-800"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          Info Seguridad
                        </button>
                        <button
                          onClick={async () => {
                            const version = billeteSeleccionado.versiones[versionSeleccionada];
                            setCargando(true);
                            try {
                              const res = await fetch('/api/billetes/toggle-visibility', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  pais: paisSeleccionado,
                                  denominacion: billeteSeleccionado.denominacion,
                                  anioEmision: version.anioEmision
                                })
                              });
                              if (res.ok) {
                                const { isHidden } = await res.json();
                                // Actualizar el estado local para reflejar el cambio al instante
                                const nuevosBilletes = billetes.map(b => {
                                  if (b.denominacion === billeteSeleccionado.denominacion) {
                                    const nuevasVersiones = [...b.versiones];
                                    nuevasVersiones[versionSeleccionada] = {
                                      ...nuevasVersiones[versionSeleccionada],
                                      isHidden: isHidden
                                    };
                                    return { ...b, versiones: nuevasVersiones };
                                  }
                                  return b;
                                });
                                setBilletes(nuevosBilletes);

                                // Reflejar en el seleccionado actual también
                                const nuevasVersionesSel = [...billeteSeleccionado.versiones];
                                nuevasVersionesSel[versionSeleccionada].isHidden = isHidden;
                                setBilleteSeleccionado({ ...billeteSeleccionado, versiones: nuevasVersionesSel });

                                alert(isHidden ? 'Billete ocultado para cajeros' : 'Billete visible para todos');
                              }
                            } catch (e) {
                              console.error(e);
                              alert("Hubo un error al cambiar la visibilidad");
                            } finally {
                              setCargando(false);
                            }
                          }}
                          className={`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors ${billeteSeleccionado.versiones[versionSeleccionada].isHidden
                            ? 'bg-amber-900/50 border-amber-500 text-amber-200 hover:bg-amber-800'
                            : 'bg-slate-700 border-slate-500 text-slate-300 hover:bg-slate-600'
                            }`}
                        >
                          {billeteSeleccionado.versiones[versionSeleccionada].isHidden ? (
                            <>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                              Oculto (Mostrar)
                            </>
                          ) : (
                            <>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                              Visible (Ocultar)
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                  <select
                    value={versionSeleccionada}
                    onChange={handleVersionChange}
                    className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg"
                  >
                    {billeteSeleccionado.versiones.map((version, index) => (
                      <option key={index} value={index}>
                        Año {version.anioEmision} {version.isHidden ? '(Oculto)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Si solo tiene 1 versión, mostrar el botón aquí directamente si es SUPER_MASTER */}
              {billeteSeleccionado.versiones.length === 1 && session?.user?.role === 'SUPER_MASTER' && (
                <div className="flex justify-end gap-2 mt-[-10px] mb-2">
                  <button
                    onClick={() => setInfoModalAbierto(true)}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors bg-indigo-900/50 border-indigo-500 text-indigo-200 hover:bg-indigo-800"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Info Seguridad
                  </button>
                  <button
                    onClick={async () => {
                      const version = billeteSeleccionado.versiones[0];
                      setCargando(true);
                      try {
                        const res = await fetch('/api/billetes/toggle-visibility', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            pais: paisSeleccionado,
                            denominacion: billeteSeleccionado.denominacion,
                            anioEmision: version.anioEmision
                          })
                        });
                        if (res.ok) {
                          const { isHidden } = await res.json();
                          const nuevosBilletes = billetes.map(b => {
                            if (b.denominacion === billeteSeleccionado.denominacion) {
                              const nuevasVersiones = [...b.versiones];
                              nuevasVersiones[0] = { ...nuevasVersiones[0], isHidden };
                              return { ...b, versiones: nuevasVersiones };
                            }
                            return b;
                          });
                          setBilletes(nuevosBilletes);
                          const nuevasVersionesSel = [...billeteSeleccionado.versiones];
                          nuevasVersionesSel[0].isHidden = isHidden;
                          setBilleteSeleccionado({ ...billeteSeleccionado, versiones: nuevasVersionesSel });
                        }
                      } catch (e) {
                        console.error(e);
                      } finally {
                        setCargando(false);
                      }
                    }}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors ${billeteSeleccionado.versiones[0].isHidden
                      ? 'bg-amber-900/50 border-amber-500 text-amber-200 hover:bg-amber-800'
                      : 'bg-slate-700 border-slate-500 text-slate-300 hover:bg-slate-600'
                      }`}
                  >
                    {billeteSeleccionado.versiones[0].isHidden ? 'Oculto (Mostrar Cajeros)' : 'Visible (Ocultar Cajeros)'}
                  </button>
                </div>
              )}

              <div className={`grid md:grid-cols-2 gap-6 ${billeteSeleccionado.versiones[versionSeleccionada].isHidden ? 'opacity-50 grayscale-[50%]' : ''}`}>
                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Anverso</h4>
                  <div
                    className="relative w-full aspect-[16/9] cursor-pointer group"
                    onClick={() => abrirModal(billeteSeleccionado.versiones[versionSeleccionada].imagenFrente, billeteSeleccionado.versiones[versionSeleccionada].imagenDorso)}
                  >
                    <Image
                      src={errorFrente ? 'https://placehold.co/600x337/ef4444/ffffff?text=Error+cargando+imagen' : billeteSeleccionado.versiones[versionSeleccionada].imagenFrente}
                      alt={`${billeteSeleccionado.denominacion} - Anverso`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={() => setErrorFrente(true)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click para ampliar</span>
                    </div>
                    {/* --- MARCA DE AGUA AÑADIDA --- */}
                    <span className="watermark-specimen">Specimen</span>

                    {billeteSeleccionado.versiones[versionSeleccionada].isHidden && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="bg-red-900 text-white font-bold px-4 py-2 rounded border border-red-500 rotate-[-15deg] shadow-xl text-lg opacity-90">
                          OCULTO PARA CAJEROS
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-center">Reverso</h4>
                  <div
                    className="relative w-full aspect-[16/9] cursor-pointer group"
                    onClick={() => abrirModal(billeteSeleccionado.versiones[versionSeleccionada].imagenFrente, billeteSeleccionado.versiones[versionSeleccionada].imagenDorso)}
                  >
                    <Image
                      src={errorDorso ? 'https://placehold.co/600x337/ef4444/ffffff?text=Error+cargando+imagen' : billeteSeleccionado.versiones[versionSeleccionada].imagenDorso}
                      alt={`${billeteSeleccionado.denominacion} - Reverso`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={() => setErrorDorso(true)}
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
                <p className="flex items-center gap-2">
                  <strong>Denominación:</strong> {billeteSeleccionado.denominacion}
                  {billeteSeleccionado.versiones[versionSeleccionada].isHidden && (
                    <span className="bg-red-900/50 text-red-200 text-xs px-2 py-0.5 rounded border border-red-700">Oculto</span>
                  )}
                </p>
                <p><strong>Año de emisión:</strong> {billeteSeleccionado.versiones[versionSeleccionada].anioEmision}</p>
                {renderValorConvertido()}
              </div>

              {/* BLOQUE PÚBLICO DE INFORMACIÓN DE SEGURIDAD */}
              {billeteSeleccionado.versiones[versionSeleccionada].infoSec && (
                <div className="mt-8 pt-6 border-t-2 border-slate-600/50 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                      {billeteSeleccionado.versiones[versionSeleccionada].infoSec.titulo}
                    </h3>
                  </div>

                  <div className="prose prose-invert max-w-none mb-6 text-slate-300 leading-relaxed font-sans whitespace-pre-line text-sm md:text-base border-l-4 border-primary/50 pl-4 bg-slate-900/30 py-3 pr-3 rounded-r-lg">
                    {billeteSeleccionado.versiones[versionSeleccionada].infoSec.contenido}
                  </div>

                  {billeteSeleccionado.versiones[versionSeleccionada].infoSec.detalles && billeteSeleccionado.versiones[versionSeleccionada].infoSec.detalles.length > 0 && (
                    <div className="mt-10 mb-4 animate-fade-in">
                      <div className="flex items-center gap-3 border-b border-slate-700/60 pb-4 mb-6">
                        <div className="bg-primary/20 p-2.5 rounded-xl shadow-inner border border-primary/20">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-wide">
                          Guía de Verificación Detallada
                        </h4>
                      </div>

                      <div className="space-y-6">
                        {billeteSeleccionado.versiones[versionSeleccionada].infoSec.detalles.map((detalle: { imagen: string, texto: string }, idx: number) => (
                          <div key={idx} className="group flex flex-col md:flex-row gap-5 md:gap-8 bg-gradient-to-br from-slate-900/90 to-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/5 relative overflow-hidden">
                            {/* Efecto hover suave */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            {detalle.imagen && (
                              <div
                                className="relative w-full md:w-5/12 aspect-[4/3] md:aspect-video flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-700/50 shadow-md group/img z-10 bg-slate-950"
                                onClick={() => {
                                  setImagenZoom(detalle.imagen);
                                  setZoomModalAbierto(true);
                                }}
                              >
                                <Image
                                  src={detalle.imagen}
                                  alt={`Detalle de seguridad ${idx + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 40vw"
                                  className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                  <span className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 bg-primary/90 rounded-full shadow-lg transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    Ampliar detalle
                                  </span>
                                </div>
                              </div>
                            )}

                            {detalle.texto && (
                              <div className="flex-grow flex flex-col justify-center py-2 z-10 relative">
                                <div className="hidden md:flex absolute -left-[2.1rem] top-1/2 -translate-y-1/2 w-1 h-3/4 bg-slate-700/30 rounded-full"></div>

                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-600 text-slate-400 font-bold text-xs mb-3 shadow-inner">
                                  {idx + 1}
                                </div>
                                <p className="text-slate-300 text-[15px] md:text-base leading-relaxed whitespace-pre-line font-light">
                                  {detalle.texto}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {billeteSeleccionado && paisSeleccionado && (
        <BilleteInfoModal
          isOpen={infoModalAbierto}
          onClose={() => setInfoModalAbierto(false)}
          pais={paisSeleccionado}
          denominacion={billeteSeleccionado.denominacion}
          version={billeteSeleccionado.versiones[versionSeleccionada]}
          onSaved={(titulo, contenido, detalles) => {
            const nuevosBilletes = billetes.map(b => {
              if (b.denominacion === billeteSeleccionado.denominacion) {
                const nuevasVersiones = [...b.versiones];
                nuevasVersiones[versionSeleccionada] = {
                  ...nuevasVersiones[versionSeleccionada],
                  infoSec: { titulo, contenido, detalles }
                };
                return { ...b, versiones: nuevasVersiones };
              }
              return b;
            });
            setBilletes(nuevosBilletes);

            const nuevasVersionesSel = [...billeteSeleccionado.versiones];
            nuevasVersionesSel[versionSeleccionada].infoSec = { titulo, contenido, detalles };
            setBilleteSeleccionado({ ...billeteSeleccionado, versiones: nuevasVersionesSel });
          }}
        />
      )}

      <BilleteModal
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        imagenFrente={imagenesModal.frente}
        imagenDorso={imagenesModal.dorso}
      />

      <ImageZoomModal
        isOpen={zoomModalAbierto}
        onClose={() => setZoomModalAbierto(false)}
        imageUrl={imagenZoom}
      />
    </div>
  );
}