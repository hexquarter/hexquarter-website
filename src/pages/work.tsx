import { PageShell } from "@/components/PageShell";
import { PageHero, Section, Eyebrow, FinalCTA } from "@/components/Primitives";
import { cases } from "@/components/home/WorkPreview";

const blocks = [
  { key: "challenge", label: "Challenge" },
  { key: "architecture", label: "Architecture" },
  { key: "outcome", label: "Outcome" },
] as const;

const Work = () => (
  <PageShell
    title="Work — Blockchain Systems in Production | HexQuarter"
    description="Selected blockchain and decentralized systems engagements, framed as challenge, architecture, technology and outcome."
  >
    <PageHero
      eyebrow="Work"
      title="Architecture, documented."
      intro="Every engagement is described the same way: the challenge, the architecture that answered it, the technology used, and the outcome."
    />

    {cases.map((c, i) => (
      <Section key={c.slug} id={c.slug} className={i % 2 === 1 ? "bg-card" : ""}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Eyebrow index={String(i + 1).padStart(2, "0")}>{c.kicker}</Eyebrow>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
              {c.name}
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {c.technology.map((t) => (
                <span
                  key={t}
                  className="border border-border bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 border-t border-border">
            {blocks.map((b) => (
              <div key={b.key} className="py-6 border-b border-border grid md:grid-cols-12 gap-3">
                <p className="md:col-span-3 label">{b.label}</p>
                <p className="md:col-span-9 text-lg text-muted-foreground leading-relaxed">
                  {c[b.key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    ))}

    <FinalCTA />
  </PageShell>
);

export default Work;
