import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200', '400'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Athlytic',
  description: 'Your AI-powered sports analytics platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="font-extralight">{children}</body>
    </html>
  )
}
