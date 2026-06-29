import Link from "next/link";
import { ArrowRight, Check, Drum } from "lucide-react";
import posthog from "posthog-js";

const offers = [
  // {
  //   tag: "01 · Discovery",
  //   name: "Strategic Fit Assessment",
  //   price: "100 €",
  //   duration: "1 hour + brief written recommendations",
  //   best: "Founders and business leaders deciding whether Bitcoin, Lightning or Nostr align with their product, business model and strategic goals.",
  //   deliverables: [
  //     "Review of your product or business",
  //     "Opportunities for Bitcoin, Lightning and Nostr",
  //     "Recommended next steps"
  //   ],
  //   cta: "Schedule Assessment",
  //   href: "https://cal.com/hexquarter/strategit-fit",
  //   accent: "text-muted-foreground",
  //   border: "border-muted-foreground/40"
  // },
  {
    tag: "01 · Diagnostic",
    name: "Architecture Review",
    price: "1,500 €",
    duration: "3-5 days · async + 1 working session",
    best: "Validate whether Bitcoin, Lightning or Nostr are the right foundation before investing in development.",
    deliverables: [
      "Technical architecture assessment",
      "Risk, trade-off analysis",
      "Implementation roadmap",
      "Honest recommendation (including when not to use Bitcoin/Nostr)",
    ],
    cta: "Book a review",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    tag: "02 · Blueprint",
    name: "Sovereign Foundation",
    price: "4,000 €",
    duration: "1-2 weeks",
    best: "Design the core architecture for products centered around ownership, payments, identity and open data.",
    deliverables: [
      "System architecture, protocol selection",
      "Identity, payments, data ownership design",
      "Infrastructure, deployment blueprint",
      "Implementation roadmap with effort estimates"
    ],
    cta: "Discuss the Blueprint",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
  {
    tag: "03 · Build",
    name: "Tailored projects",
    price: "Starting at 7,000 €",
    duration: "Scoped per project",
    best: "From MVP to production-ready infrastructure, built around open protocols and user ownership.",
    deliverables: [
      "Bitcoin, Lightning payment systems",
      "User-owned identity infrastructure",
      "Communication, synchronization layers",
      "Production deployment, protocol integrations"
    ],
    cta: "Start a Project",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-green-400",
    border: "border-green-400/40",
  },
  {
    tag: "04 · Support",
    name: "Fractional Protocol Architect",
    price: "Starting at 3,000 €/mo",
    duration: "Retainer",
    best: "A senior protocol architect embedded in your team to guide architecture, reduce technical risk and accelerate delivery.",
    deliverables: [
      "Architecture guidance, technical strategy",
      "Design reviews, engineering mentorship",
      "Protocol evaluation, integration support",
      "Direct collaboration with your product, engineering teams"
    ],
    cta: "Start a Project",
    href: "https://cal.com/hexquarter/intro",
    accent: "text-yellow-400",
    border: "border-yellow-400/40",
  },
];

// const launchPacks = [
//   {
//     name: "Nostr Identity",
//     price: "Starting at 300 €",
//     duration: "1-3 days",
//     best: "Applications looking to add decentralized authentication using Nostr identities.",
//     deliverables: [
//       "Nostr login integration",
//       "User profile mapping",
//       "Session management"
//     ],
//     cta: "Start Nostr Login",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-violet-400",
//     border: "border-violet-400/40"
//   },
//   {
//     name: "Bitcoin wallet integration",
//     price: "Starting at 500 €",
//     duration: "1-3 days",
//     best: "Businesses wanting to send and receive Bitcoin and Lightning payments within their app and being self-custodial.",
//     deliverables: [
//       "Bitcoin & Lightning wallet embedding",
//       "Seemless and fluid user experience",
//       "P2P payment solution for less-risk and better compliance"
//     ],
//     cta: "Accept Bitcoin",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-primary",
//     border: "border-primary/40"
//   },
//   {
//     name: "Nostr Messaging",
//     price: "Starting at 500 €",
//     duration: "1-3 days",
//     best: "Applications or platforms that want encrypted, user-owned messaging or notification systems built on Nostr.",
//     deliverables: [
//       "End-to-end encrypted messaging integration",
//       "User-to-user or system-to-user messaging flow",
//       "Relay configuration for message delivery",
//     ],
//     cta: "Enable Secure Messaging",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-violet-400",
//     border: "border-violet-400/40"
//   },
//   {
//     name: "Sovereign Publishing",
//     price: "Starting at 700 €",
//     duration: "3–5 days",
//     best: "Media organizations and creators strengthening content distribution, audience ownership and reader monetization without replacing their existing publishing platform.",
//     deliverables: [
//       "WordPress or CMS integration",
//       "Publish articles to Nostr while keeping your website as the source of truth",
//       "Verified publisher identity",
//       "Lightning support for direct reader contributions",
//       "Deployment and publishing workflow",
//     ],
//     cta: "Enable Sovereign Publishing",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-violet-400",
//     border: "border-violet-400/40"
//   },
//   {
//     name: "Stable Balance",
//     price: "Starting at 900 €",
//     duration: "1–3 days",
//     best: "Applications looking to offer users a stable-value balance for payments, savings or yield products while leveraging Bitcoin-native infrastructure.",
//     deliverables: [
//       "Integrate stable balance support (e.g. USDB)",
//       "Deposit and withdrawal flows",
//       "Balance display and transaction history",
//       "Wallet integration"
//     ],
//     cta: "Add Stable Balances",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-primary",
//     border: "border-primary/40"
//   },
//   {
//     name: "Loyalty & Digital Assets",
//     price: "Starting at 1,200 €",
//     duration: "3-5 days",
//     best: "Businesses wanting to issue loyalty points, rewards or digital assets using Bitcoin-native token infrastructure.",
//     deliverables: [
//       "Token issuance integration (Spark, Ark or compatible protocols)",
//       "Loyalty or rewards balance",
//       "Transfer and redemption flows",
//       "Wallet compatibility"
//     ],
//     cta: "Launch Digital Assets",
//     href: "https://cal.com/hexquarter/intro",
//     accent: "text-primary",
//     border: "border-primary/40"
//   },
// ]

export const WorkWithUs = () => {
  return (
    <section id="pricing" className="px-5 lg:px-20 py-24 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            Our offer
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl leading-[1.05]">
            Choose the right starting point.
          </h2>
          {/* <p className="text-muted-foreground">
            Sovereign infrastructure, built two ways: structured advisory for system design, and productized packs for fast integration.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
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

        <p className="font-mono text-xs text-muted-foreground border-l-2 border-l-primary pl-5"  id="packs">
          Not sure where to start?
          <br />The <strong className="text-white">Strategic Fit Assessment</strong> is designed to help you determine whether Bitcoin, Lightning and Nostr are the right fit for your business.
        </p>

        {/* <div className="flex flex-col">
          <h2 className="font-[Cal_Sans] text-4xl">
            Fast integration
          </h2>
          <p className="text-muted-foreground">
            Start small with production-ready Bitcoin, Lightning and Nostr integrations. Launch Packs let you introduce user-owned identity, payments and communication into your product with fixed scope, predictable pricing and rapid delivery.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5" >
          {launchPacks.map((o) => (
            <div
              key={o.name}
              className={`border ${o.border} bg-card p-8 flex flex-col gap-6 hover:bg-white/5 transition duration-500`}
            >
              <div className="flex flex-col gap-3">
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
                onClick={() => posthog.capture('offer_cta_clicked', { offer_name: o.name, offer_href: o.href })}
                className="mt-auto bg-primary px-4 py-3 font-mono uppercase text-xs text-center hover:bg-foreground hover:text-primary transition duration-500 flex items-center justify-center gap-2"
              >
                {o.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
