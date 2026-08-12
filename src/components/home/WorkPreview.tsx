import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow, CTALink } from "@/components/Primitives";

export const cases = [
  {
    slug: "pricestr",
    name: "PriceStr",
    kicker: "Bitcoin-denominated pricing infrastructure",
    challenge:
      "Applications needed a decentralized and easy-to-use Bitcoin pricing without depending on a single centralized data provider.",
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
      "Deliver a Bitcoin-native loyalty payment systems product experience without custodial shortcuts or high costs.",
    architecture:
      "Clear separation of settlement, application state and identity; explicit custody boundaries; portable metadata and identity.",
    technology: ["Bitcoin", "Lightning", "Nostr", "oRWA"],
    outcome:
      "A system where the trust model is explicit and each component can be reasoned about independently.",
  },
  {
    slug: "brio",
    name: "Brio",
    kicker: "Telegram-native Bitcoin wallet",
    challenge:
      "Deliver a Bitcoin-native payment system integrated into the Telegram ecosystem with user-experience and security expectations.",
    architecture: "A Telegram bot with a Bitcoin wallet, Lightning payment channels, and a Nostr-based identity layer for non-custodial user accounts.",
    technology: ["Bitcoin", "Lightning", "Nostr", "Telegram MiniApp"],
    outcome:
      "A production-ready architecture with defined onboarding, upgrade and operational responsibilities.",
  },
  {
    slug: "ao-protocol",
    name: "AO ",
    kicker: "Execution-layer protocol",
    challenge:
      "The team required expertise in Erlang based blockchain and distributed systems design a production-ready architecture.",
    architecture:
      "Support on-going engineering efforts for a decentralized supercomputer built on top of Arweave's permanent data storage.",
    technology: ["Erlang", "Arwaeve", "Distributed systems engineering"],
    outcome:
      "Improvements to the protocol's architecture and implementation grounded in explicit trade-offs rather than defaults inherited from another chain.",
  }
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
