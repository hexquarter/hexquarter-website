import Link from "next/link";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";

const meta = [
  "10+ years",
  "Multiple blockchain ecosystems",
  "Protocol & system architecture",
  "Production engineering",
];

const Hero = () => {
  return (
    <section className="px-5 lg:px-12 pt-32 lg:pt-44 pb-16 lg:pb-24 border-b border-border">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-9 flex flex-col gap-10">
          <p className="label">Blockchain architecture & engineering studio</p>
          <h1 className="font-display font-semibold text-5xl lg:text-8xl 2xl:text-9xl leading-[0.94] max-w-5xl">
            Turn blockchain ideas into production-ready systems.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Blockchain architecture and engineering for teams building serious products — backed by
            10+ years across Ethereum, Hyperledger, Archethic, Arweave, Bitcoin and decentralized
            systems.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              onClick={() => posthog.capture("hero_cta_clicked", { cta_label: "Discuss your project" })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-primary px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-background hover:text-foreground transition-colors duration-300"
            >
              Discuss your project <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
            >
              Explore our approach <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-24 border-t border-border grid md:grid-cols-4">
        {meta.map((m) => (
          <div
            key={m}
            className="py-5 md:px-6 md:first:pl-0 border-b md:border-b-0 md:border-r last:border-r-0 border-border font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
          >
            {m}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
