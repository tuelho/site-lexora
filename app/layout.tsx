import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'LEXORA | Plataforma de Inteligência Regulatória',
  description: 'Monitoramento automatizado do Diário Oficial da União com alertas e inteligência regulatória. Automatize buscas no DOU, receba alertas em tempo real e transforme publicações oficiais em decisões acionáveis.',
  keywords: ['Diário Oficial', 'DOU', 'monitoramento regulatório', 'compliance', 'inteligência regulatória', 'alertas', 'jurídico'],
  authors: [{ name: 'LEXORA' }],
  openGraph: {
    title: 'LEXORA | Plataforma de Inteligência Regulatória',
    description: 'Monitore o Diário Oficial com inteligência, não manualmente. Automatize buscas no DOU e receba alertas em tempo real.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEXORA | Plataforma de Inteligência Regulatória',
    description: 'Monitore o Diário Oficial com inteligência, não manualmente.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable} bg-[#0B0F19]`}>
      <body className="font-sans antialiased bg-[#0B0F19]">
        {children}
      </body>
    </html>
  )
}
