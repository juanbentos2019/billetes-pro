/**
 * Etapa 3: Migrar países europeos de bill-data.ts a europa.ts y europa-este.ts
 */
const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');
const BILL_DATA_PATH = path.join(LIB, 'bill-data.ts');
const EUROPA_PATH = path.join(LIB, 'billetes-data', 'europa.ts');
const EUROPA_ESTE_PATH = path.join(LIB, 'billetes-data', 'europa-este.ts');

const TO_EUROPA = [
  'Albania', 'Bosnia y Herzegovina', 'Bulgaria', 'Dinamarca',
  'Hungria', 'Inglaterra', 'Islandia', 'Noruega',
  'Republica Checa', 'Serbia', 'Suecia', 'Suiza'
];
const TO_EUROPA_ESTE = ['Bielorrusia', 'Moldavia', 'Polonia', 'Rumania', 'Rusia', 'Ucrania'];
const ALL_TO_MIGRATE = [...TO_EUROPA, ...TO_EUROPA_ESTE];

// Países solo en regional (claves diferentes o no en bill-data)
const EUROPA_REGIONAL_ONLY = ['Bosnia', 'Macedonia'];
const EUROPA_ESTE_REGIONAL_ONLY = []; // todos están en bill-data

function extractCountryBlock(fileContent, countryName) {
  const escaped = countryName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^(\\s+)"${escaped}"\\s*:\\s*\\[`, 'm');
  const match = regex.exec(fileContent);
  if (!match) return null;
  const startIdx = match.index;
  const bracketStart = fileContent.indexOf('[', startIdx);
  let depth = 0, endIdx = bracketStart;
  for (let i = bracketStart; i < fileContent.length; i++) {
    if (fileContent[i] === '[') depth++;
    if (fileContent[i] === ']') depth--;
    if (depth === 0) { endIdx = i; break; }
  }
  return { content: fileContent.substring(startIdx, endIdx + 1), startIdx, endIdx: endIdx + 1 };
}

function convertIndent(block) {
  return block.split('\n').map(line => {
    const m = line.match(/^( +)/);
    if (m) return ' '.repeat(Math.max(2, Math.floor(m[1].length / 2))) + line.trimStart();
    return line;
  }).join('\n');
}

function buildRegionalFile(header, countriesFromBillData, extracted, regionalOnlyNames, regionalContent) {
  const regionalOnly = {};
  for (const c of regionalOnlyNames) {
    const b = extractCountryBlock(regionalContent, c);
    if (b) { regionalOnly[c] = b; console.log(`  ✓ ${c} (solo regional)`); }
  }

  const order = [
    ...countriesFromBillData.filter(c => extracted[c]).sort(),
    ...regionalOnlyNames.filter(c => regionalOnly[c]).sort()
  ];

  let out = header;
  for (let i = 0; i < order.length; i++) {
    const c = order[i];
    const isFromBillData = !!extracted[c];
    const block = isFromBillData ? extracted[c].content : regionalOnly[c].content;
    out += isFromBillData ? convertIndent(block) : block;
    out += (i < order.length - 1) ? ',\n' : '\n';
  }
  out += '};\n';
  return { content: out, countries: order };
}

// --- Main ---
console.log('=== Etapa 3: Europa ===\n');

const billData = fs.readFileSync(BILL_DATA_PATH, 'utf-8');
const europaContent = fs.readFileSync(EUROPA_PATH, 'utf-8');
const europaEsteContent = fs.readFileSync(EUROPA_ESTE_PATH, 'utf-8');

// 1. Extraer de bill-data.ts
console.log('Extrayendo países europeos de bill-data.ts...');
const extracted = {};
for (const c of ALL_TO_MIGRATE) {
  const b = extractCountryBlock(billData, c);
  if (b) { extracted[c] = b; console.log(`  ✓ ${c} (${b.content.split('\n').length} líneas)`); }
  else console.log(`  ✗ ${c} NO encontrado`);
}

// 2. Headers de cada archivo regional (hardcodeados para evitar problemas con \r\n)
const europaHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesEuropa: Record<string, Billete[]> = {\n`;
const europaEsteHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesEuropaEste: Record<string, Billete[]> = {\n`;

// 3. Generar nuevos archivos regionales
console.log('\nGenerando europa.ts...');
const newEuropa = buildRegionalFile(europaHeader, TO_EUROPA, extracted, EUROPA_REGIONAL_ONLY, europaContent);

console.log('\nGenerando europa-este.ts...');
const newEuropaEste = buildRegionalFile(europaEsteHeader, TO_EUROPA_ESTE, extracted, EUROPA_ESTE_REGIONAL_ONLY, europaEsteContent);

// 4. Eliminar de bill-data.ts
console.log('\nEliminando países de bill-data.ts...');
const lines = billData.split('\n');
const linesToRemove = new Set();

for (const country of ALL_TO_MIGRATE) {
  const escaped = country.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const startRegex = new RegExp(`^\\s+"${escaped}"\\s*:\\s*\\[`);
  let startLine = -1;
  for (let i = 0; i < lines.length; i++) { if (startRegex.test(lines[i])) { startLine = i; break; } }
  if (startLine === -1) { console.log(`  ⚠ ${country} no encontrado`); continue; }

  let depth = 0, endLine = startLine;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) { if (ch === '[') depth++; if (ch === ']') depth--; }
    if (depth === 0) { endLine = i; break; }
  }
  console.log(`  Eliminando ${country} (líneas ${startLine + 1}-${endLine + 1})`);
  for (let i = startLine; i <= endLine; i++) linesToRemove.add(i);
}

const filtered = lines.filter((_, i) => !linesToRemove.has(i));
let newBillData = filtered.join('\n');
newBillData = newBillData.replace(/,\s*\n(\s*})\s*$/, '\n$1');
newBillData = newBillData.replace(/,\s*,/g, ',');

// 5. Escribir
console.log('\nEscribiendo archivos...');
fs.writeFileSync(EUROPA_PATH, newEuropa.content);
console.log(`  ✓ europa.ts (${newEuropa.content.split('\n').length} líneas)`);
fs.writeFileSync(EUROPA_ESTE_PATH, newEuropaEste.content);
console.log(`  ✓ europa-este.ts (${newEuropaEste.content.split('\n').length} líneas)`);
fs.writeFileSync(BILL_DATA_PATH, newBillData);
console.log(`  ✓ bill-data.ts (${newBillData.split('\n').length} líneas)`);

// 6. Verificación
console.log('\n--- Verificación ---');
let ok = true;
for (const c of ALL_TO_MIGRATE) {
  const esc = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp(`"${esc}"\\s*:\\s*\\[`).test(newBillData)) { console.log(`  ✗ ${c} aún en bill-data.ts!`); ok = false; }
}
for (const c of newEuropa.countries) {
  if (newEuropa.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en europa.ts`);
  else { console.log(`  ✗ ${c} FALTA en europa.ts`); ok = false; }
}
for (const c of newEuropaEste.countries) {
  if (newEuropaEste.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en europa-este.ts`);
  else { console.log(`  ✗ ${c} FALTA en europa-este.ts`); ok = false; }
}
console.log(ok ? '\n✅ Migración Etapa 3 completada.' : '\n⚠ Hay problemas.');
