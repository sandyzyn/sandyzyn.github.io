import { MotionConfig } from 'motion/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Contact from './components/Contact'

export default function App() {
  return (
    // reducedMotion="user" makes every Motion animation respect prefers-reduced-motion.
    <MotionConfig reducedMotion="user">
      <Nav />
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <About />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
      <footer className="border-t border-line px-4 py-10 text-center text-sm text-muted">
        Designed &amp; built by Sandy Zhang &middot; &copy; {new Date().getFullYear()}
      </footer>
    </MotionConfig>
  )
}
