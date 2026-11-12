import { useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { profile } from '../content'
import { BUNNY_DOTS, BUNNY_H, BUNNY_W } from './bunnyDots'

/*
  Keeps the bunny's track lined up with "Sandy Zhang." When the heading fits on one line the
  track sits right above the name; when it wraps, the name is on line two, so the track moves
  to the top of the heading (still name-width) instead of landing between the lines.
*/
function useNameTrack(heading: RefObject<HTMLElement | null>, name: RefObject<HTMLElement | null>) {
  const [track, setTrack] = useState({ left: 0, width: 0 })
  useLayoutEffect(() => {
    const h = heading.current
    const n = name.current
    if (!h || !n) return
    const measure = () => {
      const hr = h.getBoundingClientRect()
      const nr = n.getBoundingClientRect()
      const oneLine = nr.top - hr.top < nr.height / 2
      setTrack({ left: oneLine ? nr.left - hr.left : 0, width: nr.width })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(h)
    document.fonts?.ready.then(measure)
    return () => ro.disconnect()
  }, [heading, name])
  return track
}

/* Dot-matrix bunny that hops along the top of the name. Decorative only. */
function Bunny({ left, width }: { left: number; width: number }) {
  return (
    <span aria-hidden style={{ left, width }} className="pointer-events-none absolute bottom-full block h-11">
      <span className="bunny-track block h-full w-full">
        <span className="bunny-face block h-11 w-11 origin-center">
          <span className="bunny-hop block h-11 w-11">
            <svg viewBox={`0 0 ${BUNNY_W} ${BUNNY_H}`} className="h-full w-full">
              <path d={BUNNY_DOTS} fill="var(--ink)" />
            </svg>
          </span>
        </span>
      </span>
    </span>
  )
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
} as const

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const track = useNameTrack(headingRef, nameRef)
  return (
    <section id="top" className="mx-auto flex min-h-[100dvh] max-w-6xl items-center px-4 pb-16 pt-24 sm:px-8">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        <motion.div
          className="order-2 md:order-1 md:col-span-7"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={item} className="mb-14 font-mono text-sm text-accent">
            {profile.tagline}
          </motion.p>
          <motion.h1
            ref={headingRef}
            variants={item}
            className="relative mb-6 w-fit text-5xl font-medium leading-[1.02] tracking-tighter text-balance sm:text-6xl lg:text-7xl"
          >
            {track.width > 0 && <Bunny left={track.left} width={track.width} />}
            Hi, I'm{' '}
            <span ref={nameRef} className="inline-block">
              Sandy Zhang.
            </span>
          </motion.h1>
          <motion.p variants={item} className="mb-10 max-w-[34ch] text-lg leading-relaxed text-ink-2 md:text-xl">
            {profile.intro}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-[background-color,transform] duration-200 hover:bg-accent-hover active:scale-[0.98]"
            >
              See my work
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 font-medium text-ink transition-[border-color,color,transform] duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              Resume <ArrowUpRightIcon size={16} aria-hidden />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 md:col-span-5"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
        >
          {/* 4:5 center crop also trims a UI artifact in the photo's bottom-right corner. */}
          <div className="mr-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl bg-surface-2 shadow-soft md:ml-auto md:mr-0 md:max-w-[400px]">
            <img
              src={profile.photo}
              alt="Portrait of Sandy Zhang"
              width={400}
              height={500}
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_20%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
