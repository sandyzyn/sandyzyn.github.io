import { ArrowUpRightIcon, FileTextIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { profile } from '../content'
import { Reveal } from './ui'

const socials = [
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedinLogoIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GithubLogoIcon },
  { label: 'Resume', href: profile.resume, Icon: FileTextIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-36">
      <Reveal>
        <h2 className="mb-4 text-3xl font-medium tracking-tight md:text-5xl">Let's connect</h2>
        <p className="mb-10 max-w-[44ch] text-lg text-ink-2">
          Always open to talking about new projects, ideas, or opportunities.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group mb-12 inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-accent [overflow-wrap:anywhere] sm:text-4xl md:text-5xl"
        >
          <span className="underline decoration-accent/30 decoration-2 underline-offset-[0.2em] transition-colors group-hover:decoration-accent">
            {profile.email}
          </span>
          <ArrowUpRightIcon
            aria-hidden
            className="size-6 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-9"
          />
        </a>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-accent"
              >
                <Icon size={20} aria-hidden /> {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
