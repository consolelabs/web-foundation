import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const Provider = dynamic(() => import('@/providers').then((m) => m.Provider))

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vault',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
