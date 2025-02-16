import type React from "react"
import "./globals.css"
import { Inter } from 'next/font/google'
import Navigation from "@/components/Navigation"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sarun Hirachan - Resume",
  description: "Professional resume of Sarun Hirachan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen bg-background text-foreground">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
