/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configuración para permitir imágenes locales y optimización
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com', // O el hostname de tu API de banderas
      },
      {
        protocol: 'https',
        hostname: 'ihbcuymzbjjqs24e.public.blob.vercel-storage.com',
        pathname: '/billetes/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/webp'],
  },
  // Para poder integrarlo como módulo en tu proyecto principal
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Optimizaciones
  swcMinify: true,
  reactStrictMode: true,
}



module.exports = nextConfig
