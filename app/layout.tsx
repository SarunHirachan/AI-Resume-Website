import "./globals.css"
import { Fira_Code } from 'next/font/google'
import type React from "react"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata = {
  title: "Sarun Hirachan - Resume",
  description: "Professional resume of Sarun Hirachan",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
      </head>
      <body className={`${firaCode.className} bg-bg-dark text-text-primary`}>{children}</body>
    </html>
  )
}
