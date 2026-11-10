import { education, experience } from '../content'
import { Reveal, Section, Tags } from './ui'

/*
  Timeline rows (dates | org + title | summary), then Princeton as a tinted panel.
  Mobile: each row stacks into a single column.
*/
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="mb-16 border-t border-line">
        {experience.map((r, i) => (
          <Reveal key={r.org} delay={0.04 * i}>
            <li className="grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-sm text-muted md:col-span-3 md:pt-1">{r.dates}</p>
              <div className="md:col-span-4">
                <h3 className="text-xl font-medium tracking-tight">{r.org}</h3>
                <p className="text-accent">{r.title}</p>
              </div>
              <p className="mt-2 max-w-[60ch] leading-relaxed text-ink-2 md:col-span-5 md:mt-0">{r.summary}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div id="education" className="grid scroll-mt-24 grid-cols-1 gap-10 rounded-2xl bg-surface-2 p-6 sm:p-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="mb-4 font-mono text-sm text-muted">{education.years}</p>
            <h3 className="mb-2 text-2xl font-medium tracking-tight md:text-3xl">{education.school}</h3>
            <p className="text-ink-2">{education.degree}</p>
            <p className="mb-6 text-ink-2">
              Graduated <em>{education.honors}</em>
            </p>
            <p className="mb-1 font-mono text-xs text-muted">Senior thesis</p>
            <p className="max-w-[40ch] leading-snug">{education.thesis}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:col-span-7">
            {education.coursework.map((c) => (
              <div key={c.group}>
                <h4 className="mb-3 font-mono text-xs text-muted">{c.group}</h4>
                <Tags items={c.items} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
