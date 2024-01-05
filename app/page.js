import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"
import Projects from "../components/Home/Projects"
import About from "../components/Home/About"
import Contact from "../components/Home/Contact"


export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
