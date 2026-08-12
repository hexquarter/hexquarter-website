import { Section, Eyebrow, CTALink } from "@/components/Primitives";

const points = [
  {
    t: "Longest-running security record",
    b: "More than fifteen years of continuous operation under adversarial conditions.",
  },
  {
    t: "Predictable settlement",
    b: "A neutral base layer with no protocol roadmap risk and no governance surprises.",
  },
  {
    t: "Real payment rails",
    b: "Lightning and modern layers make instant, low-cost settlement production-viable.",
  },
  {
    t: "Portable identity via Nostr",
    b: "Key-based identity and signed events remove platform lock-in from the coordination layer.",
  },
];

export const BitcoinPerspective = () => (
  <Section className="bg-card">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Eyebrow index="04">Our perspective</Eyebrow>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
          Why we often recommend Bitcoin.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We are protocol-agnostic by experience and Bitcoin-specialized by choice. After a decade
          across ecosystems, Bitcoin remains the most credible settlement layer for systems that
          need to still be standing in ten years.
        </p>
        <div className="pt-2">
          <CTALink href="/expertise/bitcoin" variant="ghost">
            Bitcoin expertise
          </CTALink>
        </div>
      </div>

      <div className="lg:col-span-7 border-t border-border">
        {points.map((p) => (
          <div key={p.t} className="py-6 border-b border-border flex flex-col gap-2">
            <h3 className="font-display text-lg font-medium">{p.t}</h3>
            <p className="text-muted-foreground">{p.b}</p>
          </div>
        ))}
        <p className="pt-6 text-sm text-muted-foreground">
          When another protocol is the better fit for your constraints, we will say so.
        </p>
      </div>
    </div>
  </Section>
);
