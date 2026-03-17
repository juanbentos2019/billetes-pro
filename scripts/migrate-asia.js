/**
 * Etapa 4: Migrar países de Asia y Medio Oriente
 * de bill-data.ts a asia.ts y medio-oriente-asia.ts
 */
const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');
const BILL_DATA_PATH = path.join(LIB, 'bill-data.ts');
const ASIA_PATH = path.join(LIB, 'billetes-data', 'asia.ts');
const MO_PATH = path.join(LIB, 'billetes-data', 'medio-oriente-asia.ts');

const TO_ASIA = [
  'Afganistan', 'Bangladesh', 'Bhutan', 'Camboya', 'China',
  'Corea del Norte', 'Corea del Sur', 'Filipinas', 'Hong Kong',
  'India', 'Indonesia', 'Iran', 'Japon', 'Kazajstan', 'Kyrgyzstan',
  'Laos', 'Malasia', 'Mongolia', 'Myanmar', 'Nepal', 'Pakistan',
  'Singapur', 'Sri Lanka', 'Tailandia', 'Taiwan', 'Tajikistan', 'Vietnam'
];
const TO_MO = [
  'Arabia Saudita', 'Armenia', 'Emiratos Arabes Unidos', 'Irak',
  'Israel', 'Jordania', 'Kuwait', 'Libano', 'Oman', 'Qatar',
  'Siria', 'Turkmenistan', 'Uzbekistan', 'Yemen'
];
const ALL_TO_MIGRATE = [...TO_ASIA, ...TO_MO];

const ASIA_REGIONAL_ONLY = ['Butan', 'Kirguistan', 'SriLanka', 'Tayikistan'];
const MO_REGIONAL_ONLY = ['Azerbaiyan', 'Georgia', 'Rusia'];

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

function buildRegionalFile(header, countriesFromBD, extracted, regionalOnlyNames, regionalContent) {
  const regionalOnly = {};
  for (const c of regionalOnlyNames) {
    const b = extractCountryBlock(regionalContent, c);
    if (b) { regionalOnly[c] = b; console.log(`  ✓ ${c} (solo regional)`); }
    else console.log(`  ✗ ${c} no encontrado en regional`);
  }
  const order = [
    ...countriesFromBD.filter(c => extracted[c]).sort(),
    ...regionalOnlyNames.filter(c => regionalOnly[c]).sort()
  ];
  let out = header;
  for (let i = 0; i < order.length; i++) {
    const c = order[i];
    const isFromBD = !!extracted[c];
    const block = isFromBD ? extracted[c].content : regionalOnly[c].content;
    out += isFromBD ? convertIndent(block) : block;
    out += (i < order.length - 1) ? ',\n' : '\n';
  }
  out += '};\n';
  return { content: out, countries: order };
}

// --- Main ---
console.log('=== Etapa 4: Asia y Medio Oriente ===\n');

const billData = fs.readFileSync(BILL_DATA_PATH, 'utf-8');
const asiaContent = fs.readFileSync(ASIA_PATH, 'utf-8');
const moContent = fs.readFileSync(MO_PATH, 'utf-8');

console.log('Extrayendo países de bill-data.ts...');
const extracted = {};
for (const c of ALL_TO_MIGRATE) {
  const b = extractCountryBlock(billData, c);
  if (b) { extracted[c] = b; console.log(`  ✓ ${c} (${b.content.split('\n').length} líneas)`); }
  else console.log(`  ✗ ${c} NO encontrado`);
}

const asiaHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesAsia: Record<string, Billete[]> = {\n`;
const moHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesMedioOrienteAsia: Record<string, Billete[]> = {\n`;

console.log('\nGenerando asia.ts...');
const newAsia = buildRegionalFile(asiaHeader, TO_ASIA, extracted, ASIA_REGIONAL_ONLY, asiaContent);

console.log('\nGenerando medio-oriente-asia.ts...');
const newMO = buildRegionalFile(moHeader, TO_MO, extracted, MO_REGIONAL_ONLY, moContent);

// Eliminar de bill-data.ts
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

// Escribir
console.log('\nEscribiendo archivos...');
fs.writeFileSync(ASIA_PATH, newAsia.content);
console.log(`  ✓ asia.ts (${newAsia.content.split('\n').length} líneas)`);
fs.writeFileSync(MO_PATH, newMO.content);
console.log(`  ✓ medio-oriente-asia.ts (${newMO.content.split('\n').length} líneas)`);
fs.writeFileSync(BILL_DATA_PATH, newBillData);
console.log(`  ✓ bill-data.ts (${newBillData.split('\n').length} líneas)`);

// Verificación
console.log('\n--- Verificación ---');
let ok = true;
for (const c of ALL_TO_MIGRATE) {
  const esc = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp(`"${esc}"\\s*:\\s*\\[`).test(newBillData)) { console.log(`  ✗ ${c} aún en bill-data.ts!`); ok = false; }
}
for (const c of newAsia.countries) {
  if (newAsia.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en asia.ts`);
  else { console.log(`  ✗ ${c} FALTA en asia.ts`); ok = false; }
}
for (const c of newMO.countries) {
  if (newMO.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en medio-oriente-asia.ts`);
  else { console.log(`  ✗ ${c} FALTA en medio-oriente-asia.ts`); ok = false; }
}
console.log(ok ? '\n✅ Migración Etapa 4 completada.' : '\n⚠ Hay problemas.');
