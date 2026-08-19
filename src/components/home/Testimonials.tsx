import { Section, Eyebrow } from "@/components/Primitives";

const quotes = [
  {
    quote:
      "Highly committed, responsive, and always willing to go the extra mile to ensure the end result matched what I needed. I would gladly recommend HexQuarter to anyone looking for a reliable and dedicated development partner.",
    name: "CEO",
    category: "Bitcoin wallet",
    org: "ABC2 Wealth and Investments",
  },
  {
    quote: "Integrating PriceStr was seamless; their signature-verified Nostr feed provides the absolute reliability our bitcoin infrastructure requires",
    name: "CEO",
    category: "Nostr infrastructure",
    org: "NotaryBTC",
  }
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
          <div>
            <span className="text-lg leading-relaxed text-xs text-muted-foreground border p-2">{q.category}</span>
          </div>
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
