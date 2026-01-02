import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'razi-portfolio',
  description: 'Created by Razi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
