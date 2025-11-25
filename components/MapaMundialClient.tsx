'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { nombresPaisesCompleto, paisesConBilletes } from '@/lib/map-utils';
import { coordenadasPaises } from '@/lib/constants';

if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

interface Props {
  onPaisSeleccionado: (pais: string) => void;
  paisSeleccionado: string;
}

export default function MapaMundial({ onPaisSeleccionado, paisSeleccionado }: Props) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const geojsonLayerRef = useRef<L.GeoJSON | null>(null);
  const paisesPequenos = ["Bahamas", "Hong Kong", "Singapur", "Cabo Verde", "Comoros"];

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

      const map = L.map(mapContainerRef.current, {
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
      });

      const minZoom = map.getBoundsZoom(bounds, true);
      map.setMinZoom(minZoom);
      map.setView([20, 0], minZoom);

      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        noWrap: true,
      }).addTo(mapRef.current);
    }
  }, []);

  // Efecto para dibujar la capa GeoJSON y los marcadores
  useEffect(() => {
    if (!mapRef.current) return;

    fetch('/data/world.geojson')
      .then(res => res.json())
      .then(data => {
        if (!mapRef.current) return;

        geojsonLayerRef.current = L.geoJSON(data, {
          onEachFeature: (feature, layer) => {
            const countryName = feature.properties.name;
            const paisEspanol = nombresPaisesCompleto[countryName] || countryName;
            const tieneBilletes = paisesConBilletes.includes(paisEspanol);
            
            // Asignamos la etiqueta con el nombre a todos los países
            layer.bindTooltip(paisEspanol);

            if (tieneBilletes) {
              layer.on({
                click: () => {
                  onPaisSeleccionado(paisEspanol);
                },
                // Solo cambiamos el cursor al pasar por encima
                mouseover: () => {
                  if (mapRef.current) {
                    mapRef.current.getContainer().style.cursor = 'pointer';
                  }
                },
                // Lo restauramos al salir
                mouseout: () => {
                  if (mapRef.current) {
                    mapRef.current.getContainer().style.cursor = '';
                  }
                }
              });
            }
          }
        }).addTo(mapRef.current);

        paisesPequenos.forEach(pais => {
          const coords = coordenadasPaises[pais];
          if (coords) {
            const circleMarker = L.circleMarker([coords.lat, coords.lng], {
              radius: 8,
              fillColor: "#f59e0b",
              color: "#fff",
              weight: 1.5,
              opacity: 1,
              fillOpacity: 0.9,
              pane: 'markerPane'
            }).addTo(mapRef.current!);

            circleMarker.on({
              click: () => {
                onPaisSeleccionado(pais);
              },
              mouseover: () => {
                if (mapRef.current) {
                  mapRef.current.getContainer().style.cursor = 'pointer';
                }
              },
              mouseout: () => {
                if (mapRef.current) {
                  mapRef.current.getContainer().style.cursor = '';
                }
              }
            });
            circleMarker.bindTooltip(pais);
          }
        });
      });
  }, []);

  // Efecto para manejar el estilo y el vuelo del mapa
  useEffect(() => {
    const map = mapRef.current;
    const layer = geojsonLayerRef.current;
    if (!map || !layer) return;

    layer.setStyle((feature) => {
      const countryName = feature?.properties.name;
      const paisEspanol = nombresPaisesCompleto[countryName] || countryName;
      const esSeleccionado = paisEspanol === paisSeleccionado;

      if (esSeleccionado) return { fillColor: '#f59e0b', weight: 2, color: 'white', fillOpacity: 0.8 };
      if (paisesConBilletes.includes(paisEspanol)) return { fillColor: '#10b981', weight: 1, color: '#4f46e5', fillOpacity: 0.5 };
      return { fillColor: '#6366f1', weight: 1, color: '#4f46e5', fillOpacity: 0.3 };
    });

    if (paisSeleccionado) {
      const coords = coordenadasPaises[paisSeleccionado];
      if (coords) {
        map.flyTo([coords.lat, coords.lng], coords.zoom, { animate: true, duration: 1.5 });
      }
    } else {
        const minZoom = map.getBoundsZoom(map.options.maxBounds!, true);
        map.flyTo([20, 0], minZoom, { animate: true, duration: 1.5 });
    }
  }, [paisSeleccionado]);

  return (
    <div
      ref={mapContainerRef}
      id="mapa-mundial"
      className="h-[600px] w-full rounded-lg shadow-lg z-0"
    />
  );
}