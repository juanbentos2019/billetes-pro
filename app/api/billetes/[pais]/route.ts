// app/api/billetes/[pais]/route.ts

import { NextResponse } from 'next/server';
// ----- INICIO DEL CAMBIO: Importamos AMBAS fuentes de datos -----
import { todosLosBilletes } from '@/lib/billetes-data/index';
import { billetesData } from '@/lib/bill-data';
// ----- FIN DEL CAMBIO -----

export async function GET(
  request: Request,
  { params }: { params: { pais: string } }
) {
  const paisKey = params.pais;

  // ----- INICIO DEL CAMBIO: Combinamos los datos como se hacía antes -----
  const datosCompletos = { ...todosLosBilletes, ...billetesData };
  // ----- FIN DEL CAMBIO -----

  // Ahora buscamos en el objeto combinado
  const billetesDelPais = datosCompletos[paisKey] || [];

  if (billetesDelPais.length === 0) {
    return NextResponse.json(
      { error: `No se encontraron billetes para el país: ${paisKey}` },
      { status: 404 }
    );
  }

  return NextResponse.json(billetesDelPais);
}