import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRightIcon, FilePdfIcon, GithubLogoIcon } from '@phosphor-icons/react'

const spring = { type: 'spring', stiffness: 100, damping: 20 } as const

/** Fades content up once as it enters the viewport. Collapses to static under reduced motion. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <Reveal>
        <h2 className="mb-10 text-3xl font-medium tracking-tight md:mb-14 md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

type LinkKind = 'primary' | 'ghost'

export function LinkButton({
  href,
  children,
  kind = 'ghost',
  icon,
}: {
  href: string
  children: ReactNode
  kind?: LinkKind
  icon?: 'arrow' | 'pdf' | 'github'
}) {
  const external = href.startsWith('http') || href.endsWith('.pdf')
  const Icon = icon === 'pdf' ? FilePdfIcon : icon === 'github' ? GithubLogoIcon : icon === 'arrow' ? ArrowUpRightIcon : null
  const styles =
    kind === 'primary'
      ? 'bg-accent text-accent-fg hover:bg-accent-hover border-accent hover:border-accent-hover'
      : 'border-line text-ink-2 hover:border-accent hover:text-accent'
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.98] ${styles}`}
    >
      {icon === 'github' && Icon && <Icon size={16} aria-hidden />}
      {children}
      {icon !== 'github' && Icon && <Icon size={16} aria-hidden />}
    </a>
  )
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-ink-2">
          {t}
        </li>
      ))}
    </ul>
  )
}
