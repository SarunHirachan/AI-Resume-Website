import "./globals.css"
import { Montserrat, Roboto } from 'next/font/google'
import type React from "react"

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' })

export const metadata = {
  title: "Sarun Hirachan - Resume",
  description: "Professional resume of Sarun Hirachan",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '64x64', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
