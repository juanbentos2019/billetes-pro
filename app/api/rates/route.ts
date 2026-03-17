import { NextResponse } from 'next/server';

// Optamos por ISR: Next.js revalidará la caché cada 43200 segundos (12 horas)
export const revalidate = 43200;

export async function GET() {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 43200 } // Doble seguridad de caché en fetch
    });
    
    if (!response.ok) {
        throw new Error(`Failed to fetch from ER-API: ${response.status}`);
    }

    const data = await response.json();
    
    // Devolvemos el JSON de tasas directamente con NextResponse
    // Podemos inyectar headers para debug si lo necesitamos (ej. X-Cache-Status)
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error in exchange rate proxy:', error);
    // En caso de que falle la API externa, devolvemos un 500 pero el front manejará el error graceful.
    return NextResponse.json(
      { error: 'No se pudo obtener la tasa de cambio.' },
      { status: 500 }
    );
  }
}
