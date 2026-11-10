import { projects, type Project } from '../content'
import { LinkButton, Reveal, Section, Tags } from './ui'

function Meta({ p }: { p: Project }) {
  return (
    <p className="mb-3 flex flex-wrap gap-x-3 font-mono text-xs">
      <span className="text-accent">{p.kind}</span>
      <span className="text-muted">{p.dates}</span>
    </p>
  )
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {p.demo && (
        <LinkButton href={p.demo} kind="primary" icon="arrow">
          Live demo
        </LinkButton>
      )}
      {p.repo && (
        <LinkButton href={p.repo} icon="github">
          GitHub
        </LinkButton>
      )}
    </div>
  )
}

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1400}
        height={583}
        className="aspect-[12/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  )
}

/*
  Two-cell bento: Orange & Blackjack (4 of 6, screenshot) + Pantry 2 Plate (2 of 6, accent block with stat).
  Mobile: both cells stack in a single column.
*/
export default function Projects() {
  const [blackjack, pantry] = projects
  return (
    <Section id="projects" title="Featured work">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <article className="group flex h-full flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            {blackjack.image && <Shot src={blackjack.image} alt="Orange & Blackjack sign-in screen" />}
            <div className="flex flex-1 flex-col">
              <Meta p={blackjack} />
              <h3 className="mb-2 text-2xl font-medium tracking-tight">{blackjack.title}</h3>
              <p className="mb-5 max-w-[56ch] leading-relaxed text-ink-2">{blackjack.description}</p>
              <div className="mt-auto flex flex-col gap-5">
                <Tags items={blackjack.stack} />
                <Links p={blackjack} />
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.08}>
          <article className="flex h-full flex-col rounded-2xl bg-accent p-6 text-accent-fg sm:p-8">
            <p className="mb-3 flex flex-wrap gap-x-3 font-mono text-xs opacity-80">
              <span>{pantry.kind}</span>
              <span>{pantry.dates}</span>
            </p>
            <h3 className="mb-2 text-2xl font-medium tracking-tight">{pantry.title}</h3>
            <p className="mb-8 leading-relaxed opacity-85">{pantry.description}</p>
            {pantry.stat && (
              <div className="mb-8 mt-auto">
                <p className="text-6xl font-medium tracking-tighter">{pantry.stat.value}</p>
                <p className="font-mono text-xs opacity-80">{pantry.stat.label}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {pantry.demo && (
                <a
                  href={pantry.demo}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center rounded-full bg-accent-fg px-4 py-2 text-sm font-medium text-accent transition-transform active:scale-[0.98]"
                >
                  Live demo
                </a>
              )}
              {pantry.repo && (
                <a
                  href={pantry.repo}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center rounded-full border border-current/40 px-4 py-2 text-sm font-medium transition-[border-color,transform] hover:border-current active:scale-[0.98]"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}
