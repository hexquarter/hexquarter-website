import { Section, Eyebrow } from "@/components/Primitives";

const quotes = [
  {
    quote:
      "We came in with a protocol choice already made. HexQuarter challenged it, documented the trade-offs, and saved us a rewrite we would have discovered six months in.",
    name: "CTO",
    org: "Payments startup",
  },
  {
    quote:
      "The architecture review was the most useful two weeks we spent all year. We finally had a written trust model our whole team could argue about.",
    name: "Founder",
    org: "Bitcoin infrastructure company",
  },
  {
    quote:
      "Senior, direct, and honest about scope. They told us which part of the work we did not need — that is rare.",
    name: "Head of Engineering",
    org: "Fintech platform",
  },
];

const signals = [
  { k: "10+ yrs", v: "Building decentralized systems" },
  { k: "L1 protocol", v: "Consensus & replication internals shipped" },
  { k: "Bitcoin · Lightning · Nostr", v: "Production systems in operation" },
  { k: "Senior only", v: "Direct work with the architect" },
];

export const Testimonials = () => (
  <Section>
    <div className="flex flex-col gap-6 max-w-3xl">
      <Eyebrow index="06">What clients say</Eyebrow>
      <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
        Judgement, in writing.
      </h2>
      <p className="text-muted-foreground text-lg">
        Engagements are small and senior. The value shows up as decisions teams can defend later.
      </p>
    </div>

    <div className="mt-14 grid md:grid-cols-3 border-t border-l border-border">
      {quotes.map((q) => (
        <figure key={q.quote} className="p-8 border-r border-b border-border flex flex-col gap-6">
          <blockquote className="text-lg leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
          <figcaption className="mt-auto label">
            {q.name} · {q.org}
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="mt-12 grid md:grid-cols-4 border-t border-l border-border">
      {signals.map((s) => (
        <div key={s.k} className="p-6 border-r border-b border-border flex flex-col gap-2">
          <p className="font-display text-xl font-medium">{s.k}</p>
          <p className="text-sm text-muted-foreground">{s.v}</p>
        </div>
      ))}
    </div>
  </Section>
);
