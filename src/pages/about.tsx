import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section, Eyebrow, FinalCTA } from "@/components/Primitives";
import founderPhoto from "@/assets/founder2.png";

const arc = [
  {
    year: "2014 — 2017",
    t: "Early decentralized systems",
    b: "First protocol work: consensus, peer-to-peer networking and the realities of distributed state.",
  },
  {
    year: "2017 — 2020",
    t: "Smart-contract platforms",
    b: "Ethereum and EVM systems, DeFi protocol architecture, and the operational cost of on-chain complexity.",
  },
  {
    year: "2019 — 2022",
    t: "Enterprise & permissioned networks",
    b: "Hyperledger consortium design: governance, membership, privacy and integration with existing systems.",
  },
  {
    year: "2020 — 2023",
    t: "Protocol & storage engineering",
    b: "Archethic and Arweave: consensus internals, replication and permanent data availability.",
  },
  {
    year: "2023 — today",
    t: "Bitcoin, Lightning & Nostr",
    b: "Settlement, custody, payments and portable identity — the stack we now specialize in by choice.",
  },
];

const About = () => (
  <PageShell
    title="About — HexQuarter Blockchain Engineering Studio"
    description="HexQuarter is a blockchain architecture and engineering studio led by a founder with a decade across Ethereum, Hyperledger, Archethic, Arweave, Bitcoin and Nostr."
  >
    <PageHero
      eyebrow="About"
      title="Protocol-agnostic by experience. Bitcoin-specialized by choice."
      intro="HexQuarter is a small, senior studio. Blockchain architecture and engineering, led directly by the person doing the architecture."
    />

    <Section>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-border">
            <Image
              src={founderPhoto}
              alt="Samuel, founder of HexQuarter and blockchain systems architect"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-cover grayscale"
            />
          </div>
          <p className="mt-4 font-display text-lg font-medium">Samuel</p>
          <p className="label">Founder · Blockchain systems architect</p>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;ve spent more than ten years building decentralized systems. Public
            smart-contract platforms. Permissioned enterprise networks. Application-specific
            protocols. Decentralized storage. Bitcoin infrastructure.
          </p>
          <p>
            That range shapes how we work. Having built on multiple protocols, we can tell you
            honestly which one fits your constraints — or whether you need one at all.
          </p>
          <p className="text-foreground">
            Over time, our own work converged on Bitcoin for settlement and Nostr for coordination.
            Not out of allegiance, but because after a decade of evidence they are the foundations
            we trust to still be there in ten years.
          </p>
        </div>
      </div>
    </Section>

    <Section className="bg-card">
      <div className="flex flex-col gap-10">
        <Eyebrow>The arc</Eyebrow>
        <ol className="border-t border-border">
          {arc.map((a) => (
            <li key={a.year} className="py-7 border-b border-border grid lg:grid-cols-12 gap-3 lg:gap-8">
              <span className="lg:col-span-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {a.year}
              </span>
              <h2 className="lg:col-span-3 font-display text-xl font-medium">{a.t}</h2>
              <p className="lg:col-span-6 text-muted-foreground">{a.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>How we work</Eyebrow>
        </div>
        <div className="lg:col-span-8 grid md:grid-cols-2 border-t border-l border-border">
          {[
            { t: "Senior only", b: "You work directly with the architect. No layers, no handoff to juniors." },
            { t: "Small engagements first", b: "Most relationships start with a focused architecture review." },
            { t: "Written thinking", b: "Decisions are documented so they outlive the engagement." },
            { t: "Honest scoping", b: "If we're not the right team for the work, we say so early." },
          ].map((x) => (
            <div key={x.t} className="p-8 border-r border-b border-border flex flex-col gap-3">
              <h3 className="font-display text-lg font-medium">{x.t}</h3>
              <p className="text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <FinalCTA />
  </PageShell>
);

export default About;
