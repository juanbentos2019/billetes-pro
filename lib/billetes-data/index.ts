import type { Billete } from '@/types/billetes';

// --- PASO 1: Importar los datos de billetes ya unificados por región ---
import { billetesEuropa } from './europa';
import { billetesEuropaEste } from './europa-este';
import { billetesAsia } from './asia';
import { billetesMedioOrienteAsia } from './medio-oriente-asia';
import { billetesAmericaSur } from './america-sur';
import { billetesAmericaNorteCentral } from './america-norte-central';
// NOTA: Cuando tengas el archivo de África refactorizado, solo tendrás que importarlo aquí.
 import { billetesAfrica } from './africa';

// --- PASO 2: Importar datos de monedas comunes y las listas de países que las usan ---
import { billetesEuro, billetesCFA } from '../billetes-comunes';
import { paisesEuro, paisesCFA } from '../constants';

// --- PASO 3: Definir localmente billetes para monedas compartidas ---
// (Estos también podrían moverse a 'billetes-comunes.ts' para mayor orden)

const billetesDolar: Billete[] = [
  { denominacion: '1 Dólar', versiones: [{ anioEmision: '1935', imagenFrente: '/billetes/usa/webp/usa_1dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_1dolar_anterior_dorso.webp' }] },
  { denominacion: '5 Dólares', versiones: [{ anioEmision: '1914', imagenFrente: '/billetes/usa/webp/usa_5dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_5dolar_anterior_dorso.webp' }, { anioEmision: '1990', imagenFrente: '/billetes/usa/webp/usa_5dolar_medio_frente.webp', imagenDorso: '/billetes/usa/webp/usa_5dolar_medio_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/usa/webp/usa_5dolar_nuevo_frente.webp', imagenDorso: '/billetes/usa/webp/usa_5dolar_nuevo_dorso.webp' }] },
  { denominacion: '10 Dólares', versiones: [{ anioEmision: '1914', imagenFrente: '/billetes/usa/webp/usa_10dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_10dolar_anterior_dorso.webp' }, { anioEmision: '1990', imagenFrente: '/billetes/usa/webp/usa_10dolar_medio_frente.webp', imagenDorso: '/billetes/usa/webp/usa_10dolar_medio_dorso.webp' }, { anioEmision: '2004', imagenFrente: '/billetes/usa/webp/usa_10dolar_nuevo_frente.webp', imagenDorso: '/billetes/usa/webp/usa_10dolar_nuevo_dorso.webp' }] },
  { denominacion: '20 Dólares', versiones: [{ anioEmision: '1935', imagenFrente: '/billetes/usa/webp/usa_20dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_20dolar_anterior_dorso.webp' }, { anioEmision: '1990', imagenFrente: '/billetes/usa/webp/usa_20dolar_medio_frente.webp', imagenDorso: '/billetes/usa/webp/usa_20dolar_medio_dorso.webp' }, { anioEmision: '2004', imagenFrente: '/billetes/usa/webp/usa_20dolar_nuevo_frente.webp', imagenDorso: '/billetes/usa/webp/usa_20dolar_nuevo_dorso.webp' }] },
  { denominacion: '50 Dólares', versiones: [{ anioEmision: '1935', imagenFrente: '/billetes/usa/webp/usa_50dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_50dolar_anterior_dorso.webp' }, { anioEmision: '1996', imagenFrente: '/billetes/usa/webp/usa_50dolar_medio_frente.webp', imagenDorso: '/billetes/usa/webp/usa_50dolar_medio_dorso.webp' }, { anioEmision: '2006', imagenFrente: '/billetes/usa/webp/usa_50dolar_nuevo_frente.webp', imagenDorso: '/billetes/usa/webp/usa_50dolar_nuevo_dorso.webp' }] },
  { denominacion: '100 Dólares', versiones: [{ anioEmision: '1935', imagenFrente: '/billetes/usa/webp/usa_100dolar_anterior_frente.webp', imagenDorso: '/billetes/usa/webp/usa_100dolar_anterior_dorso.webp' }, { anioEmision: '1996', imagenFrente: '/billetes/usa/webp/usa_100dolar_medio_frente.webp', imagenDorso: '/billetes/usa/webp/usa_100dolar_medio_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/usa/webp/usa_100dolar_nuevo_frente.webp', imagenDorso: '/billetes/usa/webp/usa_100dolar_nuevo_dorso.webp' }] }
];

