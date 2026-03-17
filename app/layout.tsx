import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google' // Se elimina la fuente 'Inter' que no se usa.
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import ImpersonationBanner from '@/components/ImpersonationBanner';
import ExpirationAlert from '@/components/ExpirationAlert';

// Configuración de fuentes
const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Billetes Vigentes del Mundo - Plataforma de Información Financiera',
  description: 'Explorador completo de billetes mundiales vigentes. Descubra y compare billetes de diferentes países, años y denominaciones.',
  keywords: 'billetes, monedas, dinero, moneda mundial, divisas, colección, numismática',
  authors: [{ name: 'Billetes del Mundo' }],
  openGraph: {
    title: 'Billetes Vigentes del Mundo - Explorador de Monedas',
    description: 'Catálogo interactivo de billetes mundiales vigentes. Compare versiones y denominaciones de diferentes países.',
    type: 'website',
    siteName: 'Billetes del Mundo',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billetes del Mundo - Explorador de Billetes Vigentes',
    description: 'Catálogo interactivo de billetes mundiales vigentes. Compare versiones y denominaciones de diferentes países.',
    site: '@BilletesMundo',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Se mantienen las variables de las fuentes en <html>
    <html lang="es" className={`${poppins.variable} ${roboto.variable}`}>
      {/* ***** CAMBIO CLAVE *****
        Se aplica la clase de la fuente 'poppins' al body, que es la principal
        definida en tu CSS, eliminando la clase conflictiva de 'inter'.
      */}
      <body className={poppins.className}>
        <Providers>
          <ExpirationAlert />
          <Header />
          <ImpersonationBanner />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
