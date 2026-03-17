/**
 * Etapa 5: Migrar países de África y Oceanía
 * de bill-data.ts a africa.ts y oceania.ts (nuevo)
 */
const fs = require('fs');
const path = require('path');

const LIB = path.join(__dirname, '..', 'lib');
const BILL_DATA_PATH = path.join(LIB, 'bill-data.ts');
const AFRICA_PATH = path.join(LIB, 'billetes-data', 'africa.ts');
const OCEANIA_PATH = path.join(LIB, 'billetes-data', 'oceania.ts');

const TO_AFRICA = [
  'Sudafrica', 'Egipto', 'Argelia', 'Ghana', 'Etiopia', 'Tunez',
  'Uganda', 'Nigeria', 'Sudan', 'Angola', 'Libia', 'Mauritania',
  'Marruecos', 'Sahara Occidental', 'Liberia', 'Guinea', 'Namibia',
  'Sierra Leona', 'Tanzania', 'Republica Democratica del Congo',
  'Sudan del Sur', 'Mozambique', 'Kenya', 'Madagascar', 'Zambia',
  'Botswana', 'Malawi', 'Somalia', 'Burundi', 'Eritrea', 'Lesoto',
  'Gambia', 'Esuatini', 'Ruanda', 'Djibouti', 'Somaliland'
];
const TO_OCEANIA = [
  'Australia', 'Nueva Zelanda', 'Papua Nueva Guinea',
  'Vanuatu', 'Islas Salomon', 'Nueva Caledonia', 'Fiji'
];
const ALL_TO_MIGRATE = [...TO_AFRICA, ...TO_OCEANIA];

const AFRICA_REGIONAL_ONLY = ['Somalilandia', 'Comoros', 'Cabo Verde'];

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
  if (regionalContent) {
    for (const c of regionalOnlyNames) {
      const b = extractCountryBlock(regionalContent, c);
      if (b) { regionalOnly[c] = b; console.log(`  ✓ ${c} (solo regional)`); }
      else console.log(`  ✗ ${c} no encontrado en regional`);
    }
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
console.log('=== Etapa 5: Africa y Oceania ===\n');

const billData = fs.readFileSync(BILL_DATA_PATH, 'utf-8');
const africaContent = fs.readFileSync(AFRICA_PATH, 'utf-8');

console.log('Extrayendo países de bill-data.ts...');
const extracted = {};
for (const c of ALL_TO_MIGRATE) {
  const b = extractCountryBlock(billData, c);
  if (b) { extracted[c] = b; console.log(`  ✓ ${c} (${b.content.split('\n').length} líneas)`); }
  else console.log(`  ✗ ${c} NO encontrado`);
}

const africaHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesAfrica: Record<string, Billete[]> = {\n`;
const oceaniaHeader = `import type { Billete } from '@/types/billetes';\n\nexport const billetesOceania: Record<string, Billete[]> = {\n`;

console.log('\nGenerando africa.ts...');
const newAfrica = buildRegionalFile(africaHeader, TO_AFRICA, extracted, AFRICA_REGIONAL_ONLY, africaContent);

console.log('\nGenerando oceania.ts...');
const newOceania = buildRegionalFile(oceaniaHeader, TO_OCEANIA, extracted, [], null);

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
fs.writeFileSync(AFRICA_PATH, newAfrica.content);
console.log(`  ✓ africa.ts (${newAfrica.content.split('\n').length} líneas)`);
fs.writeFileSync(OCEANIA_PATH, newOceania.content);
console.log(`  ✓ oceania.ts (${newOceania.content.split('\n').length} líneas)`);
fs.writeFileSync(BILL_DATA_PATH, newBillData);
console.log(`  ✓ bill-data.ts (${newBillData.split('\n').length} líneas)`);

// Verificación
console.log('\n--- Verificación ---');
let ok = true;
for (const c of ALL_TO_MIGRATE) {
  const esc = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp(`"${esc}"\\s*:\\s*\\[`).test(newBillData)) { console.log(`  ✗ ${c} aún en bill-data.ts!`); ok = false; }
}
for (const c of newAfrica.countries) {
  if (newAfrica.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en africa.ts`);
  else { console.log(`  ✗ ${c} FALTA en africa.ts`); ok = false; }
}
for (const c of newOceania.countries) {
  if (newOceania.content.includes(`"${c}"`)) console.log(`  ✓ ${c} en oceania.ts`);
  else { console.log(`  ✗ ${c} FALTA en oceania.ts`); ok = false; }
}

// Verificar que bill-data.ts quedó casi vacío
const remaining = [];
const reCheck = /^\s+"([^"]+)"\s*:\s*\[/gm;
let mm;
while ((mm = reCheck.exec(newBillData)) !== null) {
  if (mm[1] !== 'versiones') remaining.push(mm[1]);
}
console.log(`\nPaíses restantes en bill-data.ts: ${remaining.length}`);
remaining.forEach(c => console.log(`  - ${c}`));

console.log(ok ? '\n✅ Migración Etapa 5 completada.' : '\n⚠ Hay problemas.');
