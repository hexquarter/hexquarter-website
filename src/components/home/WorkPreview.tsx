import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow, CTALink } from "@/components/Primitives";

export const cases = [
  {
    slug: "pricestr",
    name: "PriceStr",
    kicker: "Bitcoin-denominated pricing infrastructure",
    challenge:
      "Merchants and applications needed reliable Bitcoin-denominated pricing without depending on a single centralized data provider.",
    architecture:
      "A pricing service with signed, verifiable data distribution, redundant sources and clear failure semantics for consumers.",
    technology: ["Bitcoin", "Nostr relays", "Signed events", "TypeScript services"],
    outcome:
      "A pricing layer applications can integrate without inheriting one provider's uptime or trust assumptions.",
  },
  {
    slug: "bitlasso",
    name: "Bitlasso",
    kicker: "Bitcoin-native product infrastructure",
    challenge:
      "Deliver a Bitcoin-native product experience without custodial shortcuts or fragile off-chain accounting.",
    architecture:
      "Clear separation of settlement, application state and identity; explicit custody boundaries; auditable transaction flows.",
    technology: ["Bitcoin", "Lightning", "Key-based identity", "Event-driven services"],
    outcome:
      "A system where the trust model is explicit and each component can be reasoned about independently.",
  },
  {
    slug: "enterprise-network",
    name: "Permissioned network architecture",
    kicker: "Enterprise consortium infrastructure",
    challenge:
      "A multi-party business process needed shared state and auditability without exposing data publicly.",
    architecture:
      "A permissioned network design with membership governance, data partitioning, deterministic settlement and integration adapters to existing systems.",
    technology: ["Hyperledger", "Consortium governance", "Cryptographic audit trails"],
    outcome:
      "A production-ready architecture with defined onboarding, upgrade and operational responsibilities.",
  },
  {
    slug: "protocol-engineering",
    name: "Application-specific protocol work",
    kicker: "Consensus and protocol internals",
    challenge:
      "A protocol required design and engineering at the consensus, replication and data-availability level.",
    architecture:
      "Protocol-level design work covering validation rules, replication strategy, node responsibilities and network assumptions.",
    technology: ["Archethic", "Arweave", "Distributed systems engineering"],
    outcome:
      "Design decisions grounded in explicit trade-offs rather than defaults inherited from another chain.",
  },
];

export const WorkPreview = () => (
  <Section>
    <div className="flex flex-col gap-6 max-w-3xl">
      <Eyebrow index="05">Selected work</Eyebrow>
      <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02]">
        Systems, not screenshots.
      </h2>
      <p className="text-muted-foreground text-lg">
        Each engagement is framed the same way: challenge, architecture, technology, outcome.
      </p>
    </div>

    <div className="mt-14 border-t border-border">
      {cases.slice(0, 3).map((c) => (
        <Link
          key={c.slug}
          href={`/work#${c.slug}`}
          className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 border-b border-border hover:bg-card transition-colors duration-300"
        >
          <div className="lg:col-span-4 flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl lg:text-3xl font-medium">{c.name}</h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <p className="lg:col-span-3 label">{c.kicker}</p>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">{c.outcome}</p>
        </Link>
      ))}
    </div>

    <div className="mt-10">
      <CTALink href="/work" variant="ghost">
        All work
      </CTALink>
    </div>
  </Section>
);
