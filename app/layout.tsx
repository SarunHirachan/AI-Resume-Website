import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navigation"
import ThemeToggle from "@/components/ThemeToggle"
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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
