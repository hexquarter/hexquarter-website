import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Section, Eyebrow, PageHero, FinalCTA, CTALink } from "@/components/Primitives";
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
