const fs = require('fs');
const path = require('path');

// Prefijo de Vercel Blob
const BLOB_PREFIX = 'https://ihbcuymzbjjqs24e.public.blob.vercel-storage.com';

// Función para procesar un archivo
function processFile(filePath) {
    console.log(`\nProcesando: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Reemplazar todas las ocurrencias de '/billetes/' con el prefijo de Blob
    // Usamos una expresión regular para encontrar todas las rutas que empiezan con '/billetes/'
    const regex = /['"]\/billetes\//g;
    const matches = content.match(regex);

    if (matches) {
        content = content.replace(/['"]\/billetes\//g, (match) => {
            // Mantener la comilla original (simple o doble)
            const quote = match[0];
            return `${quote}${BLOB_PREFIX}/billetes/`;
        });

        const count = matches.length;
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ Reemplazadas ${count} rutas en ${path.basename(filePath)}`);
        return count;
    } else {
        console.log(`  ℹ️  No se encontraron rutas para actualizar`);
        return 0;
    }
}

// Función para encontrar todos los archivos TypeScript
function findTsFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findTsFiles(filePath, fileList);
        } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Ejecución principal
const libDir = path.join(__dirname, '..', 'lib');
console.log(`\n🔍 Buscando archivos TypeScript en: ${libDir}\n`);

const tsFiles = findTsFiles(libDir);
console.log(`Encontrados ${tsFiles.length} archivos TypeScript\n`);
console.log('='.repeat(60));

let totalReplacements = 0;
let filesModified = 0;

tsFiles.forEach(file => {
    const replacements = processFile(file);
    if (replacements > 0) {
        filesModified++;
        totalReplacements += replacements;
    }
});

console.log('\n' + '='.repeat(60));
console.log('\n📊 RESUMEN:');
console.log(`   Archivos procesados: ${tsFiles.length}`);
console.log(`   Archivos modificados: ${filesModified}`);
console.log(`   Total de reemplazos: ${totalReplacements}`);
console.log(`\n   Prefijo aplicado: ${BLOB_PREFIX}/billetes/`);
console.log('\n✨ ¡Actualización completa!\n');
