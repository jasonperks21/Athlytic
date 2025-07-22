import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Athlytic',
  description: 'Your AI-powered sports analytics platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
