// Tipos para el proyecto de billetes

export interface BilleteVersion {
  anioEmision: string;
  imagenFrente: string;
  imagenDorso: string;
  caracteristicas?: string[];
  seguridad?: string[];
}

export interface Billete {
  denominacion: string;
  versiones: BilleteVersion[];
  descripcion?: string;
  tamaño?: {
    ancho: number;
    alto: number;
  };
}

export interface PaisInfo {
  nombre: string;
  nombreOficial?: string;
  capital?: string;
  moneda: string;
  codigoISO?: string;
  bandera?: string;
  poblacion?: number;
  idiomas?: string[];
}

export interface FavoritoBillete {
  pais: string;
  denominacion: string;
  version: number;
  fechaAgregado: string;
}
