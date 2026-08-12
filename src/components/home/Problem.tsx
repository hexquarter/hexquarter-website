import { Section, Eyebrow, FlowDiagram } from "@/components/Primitives";

export const Problem = () => (
  <Section>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 flex flex-col gap-6">
        <Eyebrow index="01">The problem</Eyebrow>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
          Blockchain is easy to start. Hard to architect well.
        </h2>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-6 text-muted-foreground text-lg leading-relaxed">
        <p>
          Choosing a protocol is only one decision. The difficult work is designing the trust model,
          system boundaries, custody model, data architecture, security assumptions and operational
          path to production.
        </p>
        <p className="text-foreground">
          HexQuarter helps teams make those decisions before expensive implementation begins.
        </p>
      </div>
    </div>

    <div className="mt-14 lg:mt-20">
      <FlowDiagram
        steps={[
          "Business problem",
          "Trust model",
          "Protocol selection",
          "Architecture",
          "Production",
        ]}
      />
    </div>
  </Section>
);
