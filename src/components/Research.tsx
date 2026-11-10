import { bioResearch, csResearch, publication, inPreparation } from '../content'
import { LinkButton, Reveal, Section } from './ui'

export default function Research() {
  return (
    <Section id="posters" title="Research & publications">
      {/* Featured: the peer-reviewed publication gets a full-width block. */}
      <Reveal>
        <article className="mb-4 rounded-2xl border border-accent/25 bg-accent-soft p-6 sm:p-10">
          <p className="mb-4 font-mono text-sm text-accent">
            {publication.venue} &middot; {publication.date}
          </p>
          <h3 className="mb-4 max-w-[30ch] text-2xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            {publication.title}
          </h3>
          <p className="mb-4 text-sm text-muted">
            {publication.authors.map((a, i) => (
              <span key={a}>
                {a === 'Sandy Zhang' ? <strong className="font-medium text-ink">{a}</strong> : a}
                {i < publication.authors.length - 1 && ', '}
              </span>
            ))}
          </p>
          <p className="mb-8 max-w-[60ch] leading-relaxed text-ink-2">{publication.summary}</p>
          <div className="flex flex-wrap gap-2">
            <LinkButton href={publication.url} kind="primary" icon="arrow">
              Read on ACM
            </LinkButton>
            <LinkButton href={publication.arxiv} icon="arrow">
              arXiv
            </LinkButton>
          </div>
        </article>
      </Reveal>

      {/* In preparation: same shape as the featured block, but untinted so it reads as secondary. */}
      <Reveal>
        <article className="mb-4 rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <p className="mb-4 font-mono text-sm text-muted">{inPreparation.venue} &middot; In preparation</p>
          <h3 className="mb-4 max-w-[34ch] text-xl font-medium leading-tight tracking-tight text-balance md:text-2xl">
            {inPreparation.title}
          </h3>
          <p className="mb-4 text-sm text-muted">
            {inPreparation.authors.map((a, i) => (
              <span key={a}>
                {a === 'Sandy Zhang' ? <strong className="font-medium text-ink">{a}</strong> : a}
                {i < inPreparation.authors.length - 1 && ', '}
              </span>
            ))}
          </p>
          <p className="max-w-[60ch] leading-relaxed text-ink-2">{inPreparation.summary}</p>
        </article>
      </Reveal>

      {/* CS research: two media cards with the real first page of each document. */}
      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {csResearch.map((r, i) => (
          <Reveal key={r.title} delay={0.06 * i}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="overflow-hidden border-b border-line bg-surface-2">
                <img
                  src={r.image}
                  alt={`First page of ${r.title}`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="mb-3 font-mono text-xs text-muted">{r.meta}</p>
                <h3 className="mb-2 text-xl font-medium leading-snug tracking-tight">{r.title}</h3>
                <p className="mb-6 leading-relaxed text-ink-2">{r.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {r.links.map((l, j) => (
                    <LinkButton key={l.href} href={l.href} kind={j === 0 ? 'primary' : 'ghost'} icon={l.kind === 'plain' ? undefined : l.kind}>
                      {l.label}
                    </LinkButton>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Earlier biology research: lighter two-column list, no cards. */}
      <Reveal>
        <h3 className="mb-6 font-mono text-sm text-muted">Earlier research in biology</h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-10 border-t border-line pt-8 md:grid-cols-2 md:gap-8">
        {bioResearch.map((r, i) => (
          <Reveal key={r.title} delay={0.06 * i}>
            <p className="mb-2 font-mono text-xs text-muted">{r.meta}</p>
            <h4 className="mb-2 text-lg font-medium tracking-tight">{r.title}</h4>
            <p className="mb-5 max-w-[50ch] leading-relaxed text-ink-2">{r.description}</p>
            <div className="flex flex-wrap gap-2">
              {r.links.map((l) => (
                <LinkButton key={l.href} href={l.href} icon={l.kind === 'plain' ? undefined : l.kind}>
                  {l.label}
                </LinkButton>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
