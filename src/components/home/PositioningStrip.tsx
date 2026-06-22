import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    tag: "Trust layer",
    color: "text-primary",
    border: "border-primary/40",
    title: "Bitcoin",
    subtitle: "Settlement · Ownership · Permanence",
    body: "The strongest decentralized security budget on the planet. We use it where finality, ownership and verifiability are non-negotiable — payments, settlement, anchoring, attestation.",
  },
  {
    tag: "Coordination layer",
    color: "text-violet-400",
    border: "border-violet-400/40",
    title: "Nostr",
    subtitle: "Identity · Communication · Synchronization",
    body: "A standardized, cryptographically signed event model. Identity, messaging, sync and coordination infrastructure — think event sourcing and message bus, but user-owned and portable.",
  },
];

export const PositioningStrip = () => {
  return (
    <section className="py-10 border-b border-muted-foreground/30 border-t">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
            The foundations
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Two protocols. One <span className="text-primary">coherent</span> stack.
          </h2>
          <p className="text-muted-foreground">
            Most teams reach for a new chain, a new token, a new bridge. We reach for the two
            foundations that have already proven they don't need any of that.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`border ${p.border} bg-card p-8 lg:p-10 flex flex-col gap-6 hover:bg-white/5 transition duration-500`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono uppercase tracking-widest text-[10px] ${p.color}`}>
                  // {p.tag}
                </span>
              </div>
              <h3 className={`font-[Cal_Sans] text-5xl ${p.color}`}>{p.title}</h3>
              <p className="font-mono text-xs uppercase text-muted-foreground tracking-wider">
                {p.subtitle}
              </p>
              <p className="text-muted-foreground">{p.body}</p>
              <Link
                href="/approach"
                className={`mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase ${p.color} hover:text-white transition`}
              >
                Read the approach <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
