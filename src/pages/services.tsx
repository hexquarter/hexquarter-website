import { PageShell } from "@/components/PageShell";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkWithUs } from "@/components/home/WorkWithUs";

const services = [
  {
    n: "01",
    accent: "text-primary",
    border: "border-primary/40",
    title: "Architecture & protocol design",
    when: "When you're committing to infrastructure you expect to live with for 5+ years.",
    body: "End-to-end system design for decentralized products. We map the protocol surface, choose the right layer for each requirement, and design for sovereignty from the start — not as a retrofit.",
    deliverables: [
      "Architecture documents & diagrams",
      "Protocol-level technical specs",
      "Failure-mode analysis",
      "Implementation roadmap",
    ],
  },
  {
    n: "02",
    accent: "text-primary",
    border: "border-primary/40",
    title: "Bitcoin & Lightning integration",
    when: "When you need finality, not just confirmation — and full self-custody by default.",
    body: "Production-grade integrations for payments, settlement and asset issuance. UTXO design, script patterns, Lightning, Spark, Ark and Taproot Assets — chosen for the specific use case.",
    deliverables: [
      "UTXO & script design",
      "Lightning / Spark / Ark integration",
      "Multisig & timelock custody",
      "Tokenization & anchoring on Bitcoin",
    ],
  },
  {
    n: "03",
    accent: "text-violet-400",
    border: "border-violet-400/40",
    title: "Nostr-native systems",
    when: "When you need identity, communication or coordination infrastructure that users own.",
    body: "We treat Nostr as an event-driven backbone — a standardized, signed event model that can serve as identity, comms, sync and coordination across distributed systems. Including custom relay infrastructure.",
    deliverables: [
      "Portable identity & auth",
      "Signed event schemas (NIPs)",
      "Custom relay infrastructure",
      "Service-to-service coordination over Nostr",
    ],
  },
  {
    n: "04",
    accent: "text-muted-foreground",
    border: "border-muted-foreground/40",
    title: "Advisory",
    when: "When you're evaluating decentralized rails and need a senior, unbiased view.",
    body: "Hands-on advisory for founders, CTOs and product teams: protocol selection, architecture review, Web3 → Bitcoin/Nostr migration paths, and honest assessment of when not to use decentralized infrastructure at all.",
    deliverables: [
      "Architecture review",
      "Protocol selection & tradeoffs",
      "Migration & sunset planning",
      "Team coaching",
    ],
  },
];

const Services = () => {
  return (
    <PageShell
      title="Services — HexQuarter"
      description="Architecture, Bitcoin & Lightning integration, Nostr-native systems and advisory for teams building on decentralized foundations."
    >
      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-8 max-w-5xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Services</h3>
          <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
            Engineering teams hire us for <span className="text-primary">four</span> things.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Architecture-first. Senior throughout. We work with founders and teams from
            decision-stage through production — and stay long enough to make sure it holds up.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-20 py-10 border-b border-muted-foreground/30">
        <div className="flex flex-col">
          {services.map((s) => (
            <article
              key={s.n}
              className="grid lg:grid-cols-12 gap-8 py-10 border-b last:border-b-0 border-muted-foreground/20"
            >
              <div className="lg:col-span-2 flex lg:flex-col gap-3 items-baseline">
                <span className={`font-mono text-xs ${s.accent}`}>{s.n}</span>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-4">
                <h2 className={`font-[Cal_Sans] text-3xl lg:text-4xl ${s.accent}`}>{s.title}</h2>
                <p className="text-muted-foreground">{s.body}</p>
                <p className="font-mono text-xs uppercase text-white/70 border-l-2 border-muted-foreground/30 pl-3">
                  {s.when}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2">
                <span className="font-mono uppercase text-[10px] text-muted-foreground tracking-widest">
                  // Deliverables
                </span>
                <ul className="flex flex-col">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className={`border ${s.border} px-3 py-2 text-xs font-mono text-muted-foreground -mt-px hover:text-white transition`}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WorkWithUs />


      <section className="px-5 lg:px-20 py-20">
        <div className="border border-muted-foreground/30 bg-card p-10 lg:p-16 flex flex-col gap-6">
          <h2 className="font-[Cal_Sans] text-3xl lg:text-5xl max-w-3xl">
            Not sure which engagement fits?
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Send us a paragraph about what you're building. We'll reply with an honest read.
          </p>
          <Link
            href="/contact"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-white hover:text-primary transition w-fit flex items-center gap-2"
          >
            Get in touch <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Services;
