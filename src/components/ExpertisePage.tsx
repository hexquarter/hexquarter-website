import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Section, Eyebrow, PageHero, FinalCTA, CTALink, FlowDiagram } from "@/components/Primitives";
import { expertise, Expertise } from "@/data/expertise";

export const ExpertisePage = ({ item }: { item: Expertise }) => {
  const others = expertise.filter((e) => e.slug !== item.slug);

  return (
    <PageShell
      title={`${item.name} — HexQuarter`}
      description={item.intro}
    >
      <PageHero eyebrow={item.eyebrow} title={item.headline} intro={item.intro} />

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Problems we solve</Eyebrow>
          </div>
          <ul className="lg:col-span-8 border-t border-border">
            {item.problems.map((p) => (
              <li key={p} className="py-5 border-b border-border text-lg text-muted-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {item.capabilities && (
        <Section>
          <div className="flex flex-col gap-8">
            <Eyebrow>What we build</Eyebrow>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
              {item.capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className="p-6 lg:p-8 border-r border-b border-border flex flex-col gap-3 hover:bg-card transition-colors duration-300"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {item.diagram && (
        <Section className="bg-card">
          <div className="flex flex-col gap-8">
            <Eyebrow>Architecture</Eyebrow>
            <div className="border border-border bg-background">
              {item.diagram.layers.map((l, i) => (
                <div
                  key={l.label}
                  className="grid md:grid-cols-12 gap-4 p-6 border-b last:border-b-0 border-border"
                >
                  <div className="md:col-span-4 flex items-start gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground pt-1">
                      L{item.diagram!.layers.length - i}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-lg font-medium">{l.label}</span>
                      <span className="text-sm text-muted-foreground">{l.note}</span>
                    </div>
                  </div>
                  <div className="md:col-span-8 flex flex-wrap gap-2 items-start">
                    {l.items.map((it) => (
                      <span
                        key={it}
                        className="border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {item.diagram.caption}
            </p>
          </div>
        </Section>
      )}

      {item.flow && (
        <Section>
          <div className="flex flex-col gap-8">
            <Eyebrow>How it works</Eyebrow>
            <FlowDiagram steps={item.flow.steps} />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {item.flow.caption}
            </p>
          </div>
        </Section>
      )}


      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>How we approach it</Eyebrow>
          </div>
          <ol className="lg:col-span-8 border-t border-border">
            {item.approach.map((a, i) => (
              <li key={a} className="py-5 border-b border-border grid md:grid-cols-12 gap-3">
                <span className="md:col-span-1 font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="md:col-span-11 text-lg">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow>Technologies</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-border bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow>Outcomes</Eyebrow>
            <ul className="flex flex-col gap-3">
              {item.outcomes.map((o) => (
                <li key={o} className="text-lg leading-relaxed">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8">
          <Eyebrow>Other expertise</Eyebrow>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/expertise/${o.slug}`}
                className="p-6 border-r border-b border-border hover:bg-card transition-colors duration-300 flex flex-col gap-3"
              >
                <span className="font-display text-lg font-medium">{o.name}</span>
                <span className="text-sm text-muted-foreground line-clamp-3">{o.intro}</span>
              </Link>
            ))}
          </div>
          <div>
            <CTALink href="/expertise" variant="ghost">
              All expertise
            </CTALink>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </PageShell>
  );
};