const billetesLira: Billete[] = [
  { denominacion: '5 Liras', versiones: [{ anioEmision: '2009', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie5_dorso.webp' }, { anioEmision: '2022', imagenFrente: '/billetes/turquia/webp/turquia_5liras_serie6_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_5liras_serie6_dorso.webp' }] },
  { denominacion: '10 Liras', versiones: [{ anioEmision: '2009', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie5_dorso.webp' }, { anioEmision: '2022', imagenFrente: '/billetes/turquia/webp/turquia_10liras_serie6_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_10liras_serie6_dorso.webp' }] },
  { denominacion: '20 Liras', versiones: [{ anioEmision: '2009', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie5_dorso.webp' }, { anioEmision: '2022', imagenFrente: '/billetes/turquia/webp/turquia_20liras_serie6_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_20liras_serie6_dorso.webp' }] },
  { denominacion: '50 Liras', versiones: [{ anioEmision: '2009', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie5_dorso.webp' }, { anioEmision: '2024', imagenFrente: '/billetes/turquia/webp/turquia_50liras_serie6_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_50liras_serie6_dorso.webp' }] },
  { denominacion: '100 Liras', versiones: [{ anioEmision: '2009', imagenFrente: '/billetes/turquia/webp/turquia_100liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_100liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_100liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_100liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_100liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_100liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_100liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_100liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_100liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_100liras_serie5_dorso.webp' }] },
  { denominacion: '200 Liras', versiones: [{ anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie1_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie1_dorso.webp' }, { anioEmision: '2013', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie2_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie2_dorso.webp' }, { anioEmision: '2017', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie3_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie3_dorso.webp' }, { anioEmision: '2020', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie4_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie4_dorso.webp' }, { anioEmision: '2021', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie5_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie5_dorso.webp' }, { anioEmision: '2023', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie7_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie7_dorso.webp' }, { anioEmision: '2024', imagenFrente: '/billetes/turquia/webp/turquia_200liras_serie8_frente.webp', imagenDorso: '/billetes/turquia/webp/turquia_200liras_serie8_dorso.webp' }] }
];

const billetesCFAcentral: Billete[] = [
  { denominacion: '500 Francos CFA (África Central)', versiones: [{ anioEmision: '2020', imagenFrente: '/billetes/africacentral/webp/africacentral_500francoscfa_frente.webp', imagenDorso: '/billetes/africacentral/webp/africacentral_500francoscfa_dorso.webp' }] },
  { denominacion: '1000 Francos CFA (África Central)', versiones: [{ anioEmision: '2020', imagenFrente: '/billetes/africacentral/webp/africacentral_1000francoscfa_frente.webp', imagenDorso: '/billetes/africacentral/webp/africacentral_1000francoscfa_dorso.webp' }] },
  { denominacion: '2000 Francos CFA (África Central)', versiones: [{ anioEmision: '2020', imagenFrente: '/billetes/africacentral/webp/africacentral_2000francoscfa_frente.webp', imagenDorso: '/billetes/africacentral/webp/africacentral_2000francoscfa_dorso.webp' }] },
  { denominacion: '5000 Francos CFA (África Central)', versiones: [{ anioEmision: '2020', imagenFrente: '/billetes/africacentral/webp/africacentral_5000francoscfa_frente.webp', imagenDorso: '/billetes/africacentral/webp/africacentral_5000francoscfa_dorso.webp' }] },
  { denominacion: '10000 Francos CFA (África Central)', versiones: [{ anioEmision: '2020', imagenFrente: '/billetes/africacentral/webp/africacentral_10000francoscfa_frente.webp', imagenDorso: '/billetes/africacentral/webp/africacentral_10000francoscfa_dorso.webp' }] }
];


// --- PASO 4: Construir el objeto final de forma programática ---

// Países que usan monedas comunes
const paisesCFAcentral = ["Camerun", "Chad", "Gabon", "Guinea Ecuatorial", "Republica Centroafricana", "Republica del Congo"];
const paisesDolar = ["USA", "Ecuador", "Panama", "ElSalvador", "PuertoRico", "Zimbabwe", "TimorOriental"];
const paisesLiraTurca = ["Turquia", "Chipre del Norte"];

// Objeto base para las monedas comunes
const billetesPorMonedaComun: Record<string, Billete[]> = {};
paisesEuro.forEach(pais => { billetesPorMonedaComun[pais] = billetesEuro; });
paisesCFA.forEach(pais => { billetesPorMonedaComun[pais] = billetesCFA; });
paisesCFAcentral.forEach(pais => { billetesPorMonedaComun[pais] = billetesCFAcentral; });
paisesDolar.forEach(pais => { billetesPorMonedaComun[pais] = billetesDolar; });
paisesLiraTurca.forEach(pais => { billetesPorMonedaComun[pais] = billetesLira; });


// Combinar todos los datos, permitiendo que los datos específicos de un país sobreescriban los comunes
export const todosLosBilletes: Record<string, Billete[]> = {
  ...billetesPorMonedaComun,
  ...billetesAmericaSur,
  ...billetesAmericaNorteCentral,
  ...billetesEuropa,
  ...billetesEuropaEste,
  ...billetesAsia,
  ...billetesMedioOrienteAsia,
  ...billetesAfrica,
};