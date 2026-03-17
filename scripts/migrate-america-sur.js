/**
 * Script para migrar los países sudamericanos de bill-data.ts a america-sur.ts
 * 
 * Estrategia:
 * - Los datos de bill-data.ts tienen precedencia (es lo que la app muestra actualmente)
 * - Bolivia y Guayana Francesa solo existen en america-sur.ts, se mantienen
 * - El resto de países SA se reemplazan con la versión de bill-data.ts
 */

const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');
const BILL_DATA_PATH = path.join(LIB, 'bill-data.ts');
const AMERICA_SUR_PATH = path.join(LIB, 'billetes-data', 'america-sur.ts');

// Países sudamericanos que están en bill-data.ts
const SA_COUNTRIES = [
  'Argentina', 'Brasil', 'Chile', 'Colombia', 'Paraguay',
  'Venezuela', 'Peru', 'Uruguay', 'Guyana', 'Surinam', 'Islas Malvinas'
];

/**
 * Extrae un bloque de país del contenido de bill-data.ts
 * Retorna { content, startIndex, endIndex } o null
 */
function extractCountryBlock(fileContent, countryName) {
  // Buscar el inicio con indentación variable: "CountryName": [
  const regex = new RegExp(`^(\\s+)"${countryName.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}"\\s*:\\s*\\[`, 'm');
  const match = regex.exec(fileContent);
  if (!match) return null;
  const startIdx = match.index;
  const indent = match[1]; // Guardar indentación para referencia

  // Encontrar el cierre del array de este país
  // Necesitamos contar corchetes desde el primer '['
  const bracketStart = fileContent.indexOf('[', startIdx);
  let depth = 0;
  let endIdx = bracketStart;
  
  for (let i = bracketStart; i < fileContent.length; i++) {
    if (fileContent[i] === '[') depth++;
    if (fileContent[i] === ']') depth--;
    if (depth === 0) {
      endIdx = i;
      break;
    }
  }

  // El bloque del país es desde startIdx hasta endIdx + 1 (incluir ']')
  const content = fileContent.substring(startIdx, endIdx + 1);
  return { content, startIdx, endIdx: endIdx + 1 };
}

/**
 * Convierte un bloque de bill-data.ts (4 spaces indent) al formato de america-sur.ts (2 spaces indent)
 */
function convertIndent(block) {
  return block
    .split('\n')
    .map(line => {
      // Convertir indent de 4-space a 2-space base
      // bill-data usa: 4 spaces base (key), 8 spaces (object), 12 spaces (prop), 16 spaces (version)
      // america-sur usa: 2 spaces base (key), 4 spaces (object), 6 spaces (prop), 8 spaces (version)
      const match = line.match(/^( +)/);
      if (match) {
        const spaces = match[1].length;
        // Reducir la indentación: restar 2 niveles (4 -> 2, 8 -> 4, 12 -> 6, 16 -> 8)
        const newSpaces = Math.max(2, Math.floor(spaces / 2));
        return ' '.repeat(newSpaces) + line.trimStart();
      }
      return line;
    })
    .join('\n');
}

// --- Main ---

console.log('Leyendo archivos...');
const billDataContent = fs.readFileSync(BILL_DATA_PATH, 'utf-8');
const americaSurContent = fs.readFileSync(AMERICA_SUR_PATH, 'utf-8');

// 1. Extraer países SA de bill-data.ts
console.log('\nExtrayendo países sudamericanos de bill-data.ts...');
const extractedCountries = {};
for (const country of SA_COUNTRIES) {
  const block = extractCountryBlock(billDataContent, country);
  if (block) {
    extractedCountries[country] = block;
    console.log(`  ✓ ${country} (${block.content.split('\n').length} líneas)`);
  } else {
    console.log(`  ✗ ${country} NO encontrado en bill-data.ts`);
  }
}

// 2. Extraer Bolivia y Guayana Francesa de america-sur.ts (solo existen ahí)
console.log('\nExtrayendo países exclusivos de america-sur.ts...');
const boliviaBlock = extractCountryBlock(americaSurContent, 'Bolivia');
// Guayana Francesa es especial: usa referencia a billetesEuro, no array literal
const hasGuayanaFrancesa = americaSurContent.includes('"Guayana Francesa"');

if (boliviaBlock) console.log(`  ✓ Bolivia (${boliviaBlock.content.split('\n').length} líneas)`);
if (hasGuayanaFrancesa) console.log(`  ✓ Guayana Francesa (referencia a billetesEuro)`);

// 3. Generar nuevo america-sur.ts
console.log('\nGenerando nuevo america-sur.ts...');

// Orden deseado de países en america-sur.ts
const ORDER = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 
  'Guyana', 'Islas Malvinas', 'Paraguay', 'Peru', 'Surinam', 
  'Uruguay', 'Venezuela', 'Guayana Francesa'
];

