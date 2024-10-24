import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STORM - Sistema de Gestión de Empleados',
  description: 'Sistema de gestión de empleados para STORM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="bg-black text-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}