import { Section, Eyebrow, CTALink } from "@/components/Primitives";

export const steps = [
  {
    id: "01",
    title: "Understand the problem",
    body: "Business goals, constraints, users, regulation and risk. Before any technology conversation.",
  },
  {
    id: "02",
    title: "Architect the system",
    body: "Trust model, boundaries, data flows, custody, failure modes and operational responsibilities.",
  },
  {
    id: "03",
    title: "Select the technology",
    body: "Protocol, network and infrastructure chosen against the architecture — including the option of no blockchain at all.",
  },
  {
    id: "04",
    title: "Build the system",
    body: "Engineering with production discipline: testing, observability, security review and documentation.",
  },
  {
    id: "05",
    title: "Ship & support",
    body: "Deployment, operational handover and continued architectural support as the system evolves.",
  },
];

export const ApproachPreview = () => (
  <Section>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Eyebrow index="06">Approach</Eyebrow>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
          We don&apos;t start with a blockchain. We start with the system.
        </h2>
        <div className="pt-2">
          <CTALink href="/approach" variant="ghost">
            Read the full approach
          </CTALink>
        </div>
      </div>
      <ol className="lg:col-span-7 border-t border-border">
        {steps.map((s) => (
          <li key={s.id} className="py-6 border-b border-border grid md:grid-cols-12 gap-2 md:gap-6">
            <span className="md:col-span-1 font-mono text-[11px] text-muted-foreground">{s.id}</span>
            <span className="md:col-span-4 font-display text-lg font-medium">{s.title}</span>
            <span className="md:col-span-7 text-muted-foreground">{s.body}</span>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);
