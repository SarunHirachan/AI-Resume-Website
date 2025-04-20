'use client'

import Navigation from "@/components/Navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </>
  )
}
