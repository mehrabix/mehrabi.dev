import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '▼ Ahmad Mehrabi ▲ Frontend Engineer',
  description: 'Ahmad Mehrabi is a highly skilled frontend engineer, contributing a wealth of expertise and creativity to the field of web development. With a passion for crafting seamless and visually appealing user interfaces, Ahmad possesses a keen proficiency in JavaScript coding and a deep understanding of the latest frontend technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
