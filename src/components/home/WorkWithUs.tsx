import Link from "next/link";
import { ArrowRight, Check, Drum } from "lucide-react";
import posthog from "posthog-js";

const offers = [
  {
    tag: "00 · Discovery",
    name: "Strategic Fit Assessment",
    price: "$300",
    duration: "2-3 hours · async + 1 working session",
    best: "Founders and business leaders deciding whether Bitcoin, Lightning or Nostr align with their product, business model and strategic goals.",
    deliverables: [
      "Review of your business, product or publishing strategy",
      "Identification of opportunities and trade-offs",
      "Honest recommendation: pursue now, pilot, or wait",
      "Recommended next steps and engagement path",
    ],
    cta: "Schedule Assessment",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-muted-foreground",
    border: "border-muted-foreground/40"
  },
  {
    tag: "01 · Diagnostic",
    name: "Bitcoin & Nostr Architecture Review",
    price: "€1,500",
    duration: "3-5 days · async + 1 working session",
    best: "Businesses that have decided to explore Bitcoin or Nostr and need a technical architecture they can confidently build against.",
    deliverables: [
      "Review of your current or proposed system architecture",
      "Risk assessment across trust, custody and coordination",
      "Integration approach for Bitcoin, Lightning and Nostr",
      "Prioritized implementation roadmap with technical recommendations",
    ],
    cta: "Book Architecture Review",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    tag: "02 · Blueprint",
    name: "Sovereign Infrastructure Blueprint",
    price: "€3,000",
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
    href: "https://cal.com/hexquarter/intro",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
  {
    tag: "03 · Build",
    name: "Implementation Projects",
    price: "Starting at €7,000",
    duration: "Scoped per project",
    best: "Teams who need a senior experience to ship the system.",
    deliverables: [
      "Payment systems (Bitcoin, Lightning, Spark)",
      "Identity systems (Nostr, NIP-05, NIP-42)",
      "Communication & event infrastructure",
      "Decentralized synchronization and coordination",
    ],
    cta: "Start a Project",
    href: "https://cal.com/hexquarter/intro",
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
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
              target="_blank"
                href={o.href}
                onClick={() => posthog.capture('offer_cta_clicked', { offer_tag: o.tag, offer_name: o.name, offer_href: o.href })}
                className="mt-auto bg-primary px-4 py-3 font-mono uppercase text-xs text-center hover:bg-foreground hover:text-primary transition duration-500 flex items-center justify-center gap-2"
              >
                {o.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground border-l-2 border-l-primary pl-5">
         Not sure where to start? 
         <br /><br />The <strong className="text-white">Strategic Fit Assessment</strong> is designed to help you determine whether Bitcoin, Lightning and Nostr are the right fit for your business. 
         <br />If you proceed with an Architecture Review, Blueprint or Implementation Project within 30 days, the full €300 <strong className="text-white">is credited</strong> toward your engagement.
        </p>
      </div>
    </section>
  );
};
