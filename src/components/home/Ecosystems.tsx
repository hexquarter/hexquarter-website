import { Section, Eyebrow } from "@/components/Primitives";

const timeline = [
  { name: "Bitcoin", note: "Settlement, custody architecture and asset infrastructure." },
  { name: "Ethereum", note: "Public smart-contract platforms, DeFi protocols, EVM tooling." },
  { name: "Lightning", note: "Payment channels, routing and real-time settlement." },
  { name: "Nostr", note: "Portable identity, signed events and coordination infrastructure." },
  { name: "Arweave", note: "Decentralized storage and permanent data availability." },
  { name: "Custom", note: "Application-specific protocol engineering and consensus internals." },
];

export const Ecosystems = () => (
  <Section>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Eyebrow index="02">Experience across ecosystems</Eyebrow>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
          10+ years. Multiple protocols. One discipline: decentralized systems.
        </h2>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-6 text-muted-foreground text-lg leading-relaxed">
        <p>
          We&apos;ve worked across public blockchains, enterprise networks, application-specific
          protocols, decentralized storage and Bitcoin infrastructure.
        </p>
        <p>
          That experience matters because good architecture starts with understanding the trade-offs
          — not choosing a chain first.
        </p>
      </div>
    </div>

    <ol className="mt-14 lg:mt-20 border-t border-border">
      {timeline.map((t, i) => (
        <li
          key={t.name}
          className="group grid md:grid-cols-12 gap-2 md:gap-8 items-baseline py-6 border-b border-border hover:bg-card transition-colors duration-300"
        >
          <span className="md:col-span-1 font-mono text-[11px] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="md:col-span-3 font-display text-xl lg:text-2xl font-medium">
            {t.name}
          </span>
          <span className="md:col-span-8 text-muted-foreground">{t.note}</span>
        </li>
      ))}
    </ol>
  </Section>
);
