import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import posthog from "posthog-js";

const offers = [
  {
    tag: "01 · Diagnostic",
    name: "Bitcoin & Nostr Architecture Review",
    price: "€1,500",
    duration: "2-3 days · async + 1 working session",
    best: "Founders, CTOs and product leaders evaluating Bitcoin / Nostr for a real system.",
    deliverables: [
      "Architecture review of your current or proposed system",
      "Risk assessment across trust, custody and coordination",
      "Prioritized roadmap with sequencing",
      "Implementation recommendations",
    ],
    cta: "Book Architecture Review",
    href: "/contact?offer=review",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    tag: "02 · Blueprint",
    name: "Sovereign Infrastructure Blueprint",
    price: "€3,500 – €5,000",
    duration: "1-2 weeks",
    best: "Teams committing to a Bitcoin + Nostr foundation and needing a design they can build against.",
    deliverables: [
      "Bitcoin strategy (payments, settlement, custody)",
      "Nostr architecture (identity, events, relays)",
      "Trust layer design",
      "Coordination layer design",
      "Implementation roadmap with effort estimates",
    ],
    cta: "Discuss the Blueprint",
    href: "/contact?offer=blueprint",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
  {
    tag: "03 · Build",
    name: "Implementation Projects",
    price: "From €7,500",
    duration: "Scoped per project",
    best: "Teams who need a senior experience to ship the system.",
    deliverables: [
      "Payment systems (Bitcoin, Lightning, Spark)",
      "Identity systems (Nostr, NIP-05, NIP-42)",
      "Communication & event infrastructure",
      "Decentralized synchronization and coordination",
    ],
    cta: "Start a Project",
    href: "/contact?offer=build",
    accent: "text-green-400",
    border: "border-green-400/40",
  },
];

export const WorkWithUs = () => {
  return (
    <section id="work-with-us" className="px-5 lg:px-20 py-24 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            Work with HexQuarter
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl leading-[1.05]">
            Three ways to engage.{" "}
            <span className="text-primary">One clear next step.</span>
          </h2>
          <p className="text-muted-foreground">
            Productized engagements designed around how founders and CTOs actually buy
            architectural expertise — diagnose first, design second, build third.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {offers.map((o) => (
            <div
              key={o.name}
              className={`border ${o.border} bg-card p-8 flex flex-col gap-6 hover:bg-white/5 transition duration-500`}
            >
              <div className="flex flex-col gap-3">
                <p className={`font-mono uppercase text-[10px] tracking-widest ${o.accent}`}>
                  {o.tag}
                </p>
                <h3 className="font-[Cal_Sans] text-3xl">{o.name}</h3>
                <p className={`font-[Cal_Sans] text-4xl ${o.accent}`}>{o.price}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {o.duration}
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-muted-foreground/10 pt-4">
                <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                  Best for
                </p>
                <p className="text-sm text-foreground/90">{o.best}</p>
              </div>

              <div className="flex flex-col gap-3 border-t border-muted-foreground/10 pt-4">
                <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                  Deliverables
                </p>
                <ul className="flex flex-col gap-2">
                  {o.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 items-start text-sm">
                      <Check className={`h-3 w-3 mt-1 shrink-0 ${o.accent}`} />
                      <span className="text-foreground/90">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={o.href}
                onClick={() => posthog.capture('offer_cta_clicked', { offer_tag: o.tag, offer_name: o.name, offer_href: o.href })}
                className="mt-auto bg-primary px-4 py-3 font-mono uppercase text-xs text-center hover:bg-foreground hover:text-primary transition duration-500 flex items-center justify-center gap-2"
              >
                {o.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground border-l-2 border-primary pl-5 max-w-3xl">
          Not sure which fits? Most engagements start with the Architecture Review and graduate
          into a Blueprint or Implementation.
        </p>
      </div>
    </section>
  );
};
