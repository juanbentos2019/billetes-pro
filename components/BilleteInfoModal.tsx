'use client';

import { useState, useEffect } from 'react';
import { BilleteVersion } from '@/types/billetes';

interface BilleteInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    pais: string;
    denominacion: string;
    version: BilleteVersion;
    onSaved: (titulo: string, contenido: string, detalles: { imagen: string, texto: string }[]) => void;
}

export default function BilleteInfoModal({ isOpen, onClose, pais, denominacion, version, onSaved }: BilleteInfoModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [detalles, setDetalles] = useState<{ imagen: string, texto: string }[]>([{ imagen: '', texto: '' }]);

    useEffect(() => {
        if (isOpen) {
            setTitulo(version.infoSec?.titulo || '');
            setContenido(version.infoSec?.contenido || '');
            setDetalles(version.infoSec?.detalles?.length ? [...version.infoSec.detalles] : [{ imagen: '', texto: '' }]);
        }
    }, [isOpen, version]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const isUrlValid = (url: string) => {
        if (!url) return true;
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Filtrar detalles vacíos
        const detallesFiltrados = detalles.filter(d => d.imagen.trim() !== '' || d.texto.trim() !== '');

        try {
            const res = await fetch('/api/billetes/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pais,
                    denominacion,
                    anioEmision: version.anioEmision,
                    titulo,
                    contenido,
                    detalles: detallesFiltrados
                })
            });

            if (res.ok) {
                alert('Información de seguridad guardada con éxito.');
                onSaved(titulo, contenido, detallesFiltrados);
                onClose();
            } else {
                alert('Hubo un error al guardar la información.');
            }
        } catch (error) {
            console.error(error);
            alert('Error crítico de red.');
        } finally {
            setIsLoading(false);
        }
    };

    const addDetalle = () => {
        setDetalles([...detalles, { imagen: '', texto: '' }]);
    };

    const removeDetalle = (index: number) => {
        const newDetalles = [...detalles];
        newDetalles.splice(index, 1);
        if (newDetalles.length === 0) newDetalles.push({ imagen: '', texto: '' });
        setDetalles(newDetalles);
    };

    const handleDetalleChange = (index: number, field: 'imagen' | 'texto', value: string) => {
        const newDetalles = [...detalles];
        newDetalles[index][field] = value;
        setDetalles(newDetalles);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in transition-all"
            onClick={handleBackdropClick}
        >
            <div className="bg-slate-800 border border-slate-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-fade-in-scale">
                <div className="sticky top-0 bg-slate-800 border-b border-slate-700/50 p-6 flex justify-between items-center z-10 rounded-t-xl">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Info de Seguridad</h2>
                        <p className="text-sm text-primary">{denominacion} - Versión {version.anioEmision}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
                        title="Cerrar"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Título de la Sección</label>
                            <input
                                type="text"
                                required
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Ej: Elementos de Seguridad bajo Luz UV"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">
                                Introducción General (Opcional)
                                <span className="block text-xs text-slate-500 font-normal mt-0.5">Texto inicial para describir la seguridad en general antes de entrar a cada detalle.</span>
                            </label>
                            <textarea
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                                rows={4}
                                placeholder="Escribe aquí un resumen general..."
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-sans"
                            />
                        </div>

                        <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-medium text-slate-300">
                                    Bloques de Seguridad (Imágenes + Texto)
                                    <span className="block text-xs text-slate-500 font-normal">Agrega los detalles individuales aquí.</span>
                                </label>
                                <button type="button" onClick={addDetalle} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded text-white flex items-center gap-1 transition-colors">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    Añadir Bloque
                                </button>
                            </div>

                            {detalles.map((detalle, idx) => (
                                <div key={idx} className="bg-slate-800/80 rounded-lg border border-slate-700 p-4 relative group transition-colors">
                                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Bloque de Seguridad {idx + 1}</h4>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <div className="flex-grow">
                                                <input
                                                    type="url"
                                                    value={detalle.imagen}
                                                    onChange={(e) => handleDetalleChange(idx, 'imagen', e.target.value)}
                                                    placeholder="URL de la imagen (Ej: https://...)"
                                                    className={`w-full bg-slate-900 border ${detalle.imagen && !isUrlValid(detalle.imagen) ? 'border-red-500' : 'border-slate-600'} rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm`}
                                                />
                                                {detalle.imagen && !isUrlValid(detalle.imagen) && (
                                                    <p className="text-xs text-red-400 mt-1">URL inválida.</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <textarea
                                                value={detalle.texto}
                                                onChange={(e) => handleDetalleChange(idx, 'texto', e.target.value)}
                                                placeholder="Texto descriptivo para esta firma/elemento de seguridad..."
                                                rows={3}
                                                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeDetalle(idx)}
                                        className="absolute top-2 right-2 p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-700 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        title="Eliminar bloque"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky bottom-0 bg-slate-800 pt-4 pb-2 border-t border-slate-700/50 z-10 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 px-4 py-3 bg-primary hover:bg-white text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Guardando...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                                    Guardar Información
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