let newAmericaSur = `import type { Billete } from '@/types/billetes';
import { billetesEuro } from '../billetes-comunes';

export const billetesAmericaSur: Record<string, Billete[]> = {
`;

for (let i = 0; i < ORDER.length; i++) {
  const country = ORDER[i];

  // Caso especial: Guayana Francesa usa referencia a billetesEuro
  if (country === 'Guayana Francesa') {
    if (hasGuayanaFrancesa) {
      newAmericaSur += '  "Guayana Francesa": billetesEuro\n';
    }
    continue;
  }

  let block;
  let needsIndentConvert = true;

  if (country === 'Bolivia') {
    block = boliviaBlock ? boliviaBlock.content : null;
    needsIndentConvert = false; // Ya está en formato 2-space de america-sur.ts
  } else {
    const extracted = extractedCountries[country];
    block = extracted ? extracted.content : null;
  }

  if (!block) {
    console.log(`  ⚠ ${country} no tiene datos, saltando...`);
    continue;
  }

  // Convertir indentación de 4-space a 2-space solo para bloques de bill-data.ts
  const converted = needsIndentConvert ? convertIndent(block) : block;
  newAmericaSur += converted;
  
  if (i < ORDER.length - 1) {
    newAmericaSur += ',\n';
  } else {
    newAmericaSur += ',\n';
  }
}

newAmericaSur += '};\n';

// 4. Eliminar países SA de bill-data.ts usando enfoque por líneas
console.log('\nEliminando países sudamericanos de bill-data.ts...');

const lines = billDataContent.split('\n');
const linesToRemove = new Set();

for (const country of SA_COUNTRIES) {
  // Encontrar la línea donde empieza el país
  const startRegex = new RegExp(`^\\s+"${country.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}"\\s*:\\s*\\[`);
  let startLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (startRegex.test(lines[i])) {
      startLine = i;
      break;
    }
  }
  if (startLine === -1) {
    console.log(`  ⚠ ${country} no encontrado por líneas`);
    continue;
  }

  // Contar brackets para encontrar el cierre del array
  let depth = 0;
  let endLine = startLine;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '[') depth++;
      if (ch === ']') depth--;
    }
    if (depth === 0) {
      endLine = i;
      break;
    }
  }

  // Incluir la línea siguiente si es solo una coma
  if (endLine + 1 < lines.length && lines[endLine].trimEnd().endsWith('],')) {
    // La coma está en la misma línea del cierre, ok
  } else if (endLine + 1 < lines.length && lines[endLine + 1].trim() === ',') {
    endLine++;
  }

  console.log(`  Eliminando ${country} (líneas ${startLine + 1}-${endLine + 1})`);
  for (let i = startLine; i <= endLine; i++) {
    linesToRemove.add(i);
  }
}

// Reconstruir el archivo sin las líneas eliminadas
const filteredLines = lines.filter((_, i) => !linesToRemove.has(i));

// Limpiar: asegurar que no queden comas sueltas o líneas vacías extras
let newBillData = filteredLines.join('\n');

// Arreglar posibles comas faltantes o sobrantes entre entradas
// Asegurar que el cierre de ']' del último país antes de '}' no tenga coma extra
newBillData = newBillData.replace(/,\s*\n(\s*})\s*$/, '\n$1');

// Arreglar posibles comas dobles
newBillData = newBillData.replace(/,\s*,/g, ',');

// 5. Escribir archivos
console.log('\nEscribiendo archivos...');

// Backup
fs.writeFileSync(AMERICA_SUR_PATH + '.bak', americaSurContent);
fs.writeFileSync(BILL_DATA_PATH + '.bak', billDataContent);
console.log('  ✓ Backups creados (.bak)');

fs.writeFileSync(AMERICA_SUR_PATH, newAmericaSur);
console.log(`  ✓ america-sur.ts (${newAmericaSur.split('\n').length} líneas)`);

fs.writeFileSync(BILL_DATA_PATH, newBillData);
console.log(`  ✓ bill-data.ts (${newBillData.split('\n').length} líneas)`);

// 6. Verificación rápida
console.log('\n--- Verificación ---');
const remainingCountries = [];
for (const country of SA_COUNTRIES) {
  if (newBillData.includes(`"${country}": [`)) {
    remainingCountries.push(country);
  }
}
if (remainingCountries.length > 0) {
  console.log(`⚠ Países SA que aún quedan en bill-data.ts: ${remainingCountries.join(', ')}`);
} else {
  console.log('✓ Todos los países SA eliminados de bill-data.ts');
}

for (const country of ORDER) {
  if (newAmericaSur.includes(`"${country}"`)) {
    console.log(`  ✓ ${country} presente en america-sur.ts`);
  } else {
    console.log(`  ✗ ${country} FALTA en america-sur.ts`);
  }
}

console.log('\n✅ Migración completada. Ejecuta "npm run build" para verificar.');
