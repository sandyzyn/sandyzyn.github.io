import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { nav } from '../content'

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    els.forEach((el) => observer.observe(el))
    // Clear the highlight when back at the hero.
    const hero = document.getElementById('top')
    const heroObserver = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), {
      rootMargin: '-45% 0px -50% 0px',
    })
    if (hero) heroObserver.observe(hero)
    return () => {
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [ids])
  return active
}

const ids = nav.map((n) => n.id)

export default function Nav() {
  const active = useActiveSection(ids)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center gap-4 sm:justify-between">
        <a
          href="#top"
          className="hidden rounded-full border border-line bg-surface/80 px-4 py-2 text-[15px] font-medium tracking-tight shadow-soft backdrop-blur-md sm:block"
        >
          sandy zhang
        </a>
        <nav
          aria-label="Primary"
          className="rounded-full border border-line bg-surface/80 p-1 shadow-soft backdrop-blur-md"
        >
          <ul className="flex">
            {nav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-accent-soft"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-2.5 py-1.5 text-[13px] transition-colors sm:px-3.5 sm:text-sm ${
                      isActive ? 'text-accent' : 'text-ink-2 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
