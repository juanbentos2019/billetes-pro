/**
 * Etapa 2: Migrar países de América del Norte, Central y Caribe
 * de bill-data.ts a america-norte-central.ts
 */

const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');
const BILL_DATA_PATH = path.join(LIB, 'bill-data.ts');
const REGIONAL_PATH = path.join(LIB, 'billetes-data', 'america-norte-central.ts');

// Países de esta región que están en bill-data.ts
const COUNTRIES_TO_MIGRATE = [
  'Bahamas', 'Belice', 'Canada', 'Costa Rica', 'Cuba',
  'Guatemala', 'Groenlandia', 'Haiti', 'Honduras', 'Jamaica',
  'Mexico', 'Nicaragua', 'Republica Dominicana', 'Trinidad y Tobago'
];

// Países que solo existen en el regional (claves diferentes, no están en bill-data.ts)
const REGIONAL_ONLY_COUNTRIES = ['CostaRica', 'Dominicana'];

function extractCountryBlock(fileContent, countryName) {
  const escaped = countryName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^(\\s+)"${escaped}"\\s*:\\s*\\[`, 'm');
  const match = regex.exec(fileContent);
  if (!match) return null;
  const startIdx = match.index;

  const bracketStart = fileContent.indexOf('[', startIdx);
  let depth = 0;
  let endIdx = bracketStart;
  for (let i = bracketStart; i < fileContent.length; i++) {
    if (fileContent[i] === '[') depth++;
    if (fileContent[i] === ']') depth--;
    if (depth === 0) { endIdx = i; break; }
  }

  const content = fileContent.substring(startIdx, endIdx + 1);
  return { content, startIdx, endIdx: endIdx + 1 };
}

function convertIndent(block) {
  return block
    .split('\n')
    .map(line => {
      const match = line.match(/^( +)/);
      if (match) {
        const newSpaces = Math.max(2, Math.floor(match[1].length / 2));
        return ' '.repeat(newSpaces) + line.trimStart();
      }
      return line;
    })
    .join('\n');
}

// --- Main ---
console.log('=== Etapa 2: América del Norte, Central y Caribe ===\n');

const billDataContent = fs.readFileSync(BILL_DATA_PATH, 'utf-8');
const regionalContent = fs.readFileSync(REGIONAL_PATH, 'utf-8');

// 1. Extraer países de bill-data.ts
console.log('Extrayendo países de bill-data.ts...');
const extracted = {};
for (const country of COUNTRIES_TO_MIGRATE) {
  const block = extractCountryBlock(billDataContent, country);
  if (block) {
    extracted[country] = block;
    console.log(`  ✓ ${country} (${block.content.split('\n').length} líneas)`);
  } else {
    console.log(`  ✗ ${country} NO encontrado`);
  }
}

// 2. Extraer países que solo existen en el regional
console.log('\nExtrayendo países exclusivos del regional...');
const regionalOnly = {};
for (const country of REGIONAL_ONLY_COUNTRIES) {
  const block = extractCountryBlock(regionalContent, country);
  if (block) {
    regionalOnly[country] = block;
    console.log(`  ✓ ${country} (${block.content.split('\n').length} líneas)`);
  } else {
    console.log(`  ✗ ${country} NO encontrado en regional`);
  }
}

// 3. Generar nuevo archivo regional
console.log('\nGenerando nuevo america-norte-central.ts...');

// Orden: primero los de bill-data.ts (alfabético), luego los exclusivos del regional
const allCountries = [
  ...COUNTRIES_TO_MIGRATE.filter(c => extracted[c]).sort(),
  ...REGIONAL_ONLY_COUNTRIES.filter(c => regionalOnly[c]).sort()
];

let newRegional = `import { Billete } from '@/types/billetes';\n\nexport const billetesAmericaNorteCentral: Record<string, Billete[]> = {\n`;

for (let i = 0; i < allCountries.length; i++) {
  const country = allCountries[i];
  let block;
  let needsConvert;

  if (extracted[country]) {
    block = extracted[country].content;
    needsConvert = true;
  } else if (regionalOnly[country]) {
    block = regionalOnly[country].content;
    needsConvert = false; // Ya está en formato 2-space
  } else {
    continue;
  }

  const converted = needsConvert ? convertIndent(block) : block;
  newRegional += converted;
  newRegional += (i < allCountries.length - 1) ? ',\n' : '\n';
}

newRegional += '};\n';

// 4. Eliminar países de bill-data.ts (por líneas)
console.log('\nEliminando países de bill-data.ts...');

const lines = billDataContent.split('\n');
const linesToRemove = new Set();

for (const country of COUNTRIES_TO_MIGRATE) {
  const escaped = country.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const startRegex = new RegExp(`^\\s+"${escaped}"\\s*:\\s*\\[`);
  let startLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (startRegex.test(lines[i])) { startLine = i; break; }
  }
  if (startLine === -1) {
    console.log(`  ⚠ ${country} no encontrado por líneas`);
    continue;
  }

  let depth = 0;
  let endLine = startLine;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '[') depth++;
      if (ch === ']') depth--;
    }
    if (depth === 0) { endLine = i; break; }
  }

  console.log(`  Eliminando ${country} (líneas ${startLine + 1}-${endLine + 1})`);
  for (let i = startLine; i <= endLine; i++) linesToRemove.add(i);
}

const filteredLines = lines.filter((_, i) => !linesToRemove.has(i));
let newBillData = filteredLines.join('\n');
newBillData = newBillData.replace(/,\s*\n(\s*})\s*$/, '\n$1');
newBillData = newBillData.replace(/,\s*,/g, ',');

// 5. Escribir archivos
console.log('\nEscribiendo archivos...');
fs.writeFileSync(REGIONAL_PATH, newRegional);
console.log(`  ✓ america-norte-central.ts (${newRegional.split('\n').length} líneas)`);
fs.writeFileSync(BILL_DATA_PATH, newBillData);
console.log(`  ✓ bill-data.ts (${newBillData.split('\n').length} líneas)`);

// 6. Verificación
console.log('\n--- Verificación ---');
let ok = true;
for (const country of COUNTRIES_TO_MIGRATE) {
  const escaped = country.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp(`"${escaped}"\\s*:\\s*\\[`).test(newBillData)) {
    console.log(`  ✗ ${country} aún en bill-data.ts!`);
    ok = false;
  }
}
for (const country of allCountries) {
  if (newRegional.includes(`"${country}"`)) {
    console.log(`  ✓ ${country} en regional`);
  } else {
    console.log(`  ✗ ${country} FALTA en regional`);
    ok = false;
  }
}
console.log(ok ? '\n✅ Migración Etapa 2 completada.' : '\n⚠ Hay problemas, revisa.');
