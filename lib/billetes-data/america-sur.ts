import type { Billete } from '@/types/billetes';
import { billetesEuro } from '../billetes-comunes';

export const billetesAmericaSur: Record<string, Billete[]> = {
  "Argentina": [
    {
      denominacion: '10 Pesos', versiones: [
        { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10pesos_anterior_dorso.webp' },
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10pesos_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10pesos_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Pesos', versiones: [
        { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20pesos_anterior_dorso.webp' },
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20pesos_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20pesos_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Pesos', versiones: [
        { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_anterior_dorso.webp' },
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_malvinas_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_malvinas_dorso.webp' },
        { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_50pesos_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Pesos', versiones: [
        { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_anterior_dorso.webp' },
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_eva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_eva_frente.webp' },
        { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Pesos', versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_200pesos_actual_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_200pesos_actual_dorso.webp' }
      ]
    },
    {
      denominacion: '500 Pesos', versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_500pesos_actual_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_500pesos_actual_dorso.webp' }
      ]
    },
    {
      denominacion: '1000 Pesos', versiones: [
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_1000pesos_anterior_dorso.webp' },
        { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_1000pesos_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_1000pesos_nuevo_dorso.webp' }
      ]
    },
    {
      denominacion: '2000 Pesos', versiones: [
        { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_2000pesos_actual_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_2000pesos_actual_dorso.webp' }
      ]
    },
    {
      denominacion: '10000 Pesos', versiones: [
        { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10000pesos_actual_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_10000pesos_actual_dorso.webp' }
      ]
    },
    {
      denominacion: '20000 Pesos', versiones: [
        { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20000pesos_actual_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_20000pesos_actual_dorso.webp' }
      ]
    }
  ],
  "Bolivia": [
    {
      denominacion: '10 Bolivianos',
      versiones: [
        { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_10boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_1boliviano_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Bolivianos',
      versiones: [
        { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_20boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_20boliviano_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Bolivianos',
      versiones: [
        { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_50boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_50boliviano_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Bolivianos',
      versiones: [
        { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_100boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_100boliviano_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Bolivianos',
      versiones: [
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_200boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_200boliviano_anterior_dorso.webp' }
      ]
    }
  ],
  "Brasil": [
    {
      denominacion: '2 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_anterior_dorso.webp' },
        { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '5 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_anterior_dorso.webp' },
        { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '10 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_anterior_dorso.webp' },
        { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_anterior_dorso.webp' },
        { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_anterior_dorso.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Reales',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_anterior_dorso.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_nueva_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Reales',
      versiones: [
        { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_200reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_200reales_anterior_dorso.webp' }
      ]
    }
  ],
  "Chile": [
    {
      denominacion: '1000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_1000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '2000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_2000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '5000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_5000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_5000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '10000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_10000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_10000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '20000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_20000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_20000pesos_anterior_dorso.webp' }
      ]
    }
  ],
  "Islas Malvinas": [
    {
      denominacion: '5 Libras',
      versiones: [
        { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_5libras_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_5libras_dorso.webp' }
      ]
    },
    {
      denominacion: '10 Libras',
      versiones: [
        { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_10libras_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_10libras_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Libras',
      versiones: [
        { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_20libras_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_20libras_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Libras',
      versiones: [
        { anioEmision: '1990', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_50libras_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_50libras_dorso.webp' }
      ]
    }
  ],
  "Uruguay": [
    {
      denominacion: '20 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_anterior_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_medio_dorso.webp' },
        { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_polimero_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_polimero_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_anterior_dorso.webp' },
        { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_medio_dorso.webp' },
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimeroazul_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimeroazul_dorso.webp' },
        { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimero_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimero_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_anterior_dorso.webp' },
        { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio_dorso.webp' },
        { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio1_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio2_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio2_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_anterior_dorso.webp' },
        { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio_dorso.webp' },
        { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio1_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio2_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio2_dorso.webp' }
      ]
    },
    {
      denominacion: '500 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_anterior_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio1_dorso.webp' }
      ]
    },
    {
      denominacion: '1000 Pesos Uruguayos',
      versiones: [
        { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_anterior_dorso.webp' },
        { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio1_dorso.webp' }
      ]
    },
    {
      denominacion: '2000 Pesos Uruguayos',
      versiones: [
        { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_anterior_dorso.webp' },
        { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_medio_dorso.webp' }
      ]
    }
  ],
  "Paraguay": [
    {
      denominacion: '2000 Guaraníes',
      versiones: [
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_2000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_2000guaranies_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '5000 Guaraníes',
      versiones: [
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_5000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_5000guaranies_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '10000 Guaraníes',
      versiones: [
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_10000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_10000guaranies_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '20000 Guaraníes',
      versiones: [
        { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_20000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_20000guaranies_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '50000 Guaraníes',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_50000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_50000guaranies_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '100000 Guaraníes',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_100000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_100000guaranies_anterior_dorso.webp' }
      ]
    }
  ],
  "Colombia": [
    {
      denominacion: '2000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '5000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '10000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '20000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '50000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '100000 Pesos',
      versiones: [
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_100000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_100000pesos_anterior_dorso.webp' }
      ]
    }
  ],
  "Venezuela": [
    {
      denominacion: '5 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_5bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_5bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '10 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_10bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_10bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_20bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_20bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_50bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_50bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_100bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_100bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_200bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_200bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '500 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_500bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_500bolivares_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '1000000 Bolívares',
      versiones: [
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_1000000bolivares_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_1000000bolivares_dorso.webp' }
      ]
    }
  ],
  "Peru": [
    {
      denominacion: '10 Soles',
      versiones: [
        { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_anterior_dorso.webp' },
        { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_medio_dorso.webp' },
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_ultimo_dorso.webp' }
      ]
    },
    {
      denominacion: '20 Soles',
      versiones: [
        { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_anterior_dorso.webp' },
        { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_medio_dorso.webp' },
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_ultimo_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Soles',
      versiones: [
        { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_anterior_dorso.webp' },
        { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_medio_dorso.webp' },
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_ultimo_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Soles',
      versiones: [
        { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_anterior_dorso.webp' },
        { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_medio_dorso.webp' },
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_ultimo_dorso.webp' }
      ]
    },
    {
      denominacion: '200 Soles',
      versiones: [
        { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_anterior_dorso.webp' },
        { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_medio_dorso.webp' },
        { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_ultimo_dorso.webp' }
      ]
    }
  ],
  "Guyana": [
    {
      denominacion: '20 Dólares Guyaneses',
      versiones: [
        { anioEmision: '1965', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1965_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1965_dorso.webp' },
        { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1988_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1988_dorso.webp' },
        { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1996_dorso.webp' }
      ]
    },
    {
      denominacion: '50 Dólares Guyaneses',
      versiones: [
        { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2013_dorso.webp' },
        { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2016_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2016_dorso.webp' }
      ]
    },
    {
      denominacion: '100 Dólares Guyaneses',
      versiones: [
        { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1988_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1988_dorso.webp' },
        { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1998_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1998_dorso.webp' },
        { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2006_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2006_dorso.webp' },
        { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2012_dorso.webp' }
      ]
    },
    {
      denominacion: '500 Dólares Guyaneses',
      versiones: [
        { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1992_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1992_dorso.webp' },
        { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1996_dorso.webp' },
        { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2000_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2000_dorso.webp' },
        { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2011_dorso.webp' },
        { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2024_dorso.webp' }
      ]
    },
    {
      denominacion: '1000 Dólares Guyaneses',
      versiones: [
        { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_1996_dorso.webp' },
        { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_1999_dorso.webp' },
        { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2006_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2006_dorso.webp' },
        { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2011_dorso.webp' },
        { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2019_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2019_dorso.webp' },
        { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_1000dolar_2024_dorso.webp' }
      ]
    },
    {
      denominacion: '2000 Dólares Guyaneses',
      versiones: [
        { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_2000dolar_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_2000dolar_2022_dorso.webp' }
      ]
    }
  ],
  "Surinam": [
    {
      denominacion: '2 Dólares Surinameses',
      versiones: [
        { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_dorso_2004.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_dorso_2010.webp' }
      ]
    },
    {
      denominacion: '5 Dólares Surinameses',
      versiones: [
        { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_5dolar_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_5dolar_anterior_dorso.webp' }
      ]
    },
    {
      denominacion: '10 Dólares Surinameses',
      versiones: [
        { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_dorso_2004.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_dorso_2010.webp' }
      ]
    },
    {
      denominacion: '20 Dólares Surinameses',
      versiones: [
        { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_dorso_2004.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_dorso_2010.webp' }
      ]
    },
    {
      denominacion: '50 Dólares Surinameses',
      versiones: [
        { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso_2004.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso_2010.webp' },
        { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso_2012.webp' }
      ]
    },
    {
      denominacion: '100 Dólares Surinameses',
      versiones: [
        { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_dorso_2004.webp' },
        { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_dorso_2010.webp' }
      ]
    },
    {
      denominacion: '200 Dólares Surinameses',
      versiones: [
        { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_200dolar_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_200dolar_anterior_dorso.webp' }
      ]
    }
  ],
  "Guayana Francesa": billetesEuro
};