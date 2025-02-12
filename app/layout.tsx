import "./globals.css"
import { Fira_Code } from 'next/font/google'
import type React from "react"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata = {
  title: "Sarun Hirachan - Resume",
  description: "Professional resume of Sarun Hirachan",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
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
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className={`${firaCode.className} bg-bg-dark text-text-primary`}>{children}</body>
    </html>
  )
}
