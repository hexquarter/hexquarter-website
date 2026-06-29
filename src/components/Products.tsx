import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "PriceStr",
    tagline: "Signed Bitcoin price feed over Nostr",
    problem: "Most Bitcoin applications depend on centralized price APIs that become a trust bottleneck.",
    solution: "Multi-source aggregation, signed oracle events and distribution over Nostr relays.",
    architecture: "Multi-exchange aggregation → signing oracle → fan-out across Nostr relays. Consumers verify the signature directly; the transport is replaceable.",    
    outcome:
      "Production-grade price oracle that any wallet, exchange or merchant tool can adopt in a few lines of code.",
    lesson: "The same architecture applies to any system that needs verifiable event distribution, synchronization or cryptographically signed data—not just price feeds.",
    link: "https://pricestr.xyz",
    accent: "text-primary",
    border: "border-primary/40",
  },
  {
    name: "Bitlasso",
    tagline: "Lightning payment checkout & automation with loyalty",
    problem:
      "Merchants want to accept Bitcoin without inheriting custodial risk, percentage fees, or a centralized customer database they do not own.",
    solution:
      "A complete merchant stack: Programmable Lightning payments and Nostr-based metadata storage",
    architecture:
      "Lightning settlement on the trust layer. Nostr identities and receipts on the coordination layer. Merchant keeps keys; customers keep identity.",
    outcome:
      "Merchants ship a real Bitcoin storefront in days, with loyalty mechanics that do not require giving up sovereignty on either side.",
    lesson: "Combining payments, identity and communication into a coherent stack can be achieved with total ownership.",
    link: "https://bitlasso.xyz",
    accent: "text-violet-400",
    border: "border-violet-400/40",
  },
];

export const Products = () => {
  return (
    <section id='products' className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            Proof Of Work
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl leading-[1.05]">
            Built before recommended
          </h2>
          <p className="text-muted-foreground">
            We don't recommend architectures we've only studied. <br />
            We recommend the ones we've designed, built and operated ourselves.
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
                  Insight
                </p>
                <p className="text-base lg:text-lg italic font-bold">{p.lesson}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 items-center">
          {/* <Link
            href="#work-with-us"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-foreground hover:text-primary transition duration-500"
          >
            Apply this expertise to your system
          </Link> */}
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
