import { about } from '../content'
import { Reveal, Section } from './ui'

export default function About() {
  return (
    <Section id="about" title="A little about me">
      <Reveal>
        <p className="mb-14 max-w-[42ch] text-2xl leading-snug tracking-tight text-balance md:mb-20 md:text-[2rem]">
          {about.lead}
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="max-w-[48ch] leading-relaxed text-ink-2">{about.body}</p>
        </Reveal>
        {/* Skills as plain columns: three groups side by side on desktop, stacked on mobile. */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3 md:col-span-7">
          {about.skills.map((s, i) => (
            <Reveal key={s.group} delay={0.05 * i}>
              <h3 className="mb-3 font-mono text-xs text-muted">{s.group}</h3>
              <ul className="space-y-1.5">
                {s.items.map((x) => (
                  <li key={x} className="text-[15px]">
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
