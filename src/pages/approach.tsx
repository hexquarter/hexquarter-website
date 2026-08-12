import { PageShell } from "@/components/PageShell";
import { PageHero, Section, Eyebrow, FinalCTA, FlowDiagram } from "@/components/Primitives";
import { steps } from "@/components/home/ApproachPreview";

const principles = [
  {
    t: "The system comes first",
    b: "Technology selection is an output of architecture, not an input to it.",
  },
  {
    t: "Trade-offs are stated, not hidden",
    b: "Every architecture has costs. We document them so decisions can be defended later.",
  },
  {
    t: "Production is the standard",
    b: "Prototypes are cheap. We design for operations, upgrades, incidents and audits.",
  },
  {
    t: "No blockchain is a valid answer",
    b: "If a database and good cryptography solve the problem, we'll tell you.",
  },
];

const deliverables = [
  "Architecture document with explicit trust model",
  "Protocol and infrastructure recommendation with trade-offs",
  "System diagrams: components, boundaries, data flows",
  "Risk register: failure modes, custody, compliance",
  "Implementation plan sequenced by risk and dependency",
];

const Approach = () => (
  <PageShell
    title="Approach — How We Build Blockchain Systems | HexQuarter"
    description="Understand, architect, select, build, ship. A five-step engineering process for blockchain systems that have to work in production."
  >
    <PageHero
      eyebrow="Approach"
      title="We don't start with a blockchain. We start with the system."
      intro="Most failed blockchain projects didn't fail at implementation. They failed at architecture — a protocol chosen before anyone defined what actually needed to be trustless."
    />

    <Section>
      <div className="flex flex-col gap-10">
        <Eyebrow>The process</Eyebrow>
        <FlowDiagram steps={steps.map((s) => s.title)} />
        <ol className="border-t border-border">
          {steps.map((s) => (
            <li
              key={s.id}
              className="py-8 border-b border-border grid lg:grid-cols-12 gap-3 lg:gap-8"
            >
              <span className="lg:col-span-1 font-mono text-[11px] text-muted-foreground">
                {s.id}
              </span>
              <h2 className="lg:col-span-4 font-display text-xl lg:text-2xl font-medium">
                {s.title}
              </h2>
              <p className="lg:col-span-7 text-muted-foreground text-lg leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>

    <Section className="bg-card">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow>Principles</Eyebrow>
        </div>
        <div className="lg:col-span-8 grid md:grid-cols-2 border-t border-l border-border bg-background">
          {principles.map((p) => (
            <div key={p.t} className="p-8 border-r border-b border-border flex flex-col gap-3">
              <h3 className="font-display text-lg font-medium">{p.t}</h3>
              <p className="text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow>What you receive</Eyebrow>
        </div>
        <ul className="lg:col-span-8 border-t border-border">
          {deliverables.map((d) => (
            <li key={d} className="py-5 border-b border-border text-lg">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <FinalCTA />
  </PageShell>
);

export default Approach;
