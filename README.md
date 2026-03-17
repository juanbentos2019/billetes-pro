# Billetes Vigentes del Mundo - Next.js

Versión modernizada del proyecto de billetes usando Next.js, TypeScript y Tailwind CSS.

##  Características

- **Framework moderno**: Next.js 14 con App Router
- **Base de Datos y ORM**: PostgreSQL con Supabase y Prisma ORM
- **Autenticación y Roles**: Next-Auth integrado con Supabase Auth (Sistema SaaS B2B)
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos utility-first
- **Optimización de imágenes**: Next.js Image component
- **Sistema de favoritos**: Con persistencia en localStorage
- **Mapa interactivo**: Leaflet para selección visual de países interactiva
- **Diseño Responsivo**: Diseño adaptable a todos los dispositivos
- **Modo oscuro**: Interfaz oscura por defecto

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

##  Estructura del proyecto

```
billetesnext/
├── app/                   # Páginas, API y layouts
│   ├── admin/             # Panel administrativo del sistema SaaS
│   ├── api/               # Endpoints del backend (Next-Auth, etc.)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── BilleteInfoModal.tsx # Información de seguridad (UV, IR, OVI)
│   ├── BilleteModal.tsx   # Modal para imágenes
│   ├── BilleteSelector.tsx# Selector principal
│   ├── FavoritosManager.tsx# Gestión de favoritos
│   ├── Header.tsx         # Navegación
│   ├── Hero.tsx           # Sección hero principal
│   └── MapaMundialWrapper.tsx # Contenedor del mapa dinámico
├── lib/                   # Utilidades, configuración y datos estáticos
│   ├── auth.ts            # Configuración de Next-Auth
│   ├── billetes-data/     # Datos estáticos de billetes separados por continente
│   └── prisma.ts          # Cliente Prisma ORM
├── prisma/                # Esquemas y configuraciones de Base de datos
│   └── schema.prisma      # Modelos relacionales principales
├── public/               
│   ├── favicon.png        # Icono del sitio
│   └── ruta/              # Imágenes de billetes (link simbólico)
└── types/                 # Definiciones TypeScript
    └── billetes.ts        # Interfaces principales
```

## 🔧 Configuración

### Variables de entorno

Crear archivo `.env` (y/o `.env.local`):
```
DATABASE_URL="tu_url_de_conexion_postgresql"
DIRECT_URL="tu_url_directa_postgresql_para_prisma"
NEXTAUTH_SECRET="tu_secret_de_nextauth"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_PATH=/billetes  # Opcional si se integra en proyecto mayor
```

### Inicializar la Base de Datos

Luego de clonar e instalar dependencias:
```bash
npx prisma generate
npx prisma db push
```

### Integración con proyecto principal

Este módulo está diseñado para integrarse fácilmente:

1. Copiar la carpeta completa al proyecto principal
2. Ajustar el `basePath` en `next.config.js`
3. Importar como subruta o componente

##  Desarrollo

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

## 📝 Tareas Pendientes

- [ ] Implementar búsqueda y filtros avanzados en el mapa
- [ ] Agregar el 100% de los países de América Latina y otros continentes
- [ ] Soporte completo para PWA (Aplicaciones Web Progresivas)
- [ ] Pruebas unitarias y E2E para componentes críticos
- [ ] Integración con pasarela de pagos (Stripe/MercadoPago) para licenciamiento B2B

## Despliegue

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
