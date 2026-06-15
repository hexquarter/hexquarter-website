import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "PriceStr",
    tagline: "Signed Bitcoin price feed over Nostr",
    problem:
      "Every Bitcoin app needs a price feed. Every existing feed is a trust dependency — API keys, rate limits, opaque infrastructure, a single point of failure.",
    solution:
      "A median-aggregated, cryptographically signed Bitcoin price feed delivered as Nostr events. Verifiable at the edge. No keys, no quotas.",
    architecture:
      "Multi-exchange aggregation → signing oracle → fan-out across Nostr relays. Consumers verify the signature directly; the transport is replaceable.",
    outcome:
      "Production-grade price oracle that any wallet, exchange or merchant tool can adopt in a few lines of code.",
    lesson:
      "Nostr is not a social network. It is a generic, signed, fan-out event bus — and that is the part that matters for infrastructure.",
    price: "Free · $10/mo Pro",
    link: "https://pricestr.xyz",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    name: "Bitlasso",
    tagline: "Bitcoin checkout & loyalty for merchants",
    problem:
      "Merchants want to accept Bitcoin without inheriting custodial risk, percentage fees, or a centralized customer database they do not own.",
    solution:
      "A complete merchant stack: Spark-powered payments, Nostr-based receipts and customer profiles, free, self-custody by default.",
    architecture:
      "Spark + Lightning settlement on the trust layer. Nostr identities and receipts on the coordination layer. Merchant keeps keys; customers keep identity.",
    outcome:
      "Merchants ship a real Bitcoin storefront in days, with loyalty mechanics that do not require giving up sovereignty on either side.",
    lesson:
      "When the trust layer and the coordination layer are separated cleanly, the application layer gets dramatically smaller.",
    price: "Free - Open-Source",
    link: "https://bitlasso.xyz",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
];

export const Products = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            Products · proof of expertise
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl leading-[1.05]">
            Systems we built before we{" "}
            <span className="text-primary">recommended them.</span>
          </h2>
          <p className="text-muted-foreground">
            Every architectural opinion we hold is one we have shipped against. Two of those
            systems are live products — both proof of the approach, both available to plug into
            your stack.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {products.map((p) => (
            <article
              key={p.name}
              className={`border ${p.border} bg-card p-6 lg:p-10 flex flex-col gap-8`}
            >
              <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-muted-foreground/10 pb-6">
                <div className="flex flex-col gap-2">
                  <h3 className={`font-[Cal_Sans] text-4xl lg:text-5xl ${p.accent}`}>{p.name}</h3>
                  <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <p className="font-mono text-xs text-muted-foreground">
                    Pricing · <span className={p.accent}>{p.price}</span>
                  </p>
                  <a
                    href={p.link}
                    target={p.link.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`flex items-center gap-2 font-mono text-xs uppercase ${p.accent} hover:text-foreground transition`}
                  >
                    Visit {p.name} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Problem", body: p.problem },
                  { label: "Solution", body: p.solution },
                  { label: "Architecture", body: p.architecture },
                  { label: "Outcome", body: p.outcome },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col gap-2">
                    <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                      // {b.label}
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              <div
                className={`border-l-2 ${p.border} pl-5 flex flex-col gap-1`}
              >
                <p className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground">
                  What this product taught us
                </p>
                <p className="text-base lg:text-lg">{p.lesson}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          <Link
            href="#work-with-us"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-foreground hover:text-primary transition duration-500"
          >
            Apply this expertise to your system
          </Link>
          {/* <Link
            href="/work"
            className="font-mono text-xs uppercase text-muted-foreground hover:text-foreground transition flex items-center gap-2"
          >
            See more case studies <ArrowUpRight className="h-4 w-4" />
          </Link> */}
        </div>
      </div>
    </section>
  );
};
