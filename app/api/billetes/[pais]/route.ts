// app/api/billetes/[pais]/route.ts

import { NextResponse } from 'next/server';
import { todosLosBilletes } from '@/lib/billetes-data/index';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Billete } from '@/types/billetes';

export async function GET(
  request: Request,
  { params }: { params: { pais: string } }
) {
  const paisKey = params.pais;
  let billetesDelPais = todosLosBilletes[paisKey] || [];

  if (billetesDelPais.length === 0) {
    return NextResponse.json(
      { error: `No se encontraron billetes para el país: ${paisKey}` },
      { status: 404 }
    );
  }

  try {
    const session = await getServerSession(authOptions);
    const isSuperMaster = session?.user?.role === 'SUPER_MASTER';

    // Obtener las reglas de ocultamiento para este país
    const billetesOcultos = await prisma.billeteOculto.findMany({
      where: { pais: paisKey }
    });

    // Obtener la información de seguridad adicional para este país
    const infoBilletes = await prisma.billeteInfo.findMany({
      where: { pais: paisKey }
    });

    const hasOcultos = billetesOcultos.length > 0;
    const hasInfo = infoBilletes.length > 0;

    if (hasOcultos || hasInfo) {
      // Crear un Set con las firmas de los billetes ocultos para búsqueda rápida O(1)
      const hiddenSignatures = new Set(
        billetesOcultos.map(b => `${b.denominacion}|||${b.anioEmision}`)
      );

      // Mapa para búsqueda rápida de información de seguridad O(1)
      const infoMap = new Map();
      infoBilletes.forEach((info) => {
        infoMap.set(`${info.denominacion}|||${info.anioEmision}`, info);
      });

      // Mapear y filtrar los billetes originales
      const billetesProcesados: Billete[] = [];

      for (const billete of billetesDelPais) {
        const versionesProcesadas = billete.versiones.map(version => {
          const signature = `${billete.denominacion}|||${version.anioEmision}`;
          const isHidden = hiddenSignatures.has(signature);
          const infoAdicional = infoMap.get(signature);

          const versionModificada = { ...version };

          if (isHidden) {
            versionModificada.isHidden = true;
          }

          if (infoAdicional) {
            // Inyectar la info de seguridad empaquetada
            versionModificada.infoSec = {
              titulo: infoAdicional.titulo,
              contenido: infoAdicional.contenido,
              detalles: Array.isArray(infoAdicional.detalles) ? infoAdicional.detalles : []
            };
          }

          return versionModificada;

        });

        if (isSuperMaster) {
          // El Super Master ve todos, con flags e infoSec inyectada
          billetesProcesados.push({
            ...billete,
            versiones: versionesProcesadas
          });
        } else {
          // Cajeros usuarios solo ven las versiones que NO están ocultas con infoSec inyectada
          const versionesPublicas = versionesProcesadas.filter(v => !v.isHidden);
          if (versionesPublicas.length > 0) {
            billetesProcesados.push({
              ...billete,
              versiones: versionesPublicas
            });
          }
        }
      }

      billetesDelPais = billetesProcesados;
    }
  } catch (e) {
    console.error("Error al procesar visibilidad e info extra de billetes", e);
    // Falla segura (fail-safe): si la base de datos falla temporalmente, devuelve todo el array base como estaba
  }

  return NextResponse.json(billetesDelPais);
}
