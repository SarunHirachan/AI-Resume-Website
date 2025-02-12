import "./globals.css"
import { Fira_Code } from 'next/font/google'
import type React from "react"
import Image from 'next/image'

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
      <body className={`${firaCode.className} bg-bg-dark text-text-primary`}>
        <div className="fixed top-4 left-4 z-50">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        {children}
      </body>
    </html>
  )
}
