// hooks/useCurrencyConverter.ts
'use client';

import { useState, useEffect, useCallback } from 'react';

interface ExchangeRates {
  [key: string]: number;
}

let ratesCache: ExchangeRates | null = null;
let cacheTimestamp: number | null = null;

export function useCurrencyConverter() {
  const [rates, setRates] = useState<ExchangeRates | null>(ratesCache);
  const [isLoading, setIsLoading] = useState(!ratesCache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      const now = new Date().getTime();
      if (ratesCache && cacheTimestamp && (now - cacheTimestamp < 12 * 60 * 60 * 1000)) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        // ===== INICIO DEL CAMBIO =====
        // Cambiamos la URL a la de ExchangeRate-API
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        // ===== FIN DEL CAMBIO =====

        if (!response.ok) {
          throw new Error('No se pudo obtener la tasa de cambio.');
        }
        const data = await response.json();
        
        // La estructura de la respuesta es la misma, así que el resto del código funciona igual.
        ratesCache = data.rates;
        cacheTimestamp = new Date().getTime();
        setRates(data.rates);
      } catch (err: any) {
        setError(err.message || 'Ocurrió un error desconocido.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, []);

  const convert = useCallback((amount: number, currencyCode: string): string | null => {
    if (!rates || !currencyCode) return null;
    
    if (currencyCode === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    }
    
    const rate = rates[currencyCode];
    if (!rate) {
      return null;
    }
    
    const amountInUSD = amount / rate;
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amountInUSD);
  }, [rates]);

  return { convert, isLoading, error };
}