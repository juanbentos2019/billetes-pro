'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageZoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

export default function ImageZoomModal({ isOpen, onClose, imageUrl }: ImageZoomModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in transition-all"
            onClick={handleBackdropClick}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-800/50 hover:bg-slate-700/80 rounded-full transition-colors text-white z-10"
                title="Cerrar (Esc)"
            >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="relative w-full h-full max-w-[95vw] max-h-[90vh] flex items-center justify-center animate-fade-in-scale">
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="Zoom de Imagen de Seguridad"
                        fill
                        className="object-contain"
                        sizes="100vw"
                        quality={100}
                        unoptimized={imageUrl.startsWith('http')}
                    />
                )}
            </div>
        </div>
    );
}
