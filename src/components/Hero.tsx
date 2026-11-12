import { motion } from 'motion/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { profile } from '../content'

/* Small line-art bunny, facing right. Decorative only. */
function Bunny() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-full mb-1 block h-8">
      <span className="bunny-track block h-full w-full">
        <span className="bunny-face block h-8 w-8 origin-center">
          <span className="bunny-hop block h-8 w-8">
            <svg viewBox="0 0 32 32" className="h-full w-full">
              <g fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round">
                <ellipse cx="20.5" cy="4.5" rx="2" ry="5.2" transform="rotate(18 20.5 9)" />
                <ellipse cx="24.5" cy="5.5" rx="2" ry="5" transform="rotate(38 24.5 10)" />
                <ellipse cx="13.5" cy="21.5" rx="9.5" ry="7.5" />
                <circle cx="22.5" cy="15.5" r="5.5" />
                <circle cx="4.2" cy="19" r="2.4" />
              </g>
              <ellipse cx="20.5" cy="4.8" rx="0.7" ry="3" fill="var(--accent)" opacity="0.55" transform="rotate(18 20.5 9)" />
              <circle cx="24" cy="14.6" r="0.95" fill="var(--ink)" />
              <circle cx="27.6" cy="16.6" r="0.8" fill="var(--accent)" />
              <path d="M10 28.6h4M17 28.6h3.5" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
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
