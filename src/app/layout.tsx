import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '▼ Ahmad Mehrabi ▲ Frontend Engineer',
  description: 'Ahmad Mehrabi, a seasoned frontend engineer, brings a wealth of expertise and creativity to the realm of web development. With a fervent passion for crafting seamless and visually captivating user interfaces, Ahmad demonstrates exceptional proficiency in JavaScript coding and a profound understanding of the latest frontend technologies. Explore his innovative contributions to elevate your web experiences to new heights.',
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
