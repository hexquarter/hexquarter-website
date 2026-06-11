import { ArrowUpRight, Check } from "lucide-react";

const products = [
  {
    name: "PriceStr",
    tagline: "Signed Bitcoin price feed over Nostr",
    description:
      "Drop-in price oracle for any Bitcoin app. Median-aggregated from exchanges, cryptographically signed, delivered as Nostr events. No API keys, no rate limits, no trust.",
    price: "Free tier",
    cta: "21k sats / mo · Pro",
    features: ["Sub-second updates", "Multi-exchange median", "Verifiable signature", "Nostr-native delivery"],
    link: "https://pricestr.xyz",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    name: "Bitlasso",
    tagline: "Bitcoin checkout & loyalty for merchants",
    description:
      "A complete merchant stack: Spark-powered payments, Nostr-based receipts and customer loyalty. Flat monthly fee, no per-transaction percentage, no custodial risk.",
    price: "29 USD / mo",
    cta: "Start a store",
    features: ["Self-custody by default", "Spark + Lightning rails", "Nostr customer profiles", "Open-data dashboards"],
    link: "https://bitlasso.xyz",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
  {
    name: "Relay-as-a-Service",
    tagline: "Production-grade Nostr relay for your product",
    description:
      "We operate a dedicated, write-policy-enforced Nostr relay for your application. SLA, monitoring, replication and event-policy tuning. You ship product, we keep the bus reliable.",
    price: "From 199 USD / mo",
    cta: "Request access",
    features: ["99.9% uptime SLA", "Custom write policies", "Multi-region replication", "Private NIP-42 auth"],
    link: "/contact",
    accent: "text-green-400",
    border: "border-green-400/40",
  },
];

export const Products = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Products</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Ship faster on infrastructure <span className="text-primary">we run.</span>
          </h2>
          <p className="text-muted-foreground">
            Beyond consulting, we operate the open-protocol building blocks we use ourselves.
            Plug them into your product directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className={`border ${p.border} bg-card p-8 flex flex-col gap-6 hover:bg-white/5 transition duration-500`}
            >
              <div className="flex flex-col gap-3">
                <h3 className={`font-[Cal_Sans] text-3xl ${p.accent}`}>{p.name}</h3>
                <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                  {p.tagline}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="flex flex-col gap-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 items-center text-sm">
                    <Check className={`h-3 w-3 ${p.accent}`} />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 border-t border-muted-foreground/10 pt-4">
                <p className="font-mono text-xs text-muted-foreground">
                  Starting at <span className={`${p.accent}`}>{p.price}</span>
                </p>
                <a
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-2 font-mono text-xs uppercase ${p.accent} hover:text-white transition`}
                >
                  {p.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
