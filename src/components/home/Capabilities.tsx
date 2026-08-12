import { Section, Eyebrow, CTALink } from "@/components/Primitives";

const capabilities = [
  {
    id: "01",
    title: "Protocol & Blockchain Architecture",
    body: "Design the right architecture, protocol boundaries, consensus assumptions, data model and trust model.",
  },
  {
    id: "02",
    title: "Decentralized Systems Engineering",
    body: "Build systems combining blockchain, cryptography, distributed infrastructure, APIs, storage and applications.",
  },
  {
    id: "03",
    title: "Blockchain Integration",
    body: "Integrate existing products with blockchain networks, wallets, payments, stablecoins, identity and decentralized infrastructure.",
  },
  {
    id: "04",
    title: "Technical Advisory",
    body: "Help CTOs, founders and product teams evaluate blockchain architecture, protocol choices and implementation strategies.",
  },
];

export const Capabilities = () => (
  <Section>
    <div className="flex flex-col gap-6 max-w-3xl">
      <Eyebrow index="03">What we do</Eyebrow>
      <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
        From architecture to implementation.
      </h2>
    </div>

    <div className="mt-14 grid md:grid-cols-2 border-t border-l border-border">
      {capabilities.map((c) => (
        <div
          key={c.id}
          className="p-8 lg:p-10 border-r border-b border-border flex flex-col gap-4 hover:bg-card transition-colors duration-300"
        >
          <span className="font-mono text-[11px] text-muted-foreground">{c.id}</span>
          <h3 className="font-display text-xl lg:text-2xl font-medium">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <CTALink href="/expertise" variant="ghost">
        Explore expertise
      </CTALink>
    </div>
  </Section>
);
