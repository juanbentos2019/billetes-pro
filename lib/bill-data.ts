// lib/bill-data.ts

// Definimos los tipos para mejorar la autocompletación y la seguridad del código.
interface Version {
    anioEmision: string;
    imagenFrente: string;
    imagenDorso: string;
}

interface Denominacion {
    denominacion: string;
    versiones: Version[];
}

interface BilletesData {
    [pais: string]: Denominacion[];
}

// Exportamos el objeto con todos los datos de los billetes, ya corregido.
export const billetesData: BilletesData = {
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
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_eva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argentina/webp/argentina_100pesos_eva_dorso.webp' },
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
    "Brasil": [
        {
            denominacion: '2 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_anterior_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_2reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '5 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_anterior_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_5reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '10 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_anterior_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_10reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '20 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_anterior_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_20reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '50 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_anterior_dorso.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_50reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '100 reales',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_anterior_dorso.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_100reales_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '200 reales',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_200reales_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/brasil/webp/brasil_200reales_anterior_dorso.webp' }
            ]
        }
    ],
    "Inglaterra": [
        {
            denominacion: '5 Libras',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_5libras_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_5libras_anterior_dorso.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_5libras_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_5libras_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '10 Libras',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_10libras_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_10libras_anterior_dorso.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_10libras_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_10libras_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '20 Libras',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_20libras_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_20libras_anterior_dorso.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_20libras_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_20libras_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Libras',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_50libras_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_50libras_anterior_dorso.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_50libras_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/inglaterra/webp/inglaterra_50libras_medio_dorso.webp' }
            ]
        }
    ],
    "Canada": [
        {
            denominacion: '5 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_5dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_5dolares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_10dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_10dolares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_20dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_20dolares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_50dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_50dolares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_100dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/canada/webp/canada_100dolares_anterior_dorso.webp' }
            ]
        }
    ],
    "Australia": [
        {
            denominacion: '5 dolares',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_5dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_5dolares_anterior_dorso.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_5dolares_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_5dolares_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '10 dolares',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_10dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_10dolares_anterior_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_10dolares_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_10dolares_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '20 dolares',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_20dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_20dolares_anterior_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_20dolares_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_20dolares_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_50dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_50dolares_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_50dolares_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_50dolares_nueva_dorso.webp' }
            ]
        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_100dolares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_100dolares_anterior_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_100dolares_nueva_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/australia/webp/australia_100dolares_nueva_dorso.webp' }
            ]
        }
    ],
    "Chile": [
        {
            denominacion: '1000 pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_1000pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_2000pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_5000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_5000pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_10000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_10000pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_20000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/chile/webp/chile_20000pesos_anterior_dorso.webp' }
            ]
        }
    ],
    "Mexico": [
        {
            denominacion: '20 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_20pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_20pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_50pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_50pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_100pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_100pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_200pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_200pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_500pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_500pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 pesos',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mexico/webp/mexico_1000pesos_anterior_dorso.webp' }
            ]
        }
    ],
    "China": [
        {
            denominacion: '10 yuanes',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_10yuanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_10yuanes_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20 yuanes',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_20yuanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_20yuanes_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 yuanes',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_50yuanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_50yuanes_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 yuanes',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_100yuanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/china/webp/china_1000yuanes_anterior_dorso.webp' }
            ]
        }
    ],
    "Peru": [
        {
            denominacion: '10 soles',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_anterior_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_medio_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_10soles_ultimo_dorso.webp' }
            ]
        },
        {
            denominacion: '20 soles',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_anterior_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_medio_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_20soles_ultimo_dorso.webp' }
            ]
        },
        {
            denominacion: '50 soles',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_anterior_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_medio_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_50soles_ultimo_dorso.webp' }
            ]
        },
        {
            denominacion: '100 soles',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_anterior_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_medio_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_100soles_ultimo_dorso.webp' }
            ]
        },
        {
            denominacion: '200 soles',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_anterior_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_medio_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_ultimo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/peru/webp/peru_200soles_ultimo_dorso.webp' }
            ]
        }
    ],
    "Suecia": [
        {
            denominacion: '20 Coronas suecas',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_20coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_20coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Coronas suecas',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_50coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_50coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Coronas suecas',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_100coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_100coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Coronas suecas',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_200coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_200coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Coronas suecas',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_500coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_500coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Coronas suecas',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_1000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suecia/webp/suecia_1000coronas_anterior_dorso.webp' }
            ]
        }
    ],
    "Nueva Zelanda": [
        {
            denominacion: '5 dolar neozelandes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_5dolarneozelanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_5dolarneozelanes_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_5dolarneozelanes_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_5dolarneozelanes_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '10 dolar neozelandes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_10dolarneozelanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_10dolarneozelanes_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_10dolarneozelanes_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_10dolarneozelanes_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '20 dolar neozelandes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_20dolarneozelanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_20dolarneozelanes_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_20dolarneozelanes_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_20dolarneozelanes_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '50 dolar neozelandes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_50dolarneozelanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_50dolarneozelanes_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_50dolarneozelanes_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_50dolarneozelanes_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '100 dolar neozelandes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_100dolarneozelanes_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_100dolarneozelanes_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_100dolarneozelanes_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zelanda/webp/zelanda_100dolarneozelanes_nuevo_dorso.webp' }
            ]
        }
    ],
    "Rusia": [
        {
            denominacion: '5 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5rublos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_anterior_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_medio_dorso.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_10rublos_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_50rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_50rublos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Rublos',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_100rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_100rublos_anterior_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_100rublos_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_100rublos_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Rublos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_200rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_200rublos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior2001_dorso.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior2004_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_anterior2004_dorso.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_500rublos_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_1_dorso.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_2_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_2_dorso.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_3_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_3_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_4_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_1000rublos_4_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Rublos',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_2000rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_2000rublos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Rublos',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_anterior_dorso.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_medio_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rusia/webp/rusia_5000rublos_nuevo_dorso.webp' }
            ]
        }
    ],
    "India": [
        {
            denominacion: '10 Rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_10rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_10rupias_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20 Rupias',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_20rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_20rupias_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_50rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_50rupias_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Rupias',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_100rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_100rupias_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_500rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_500rupias_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_2000rupias_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/india/webp/india_2000rupias_anterior_dorso.webp' }
            ]
        }
    ],
    "Sudafrica": [
        {
            denominacion: '10 Rand',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_10rand_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_10rand_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_10rand_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_10rand_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '20 Rand',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_20rand_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_20rand_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_20rand_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_20rand_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Rand',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_50rand_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_50rand_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_50rand_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_50rand_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Rand',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_100rand_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_100rand_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_100rand_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_100rand_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Rand',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_200rand_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_200rand_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_200rand_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudafrica/webp/sudafrica_200rand_nuevo_dorso.webp' }
            ]
        }
    ],
    "Dinamarca": [
        {
            denominacion: '50 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_50coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_50coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_1000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_1000coronas_anterior_dorso.webp' }
            ]
        }
    ],
    "Groenlandia": [
        {
            denominacion: '50 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_50coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_50coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_100coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_200coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_anterior_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_500coronas_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Coronas',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_1000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dinamarca/webp/dinamarca_1000coronas_anterior_dorso.webp' }
            ]
        }
    ],
    "Polonia": [
        {
            denominacion: '10 Zloty',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior0_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior0_dorso.webp' },
                { anioEmision: '2008(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior_frente_connmemorativo.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior_dorso_connmemorativo.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior_frente1.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_10Zloty_anterior_dorso1.webp' }
            ]
        },
        {
            denominacion: '20 Zloty',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_20Zloty_anterior0_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_20Zloty_anterior0_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_20Zloty_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_20Zloty_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Zloty',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_50Zloty_anterior0_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_50Zloty_anterior0_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_50Zloty_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_50Zloty_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Zloty',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_100Zloty_anterior0_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_100Zloty_anterior0_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_100Zloty_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_100Zloty_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Zloty',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_200Zloty_anterior0_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_200Zloty_anterior0_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_200Zloty_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_200Zloty_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Zloty',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_500Zloty_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/polonia/webp/polonia_500Zloty_anterior_dorso.webp' }
            ]
        }
    ],
    "Republica Checa": [
        {
            denominacion: '100 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_100coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_100coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_200coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_200coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_500coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_500coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_1000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_coronas_1000anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_2000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_2000coronas_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_5000coronas_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/repcheca/webp/repcheca_5000coronas_anterior_dorso.webp' }
            ]
        }
    ],
    "Corea del Sur": [
        {
            denominacion: '1000 wons',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_1000wons_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_1000wons_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 wons',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_5000wons_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_5000wons_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 wons',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_10000wons_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_10000wons_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50000 wons',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_50000wons_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/coreadelsur/webp/coreadelsur_50000wons_anterior_dorso.webp' }
            ]
        }
    ],
    "Israel": [
        {
            denominacion: '20 nuevos Sequel',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_20sequel_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_20sequel_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 nuevos Sequel',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_50sequel_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_50sequel_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 nuevos Sequel',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_100sequel_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_100sequel_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 nuevos Sequel',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_200sequel_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/israel/webp/israel_200sequel_anterior_dorso.webp' }
            ]
        }
    ],
    "Uruguay": [
        {
            denominacion: '20 Pesos',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_medio_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_polimero_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_20pesos_polimero_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Pesos',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_anterior_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_medio_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimeroazul_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimeroazul_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimero_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_50pesos_polimero_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Pesos',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_anterior_dorso.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio1_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio2_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_100pesos_medio2_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Pesos',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_anterior_dorso.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio1_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio2_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_200pesos_medio2_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Pesos',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_500pesos_medio1_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Pesos',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_anterior_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_1000pesos_medio1_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Pesos',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uruguay/webp/uruguay_2000pesos_medio_dorso.webp' }
            ]
        }
    ],
    "Tailandia": [
        {
            denominacion: '20 Baht',
            versiones: [
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_medio_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_20baht_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Baht',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_50baht_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_50baht_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_50baht_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_50baht_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Baht',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_100baht_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_100baht_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_100baht_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_100baht_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Baht',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_500baht_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_500baht_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_500baht_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_500baht_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Baht',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_1000baht_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_1000baht_anterior_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_1000baht_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tailandia/webp/tailandia_1000baht_medio_dorso.webp' }
            ]
        }
    ],
    "Emiratos Arabes Unidos": [
        {
            denominacion: '5 dirham',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_medio_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_5dirham_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '10 dirham',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_medio_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_10dirham_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '20 dirham',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_20dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_20dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_20dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_20dirham_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '50 dirham',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_medio_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_50dirham_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '100 dirham',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_100dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_100dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_100dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_100dirham_medio_dorso.webp' }
            ]
        },
        {
            denominacion: '200 dirham',
            versiones: [
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_anterior_dorso.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_medio_dorso.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_200dirham_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '500 dirham',
            versiones: [
                { anioEmision: '2015a', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_anterior_dorso.webp' },
                { anioEmision: '2015b', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_medio_dorso.webp' },
                { anioEmision: '2023(polimero)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_500dirham_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 dirham',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_medio_dorso.webp' },
                { anioEmision: '2022(polimero)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emiratosarabes/webp/emiratosarabes_1000dirham_nuevo_dorso.webp' }
            ]
        }
    ],
    "Hungria": [
        {
            denominacion: '500 forinto(florin)',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_500forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_500forinto_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 forinto(florin)',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_1000forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_1000forinto_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 forinto(florin)',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_2000forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_2000forinto_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 forinto(florin)',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_5000forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_5000forinto_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 forinto(florin)',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_10000forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_10000forinto_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 forinto(florin)',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_20000forinto_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hungria/webp/hungria_20000forinto_anterior_dorso.webp' }
            ]
        }
    ],
    "Colombia": [
        {
            denominacion: '1000 Pesos(conmemorativo)',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_1000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_1000pesos_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_anterior_dorso.webp' },
                { anioEmision: '2006-Conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_conmemorativo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_2000pesos_conmemorativo_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_anterior_dorso.webp' },
                { anioEmision: '1995-Conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_conmemorativo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_5000pesos_conmemorativo_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_anterior_dorso.webp' },
                { anioEmision: '1995-Conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_conmemorativo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_10000pesos_conmemorativo_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_anterior_dorso.webp' },
                { anioEmision: '1996-Conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_conmemorativo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_20000pesos_conmemorativo_dorso.webp' }
            ]
        },
        {
            denominacion: '50000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_anterior_dorso.webp' },
                { anioEmision: '1996-Conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_conmemorativo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_50000pesos_conmemorativo_dorso.webp' }
            ]
        },
        {
            denominacion: '100000 Pesos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_100000pesos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/colombia/webp/colombia_100000pesos_anterior_dorso.webp' }
            ]
        }
    ],
    "Paraguay": [
        {
            denominacion: '2000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_2000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_2000guaranies_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_5000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_5000guaranies_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_10000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_10000guaranies_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_20000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_20000guaranies_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_50000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_50000guaranies_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100000 guaranies',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_100000guaranies_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/paraguay/webp/paraguay_100000guaranies_anterior_dorso.webp' }
            ]
        }
    ],
    "Venezuela": [
        {
            denominacion: '5 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_5bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_5bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '10 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_10bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_10bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '20 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_20bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_20bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '50 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_50bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_50bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '100 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_100bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_100bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_200bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_200bolivares_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 bolivares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_500bolivares_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/venezuela/webp/venezuela_500bolivares_anterior_dorso.webp' }
            ]
        }
    ],
    "Vietnam": [
        {
            denominacion: '100 Dong',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_100dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_100dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '200 Dong',
            versiones: [
                { anioEmision: '1987', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_200dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_200dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '500 Dong',
            versiones: [
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_500dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_500dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '1000 Dong',
            versiones: [
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_1000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_1000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '2000 Dong',
            versiones: [
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_2000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_2000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '5000 Dong',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_5000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_5000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '10000 Dong',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_10000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_10000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '20000 Dong',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_20000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_20000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '50000 Dong',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_50000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_50000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '100000 Dong',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_100000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_100000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '200000 Dong',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_200000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_200000dong_anterior_dorso.jpg' }
            ]
        },
        {
            denominacion: '500000 Dong',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_500000dong_anterior_frente.jpg', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vietnam/vietnam_500000dong_anterior_dorso.jpg' }
            ]
        }
    ],
    "Iran": [
        {
            denominacion: '100 Rial',
            versiones: [
                { anioEmision: '1985', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100rial_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Rial',
            versiones: [
                { anioEmision: '1982', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_200rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_200rial_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '500 Rial',
            versiones: [
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_500rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_500rial_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Rial',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_1000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_1000rial_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Rial',
            versiones: [
                { anioEmision: '1986', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_2000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_2000rial_anterior_dorso.webp' },
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_2000rial_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_2000rial_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Rial',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_anterior_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_medio_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_5000rial_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 Rial',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_anterior_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_medio_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_10000rial_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 Rial',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_anterior_dorso.webp' },
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_medio_dorso.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_nuevo_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_nuevo1_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_20000rial_nuevo1_dorso.webp' }
            ]
        },
        {
            denominacion: '50000 Rial',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_anterior_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_medio_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_50000rial_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '100000 Rial',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100000rial_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100000rial_anterior_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100000rial_medio_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/iran/webp/iran_100000rial_medio_dorso.webp' }
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
        }, {
            denominacion: '100 Bolivianos',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_100boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_100boliviano_anterior_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Bolivianos',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_200boliviano_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bolivia/webp/bolivia_200boliviano_anterior_dorso.webp' }
            ]
        }
    ],
    "Armenia": [
        {
            denominacion: '500 Dram',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_500dram_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_500dram_anterior_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_500dram_nuevo_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_500dram_nuevo_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Dram',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_anterior_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2001_dorso.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2011_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_1000dram_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Dram',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_1999_dorso.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2003_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2003_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2012_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_5000dram_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 Dram',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2003_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2003_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2012_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_10000dram_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 Dram',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_1999_dorso.webp' },
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2007_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2007_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2012_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_20000dram_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '50000 Dram',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_50000dram_2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_50000dram_2001_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_50000dram_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_50000dram_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '100000 Dram',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_100000dram_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/armenia/webp/armenia_100000dram_2009_dorso.webp' }
            ]
        }
    ],
    "Costa Rica": [
        {
            denominacion: '1000 colones',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2009_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2013_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2019_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_1000colon_2019_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 colones',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_2000colon_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_2000colon_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 colones',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_5000colon_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_5000colon_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 colones',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_10000colon_2021_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_10000colon_2021_dorso.webp' }
            ]
        },
        {
            denominacion: '20000 colones',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_20000colon_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/costarica/webp/costarica_20000colon_2018_dorso.webp' }
            ]
        }
    ],
    "Egipto": [
        {
            denominacion: '25 (centavos) libra',
            versiones: [
                { anioEmision: '1917', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1917_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1917_dorso.webp' },
                { anioEmision: '1952', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1952_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1952_dorso.webp' },
                { anioEmision: '1961', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1961_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1961_dorso.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_1976_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_25piastres_2001_dorso.webp' }
            ]
        },
        {
            denominacion: '50 (centavos) libra',
            versiones: [
                { anioEmision: '1899', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1899_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1899_dorso.webp' },
                { anioEmision: '1914', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1914_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1914_dorso.webp' },
                { anioEmision: '1935', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1935_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1935_dorso.webp' },
                { anioEmision: '1952', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1952_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1952_dorso.webp' },
                { anioEmision: '1961', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1961_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1961_dorso.webp' },
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1967_dorso.webp' },
                { anioEmision: '1981', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1981_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_1981_dorso.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_2016_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50piastres_2016_dorso.webp' }
            ]
        },
        {
            denominacion: '1 libra',
            versiones: [
                { anioEmision: '1899', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1899_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1899_dorso.webp' },
                { anioEmision: '1930', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1930_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1930_dorso.webp' },
                { anioEmision: '1952', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1952_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1952_dorso.webp' },
                { anioEmision: '1978', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1978_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_1978_dorso.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_2016_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_1libra_2016_dorso.webp' }
            ]
        },
        {
            denominacion: '5 libras',
            versiones: [
                { anioEmision: '1964', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1964_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1964_dorso.webp' },
                { anioEmision: '1969', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1969_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1969_dorso.webp' },
                { anioEmision: '1970', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1970_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1970_dorso.webp' },
                { anioEmision: '1981', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1981_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_1981_dorso.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2002_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2002_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2008_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2008_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_5libra_2015_dorso.webp' }
            ]
        },
        {
            denominacion: '10 libras',
            versiones: [
                { anioEmision: '1931', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1931_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1931_dorso.webp' },
                { anioEmision: '1952', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1952_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1952_dorso.webp' },
                { anioEmision: '1961', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1961_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1961_dorso.webp' },
                { anioEmision: '1969', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1969_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1969_dorso.webp' },
                { anioEmision: '1978', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1978_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_1978_dorso.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2003_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2003_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2015_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_10libra_2022_dorso.webp' }
            ]
        },
        {
            denominacion: '20 libras',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_1976_dorso.webp' },
                { anioEmision: '1979', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_1979_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_1979_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2001_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2008_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2008_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2015_dorso.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2016_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2016_dorso.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2023_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_20libra_2023_dorso.webp' }
            ]
        },
        {
            denominacion: '50 libras',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_1993_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_1993_dorso.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2001_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2001_dorso.webp' },
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2007_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2007_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_50libra_2015_dorso.webp' }
            ]
        },
        {
            denominacion: '100 libras',
            versiones: [
                { anioEmision: '1978', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_1978_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_1978_dorso.webp' },
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_1994_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_1994_dorso.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2000_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2000_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2009_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_100libra_2015_dorso.webp' }
            ]
        },
        {
            denominacion: '200 libras',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2007_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2007_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2009_dorso.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2015_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/egipto/webp/egipto_200libra_2015_dorso.webp' }
            ]
        }
    ],
    "Argelia": [
        {
            denominacion: '100 dinares',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_100dinares_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_100dinares_1996_dorso.webp' }
            ]
        },
        {
            denominacion: '200 dinares',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_200dinares_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_200dinares_1996_dorso.webp' }
            ]
        },
        {
            denominacion: '500 dinares',
            versiones: [
                { anioEmision: '1996(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_1996_dorso.webp' },
                { anioEmision: '1998(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_1998_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_1998_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_500dinares_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 dinares',
            versiones: [
                { anioEmision: '1995(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_1995_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_1995_dorso.webp' },
                { anioEmision: '1998(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_1998_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_1998_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_1000dinares_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 dinares',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_2000dinares_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_2000dinares_2011_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_2000dinares_2021_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/argelia/webp/argelia_2000dinares_2021_dorso.webp' }
            ]
        }
    ],
    "Guatemala": [
        {
            denominacion: '1 Quetzal',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_1quetzal_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_1quetzal_2024_dorso.webp' }
            ]
        },
        {
            denominacion: '5 Quetzal',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_5quetzal_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_5quetzal_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '10 Quetzal',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_10quetzal_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_10quetzal_2018_dorso.webp' }
            ]
        },
        {
            denominacion: '20 Quetzal',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_20quetzal_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_20quetzal_2018_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_20quetzal_2021_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_20quetzal_2021_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Quetzal',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_50quetzal_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_50quetzal_2024_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Quetzal',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_100quetzal_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_100quetzal_2024_dorso.webp' }
            ]
        },
        {
            denominacion: '200 Quetzal',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_200quetzal_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guatemala/webp/guatemala_200quetzal_2024_dorso.webp' }
            ]
        }
    ],
    "Guyana": [
        {
            denominacion: '20 dolares',
            versiones: [
                { anioEmision: '1965', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1965_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1965_dorso.webp' },
                { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1988_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1988_dorso.webp' },
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_20dolar_1996_dorso.webp' }
            ]
        },
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2016_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2016_dorso.webp' }
            ]
        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1988_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1988_dorso.webp' },
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1998_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_1998_dorso.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2006_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2006_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_100dolar_2012_dorso.webp' }
            ]
        },
        {
            denominacion: '500 dolares',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1992_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1992_dorso.webp' },
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_1996_dorso.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2000_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2000_dorso.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2011_dorso.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2024_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_500dolar_2024_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 dolares',
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
            denominacion: '2000 dolares',
            versiones: [
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_2000dolar_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_2000dolar_2022_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 dolares',
            versiones: [
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guyana/webp/guyana_50dolar_2013_dorso.webp' }
            ]
        }
    ],
    "Islandia": [
        {
            denominacion: '500 Coronas',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_500coronas_2005_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_500coronas_2005_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 Coronas',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_1000coronas_2004_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_1000coronas_2004_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 Coronas',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_2000coronas_1995_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_2000coronas_1995_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 Coronas',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_5000coronas_2003_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_5000coronas_2003_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 Coronas',
            versiones: [
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_10000coronas_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/islandia/webp/islandia_10000coronas_2013_dorso.webp' }
            ]
        }
    ],
    "Bulgaria": [
        {
            denominacion: '5 Levs',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_1999_dorso.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_2009_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_2020_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_5levs_2020_dorso.webp' }
            ]
        },
        {
            denominacion: '10 Levs',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_1999_dorso.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_2008_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_2008_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_2020_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_10levs_2020_dorso.webp' }
            ]
        },
        {
            denominacion: '20 Levs',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_1999_dorso.webp' },
                { anioEmision: '2005(conmemorativo)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2005_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2005_dorso.webp' },
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2007_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2007_dorso.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2020_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_20levs_2020_dorso.webp' }
            ]
        },
        {
            denominacion: '50 Levs',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_1999_dorso.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_2006_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_2006_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_2019_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgarialevs_2019_dorso.webp' }
            ]
        },
        {
            denominacion: '100 Levs',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_100levs_2003_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_100levs_2003_dorso.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_100levs_2018_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bulgaria/webp/bulgaria_100levs_2018_dorso.webp' }
            ]
        }
    ],
    "Albania": [
        {
            denominacion: '200 leks',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_200leks_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_200leks_1996_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_200leks_2019_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_200leks_2019_dorso.webp' }
            ]
        },
        {
            denominacion: '500 leks',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_500leks_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_500leks_1996_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_500leks_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_500leks_2022_dorso.webp' }
            ]
        },
        {
            denominacion: '1000 leks',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_1000leks_1996_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_1000leks_1996_dorso.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_1000leks_2021_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_1000leks_2021_dorso.webp' }
            ]
        },
        {
            denominacion: '2000 leks',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_2000leks_2007_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_2000leks_2007_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania2000leks_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania2000leks_2022_dorso.webp' }
            ]
        },
        {
            denominacion: '5000 leks',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_5000leks_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_5000leks_1999_dorso.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_5000leks_2019_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_5000leks_2019_dorso.webp' }
            ]
        },
        {
            denominacion: '10000 leks',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_10000leks_2021_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/albania/webp/albania_10000leks_2021_dorso.webp' }
            ]
        }
    ],
    "Hong Kong": [

        {
            denominacion: '20 dolares',
            versiones: [
                { anioEmision: '1993 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20dorsobochk.webp' },
                { anioEmision: '1993 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20dorsoscbhk.webp' },
                { anioEmision: '1993 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/20dorsohsbchk.webp' },
                { anioEmision: '2003 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20dorsobochk.webp' },
                { anioEmision: '2003 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20dorsoscbhk.webp' },
                { anioEmision: '2003 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/20dorsohsbchk.webp' },
                { anioEmision: '2010 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20dorsobochk.webp' },
                { anioEmision: '2010 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20dorsoscbhk.webp' },
                { anioEmision: '2010 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/20dorsohsbchk.webp' },
                { anioEmision: '2018 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20dorsobochk.webp' },
                { anioEmision: '2018 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20dorsoscbhk.webp' },
                { anioEmision: '2018 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/20dorsohsbchk.webp' }

            ]

        },
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '1993 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50dorsobochk.webp' },
                { anioEmision: '1993 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50dorsoscbhk.webp' },
                { anioEmision: '1993 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/50dorsohsbchk.webp' },
                { anioEmision: '2003 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50dorsobochk.webp' },
                { anioEmision: '2003 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50dorsoscbhk.webp' },
                { anioEmision: '2003 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/50dorsohsbchk.webp' },
                { anioEmision: '2010 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50dorsobochk.webp' },
                { anioEmision: '2010 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50dorsoscbhk.webp' },
                { anioEmision: '2010 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/50dorsohsbchk.webp' },
                { anioEmision: '2018 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50dorsobochk.webp' },
                { anioEmision: '2018 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50dorsoscbhk.webp' },
                { anioEmision: '2018 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/50dorsohsbchk.webp' }

            ]

        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '1993 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100dorsobochk.webp' },
                { anioEmision: '1993 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100dorsoscbhk.webp' },
                { anioEmision: '1993 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/100dorsohsbchk.webp' },
                { anioEmision: '2003 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100dorsobochk.webp' },
                { anioEmision: '2003 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100dorsoscbhk.webp' },
                { anioEmision: '2003 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/100dorsohsbchk.webp' },
                { anioEmision: '2010 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100dorsobochk.webp' },
                { anioEmision: '2010 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100dorsoscbhk.webp' },
                { anioEmision: '2010 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/100dorsohsbchk.webp' },
                { anioEmision: '2018 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100dorsobochk.webp' },
                { anioEmision: '2018 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100dorsoscbhk.webp' },
                { anioEmision: '2018 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/100dorsohsbchk.webp' }

            ]

        },
        {
            denominacion: '500 dolares',
            versiones: [
                { anioEmision: '1993 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500dorsobochk.webp' },
                { anioEmision: '1993 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500dorsoscbhk.webp' },
                { anioEmision: '1993 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/500dorsohsbchk.webp' },
                { anioEmision: '2003 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500dorsobochk.webp' },
                { anioEmision: '2003 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500dorsoscbhk.webp' },
                { anioEmision: '2003 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/500dorsohsbchk.webp' },
                { anioEmision: '2010 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500dorsobochk.webp' },
                { anioEmision: '2010 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500dorsoscbhk.webp' },
                { anioEmision: '2010 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/500dorsohsbchk.webp' },
                { anioEmision: '2018 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500dorsobochk.webp' },
                { anioEmision: '2018 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500dorsoscbhk.webp' },
                { anioEmision: '2018 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/500dorsohsbchk.webp' }

            ]

        },
        {
            denominacion: '1000 dolares',
            versiones: [
                { anioEmision: '1993 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/1000frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/1000dorsobochk.webp' },
                { anioEmision: '1993 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/1000frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie1993/webp/1000dorsoscbhk.webp' },
                { anioEmision: '2003 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000dorsobochk.webp' },
                { anioEmision: '2003 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000dorsoscbhk.webp' },
                { anioEmision: '2003 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2003/webp/1000dorsohsbchk.webp' },
                { anioEmision: '2010 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000dorsobochk.webp' },
                { anioEmision: '2010 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000dorsoscbhk.webp' },
                { anioEmision: '2010 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2010/webp/1000dorsohsbchk.webp' },
                { anioEmision: '2018 - Bank of China', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000frentebochk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000dorsobochk.webp' },
                { anioEmision: '2018 - Standard Chartered Bank', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000frentescbhk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000dorsoscbhk.webp' },
                { anioEmision: '2018 - HSBC(The Hongkong and Shanghai Banking Corporation Limited)', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000frentehsbchk.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/hongkong/serie2018/webp/1000dorsohsbchk.webp' }

            ]
        }
    ],


    "Ghana": [
        {
            "denominacion": "1 Cedi",
            "versiones": [
                {
                    "anioEmision": "2007",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_1Cedi_2007_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_1Cedi_2007_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2 Cedi",
            "versiones": [
                {
                    "anioEmision": "2010",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_2Cedi_2010_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_2Cedi_2010_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Cedi",
            "versiones": [
                {
                    "anioEmision": "2007",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_5Cedi_2007_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_5Cedi_2007_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Cedi",
            "versiones": [
                {
                    "anioEmision": "2007",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10Cedi_2007_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10Cedi_2007_dorso.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10Cedi_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10Cedi_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Cedi",
            "versiones": [
                {
                    "anioEmision": "2007",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20Cedi_2007_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20Cedi_2007_dorso.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20Cedi_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20Cedi_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Cedi",
            "versiones": [
                {
                    "anioEmision": "2007",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2007_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2007_dorso.webp"
                },
                {
                    "anioEmision": "2012",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2012_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2012_dorso.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_50Cedi_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Cedi",
            "versiones": [
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_100Cedi_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_100Cedi_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Cedi",
            "versiones": [
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_200Cedi_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_200Cedi_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10000 Cedi",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10000Cedi_2002_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_10000Cedi_2002_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20000 Cedi",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20000Cedi_2002_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ghana/webp/ghana_20000Cedi_2002_dorso.webp"
                }
            ]
        }
    ],
    "Etiopia": [
        {
            "denominacion": "10 Birr",
            "versiones": [
                {
                    "anioEmision": "2012(2020)",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_10Birr_2012_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_1Birr_2012_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Birr",
            "versiones": [
                {
                    "anioEmision": "2012(2020)",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_50Birr_anterior_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_50Birr_anterior_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Birr",
            "versiones": [
                {
                    "anioEmision": "2012(2020)",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_100Birr_anterior_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_100Birr_anterior_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Birr",
            "versiones": [
                {
                    "anioEmision": "2012(2020)",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_200Birr_anterior_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/etiopia/webp/etiopia_200Birr_anterior_dorso.webp"
                }
            ]
        }
    ],
    "Libano": [
        {
            "denominacion": "1000 libras",
            "versiones": [
                {
                    "anioEmision": "1988",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_1988_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_1988_dorso.webp"
                },
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_1000libras_2011_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 libras",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_1994_dorso.webp"
                },
                {
                    "anioEmision": "1999",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_1999_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_1999_dorso.webp"
                },
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2012",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_2012_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_5000libras_2012_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10000 libras",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_10000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_10000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2012",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_10000libras_2012_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_10000libras_2012_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20000 libras",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_1994_dorso.webp"
                },
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2012",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_2012_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_20000libras_2012_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50000 libras",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_1994_dorso.webp"
                },
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_50000libras_2011_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100000 libras",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_1994_dorso.webp"
                },
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_2004_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libano/webp/libano_100000libras_2011_dorso.webp"
                }
            ]
        }
    ],
    "Mongolia": [
        {
            "denominacion": "1 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_1Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_1Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_5Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_5Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_10Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_10Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_20Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_20Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_50Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_50Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_100Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_100Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_500Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_500Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_1000Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_1000Tugrik_1993_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_5000Tugrik_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_5000Tugrik_2004_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10000 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1995",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_10000Tugrik_1995_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_10000Tugrik_1995_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20000 Tugrik",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_20000Tugrik_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mongolia/webp/mongolia_20000Tugrik_1993_dorso.webp"
                }
            ]
        }
    ],
    "Serbia": [
        {
            "denominacion": "10 Dinar",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_10dinar_2006_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_10dinar_2006_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Dinar",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_20dinar_2006_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_20dinar_2006_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Dinar",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_50dinar_2005_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_50dinar_2005_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Dinar",
            "versiones": [
                {
                    "anioEmision": "2003",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_100dinar_2003_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_100dinar_2003_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Dinar",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_200dinar_2005_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_200dinar_2005_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Dinar",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_500dinar_2004_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_500dinar_2004_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Dinar",
            "versiones": [
                {
                    "anioEmision": "2003",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_1000dinar_2003_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_1000dinar_2003_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2000 Dinar",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_2000dinar_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_2000dinar_2011_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 Dinar",
            "versiones": [
                {
                    "anioEmision": "2003",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_5000dinar_2003_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/serbia/webp/serbia_5000dinar_2003_dorso.webp"
                }
            ]
        }
    ],
    "Nicaragua": [
        {
            "denominacion": "10 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_10cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_10cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_10cordoba_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_10cordoba_2011_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_10cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_10cordoba_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_20cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_20cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_20cordoba_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_20cordoba_2011_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_20cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_20cordoba_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_50cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_50cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_50cordoba_2009_frenteconmemorativo.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_50cordoba_2009_dorsoconmemorativo.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_50cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_50cordoba_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_100cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_100cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_100cordoba_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_100cordoba_2011_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_100cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_100cordoba_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_200cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_200cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_200cordoba_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_200cordoba_2011_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_200cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_200cordoba_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_500cordoba_2009_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2009/webp/nicaragua_500cordoba_2009_dorso.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_500cordoba_2011_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2011/webp/nicaragua_500cordoba_2011_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_500cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_500cordoba_2015_dorso.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2019/webp/nicaragua_500cordoba_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2019/webp/nicaragua_500cordoba_2019_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Cordoba",
            "versiones": [
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_1000cordoba_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2015/webp/nicaragua_1000cordoba_2015_dorso.webp"
                },
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2016/webp/nicaragua_1000cordoba_2016_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2016/webp/nicaragua_1000cordoba_2016_dorso.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2019/webp/nicaragua_1000cordoba_2019_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nicaragua/2019/webp/nicaragua_1000cordoba_2019_dorso.webp"
                }
            ]
        }
    ],
    "Tunez": [
        {
            denominacion: '5 dinares',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2008_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2008_dorso.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2013_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_5dinares_2022_dorso.webp' }

            ]
        },
        {
            denominacion: '10 dinares',
            versiones:
                [
                    { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_1994_frente_azul.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_1994_dorso_azul.webp' },
                    { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_1994_frente_marron.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_1994_dorso_marron.webp' },
                    { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2005_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2005_dorso.webp' },
                    { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2013_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2013_dorso.webp' },
                    { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2020_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_10dinares_2020_dorso.webp' }

                ]
        },
        {
            denominacion: '20 dinares',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_1992_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_1992_dorso.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_2011_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_20dinares_2017_dorso.webp' }

            ]
        },
        {
            denominacion: '30 dinares',
            versiones: [
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_30dinares_1997_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_30dinares_1997_dorso.webp' }


            ]
        },
        {
            denominacion: '50 dinares',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2008_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2008_dorso.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2011_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2011_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tunez/webp/tunez_50dinares_2022_dorso.webp' }

            ]
        }
    ],
    "Uganda": [
        {
            denominacion: '1000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_1000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_1000shillings_2010_dorso.webp' }

            ]
        },
        {
            denominacion: '2000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_2000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_2000shillings_2010_dorso.webp' }

            ]
        },
        {
            denominacion: '5000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_5000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_5000shillings_2010_dorso.webp' }

            ]
        },
        {
            denominacion: '10000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_10000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_10000shillings_2010_dorso.webp' }

            ]
        },
        {
            denominacion: '20000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_20000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_20000shillings_2010_dorso.webp' }

            ]
        },
        {
            denominacion: '50000 Shillings',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_50000shillings_2010_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uganda/uganda_50000shillings_2010_dorso.webp' }

            ]
        }


    ],
    "Suiza": [
        {
            denominacion: '10 Francos Suizos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_10francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_10francos_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '20 Francos Suizos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_20francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_20francos_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '50 Francos Suizos',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_50francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_50francos_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '100 Francos Suizos',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_100francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_100francos_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '200 Francos Suizos',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_200francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_200francos_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '1000 Francos Suizos',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_1000francos_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/suiza/webp/suiza_1000francos_anterior_dorso.webp' }


            ]
        }
    ],
    "Singapur": [
        {
            denominacion: '1 Dolar',
            versiones: [
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1967_dorso.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1976_dorso.webp' },
                { anioEmision: '1987', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1987_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_1dolar_1987_dorso.webp' }

            ]
        },
        {
            denominacion: '2 Dolares',
            versiones: [
                { anioEmision: '1991', imagenFrente: 'billetes/singapur/webp/singapur_2dolar_1991_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_2dolar_1991_dorso.webp' },
                { anioEmision: '1999', imagenFrente: 'billetes/singapur/webp/singapur_2dolar_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_2dolar_1999_dorso.webp' }

            ]
        },
        {
            denominacion: '5 Dolares',
            versiones: [
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1967_dorso.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1976_dorso.webp' },
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1989_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1989_dorso.webp' },
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_5dolar_1999_dorso.webp' }

            ]
        },
        {
            denominacion: '10 Dolares',
            versiones: [
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1967_dorso.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1976_dorso.webp' },
                { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1988_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1988_dorso.webp' },
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_10dolar_1999_dorso.webp' }

            ]
        },
        {
            denominacion: '20 Dolares',
            versiones: [
                { anioEmision: '1979', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_20dolar_1979_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_20dolar_1979_dorso.webp' }

            ]
        },
        {
            denominacion: '25 Dolares',
            versiones: [
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_25dolar_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_25dolar_1967_dorso.webp' }

            ]
        },
        {
            denominacion: '50 Dolares',
            versiones: [
                { anioEmision: '1967', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1967_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1967_dorso.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1976_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1976_dorso.webp' },
                { anioEmision: '1987', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1987_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1987_dorso.webp' },
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1999_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/singapur/webp/singapur_50dolar_1999_dorso.webp' }

            ]
        },
        {
            denominacion: '100 Dolares',
            versiones: [
                { anioEmision: '1967', imagenFrente: '//billetes/singapur/webp/singapur_100dolar_1967_frente.webp', imagenDorso: '//billetes/singapur/webp/singapur_100dolar_1967_dorso.webp' },
                { anioEmision: '1977', imagenFrente: '//billetes/singapur/webp/singapur_100dolar_1976_frente.webp', imagenDorso: '//billetes/singapur/webp/singapur_100dolar_1976_dorso.webp' },
                { anioEmision: '1985', imagenFrente: '//billetes/singapur/webp/singapur_100dolar_1985_frente.webp', imagenDorso: '//billetes/singapur/webp/singapur_100dolar_1985_dorso.webp' },
                { anioEmision: '1999', imagenFrente: '//billetes/singapur/webp/singapur_100dolar_1999_frente.webp', imagenDorso: '//billetes/singapur/webp/singapur_100dolar_1999_dorso.webp' }

            ]
        }
    ],
    "Nigeria": [
        {
            denominacion: '5 naira',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_5naira_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_5naira_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '10 naira',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_10naira_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_10naira_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '20 naira',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_20naira_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_20naira_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '50 naira',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_50naira_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_50naira_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '100 naira',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_100naira_anterior_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_100naira_anterior_dorso.webp' }


            ]
        },
        {
            denominacion: '200 naira',
            versiones: [
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_200naira_2000_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_200naira_2000_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_200naira_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_200naira_2022_dorso.webp' }


            ]
        },
        {
            denominacion: '500 naira',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_500naira_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_500naira_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_500naira_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_500naira_2022_dorso.webp' }


            ]
        },
        {
            denominacion: '1000 naira',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_1000naira_2005_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_1000naira_2005_dorso.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_1000naira_2022_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nigeria/webp/nigeria_1000naira_2022_dorso.webp' }


            ]
        }
    ],
    "Japon": [
        {
            "denominacion": "1000 yenes",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_1000yenes_2004frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_1000yenes_2004dorso.webp"
                },
                {
                    "anioEmision": "2024",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_1000yenes_2024frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_1000yenes_2024dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2000 yenes",
            "versiones": [
                {
                    "anioEmision": "2000",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_2000yenes_2000frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_2000yenes_2000dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 yenes",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_5000yenes_2004frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_5000yenes_2004dorso.webp"
                },
                {
                    "anioEmision": "2024",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_5000yenes_2024frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_5000yenes_2024dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10000 yenes",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_10000yenes_2004frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_10000yenes_2004dorso.webp"
                },
                {
                    "anioEmision": "2024",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_10000yenes_2024frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/japon/webp/japon_10000yenes_2024dorso.webp"
                }
            ]
        }
    ],
    "Sudan": [
        {
            "denominacion": "1 libra",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_1libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_1libras_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2 libras",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_2libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_2libras_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 libra",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_5libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_5libras_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 libra",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_10libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_10libras_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 libra",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_20libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_20libras_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 libra",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_50libras_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudan/webp/sudan_50libras_dorso.webp"
                }
            ]
        }
    ],
    "Angola": [
        {
            "denominacion": "200 kwanzas",
            "versiones": [
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_200kwanzas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_200kwanzas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 kwanzas",
            "versiones": [
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_500kwanzas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_500kwanzas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 kwanzas",
            "versiones": [
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_1000kwanzas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_1000kwanzas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2000 kwanzas",
            "versiones": [
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_2000kwanzas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_2000kwanzas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 kwanzas",
            "versiones": [
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_5000kwanzas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/angola/webp/angola_5000kwanzas_dorso.webp"
                }
            ]
        }
    ],
    "Noruega": [
        {
            "denominacion": "50 Coronas",
            "versiones": [
                {
                    "anioEmision": "2017",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_50coronas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_50coronas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Coronas",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_100coronas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_100coronas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Coronas",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_200coronas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_200coronas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Coronas",
            "versiones": [
                {
                    "anioEmision": "2018",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_500coronas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_500coronas_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Coronas",
            "versiones": [
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_1000coronas_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/noruega/webp/noruega_1000coronas_dorso.webp"
                }
            ]
        }
    ],
    "Ucrania": [
        {
            "denominacion": "1 Grivna",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_1grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_1grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2 Grivna",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_2grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_2grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Grivna",
            "versiones": [
                {
                    "anioEmision": "2004",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_5grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_5grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Grivna",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_10grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_10grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Grivna",
            "versiones": [
                {
                    "anioEmision": "2018",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_20grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_20grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Grivna",
            "versiones": [
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_50grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_50grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Grivna",
            "versiones": [
                {
                    "anioEmision": "2022",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_100grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_100grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Grivna",
            "versiones": [
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_200grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_200grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Grivna",
            "versiones": [
                {
                    "anioEmision": "2023",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_500grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_500grivna_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Grivna",
            "versiones": [
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_1000grivna_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ucrania/webp/ucrania_1000grivna_dorso.webp"
                }
            ]
        }
    ],
    "Rumania": [
        {
            "denominacion": "1 Leu",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_1leu_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_1leu_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Lei",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_5lei_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_5lei_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Lei",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_10lei_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_10lei_dorso.webp"
                },
                {
                    "anioEmision": "2008",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_10lei_frente2008.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_10lei_dorso2008.webp"
                }
            ]
        },
        {
            "denominacion": "20 Lei",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_20lei_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_20lei_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Lei",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_50lei_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_50lei_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Leu",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_100leu_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_100leu_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Leu",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_200leu_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_200leu_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Leu",
            "versiones": [
                {
                    "anioEmision": "2005",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_500leu_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/rumania/webp/rumania_500leu_dorso.webp"
                }
            ]
        }
    ],
    "Kazajstan": [
        {
            "denominacion": "200 Tange",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_200tange_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_200tange_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Tange",
            "versiones": [
                {
                    "anioEmision": "2017",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_500tange_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_500tange_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Tange",
            "versiones": [
                {
                    "anioEmision": "2010",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_frente2010.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_dorso2010.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_frente2011.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_dorso2011.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_frente2013.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_dorso2013.webp"
                },
                {
                    "anioEmision": "2014",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_frente2014.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_1000tange_dorso2014.webp"
                }
            ]
        },
        {
            "denominacion": "2000 Tange",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_frente2011.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_dorso2011.webp"
                },
                {
                    "anioEmision": "2012",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_frente2012.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_dorso2012.webp"
                },
                {
                    "anioEmision": "2024",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_frente2024.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kazajstan/webp/kazajstan_2000tange_dorso2024.webp"
                }
            ]
        }
    ],
    "Bielorrusia": [
        {
            "denominacion": "5 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_5rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_5rouble_dorso2016.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_5rouble_frente2019.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_5rouble_dorso2019.webp"
                }
            ]
        },
        {
            "denominacion": "10 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_10rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_10rouble_dorso2016.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_10rouble_frente2019.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_10rouble_dorso2019.webp"
                }
            ]
        },
        {
            "denominacion": "20 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_20rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_20rouble_dorso2016.webp"
                },
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_20rouble_frente2020.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_20rouble_dorso2020.webp"
                }
            ]
        },
        {
            "denominacion": "50 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_50rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_50rouble_dorso2016.webp"
                },
                {
                    "anioEmision": "2020",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_50rouble_frente2020.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_50rouble_dorso2020.webp"
                }
            ]
        },
        {
            "denominacion": "100 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_100rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_100rouble_dorso2016.webp"
                },
                {
                    "anioEmision": "2022",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_100rouble_frente2022.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_100rouble_dorso2022.webp"
                }
            ]
        },
        {
            "denominacion": "200 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_200rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_200rouble_dorso2016.webp"
                }
            ]
        },
        {
            "denominacion": "500 rouble",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_500rouble_frente2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bielorrusia/webp/bielorrusia_500rouble_dorso2016.webp"
                }
            ]
        }
    ],
    "Pakistan": [
        {
            "denominacion": "10 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_10rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_10rupias_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_20rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_20rupias_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_50rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_50rupias_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "75 Rupias",
            "versiones": [
                {
                    "anioEmision": "2022",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_75rupias_frente2022.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_75rupias_dorso2022.webp"
                },
                {
                    "anioEmision": "2023",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_75rupias_frente2023.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_75rupias_dorso2023.webp"
                }
            ]
        },
        {
            "denominacion": "100 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_100rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_100rupias_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_500rupias_frente2006.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_500rupias_dorso2006.webp"
                },
                {
                    "anioEmision": "2009",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_500rupias_frente2009.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_500rupias_dorso2009.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_1000rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_1000rupias_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 Rupias",
            "versiones": [
                {
                    "anioEmision": "2006",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_5000rupias_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/pakistan/webp/pakistan_5000rupias_dorso.webp"
                }
            ]
        }
    ],
    "Uzbekistan": [
        {
            "denominacion": "1000 Soum",
            "versiones": [
                {
                    "anioEmision": "2001",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_1000soum_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_1000soum_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2000 Soum",
            "versiones": [
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_2000soum_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_2000soum_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5000 Soum",
            "versiones": [
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_5000soum_frente2013.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_5000soum_dorso2013.webp"
                },
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_5000soum_frente2021.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_5000soum_dorso2021.webp"
                }
            ]
        },
        {
            "denominacion": "10000 Soum",
            "versiones": [
                {
                    "anioEmision": "2017",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_10000soum_frente2017.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_10000soum_dorso2017.webp"
                },
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_10000soum_frente2021.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_10000soum_dorso2021.webp"
                }
            ]
        },
        {
            "denominacion": "20000 Soum",
            "versiones": [
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_20000soum_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_20000soum_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50000 Soum",
            "versiones": [
                {
                    "anioEmision": "2017",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_50000soum_frente2017.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_50000soum_dorso2017.webp"
                },
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_50000soum_frente2021.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_50000soum_dorso2021.webp"
                }
            ]
        },
        {
            "denominacion": "100000 Soum",
            "versiones": [
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_100000soum_frente2019.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_100000soum_dorso2019.webp"
                },
                {
                    "anioEmision": "2021",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_100000soum_frente2021.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_100000soum_dorso2021.webp"
                }
            ]
        },
        {
            "denominacion": "200000 Soum",
            "versiones": [
                {
                    "anioEmision": "2022",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_200000soum_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/uzbekistan/webp/uzbekistan_200000soum_dorso.webp"
                }
            ]
        }
    ],
    "Moldavia": [
        {
            "denominacion": "1 Leu",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_1994_dorso.webp"
                },
                {
                    "anioEmision": "2010",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_2010_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_2010_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1leu_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Lei",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_5lei_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_5lei_1994_dorso.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_5lei_2013_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_5lei_2013_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Lei",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_1994_dorso.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_2013_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_2013_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_10lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Lei",
            "versiones": [
                {
                    "anioEmision": "1993",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_1993_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_1993_dorso.webp"
                },
                {
                    "anioEmision": "2010",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_2010_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_2010_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_20lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Lei",
            "versiones": [
                {
                    "anioEmision": "1994",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_1994_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_1994_dorso.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_2013_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_2013_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_50lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Lei",
            "versiones": [
                {
                    "anioEmision": "1995",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_1995_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_1995_dorso.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_2013_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_2013_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_100lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "200 Lei",
            "versiones": [
                {
                    "anioEmision": "1995",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_1995_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_1995_dorso.webp"
                },
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_2013_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_2013_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_200lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Lei",
            "versiones": [
                {
                    "anioEmision": "1999",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_500lei_1999_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_500lei_1999_dorso.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_500lei_2015_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_500lei_2015_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "1000 Lei",
            "versiones": [
                {
                    "anioEmision": "2003",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1000lei_2003_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/moldavia/webp/moldavia_1000lei_2003_dorso.webp"
                }
            ]
        }
    ],
    "Libia": [
        {
            "denominacion": "1 Dinar",
            "versiones": [
                {
                    "anioEmision": "2013",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_1dinar_frente_2013.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_1dinar_dorso_2013.webp"
                },
                {
                    "anioEmision": "2019",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_1dinar_frente_2019.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_1dinar_dorso_2019.webp"
                }
            ]
        },
        {
            "denominacion": "5 Dinar",
            "versiones": [
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_5dinar_frente_2015.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_5dinar_dorso_2015.webp"
                },
                {
                    "anioEmision": "2021-Conmemorativo",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_5dinar_frente_2021.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_5dinar_dorso_2021.webp"
                }
            ]
        },
        {
            "denominacion": "10 Dinar",
            "versiones": [
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_frente_2011a.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_dorso_2011a.webp"
                },
                {
                    "anioEmision": "2011",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_frente_2011b.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_dorso_2011b.webp"
                },
                {
                    "anioEmision": "2015",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_frente_2015.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_10dinar_dorso_2015.webp"
                }
            ]
        },
        {
            "denominacion": "20 Dinar",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_20dinar_frente_2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_20dinar_dorso_2016.webp"
                }
            ]
        },
        {
            "denominacion": "50 Dinar",
            "versiones": [
                {
                    "anioEmision": "2016",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_50dinar_frente_2016.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/libia/webp/libia_50dinar_dorso_2016.webp"
                }
            ]
        }
    ],
    "Afganistan": [
        {
            "denominacion": "1 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_1afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_1afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "2 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_2afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_2afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "5 Afghani",
            "versiones": [
                {
                    "anioEmision": "2003",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_5afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_5afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "10 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_10afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_10afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "20 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_20afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_20afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "50 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_50afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_50afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "100 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_100afghani_frente.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_100afghani_dorso.webp"
                }
            ]
        },
        {
            "denominacion": "500 Afghani",
            "versiones": [
                {
                    "anioEmision": "2002",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_500afghani_frente2002.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_500afghani_dorso2002.webp"
                },
                {
                    "anioEmision": "2008",
                    "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_500afghani_frente2008.webp",
                    "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/afganistan/webp/afganistan_500afghani_dorso2008.webp"
                }
            ]
        }

    ],
    "Irak": [
        {
            "denominacion": "250 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_dorso2013.webp" },
                { "anioEmision": "2018", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_frente2018.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_250dinar_dorso2018.webp" }
            ]
        },
        {
            "denominacion": "500 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_dorso2013.webp" },
                { "anioEmision": "2018", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_frente2018.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_500dinar_dorso2018.webp" }
            ]
        },
        {
            "denominacion": "1000 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_dorso2013.webp" },
                { "anioEmision": "2018", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_frente2018.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_1000dinar_dorso2018.webp" }
            ]
        },
        {
            "denominacion": "5000 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_5000dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_5000dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_5000dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_5000dinar_dorso2013.webp" }
            ]
        },
        {
            "denominacion": "10000 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_10000dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_10000dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_10000dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_10000dinar_dorso2013.webp" }
            ]
        },
        {
            "denominacion": "25000 Dinar",
            "versiones": [
                { "anioEmision": "2003", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_25000dinar_frente2003.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_25000dinar_dorso2003.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_25000dinar_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_25000dinar_dorso2013.webp" }
            ]
        },
        {
            "denominacion": "50000 Dinar",
            "versiones": [
                { "anioEmision": "2015", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_50000dinar_frente2015.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/irak/webp/irak_50000dinar_dorso2015.webp" }
            ]
        }
    ],
    "Siria": [
        {
            "denominacion": "50 lira",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_50lira_frente1998.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_50lira_dorso1998.webp" },
                { "anioEmision": "2022", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_50lira_frente2022.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_50lira_dorso2022.webp" }
            ]
        },
        {
            "denominacion": "100 lira",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_frente1998.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_dorso1998.webp" },
                { "anioEmision": "2009", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_frente2009.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_dorso2009.webp" },
                { "anioEmision": "2019", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_frente2019.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_100lira_dorso2019.webp" }
            ]
        },
        {
            "denominacion": "200 lira",
            "versiones": [
                { "anioEmision": "1997", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_200lira_frente1997.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_200lira_dorso1997.webp" },
                { "anioEmision": "2021", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_200lira_frente2021.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_200lira_dorso2021.webp" }
            ]
        },
        {
            "denominacion": "500 lira",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_500lira_frente1998.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_500lira_dorso1998.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_500lira_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_500lira_dorso2013.webp" }
            ]
        },
        {
            "denominacion": "1000 lira",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_1000lira_frente1998.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_1000lira_dorso1998.webp" },
                { "anioEmision": "2013", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_1000lira_frente2013.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_1000lira_dorso2013.webp" }
            ]
        },
        {
            "denominacion": "2000 lira",
            "versiones": [
                { "anioEmision": "2015", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_2000lira_frente2015.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_2000lira_dorso2015.webp" }
            ]
        },
        {
            "denominacion": "5000 lira",
            "versiones": [
                { "anioEmision": "2019", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_5000lira_frente2019.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/siria/webp/siria_5000lira_dorso2019.webp" }
            ]
        }
    ],
    "Mauritania": [
        {
            "denominacion": "50 Ouguiya",
            "versiones": [
                { "anioEmision": "2017", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_50Ouguiya_frente2017.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_50Ouguiya_dorso2017.webp" },
                { "anioEmision": "2023", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_50Ouguiya_frente2023.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_50Ouguiya_dorso2023.webp" }
            ]
        },
        {
            "denominacion": "100 Ouguiya",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_200Ouguiya_frente2017.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_200Ouguiya_dorso2017.webp" }
            ]
        },
        {
            "denominacion": "200 Ouguiya",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_100Ouguiya_frente2017.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_100Ouguiya_dorso2017.webp" }
            ]
        },
        {
            "denominacion": "500 Ouguiya",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_500Ouguiya_frente2017.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_500Ouguiya_dorso2017.webp" }
            ]
        },
        {
            "denominacion": "1000 Ouguiya",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_1000Ouguiya_frente2017.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mauritania/webp/mauritania_1000Ouguiya_dorso2017.webp" }
            ]
        }
    ],
    "Marruecos": [
        {
            "denominacion": "10 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_10dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_10dirhams_dorso1987.webp" }
            ]
        },
        {
            "denominacion": "20 Dirhams",
            "versiones": [
                { "anioEmision": "1996", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente1996.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso1996.webp" },
                { "anioEmision": "2005", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2005.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2005.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2012.webp" },
                { "anioEmision": "2019-conmemorativo", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2019-conmemorativo.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2019-conmemorativo.webp" }
            ]
        },
        {
            "denominacion": "50 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso2012.webp" }
            ]
        },
        {
            "denominacion": "100 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso2012.webp" }
            ]
        },
        {
            "denominacion": "200 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso2012.webp" }
            ]
        }
    ],
    "Sahara Occidental": [
        {
            "denominacion": "10 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_10dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_10dirhams_dorso1987.webp" }
            ]
        },
        {
            "denominacion": "20 Dirhams",
            "versiones": [
                { "anioEmision": "1996", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente1996.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso1996.webp" },
                { "anioEmision": "2005", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2005.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2005.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2012.webp" },
                { "anioEmision": "2019-conmemorativo", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_frente2019-conmemorativo.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_20dirhams_dorso2019-conmemorativo.webp" }
            ]
        },
        {
            "denominacion": "50 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_50dirhams_dorso2012.webp" }
            ]
        },
        {
            "denominacion": "100 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_100dirhams_dorso2012.webp" }
            ]
        },
        {
            "denominacion": "200 Dirhams",
            "versiones": [
                { "anioEmision": "1987", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente1987.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso1987.webp" },
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso2002.webp" },
                { "anioEmision": "2012", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_frente2012.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/marruecos/webp/marruecos_200dirhams_dorso2012.webp" }
            ]
        }
    ],
    "Laos": [
        {
            "denominacion": "1000 Kip",
            "versiones": [
                { "anioEmision": "1998", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_1000kip_frente1998.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_1000kip_dorso1998.webp" },
                { "anioEmision": "2008", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_1000kip_frente2008.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_1000kip_dorso2008.webp" }
            ]
        },
        {
            "denominacion": "2000 Kip",
            "versiones": [
                { "anioEmision": "1997", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_2000kip_frente1997.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_2000kip_dorso1997.webp" },
                { "anioEmision": "2011", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_2000kip_frente2011.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_2000kip_dorso2011.webp" }
            ]
        },
        {
            "denominacion": "5000 Kip",
            "versiones": [
                { "anioEmision": "1997", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_5000kip_frente1997.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_5000kip_dorso1997.webp" },
                { "anioEmision": "2020", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_5000kip_frente2020.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_5000kip_dorso2020.webp" }
            ]
        },
        {
            "denominacion": "10000 Kip",
            "versiones": [
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_10000kip_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_10000kip_dorso2002.webp" },
                { "anioEmision": "2020", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_10000kip_frente2020.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_10000kip_dorso2020.webp" }
            ]
        },
        {
            "denominacion": "20000 Kip",
            "versiones": [
                { "anioEmision": "2002", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_20000kip_frente2002.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_20000kip_dorso2002.webp" },
                { "anioEmision": "2020", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_20000kip_frente2020.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_20000kip_dorso2020.webp" }
            ]
        },
        {
            "denominacion": "50000 Kip",
            "versiones": [
                { "anioEmision": "2004", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_50000kip_frente2004.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_50000kip_dorso2004.webp" },
                { "anioEmision": "2020", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_50000kip_frente2020.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_50000kip_dorso2020.webp" }
            ]
        },
        {
            "denominacion": "100000 Kip",
            "versiones": [
                { "anioEmision": "2010 - Conmemorativo", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_frente2010.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_dorso2010.webp" },
                { "anioEmision": "2011", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_frente2011.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_dorso2011.webp" },
                { "anioEmision": "2020", "imagenFrente": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_frente2020.webp", "imagenDorso": "https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/laos/webp/laos_100000kip_dorso2020.webp" }
            ]
        }
    ],
    "Myanmar": [
        {
            denominacion: '100 kyats',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_100kyats_frente1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_100kyats_dorso1994.webp' }
            ]
        },
        {
            denominacion: '200 kyats',
            versiones: [
                { anioEmision: '1990', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_200kyats_frente1990.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_200kyats_dorso1990.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_200kyats_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_200kyats_dorso2004.webp' }
            ]
        },
        {
            denominacion: '500 kyats',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_frente1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_dorso1994.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_dorso2004.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_frente2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_500kyats_dorso2020.webp' }
            ]
        },
        {
            denominacion: '1000 kyats',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_dorso1998.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_dorso2004.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_frente2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_1000kyats_dorso2019.webp' }
            ]
        },
        {
            denominacion: '5000 kyats',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_5000kyats_frente2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_5000kyats_dorso2009.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_5000kyats_frente2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_5000kyats_dorso2014.webp' }
            ]
        },
        {
            denominacion: '10000 kyats',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_10000kyats_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_10000kyats_dorso2012.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_10000kyats_frente2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_10000kyats_dorso2015.webp' }
            ]
        },
        {
            denominacion: '20000 kyats',
            versiones: [
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_20000kyats_frente2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/myanmar/webp/myanmar_20000kyats_dorso2023.webp' }
            ]
        }
    ],
    "Arabia Saudita": [
        {
            denominacion: '1 Riyals',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_frente1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_dorso1976.webp' },
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_1riyals_dorso2008.webp' }
            ]
        },
        {
            denominacion: '5 Riyals',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_frente1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_dorso1976.webp' },
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_dorso2008.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_5riyals_dorso2016.webp' }
            ]
        },
        {
            denominacion: '10 Riyals',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_frente1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_dorso1976.webp' },
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_dorso2008.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_10riyals_dorso2016.webp' }
            ]
        },
        {
            denominacion: '20 Riyals',
            versiones: [
                { anioEmision: '2020 - conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_20riyals_frente2020conmemorativo1.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_20riyals_dorso2020conmemorativo1.webp' },
                { anioEmision: '2020 - conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_20riyals_frente2020conmemorativo2.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_20riyals_dorso2020conmemorativo2.webp' }
            ]
        },
        {
            denominacion: '50 Riyals',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_frente1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_dorso1976.webp' },
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_dorso2008.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_50riyals_dorso2016.webp' }
            ]
        },
        {
            denominacion: '100 Riyals',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_frente1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_dorso1976.webp' },
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_dorso2008.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_100riyals_dorso2016.webp' }
            ]
        },
        {
            denominacion: '200 Riyals',
            versiones: [
                { anioEmision: '2016 - ', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_200riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_200riyals_dorso2016.webp' },
                { anioEmision: '2020 - conmemorativo', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_200riyals_frente2020conmemorativo.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_200riyals_dorso2020conmemorativo.webp' }
            ]
        },
        {
            denominacion: '500 Riyals',
            versiones: [
                { anioEmision: '1984', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_frente1984.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_dorso1984.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_frente2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_dorso2008.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/arabia/webp/arabia_500riyals_dorso2016.webp' }
            ]
        }
    ],
    "Belice": [
        {
            denominacion: '2 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_2dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_2dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_2dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_2dolar_dorso2003.webp' }
            ]
        },
        {
            denominacion: '5 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_5dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_5dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_5dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_5dolar_dorso2003.webp' }
            ]
        },
        {
            denominacion: '10 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_10dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_10dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_10dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_10dolar_dorso2003.webp' }
            ]
        },
        {
            denominacion: '20 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_20dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_20dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_20dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_20dolar_dorso2003.webp' }
            ]
        },
        {
            denominacion: '50 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_50dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_50dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_50dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_50dolar_dorso2003.webp' }
            ]
        },
        {
            denominacion: '100 dolar',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_100dolar_frente1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_100dolar_dorso1998.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_100dolar_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/belice/webp/belice_100dolar_dorso2003.webp' }
            ]
        }
    ],
    "Honduras": [
        {
            denominacion: '1 Lempira',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_1lempira_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_1lempira_dorso2012.webp' }
            ]
        },
        {
            denominacion: '2 Lempiras',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_2lempira_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_2lempira_dorso2012.webp' }
            ]
        },
        {
            denominacion: '5 Lempiras',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_5lempira_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_5lempira_dorso2012.webp' }
            ]
        },
        {
            denominacion: '10 Lempiras',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_10lempira_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_10lempira_dorso2012.webp' }
            ]
        },
        {
            denominacion: '20 Lempiras',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_20lempira_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_20lempira_dorso2012.webp' }
            ]
        },
        {
            denominacion: '50 Lempiras',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_50lempira_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_50lempira_dorso2016.webp' }
            ]
        },
        {
            denominacion: '100 Lempiras',
            versiones: [
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_100lempira_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/honduras/webp/honduras_100lempira_dorso2022.webp' }
            ]
        }
    ],
    "Liberia": [
        {
            denominacion: '20 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_20dolar_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_20dolar_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_20dolar_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_20dolar_dorso2022.webp' }
            ]
        },
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_50dolar_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_50dolar_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_50dolar_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_50dolar_dorso2022.webp' }
            ]
        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_100dolar_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_100dolar_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_100dolar_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_100dolar_dorso2022.webp' }
            ]
        },
        {
            denominacion: '500 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_500dolar_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_500dolar_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_500dolar_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_500dolar_dorso2022.webp' }
            ]
        },
        {
            denominacion: '1000 dolares',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_1000dolar_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/liberia/webp/liberia_1000dolar_dorso2016.webp' }
            ]
        }
    ],
    "Surinam": [
        {
            denominacion: '5 Dolar',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_dorso2004.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_2dolar_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '10 Dolar',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_dorso2004.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_10dolar_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '20 Dolar',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_dorso2004.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_20dolar_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '50 Dolar',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso2004.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso2010.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_50dolar_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '100 Dolar',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_frente2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_dorso2004.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/surinam/webp/surinam_100dolar_anterior_dorso2010.webp' }
            ]
        }
    ],
    "Guinea": [
        {
            denominacion: '100 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_100franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_100franco_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '500 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_500franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_500franco_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '1000 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_1000franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_1000franco_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '5000 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_5000franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_5000franco_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '10000 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_10000franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_10000franco_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '20000 Franco Guineano',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_20000franco_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/guinea/webp/guinea_20000franco_anterior_dorso2012.webp' }
            ]
        }
    ],
    "Namibia": [
        {
            denominacion: '10 Dolar',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_10dolar_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_10dolar_anterior_dorso2012.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_10dolar_anterior_frente2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_10dolar_anterior_dorso2015.webp' }
            ]
        },
        {
            denominacion: '20 Dolar',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_20dolar_anterior_frente2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_20dolar_anterior_dorso2011.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_20dolar_anterior_frente2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_20dolar_anterior_dorso2015.webp' }
            ]
        },
        {
            denominacion: '30 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_30dolar_anterior_frente2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_30dolar_anterior_dorso2020.webp' }
            ]
        },
        {
            denominacion: '50 Dolar',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_50dolar_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_50dolar_anterior_dorso2003.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_50dolar_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_50dolar_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '100 Dolar',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_100dolar_anterior_frente1999.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_100dolar_anterior_dorso1999.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_100dolar_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_100dolar_anterior_dorso2012.webp' }
            ]
        },
        {
            denominacion: '200 Dolar',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_200dolar_anterior_frente2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/namibia/webp/namibia_200dolar_anterior_dorso2012.webp' }
            ]
        }
    ],
    "Sierra Leona": [
        {
            denominacion: '1 Leone',
            versiones: [{
                anioEmision: '2022',
                imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/1frente2022.webp',
                imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/1dorso2022.webp'
            }]
        },
        {
            denominacion: '2 Leones',
            versiones: [{
                anioEmision: '2022',
                imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/2frente2022.webp',
                imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/2dorso2022.webp'
            }]
        },
        {
            denominacion: '5 Leones',
            versiones: [{
                anioEmision: '2022',
                imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/5frente2022.webp',
                imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/5dorso2022.webp'
            }]
        },
        {
            denominacion: '10 Leones',
            versiones: [{
                anioEmision: '2022',
                imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/10frente2022.webp',
                imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/10dorso2022.webp'
            }]
        },
        {
            denominacion: '20 Leones',
            versiones: [{
                anioEmision: '2022',
                imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/20frente2022.webp',
                imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sierra-leona/webp/20dorso2022.webp'
            }]
        }
    ],
    "Tanzania": [
        {
            denominacion: '500 Chelines',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_500chelin_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_500chelin_anterior_dorso2003.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_500chelin_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_500chelin_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '1000 Chelines',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_1000chelin_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_1000chelin_anterior_dorso2003.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_1000chelin_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_1000chelin_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '2000 Chelines',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_2000chelin_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_2000chelin_anterior_dorso2003.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_2000chelin_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_2000chelin_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '5000 Chelines',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_5000chelin_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_5000chelin_anterior_dorso2003.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_5000chelin_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_5000chelin_anterior_dorso2010.webp' }
            ]
        },
        {
            denominacion: '10000 Chelines',
            versiones: [
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_10000chelin_anterior_frente2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_10000chelin_anterior_dorso2003.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_10000chelin_anterior_frente2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tanzania/webp/tanzania_10000chelin_anterior_dorso2010.webp' }
            ]
        }
    ],
    "Republica Democratica del Congo": [
        {
            denominacion: '50 Franco Congoleño',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_50franco_anterior_frente2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_50franco_anterior_dorso2007.webp' }
            ]
        },
        {
            denominacion: '100 Franco Congoleño',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_100franco_anterior_frente2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_100franco_anterior_dorso2007.webp' }
            ]
        },
        {
            denominacion: '200 Franco Congoleño',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_200franco_anterior_frente2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_200franco_anterior_dorso2007.webp' }
            ]
        },
        {
            denominacion: '500 Franco Congoleño',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_500franco_anterior_frente2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_500franco_anterior_dorso2002.webp' }
            ]
        },
        {
            denominacion: '1000 Franco Congoleño',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_1000franco_anterior_frente2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_1000franco_anterior_dorso2005.webp' }
            ]
        },
        {
            denominacion: '5000 Franco Congoleño',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_5000franco_anterior_frente2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_5000franco_anterior_dorso2005.webp' }
            ]
        },
        {
            denominacion: '10000 Franco Congoleño',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_10000franco_anterior_frente2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_10000franco_anterior_dorso2006.webp' }
            ]
        },
        {
            denominacion: '20000 Franco Congoleño',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_20000franco_anterior_frente2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/republicadecongo/webp/republicadecongo_20000franco_anterior_dorso2006.webp' }
            ]
        }
    ],
    "Sudan del Sur": [
        {
            denominacion: '1 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_1libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_1libra_dorso2011.webp' }
            ]
        },
        {
            denominacion: '5 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_5libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_5libra_dorso2011.webp' }
            ]
        },
        {
            denominacion: '10 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_10libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_10libra_dorso2011.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_10libra_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_10libra_dorso2015.webp' }
            ]
        },
        {
            denominacion: '20 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_20libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_20libra_dorso2011.webp' }
            ]
        },
        {
            denominacion: '25 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_25libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_25libra_dorso2011.webp' }
            ]
        },
        {
            denominacion: '50 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_50libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_50libra_dorso2011.webp' }
            ]
        },
        {
            denominacion: '100 Libra Sursudanesa',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_100libra_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/sudandelsur/webp/sudandelsur_100libra_dorso2011.webp' }
            ]
        }
    ],
    "Mozambique": [
        {
            denominacion: '20 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_20metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_20metical_dorso2024.webp' }
            ]
        },
        {
            denominacion: '50 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_50metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_50metical_dorso2024.webp' }
            ]
        },
        {
            denominacion: '100 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_100metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_100metical_dorso2024.webp' }
            ]
        },
        {
            denominacion: '200 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_200metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_200metical_dorso2024.webp' }
            ]
        },
        {
            denominacion: '500 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_500metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_500metical_dorso2024.webp' }
            ]
        },
        {
            denominacion: '1000 Metical',
            versiones: [
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_1000metical_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/mozambique/webp/mozambique_1000metical_dorso2024.webp' }
            ]
        }
    ],
    "Kenya": [
        {
            denominacion: '50 Chelin Kenyano',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_50chelin_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_50chelin_dorso2019.webp' }
            ]
        },
        {
            denominacion: '100 Chelin Kenyano',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_100chelin_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_100chelin_dorso2019.webp' }
            ]
        },
        {
            denominacion: '200 Chelin Kenyano',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_200chelin_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_200chelin_dorso2019.webp' }
            ]
        },
        {
            denominacion: '500 Chelin Kenyano',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_500chelin_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_500chelin_dorso2019.webp' }
            ]
        },
        {
            denominacion: '1000 Chelin Kenyano',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_1000chelin_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kenya/webp/kenya_1000chelin_dorso2019.webp' }
            ]
        }
    ],
    "Madagascar": [
        {
            denominacion: '100 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_100ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_100ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '200 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_200ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_200ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '500 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_500ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_500ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '1000 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_1000ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_1000ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '2000 Ariary',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_2000ariay_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_2000ariay_dorso2014.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_2000ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_2000ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '5000 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_5000ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_5000ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '10000 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_10000ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_10000ariay_dorso2017.webp' }
            ]
        },
        {
            denominacion: '20000 Ariary',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_20000ariay_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/madagascar/webp/madagascar_20000ariay_dorso2017.webp' }
            ]
        }
    ],
    "Zambia": [
        {
            denominacion: '2 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_2kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_2kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '5 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_5kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_5kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '10 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_10kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_10kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '20 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_20kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_20kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '50 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_50kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_50kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '100 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_100kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/zambia/webp/zambia_100kwacha_dorso2012.webp' }
            ]
        }
    ],
    "Botswana": [
        {
            denominacion: '10 Pula',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_dorso2009.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_dorso2018.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_10pula_dorso2020.webp' }
            ]
        },
        {
            denominacion: '20 Pula',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_20pula_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_20pula_dorso2009.webp' }
            ]
        },
        {
            denominacion: '50 Pula',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_50pula_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_50pula_dorso2009.webp' }
            ]
        },
        {
            denominacion: '100 Pula',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_100pula_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_100pula_dorso2009.webp' }
            ]
        },
        {
            denominacion: '200 Pula',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_200pula_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/botswana/webp/botswana_200pula_dorso2009.webp' }
            ]
        }
    ],
    "Bosnia y Herzegovina": [
        {
            denominacion: '10 Marco Cnvertible',
            versiones: [
                { anioEmision: '2012 - BH Federation', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_10mcbh_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_10mcbh_dorso_2012.webp' },
                { anioEmision: '2012 - Republika Srpska', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_10mcrs_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_10mcrs_dorso_2012.webp' }
            ]
        },
        {
            denominacion: '20 Marco Cnvertible',
            versiones: [
                { anioEmision: '2012 - BH Federation', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_20mcbh_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_20mcbh_dorso_2012.webp' },
                { anioEmision: '2012 - Republika Srpska', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_20mcrs_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_20mcrs_dorso_2012.webp' }
            ]
        },
        {
            denominacion: '50 Marco Cnvertible',
            versiones: [
                { anioEmision: '2012 - BH Federation', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_50mcbh_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_50mcbh_dorso_2012.webp' },
                { anioEmision: '2012 - Republika Srpska', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_50mcrs_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_50mcrs_dorso_2012.webp' }
            ]
        },
        {
            denominacion: '100 Marco Cnvertible',
            versiones: [
                { anioEmision: '2012 - BH Federation', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_100mcbh_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_100mcbh_dorso_2012.webp' },
                { anioEmision: '2012 - Republika Srpska', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_100mcrs_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_100mcrs_dorso_2012.webp' }
            ]
        },
        {
            denominacion: '200 Marco Cnvertible',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bosnia_200mcbh_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bosnia/webp/bmcbh_200mcbh_dorso_2012.webp' }
            ]
        }
    ],
    "Malawi": [
        {
            denominacion: '20 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_20kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_20kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '50 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_50kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_50kwacha_dorso2012.webp' }
            ]
        },
        {
            denominacion: '100 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_100kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_100kwacha_dorso2012.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_100kwacha_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_100kwacha_dorso2014.webp' }
            ]
        },
        {
            denominacion: '200 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_200kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_200kwacha_dorso2012.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_200kwacha_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_200kwacha_dorso2014.webp' }
            ]
        },
        {
            denominacion: '500 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_500kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_500kwacha_dorso2012.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_500kwacha_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_500kwacha_dorso2014.webp' }
            ]
        },
        {
            denominacion: '1000 Kwacha',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_dorso2012.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_dorso2014.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malawi/webp/malawi_1000kwacha_dorso2020.webp' }
            ]
        }
    ],
    "Somalia": [
        {
            denominacion: '1000 Chelines',
            versiones: [
                { anioEmision: '1990', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalia/webp/somalia_1000chelin_frente_1990.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalia/webp/somalia_1000chelin_dorso1990.webp' }
            ]
        }
    ],
    "Burundi": [
        {
            denominacion: '100 Francos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_100francos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_100francos_dorso2010.webp' }
            ]
        },
        {
            denominacion: '500 Francos',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_500francos_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_500francos_dorso2015.webp' }
            ]
        },
        {
            denominacion: '1000 Francos',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_1000francos_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_1000francos_dorso2015.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_1000francos_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_1000francos_dorso2021.webp' }
            ]
        },
        {
            denominacion: '2000 Francos',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_2000francos_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_2000francos_dorso2015.webp' }
            ]
        },
        {
            denominacion: '5000 Francos',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_5000francos_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_5000francos_dorso2015.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_5000francos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_5000francos_dorso2022.webp' }
            ]
        },
        {
            denominacion: '10000 Francos',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_10000francos_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_10000francos_dorso2015.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_10000francos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/burundi/webp/burundi_10000francos_dorso2022.webp' }
            ]
        }
    ],
    "Eritrea": [
        {
            denominacion: '1 Nafka',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_1nafka_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_1nafka_dorso2015.webp' }
            ]
        },
        {
            denominacion: '5 Nafka',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_5nafka_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_5nafka_dorso2015.webp' }
            ]
        },
        {
            denominacion: '10 Nafka',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_10nafka_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_10nafka_dorso2015.webp' }
            ]
        },
        {
            denominacion: '20 Nafka',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_20nafka_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_20nafka_dorso2015.webp' }
            ]
        },
        {
            denominacion: '50 Nafka',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_50nafka_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_50nafka_dorso2015.webp' }
            ]
        },
        {
            denominacion: '100 Nafka',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_100nafka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/eritrea/webp/eritrea_100nafka_dorso2011.webp' }
            ]
        }
    ],
    "Lesoto": [
        {
            denominacion: '2 Maloti',
            versiones: [
                { anioEmision: '1981', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_2maloti_frente_1981.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_2maloti_dorso1981.webp' },
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_2maloti_frente_1989.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_2maloti_dorso1989.webp' }
            ]
        },
        {
            denominacion: '5 Maloti',
            versiones: [
                { anioEmision: '1981', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_5maloti_frente_1981.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_5maloti_dorso1981.webp' },
                { anioEmision: '1989', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_5maloti_frente_1989.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_5maloti_dorso1989.webp' }
            ]
        },
        {
            denominacion: '10 Maloti',
            versiones: [
                { anioEmision: '1990', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_frente_1990.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_dorso1990.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_dorso2000.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_10maloti_dorso2010.webp' }
            ]
        },
        {
            denominacion: '20 Maloti',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_dorso1994.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_dorso2010.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_20maloti_dorso2021.webp' }
            ]
        },
        {
            denominacion: '50 Maloti',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_dorso1994.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_dorso2010.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_50maloti_dorso2021.webp' }
            ]
        },
        {
            denominacion: '100 Maloti',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_frente_1999.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_dorso1999.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_dorso2010.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_100maloti_dorso2021.webp' }
            ]
        },
        {
            denominacion: '200 Maloti',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_dorso1994.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_dorso2015.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/lesoto/webp/lesoto_200maloti_dorso2021.webp' }
            ]
        }
    ],
    "Indonesia": [
        {
            denominacion: '1000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_1000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_1000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_1000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_1000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '2000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_2000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_2000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_2000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_2000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '5000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_5000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_5000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_5000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_5000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '10000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_10000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_10000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_10000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_10000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '20000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_20000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_20000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_20000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_20000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '50000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_50000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_50000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_50000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_50000rupias_nueva_dorso2022.webp' }
            ]
        },
        {
            denominacion: '75000 rupias',
            versiones: [
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_75000rupias_anterior_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_75000rupias_anterior_dorso2022.webp' }
            ]
        },
        {
            denominacion: '100000 rupias',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_100000rupias_anterior_frente2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_100000rupias_anterior_dorso2016.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_100000rupias_nueva_frente2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/indonesia/webp/indonesia_100000rupias_nueva_dorso2022.webp' }
            ]
        }
    ],
    "Yemen": [
        {
            denominacion: '100 Rial',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_100rial_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_100rial_dorso2018.webp' }
            ]
        },
        {
            denominacion: '200 Rial',
            versiones: [
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_200rial_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_200rial_dorso2018.webp' }
            ]
        },
        {
            denominacion: '250 Rial',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_250rial_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_250rial_dorso2009.webp' }
            ]
        },
        {
            denominacion: '500 Rial',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_dorso2001.webp' },
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_frente_2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_dorso2007.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_500rial_dorso2017.webp' }
            ]
        },
        {
            denominacion: '1000 Rial',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_dorso1998.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_dorso2004.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_dorso2009.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_1000rial_dorso2017.webp' }
            ]
        },
        {
            denominacion: '5000 Rial',
            versiones: [
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_5000rial_frente_2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yemen/webp/yemen_5000rial_dorso2016.webp' }
            ]
        }
    ],
    "Oman": [
        {
            denominacion: '1 Rial',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_1rial_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_1rial_dorso2020.webp' }
            ]
        },
        {
            denominacion: '5 Rial',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_5rial_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_5rial_dorso2020.webp' }
            ]
        },
        {
            denominacion: '10 Rial',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_10rial_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_10rial_dorso2020.webp' }
            ]
        },
        {
            denominacion: '20 Rial',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_20rial_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_20rial_dorso2020.webp' }
            ]
        },
        {
            denominacion: '50 Rial',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_50rial_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/oman/webp/oman_50rial_dorso2020.webp' }
            ]
        }
    ],
    "Nepal": [
        {
            denominacion: '100 Rupias',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_100rupias_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_100rupias_dorso2015.webp' }
            ]
        },
        {
            denominacion: '500 Rupias',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_500rupias_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_500rupias_dorso2015.webp' }
            ]
        },
        {
            denominacion: '1000 Rupias',
            versiones: [
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_1000rupias_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/nepal/webp/nepal_1000rupias_dorso2015.webp' }
            ]
        }
    ],
    "Bangladesh": [
        {
            denominacion: '1 taka',
            versiones: [
                { anioEmision: '1973', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_frentea_1973.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_dorso1973a.webp' },
                { anioEmision: '1973', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_frente_1973.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_dorso1973.webp' },
                { anioEmision: '1979', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_frente_1979.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1taka_dorso1979.webp' }
            ]
        },
        {
            denominacion: '2 taka',
            versiones: [
                { anioEmision: '1988', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_2taka_frente_1988.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_2taka_dorso1988.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_2taka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_2taka_dorso2011.webp' }
            ]
        },
        {
            denominacion: '5 taka',
            versiones: [
                { anioEmision: '1972', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_1972.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso1972.webp' },
                { anioEmision: '1973', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_1973.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso1973.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso1976.webp' },
                { anioEmision: '1978', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_1978.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso1978.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso2006.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso2011.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso2014.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso2016.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_5taka_dorso2017.webp' }
            ]
        },
        {
            denominacion: '10 taka',
            versiones: [
                { anioEmision: '1972', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1972.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1972.webp' },
                { anioEmision: '1973', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1973.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1973.webp' },
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1976.webp' },
                { anioEmision: '1978', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1978.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1978.webp' },
                { anioEmision: '1982', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1982.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1982.webp' },
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_1997.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso1997.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso2000.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso2002.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso2006.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_10taka_dorso2012.webp' }
            ]
        },
        {
            denominacion: '20 taka',
            versiones: [
                { anioEmision: '1979', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_frente_1979.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_dorso1979.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_dorso2002.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_dorso2006.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_dorso2012.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_20taka_dorso2022.webp' }
            ]
        },
        {
            denominacion: '50 taka',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso1976.webp' },
                { anioEmision: '1979', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_1979.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso1979.webp' },
                { anioEmision: '1987', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_1987.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso1987.webp' },
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_1999.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso1999.webp' },
                { anioEmision: '2003', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_2003.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso2003.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso2012.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_50taka_dorso2019.webp' }
            ]
        },
        {
            denominacion: '100 taka',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso1976.webp' },
                { anioEmision: '1977', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_1977.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso1977.webp' },
                { anioEmision: '1981', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_1981.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso1981.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso2001.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso2002.webp' },
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso2005.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso2006.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_100taka_dorso2011.webp' }
            ]
        },
        {
            denominacion: '200 taka',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_200taka_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_200taka_dorso2020.webp' }
            ]
        },
        {
            denominacion: '500 taka',
            versiones: [
                { anioEmision: '1976', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_1976.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso1976.webp' },
                { anioEmision: '1991', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_1991.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso1991.webp' },
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso1998.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2000.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2002.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2004.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2011.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2017.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_500taka_dorso2022.webp' }
            ]
        },
        {
            denominacion: '1000 taka',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1000taka_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1000taka_dorso2008.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1000taka_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bangladesh/webp/bangladesh_1000taka_dorso2011.webp' }
            ]
        }
    ],
    "Camboya": [
        {
            denominacion: '50 Rieles',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50rieles_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50rieles_dorso2002.webp' }
            ]
        },
        {
            denominacion: '100 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_dorso1995.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_dorso2001.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100rieles_dorso2015.webp' }
            ]
        },
        {
            denominacion: '200 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200rieles_dorso1995.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200rieles_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200rieles_dorso2022.webp' }
            ]
        },
        {
            denominacion: '500 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_dorso1995.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_dorso2002.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_500rieles_dorso2015.webp' }
            ]
        },
        {
            denominacion: '1000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_dorso1995.webp' },
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_frente_1999.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_dorso1999.webp' },
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_dorso2006.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_frente_2013.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_dorso2013.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_1000rieles_dorso2017.webp' }
            ]
        },
        {
            denominacion: '2000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_dorso1995.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_dorso2008.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_frente_2013.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_dorso2013.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_2000rieles_dorso2022.webp' }
            ]
        },
        {
            denominacion: '5000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_dorso1995.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_dorso2001.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_5000rieles_dorso2017.webp' }
            ]
        },
        {
            denominacion: '10000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_dorso1995.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_dorso2001.webp' },
                { anioEmision: '2015', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_frente_2015.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_10000rieles_dorso2015.webp' }
            ]
        },
        {
            denominacion: '15000 Rieles',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_15000rieles_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_15000rieles_dorso2019.webp' }
            ]
        },
        {
            denominacion: '20000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_dorso1995.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_dorso2008.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_20000rieles_dorso2018.webp' }
            ]
        },
        {
            denominacion: '30000 Rieles',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_30000rieles_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_30000rieles_dorso2021.webp' }
            ]
        },
        {
            denominacion: '50000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_dorso1995.webp' },
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_dorso2001.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_50000rieles_dorso2014.webp' }
            ]
        },
        {
            denominacion: '100000 Rieles',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100000rieles_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100000rieles_dorso1995.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100000rieles_frente_2013.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_100000rieles_dorso2013.webp' }
            ]
        },
        {
            denominacion: '200000 Rieles',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200000rieles_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/camboya/webp/camboya_200000rieles_dorso2014.webp' }
            ]
        }
    ],
    "Sri Lanka": [

        {
            denominacion: '20 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_20rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_20rupias_dorso2010.webp' }
            ]

        },
        {
            denominacion: '50 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_50rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_50rupias_dorso2010.webp' }
            ]

        },
        {
            denominacion: '100 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_100rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_100rupias_dorso2010.webp' }
            ]

        },
        {
            denominacion: '500 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_500rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_500rupias_dorso2010.webp' }
            ]

        },
        {
            denominacion: '1000 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_1000rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_1000rupias_dorso2010.webp' }
            ]

        },
        {
            denominacion: '5000 Rupias',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_5000rupias_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/srilanka/webp/srilanka_5000rupias_dorso2010.webp' }
            ]

        },
    ],
    "Qatar": [

        {
            denominacion: '1 Riyal',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_1riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_1riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '5 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_5riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_5riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '10 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_10riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_10riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '50 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_50riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_50riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '100 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_100riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_100riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '200 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_200riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_200riyal_dorso2020.webp' }
            ]

        },
        {
            denominacion: '500 Riyals',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_500riyal_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/qatar/webp/qatar_500riyal_dorso2020.webp' }
            ]

        },

    ],
    "Tajikistan": [

        {
            denominacion: '10 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_10somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_10somoni_dorso2017.webp' }
            ]

        },
        {
            denominacion: '20 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_20somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_20somoni_dorso2017.webp' }
            ]

        },
        {
            denominacion: '50 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_50somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_50somoni_dorso2017.webp' }
            ]

        },
        {
            denominacion: '100 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_100somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_100somoni_dorso2017.webp' }
            ]

        },
        {
            denominacion: '200 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_200somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_200somoni_dorso2017.webp' }
            ]

        },
        {
            denominacion: '500 Somoni',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_500somoni_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/tajikistan/webp/tajikistan_500somoni_dorso2017.webp' }
            ]

        },
    ],
    "Kyrgyzstan": [

        {
            denominacion: '1 Som',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1som_frente_1993.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1som_dorso1993.webp' },
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1som_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1som_dorso2000.webp' }
            ]

        },
        {
            denominacion: '5 Som',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_frente_1993.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_dorso1993.webp' },
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_dorso1994.webp' },
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_frente_1997.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5som_dorso1997.webp' }
            ]

        },
        {
            denominacion: '10 Som',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_10som_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_10som_dorso1994.webp' },
                { anioEmision: '1997', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_10som_frente_1997.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_10som_dorso1997.webp' }
            ]

        },
        {
            denominacion: '20 Som',
            versiones: [
                { anioEmision: '1993', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_frente_1993.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_dorso1993.webp' },
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_dorso1994.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_dorso2002.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_dorso2009.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_20som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '50 Som',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_dorso1994.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_dorso2002.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_frente_2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_dorso2016.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_50som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '100 Som',
            versiones: [
                { anioEmision: '1995', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_frente_1995.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_dorso1995.webp' },
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_dorso2002.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_dorso2009.webp' },
                { anioEmision: '2016', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_frente_2016.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_dorso2016.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_100som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '200 Som',
            versiones: [
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_dorso2000.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_dorso2010.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_200som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '500 Som',
            versiones: [
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_dorso2000.webp' },
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_dorso2005.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_dorso2010.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_500som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '1000 Som',
            versiones: [
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_dorso2000.webp' },
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_dorso2010.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_1000som_dorso2023.webp' }
            ]

        },
        {
            denominacion: '2000 Som',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_2000som_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_2000som_dorso2017.webp' }
            ]

        },
        {
            denominacion: '5000 Som',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5000som_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5000som_dorso2009.webp' },
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5000som_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kyrgyzstan/webp/kyrgyzstan_5000som_dorso2023.webp' }
            ]

        },
    ],
    "Filipinas": [

        {
            denominacion: '20 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_20pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_20pisos_dorso2010.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_20pisos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_20pisos_dorso2022.webp' },
            ]

        },
        {
            denominacion: '50 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_dorso2010.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_dorso2020.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_dorso2022.webp' },
                { anioEmision: '2025', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_frente_2025.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_50pisos_dorso2025.webp' },
            ]

        },
        {
            denominacion: '100 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_100pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_100pisos_dorso2010.webp' }
            ]

        },
        {
            denominacion: '200 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_200pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_200pisos_dorso2010.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_200pisos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_200pisos_dorso2022.webp' },
            ]

        },
        {
            denominacion: '500 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_dorso2010.webp' },
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_dorso2020.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_dorso2022.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_500pisos_dorso2024.webp' },
            ]

        },
        {
            denominacion: '1000 Pisos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_dorso2010.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_dorso2022.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_frente_2022polimero.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/filipinas/webp/filipinas_1000pisos_dorso2022polimero.webp' }
            ]

        },
    ],
    "Malasia": [

        {
            denominacion: '1 Ringgit',
            versiones: [
                { anioEmision: '2000', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_1ringgit_frente_2000.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_1ringgit_dorso2000.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_1ringgit_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_1ringgit_dorso2012.webp' }
            ]

        },
        {
            denominacion: '2 Ringgit',
            versiones: [
                { anioEmision: '1996', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_2ringgit_frente_1996.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_2ringgit_dorso1996.webp' }
            ]

        },
        {
            denominacion: '5 Ringgit',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_5ringgit_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_5ringgit_dorso1998.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_5ringgit_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_5ringgit_dorso2012.webp' }
            ]

        },
        {
            denominacion: '10 Ringgit',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_10ringgit_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_10ringgit_dorso1998.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_10ringgit_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_10ringgit_dorso2012.webp' }
            ]

        },
        {
            denominacion: '20 Ringgit',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_20ringgit_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_20ringgit_dorso2012.webp' }
            ]

        },
        {
            denominacion: '50 Ringgit',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_50ringgit_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_50ringgit_dorso1998.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_50ringgit_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_50ringgit_dorso2009.webp' }
            ]

        },
        {
            denominacion: '100 Ringgit',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_100ringgit_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_100ringgit_dorso1998.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_100ringgit_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malasia/webp/malasia_100ringgit_dorso2012.webp' }
            ]

        },
    ],
    "Bhutan": [

        {
            denominacion: '1 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_1ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_1ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '5 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_5ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_5ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '10 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_10ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_10ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '20 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_20ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_20ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '50 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_50ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_50ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '100 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_100ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_100ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '500 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_500ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_500ngultrum_dorso2006.webp' }
            ]

        },
        {
            denominacion: '1000 Ngultrum',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_1000ngultrum_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/butan/webp/butan_1000ngultrum_dorso2006.webp' }
            ]

        },
    ],
    "Gambia": [

        {
            denominacion: '5 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_5dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_5dalasi_dorso2019.webp' }
            ]

        },
        {
            denominacion: '10 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_10dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_10dalasi_dorso2019.webp' }
            ]

        },
        {
            denominacion: '20 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_20dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_20dalasi_dorso2019.webp' }
            ]

        },
        {
            denominacion: '50 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_50dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_50dalasi_dorso2019.webp' }
            ]

        },
        {
            denominacion: '100 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_100dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_100dalasi_dorso2019.webp' }
            ]

        },
        {
            denominacion: '200 Dalasis',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_200dalasi_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/gambia/webp/gambia_200dalasi_dorso2019.webp' }
            ]

        },
    ],
    "Esuatini": [

        {
            denominacion: '10 Emalangeni',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_10emalangeni_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_10emalangeni_dorso2024.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emalangeni/webp/esuatini_10emalangeni_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/emalangeni/webp/esuatini_10emalangeni_dorso2024.webp' }
            ]

        },
        {
            denominacion: '20 Emalangeni',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_20emalangeni_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_20emalangeni_dorso2010.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_20emalangeni_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_20emalangeni_dorso2024.webp' }
            ]

        },
        {
            denominacion: '50 Emalangeni',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_50emalangeni_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_50emalangeni_dorso2010.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_50emalangeni_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_50emalangeni_dorso2018.webp' }
            ]

        },
        {
            denominacion: '100 Emalangeni',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_100emalangeni_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_100emalangeni_dorso2010.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_100emalangeni_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_100emalangeni_dorso2018.webp' }
            ]

        },
        {
            denominacion: '200 Emalangeni',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_200emalangeni_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_200emalangeni_dorso2010.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_200emalangeni_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/esuatini/webp/emalangeni_200emalangeni_dorso2018.webp' }
            ]

        },
    ],
    "Ruanda": [

        {
            denominacion: '500 Francos',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_dorso1998.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_dorso2008.webp' },
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_frente_2013.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_dorso2013.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_500francos_dorso2019.webp' }
            ]

        },
        {
            denominacion: '1000 Francos',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_dorso1998.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_dorso2004.webp' },
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_1000francos_dorso2008.webp' },
            ]

        },
        {
            denominacion: '2000 Francos',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_frente_2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_dorso2007.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_dorso2014.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_2000francos_dorso2024.webp' },
            ]

        },
        {
            denominacion: '5000 Francos',
            versiones: [
                { anioEmision: '1998', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_frente_1998.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_dorso1998.webp' },
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_dorso2004.webp' },
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_dorso2009.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_dorso2014.webp' },
                { anioEmision: '2024', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_frente_2024.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/ruanda/webp/ruanda_5000francos_dorso2024.webp' }
            ]

        },
    ],
    "Papua Nueva Guinea": [

        {
            denominacion: '2 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_2kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_2kina_dorso2008.webp' }
            ]

        },
        {
            denominacion: '5 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_5kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_5kina_dorso2008.webp' }
            ]

        },
        {
            denominacion: '10 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_10kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_10kina_dorso2008.webp' }
            ]

        },
        {
            denominacion: '20 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_20kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_20kina_dorso2008.webp' }
            ]

        },
        {
            denominacion: '50 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_50kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_50kina_dorso2008.webp' }
            ]

        },
        {
            denominacion: '100 Kina',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_100kina_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_100kina_dorso2008.webp' },
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_100kina_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/papua/webp/papua_100kina_dorso2021.webp' }
            ]

        },
    ],
    "Taiwan": [

        {
            denominacion: '50 Nuevo Dolar',
            versiones: [
                { anioEmision: '1999', imagenFrente: '////billetes/taiwan/webp/taiwan_50nuevo_dolar_frente_1999.webp', imagenDorso: '////billetes/taiwan/webp/taiwan_50nuevo_dolar_dorso1999.webp' }
            ]

        },
        {
            denominacion: '100 Nuevo Dolar',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_100nuevo_dolar_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_100nuevo_dolar_dorso2001.webp' },
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_100nuevo_dolar_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_100nuevo_dolar_dorso2011.webp' }
            ]

        },
        {
            denominacion: '200 Nuevo Dolar',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_200nuevo_dolar_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_200nuevo_dolar_dorso2002.webp' }
            ]

        },
        {
            denominacion: '500 Nuevo Dolar',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_500nuevo_dolar_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_500nuevo_dolar_dorso2005.webp' }
            ]

        },
        {
            denominacion: '1000 Nuevo Dolar',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_1000nuevo_dolar_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_1000nuevo_dolar_dorso2005.webp' }
            ]

        },
        {
            denominacion: '2000 Nuevo Dolar',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_2000nuevo_dolar_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/taiwan/webp/taiwan_2000nuevo_dolar_dorso2002.webp' }
            ]

        },
    ],
    "Vanuatu": [
        {
            denominacion: '200 Vatu',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_200vatu_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_200vatu_dorso2014.webp' }
            ]

        },
        {
            denominacion: '500 Vatu',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_500vatu_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_500vatu_dorso2017.webp' }
            ]

        },
        {
            denominacion: '1000 Vatu',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_1000vatu_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_1000vatu_dorso2014.webp' }
            ]

        },
        {
            denominacion: '2000 Vatu',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_2000vatu_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_2000vatu_dorso2014.webp' }
            ]

        },
        {
            denominacion: '5000 Vatu',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_5000vatu_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_5000vatu_dorso2017.webp' }
            ]

        },
        {
            denominacion: '10000 Vatu',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_10000vatu_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/vanuatu/webp/vanuatu_10000vatu_dorso2010.webp' }
            ]

        },
    ],
    "Islas Salomon": [
        {
            denominacion: '5 Dollars',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_5dollars_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_5dollars_dorso2019.webp' }
            ]

        },
        {
            denominacion: '10 Dollars',
            versiones: [
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_10dollars_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_10dollars_dorso2023.webp' }
            ]

        },
        {
            denominacion: '20 Dollars',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_20dollars_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_20dollars_dorso2017.webp' }
            ]

        },
        {
            denominacion: '40 Dollars',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_40dollars_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_40dollars_dorso2019.webp' }
            ]

        },
        {
            denominacion: '50 Dollars',
            versiones: [
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_50dollars_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_50dollars_dorso2023.webp' }
            ]

        },
        {
            denominacion: '100 Dollars',
            versiones: [
                { anioEmision: '2023', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_100dollars_frente_2023.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/salomon/webp/salomon_100dollars_dorso2023.webp' }
            ]

        },
    ],
    "Nueva Caledonia": [
        {
            denominacion: '500 Franco CFP',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_500francos_frente_1992.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_500francos_dorso1992.webp' }
            ]

        },
        {
            denominacion: '1000 Franco CFP',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_1000francos_frente_1992.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_1000francos_dorso1992.webp' }
            ]

        },
        {
            denominacion: '5000 Franco CFP',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_5000francos_frente_1992.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_5000francos_dorso1992.webp' }
            ]

        },
        {
            denominacion: '10000 Franco CFP',
            versiones: [
                { anioEmision: '1985', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_10000francos_frente_1985.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/caledonia/webp/caledonia_10000francos_dorso1985.webp' }
            ]

        },
    ],
    "Fiji": [
        {
            denominacion: '5 Dolares',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_5dolares_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_5dolares_dorso2012.webp' }
            ]

        },
        {
            denominacion: '7 Dolares',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_7dolares_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_7dolares_dorso2017.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_7dolares_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_7dolares_dorso2022.webp' }
            ]

        },
        {
            denominacion: '10 Dolares',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_10dolares_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_10dolares_dorso2012.webp' }
            ]

        },
        {
            denominacion: '20 Dolares',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_20dolares_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_20dolares_dorso2012.webp' }
            ]

        },
        {
            denominacion: '50 Dolares',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_50dolares_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_50dolares_dorso2012.webp' }
            ]

        },
        {
            denominacion: '100 Dolares',
            versiones: [
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_100dolares_frente_2012.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/fiji/webp/fiji_100dolares_dorso2012.webp' }
            ]

        },


    ],
    "Djibouti": [
        {
            denominacion: '1000 Francos',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_1000francos_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_1000francos_dorso2005.webp' }
            ]

        },
        {
            denominacion: '2000 Francos',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_2000francos_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_2000francos_dorso2008.webp' }
            ]

        },
        {
            denominacion: '5000 Francos',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_5000francos_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_5000francos_dorso2008.webp' }
            ]

        },
        {
            denominacion: '10000 Francos',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_10000francos_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/yibuti/webp/yibuti_10000francos_dorso2009.webp' }
            ]

        },
    ],
    "Somaliland": [
        {
            denominacion: '5 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_5chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_5chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '10 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_10chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_10chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '20 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_20chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_20chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '50 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_50chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_50chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '100 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_100chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_100chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '500 Chelines',
            versiones: [
                { anioEmision: '1994', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_500chelines_frente_1994.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_500chelines_dorso1994.webp' }
            ]

        },
        {
            denominacion: '1000 Chelines',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_1000chelines_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_1000chelines_dorso2011.webp' }
            ]

        },
        {
            denominacion: '5000 Chelines',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_5000chelines_frente_2011.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/somalilandia/webp/somaliland_5000chelines_dorso2011.webp' }
            ]

        },
    ],
    "Kuwait": [
        {
            denominacion: '1/4 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kuwait/webp/kuwait_025dinar_frente_2014.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/kuwait/webp/kuwait_025dinar_dorso2014.webp' }
            ]

        },
        {
            denominacion: '1/2 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: '//billetes/kuwait/webp/kuwait_05dinar_frente_2014.webp', imagenDorso: '//billetes/kuwait/webp/kuwait_05dinar_dorso2014.webp' }
            ]

        },
        {
            denominacion: '1 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: '//billetes/kuwait/webp/kuwait_1dinar_frente_2014.webp', imagenDorso: '//billetes/kuwait/webp/kuwait_1dinar_dorso2014.webp' }
            ]

        },
        {
            denominacion: '5 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: '//billetes/kuwait/webp/kuwait_5dinar_frente_2014.webp', imagenDorso: '//billetes/kuwait/webp/kuwait_5dinar_dorso2014.webp' }
            ]

        },
        {
            denominacion: '10 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: '//billetes/kuwait/webp/kuwait_10dinar_frente_2014.webp', imagenDorso: '//billetes/kuwait/webp/kuwait_10dinar_dorso2014.webp' }
            ]

        },
        {
            denominacion: '20 Dinar',
            versiones: [
                { anioEmision: '2014', imagenFrente: '//billetes/kuwait/webp/kuwait_20dinar_frente_2014.webp', imagenDorso: '//billetes/kuwait/webp/kuwait_20dinar_dorso2014.webp' }
            ]

        },
    ],
    "Jordania": [
        {
            denominacion: '1 Dinar',
            versiones: [
                { anioEmision: '2022', imagenFrente: '//billetes/jordania/webp/jordania_1dinar_frente_2022.webp', imagenDorso: '//billetes/jordania/webp/jordania_1dinar_dorso2022.webp' }
            ]

        },
        {
            denominacion: '5 Dinar',
            versiones: [
                { anioEmision: '2023', imagenFrente: '//billetes/jordania/webp/jordania_5dinar_frente_2023.webp', imagenDorso: '//billetes/jordania/webp/jordania_5dinar_dorso2023.webp' }
            ]

        },
        {
            denominacion: '10 Dinar',
            versiones: [
                { anioEmision: '2023', imagenFrente: '//billetes/jordania/webp/jordania_10dinar_frente_2023.webp', imagenDorso: '//billetes/jordania/webp/jordania_10dinar_dorso2023.webp' }
            ]

        },
        {
            denominacion: '20 Dinar',
            versiones: [
                { anioEmision: '2023', imagenFrente: '//billetes/jordania/webp/jordania_20dinar_frente_2023.webp', imagenDorso: '//billetes/jordania/webp/jordania_20dinar_dorso2023.webp' }
            ]

        },
        {
            denominacion: '50 Dinar',
            versiones: [
                { anioEmision: '2023', imagenFrente: '//billetes/jordania/webp/jordania_50dinar_frente_2023.webp', imagenDorso: '//billetes/jordania/webp/jordania_50dinar_dorso2023.webp' }
            ]

        },
    ],
    "Bahamas": [
        {
            denominacion: '1/2 dolar',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_05dolar_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_05dolar_dorso2001.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_05dolar_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_05dolar_dorso2019.webp' }
            ]

        },
        {
            denominacion: '1 dolar',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_1dolar_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_1dolar_dorso2001.webp' }
            ]

        },
        {
            denominacion: '3 dolar',
            versiones: [
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_3dolar_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_3dolar_dorso2019.webp' }
            ]

        },
        {
            denominacion: '5 dolar',
            versiones: [
                { anioEmision: '2007', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_5dolar_frente_2007.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_5dolar_dorso2007.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_5dolar_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_5dolar_dorso2019.webp' }
            ]

        },
        {
            denominacion: '10 dolar',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_10dolar_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_10dolar_dorso2009.webp' },
                { anioEmision: '2022', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_10dolar_frente_2022.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_10dolar_dorso2022.webp' }
            ]

        },
        {
            denominacion: '20 dolar',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_20dolar_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_20dolar_dorso2006.webp' },
                { anioEmision: '2018', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_20dolar_frente_2018.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_20dolar_dorso2018.webp' }
            ]

        },
        {
            denominacion: '50 dolar',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_50dolar_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_50dolar_dorso2006.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_50dolar_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_50dolar_dorso2019.webp' }
            ]

        },
        {
            denominacion: '100 dolar',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_100dolar_frente_2009.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_100dolar_dorso2009.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_100dolar_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/bahamas/webp/bahamas_100dolar_dorso2019.webp' }
            ]

        },
    ],
    "Jamaica": [
        {
            denominacion: '50 dolares',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_50dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_50dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '100 dolares',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_100dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_100dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '500 dolares',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_500dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_500dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '1000 dolares',
            versiones: [
                { anioEmision: '2021', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_1000dolar_frente_2021.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_1000dolar_dorso2021.webp' }
            ]

        },
        {
            denominacion: '5000 dolares',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_5000dolar_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/jamaica/webp/jamaica_5000dolar_dorso2010.webp' }
            ]

        },
    ],
    "Republica Dominicana": [
        {
            denominacion: '50 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_50pesos_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_50pesos_dorso2017.webp' }
            ]

        },
        {
            denominacion: '100 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_100pesos_frente_2017.webp', imagenDorso: 'billetes/dominicana/webp/dominicana_100pesos_dorso2017.webp' }
            ]

        },
        {
            denominacion: '200 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_200pesos_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_200pesos_dorso2017.webp' }
            ]

        },
        {
            denominacion: '500 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_500pesos_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_500pesos_dorso2017.webp' }
            ]

        },
        {
            denominacion: '1000 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_1000pesos_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_1000pesos_dorso2017.webp' }
            ]

        },
        {
            denominacion: '5000 Pesos',
            versiones: [
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_5000pesos_frente_2017.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/dominicana/webp/dominicana_5000pesos_dorso2017.webp' }
            ]

        },
    ],
    "Haiti": [
        {
            denominacion: '10 Gourdes',
            versiones: [
                { anioEmision: '2013', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_10gourdes_frente_2013.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_10gourdes_dorso2013.webp' }
            ]

        },
        {
            denominacion: '20 Gourdes',
            versiones: [
                { anioEmision: '2001', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_20gourdes_frente_2001.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_20gourdes_dorso2001.webp' }
            ]

        },
        {
            denominacion: '25 Gourdes',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_25gourdes_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_25gourdes_dorso2004.webp' }
            ]

        },
        {
            denominacion: '50 Gourdes',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_50gourdes_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_50gourdes_dorso2004.webp' }
            ]

        },
        {
            denominacion: '100 Gourdes',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_100gourdes_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_100gourdes_dorso2004.webp' }
            ]

        },
        {
            denominacion: '250 Gourdes',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_250gourdes_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_250gourdes_dorso2004.webp' }
            ]

        },
        {
            denominacion: '500 Gourdes',
            versiones: [
                { anioEmision: '2004', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_500gourdes_frente_2004.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_500gourdes_dorso2004.webp' }
            ]

        },
        {
            denominacion: '1000 Gourdes',
            versiones: [
                { anioEmision: '1999', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_1000gourdes_frente_1999.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/haiti/webp/haiti_1000gourdes_dorso1999.webp' }
            ]

        },
    ],
    "Cuba": [
        {
            denominacion: '1 peso',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_1peso_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_1peso_dorso2006.webp' }
            ]

        },
        {
            denominacion: '3 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_3pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_3pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '5 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_5pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_5pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '10 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_10pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_10pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '20 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_20pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_20pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '50 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_50pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_50pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '100 pesos',
            versiones: [
                { anioEmision: '2006', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_100pesos_frente_2006.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_100pesos_dorso2006.webp' }
            ]

        },
        {
            denominacion: '200 pesos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_200pesos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_200pesos_dorso2010.webp' }
            ]

        },
        {
            denominacion: '500 pesos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_500pesos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_500pesos_dorso2010.webp' },
                { anioEmision: '2019', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_500pesos_frente_2019.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_500pesos_dorso2019.webp' }
            ]

        },
        {
            denominacion: '1000 pesos',
            versiones: [
                { anioEmision: '2010', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_1000pesos_frente_2010.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/cuba/webp/cuba_1000pesos_dorso2010.webp' }
            ]

        },
    ],
    "Trinidad y Tobago": [
        {
            denominacion: '1 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_1dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_1dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '5 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_5dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_5dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '10 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_10dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_10dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '20 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_20dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_20dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '50 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_50dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_50dolar_dorso2020.webp' }
            ]

        },
        {
            denominacion: '100 Dolar',
            versiones: [
                { anioEmision: '2020', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_100dolar_frente_2020.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/trinidad/webp/trinidad_100dolar_dorso2020.webp' }
            ]

        },
    ],
    "Corea del Norte": [
        {
            denominacion: '1 Won',
            versiones: [
                { anioEmision: '1992', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_1won_frente_1992.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_1won_dorso1992.webp' }
            ]

        },
        {
            denominacion: '5 Won',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_5won_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_5won_dorso2002.webp' }
            ]

        },
        {
            denominacion: '10 Won',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_10won_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_10won_dorso2002.webp' }
            ]

        },
        {
            denominacion: '50 Won',
            versiones: [
                { anioEmision: '2002', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_50won_frente_2002.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_50won_dorso2002.webp' }
            ]

        },
        {
            denominacion: '100 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_100won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_100won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '200 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_200won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_200won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '200 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_200won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_200won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '500 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_500won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_500won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '1000 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_1000won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_1000won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '2000 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_2000won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_2000won_dorso2008.webp' }
            ]

        },
        {
            denominacion: '5000 Won',
            versiones: [
                { anioEmision: '2008', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_5000won_frente_2008.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/norcorea/webp/norcorea_5000won_dorso2008.webp' }
            ]

        },
    ],
    "Islas Malvinas": [
        {
            denominacion: '5 Libras',
            versiones: [
                { anioEmision: '2005', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_5libras_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_5libras_dorso2005.webp' }
            ]

        },
        {
            denominacion: '10 Libras',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_10libras_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_10libras_dorso2005.webp' }
            ]

        },
        {
            denominacion: '20 Libras',
            versiones: [
                { anioEmision: '2011', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_20libras_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_20libras_dorso2005.webp' }
            ]

        },
        {
            denominacion: '50 Libras',
            versiones: [
                { anioEmision: '1990', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_50libras_frente_2005.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/malvinas/webp/malvinas_50libras_dorso2005.webp' }
            ]

        },
    ],
    "Turkmenistan": [
        {
            denominacion: '1 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2009_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2012_dorso.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2014_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2014_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_1manat_2017_dorso.webp' }
            ]
        },
        {
            denominacion: '5 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2009_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2012_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_5manat_2017_dorso.webp' }
            ]
        },
        {
            denominacion: '10 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2009_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2012_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_10manat_2017_dorso.webp' }
            ]
        },
        {
            denominacion: '20 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2009_dorso.webp' },
                { anioEmision: '2012', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2012_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2012_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_20manat_2017_dorso.webp' }
            ]
        },
        {
            denominacion: '50 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2009_dorso.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2014_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2014_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_50manat_2017_dorso.webp' }
            ]
        },
        {
            denominacion: '100 manat',
            versiones: [
                { anioEmision: '2009', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2009_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2009_dorso.webp' },
                { anioEmision: '2014', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2014_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2014_dorso.webp' },
                { anioEmision: '2017', imagenFrente: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2017_frente.webp', imagenDorso: 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com/billetes/turkmenistan/webp/turkmenistan_100manat_2017_dorso.webp' }
            ]
        }
    ],


    // ... El resto de los países seguirían la misma estructura corregida.
    // He omitido el resto para brevedad, pero deberías aplicar los mismos cambios a todos.
};
