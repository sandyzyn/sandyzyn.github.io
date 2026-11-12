import { motion } from 'motion/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { profile } from '../content'

/*
  Chubby outline bunny (loaf body, tall upright ears, fluffy tail), facing right.
  Two poses that the CSS in index.css swaps on every hop: sitting, and leaning into the leap
  with ears swept back. Decorative only.
*/
function BunnyShape({ leap = false }: { leap?: boolean }) {
  return (
    <g
      className={leap ? 'bunny-air' : 'bunny-sit'}
      transform={leap ? 'rotate(-9 20 20)' : undefined}
      fill="var(--surface)"
      stroke="var(--ink)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className={leap ? undefined : 'bunny-ear'} transform={leap ? 'rotate(-22 26 12)' : undefined}>
        <path d="M23.6 12 C21.6 6.5 21.8 1.6 24.4 1.1 C27 0.7 27.6 6 27.1 11.4" />
        <path d="M27.4 11.8 C28 6.4 29.8 2.2 31.9 2.6 C34 3.1 32.6 8.4 30.6 12.8" />
      </g>
      <circle cx="4.6" cy="19.5" r="2.8" />
      <path d="M8 28 C2.6 27 2.4 17.4 8 13.2 C13 9.6 22 9 28 11 C34 13 37.2 18 36.2 23 C35.6 27 33 28 30 28 Z" />
      <ellipse cx="31.4" cy="20.6" rx="1.8" ry="1.1" fill="var(--accent)" stroke="none" opacity="0.35" />
      <circle cx="30.2" cy="17.2" r="1.15" fill="var(--ink)" stroke="none" />
      <path d="M34.6 19.6 q0.6 0.9 1.4 0.3" fill="none" strokeWidth="1.2" />
      <path d="M26.4 28 c0.2 -2.2 3.4 -2.2 3.6 0" fill="none" />
    </g>
  )
}

function Bunny() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-full block h-8">
      <span className="bunny-track block h-full w-full">
        <span className="bunny-face block h-8 w-10 origin-center">
          <span className="bunny-hop block h-8 w-10">
            <svg viewBox="0 0 40 32" className="h-full w-full overflow-visible">
              <BunnyShape />
              <BunnyShape leap />
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
  return (
    <section id="top" className="mx-auto flex min-h-[100dvh] max-w-6xl items-center px-4 pb-16 pt-24 sm:px-8">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
        <motion.div
          className="order-2 md:order-1 md:col-span-7"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={item} className="mb-12 font-mono text-sm text-accent">
            {profile.tagline}
          </motion.p>
          <motion.h1
            variants={item}
            className="relative mb-6 w-fit text-5xl font-medium leading-[1.02] tracking-tighter text-balance sm:text-6xl lg:text-7xl"
          >
            <Bunny />
            Hi, I'm Sandy Zhang.
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
