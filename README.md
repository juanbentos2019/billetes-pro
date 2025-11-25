# Billetes Vigentes del Mundo - Next.js

Versión modernizada del proyecto de billetes usando Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Framework moderno**: Next.js 14 con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos utility-first
- **Optimización de imágenes**: Next.js Image component
- **Sistema de favoritos**: Con persistencia en localStorage
- **Mapa interactivo**: Leaflet para selección visual de países
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Dark mode**: Interfaz oscura por defecto

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000)

## 🏗️ Estructura del proyecto

```
billetesnext/
├── app/                    # Páginas y layouts
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── BilleteModal.tsx   # Modal para imágenes
│   ├── BilleteSelector.tsx # Selector principal
│   ├── FavoritosManager.tsx # Gestión de favoritos
│   ├── Header.tsx         # Navegación
│   ├── Hero.tsx           # Sección hero
│   └── MapaMundial.tsx    # Mapa interactivo
├── lib/                   # Utilidades y datos
│   ├── billetes-comunes.ts # Datos Euro y CFA
│   └── constants.ts       # Constantes del proyecto
├── public/               
│   ├── favicon.png        # Icono del sitio
│   └── ruta/              # Imágenes de billetes (link simbólico)
└── types/                 # Definiciones TypeScript
    └── billetes.ts        # Interfaces principales
```

## 🔧 Configuración

### Variables de entorno

Crear archivo `.env.local`:
```
NEXT_PUBLIC_BASE_PATH=/billetes  # Si se integra en proyecto mayor
```

### Integración con proyecto principal

Este módulo está diseñado para integrarse fácilmente:

1. Copiar la carpeta completa al proyecto principal
2. Ajustar el `basePath` en `next.config.js`
3. Importar como subruta o componente

## 🛠️ Desarrollo

### Agregar nuevos países

1. Actualizar `lib/constants.ts` con el mapeo del país
2. Crear archivo de datos en `lib/billetes/[pais].ts`
3. Importar en `BilleteSelector.tsx`

### Agregar billetes

Los billetes siguen la estructura:
```typescript
{
  denominacion: string,
  versiones: [{
    anioEmision: string,
    imagenFrente: string,
    imagenDorso: string
  }]
}
```

## 📝 TODOs

- [ ] Conectar con API real para datos dinámicos
- [ ] Implementar búsqueda y filtros avanzados
- [ ] Agregar más países al mapa
- [ ] Sistema de autenticación
- [ ] PWA support
- [ ] Tests unitarios y E2E

## 🚀 Deploy

### Vercel (recomendado)
```bash
npm run build
vercel
```

### Docker
```bash
docker build -t billetes-next .
docker run -p 3000:3000 billetes-next
```

## 📄 Licencia

Todos los derechos reservados - FinanzaPro 2024
