import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section, Eyebrow, FinalCTA } from "@/components/Primitives";
import { expertise } from "@/data/expertise";

const ExpertiseIndex = () => (
  <PageShell
    title="Expertise — Blockchain Architecture & Engineering | HexQuarter"
    description="Blockchain architecture, decentralized systems engineering, Bitcoin, Nostr and stablecoin infrastructure — designed for production."
  >
    <PageHero
      eyebrow="Expertise"
      title={
        <>
          Depth across the decentralized stack.
        </>
      }
      intro="We work across protocols, networks and infrastructure. Each engagement starts with the system to be built — never with a chain to be used."
    />

    <Section>
      <div className="border-t border-border">
        {expertise.map((e, i) => (
          <Link
            key={e.slug}
            href={`/expertise/${e.slug}`}
            className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-10 border-b border-border hover:bg-card transition-colors duration-300"
          >
            <span className="lg:col-span-1 font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="lg:col-span-4 flex items-start justify-between gap-4">
              <h2 className="font-display text-2xl lg:text-4xl font-medium">{e.name}</h2>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-lg leading-relaxed">{e.intro}</p>
          </Link>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Eyebrow>How we engage</Eyebrow>
        </div>
        <div className="lg:col-span-8 grid md:grid-cols-3 border-t border-l border-border">
          {[
            { t: "Architecture review", b: "A focused engagement to assess an existing or planned system." },
            { t: "System design", b: "Full architecture definition, protocol selection and implementation plan." },
            { t: "Build & advisory", b: "Implementation with your team, or ongoing architectural support." },
          ].map((x) => (
            <div key={x.t} className="p-6 border-r border-b border-border flex flex-col gap-3">
              <h3 className="font-display text-lg font-medium">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <FinalCTA />
  </PageShell>
);

export default ExpertiseIndex;
