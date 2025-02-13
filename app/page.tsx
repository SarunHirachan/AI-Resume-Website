import Header from "../components/Header"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Volunteering from "../components/Volunteering"
import Awards from "../components/Awards"
import Education from "../components/Education"
import Navigation from "../components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Skills />
        <Experience />
        <Volunteering />
        <Awards />
        <Education />
      </div>
    </main>
  )
}
