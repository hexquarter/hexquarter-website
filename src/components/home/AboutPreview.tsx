import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 flex flex-col gap-5">
          <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
            Behind HexQuarter
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-5xl">
            Founder-led. <span className="text-primary">Engineering-first.</span>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-6">
          <p className="text-lg text-muted-foreground">
            HexQuarter is led by <span className="text-white">Samuel</span> — a blockchain engineer and
            architect with a decade of experience across the decentralized stack. From Ethereum and
            DeFi to Bitcoin, Lightning and Nostr.
          </p>
          <p className="text-muted-foreground">
            The convergence on Bitcoin and Nostr is the result of building, shipping and
            occasionally watching things fail across multiple ecosystems. Expertise earned through
            experience, not ideology.
          </p>
          <Link
            href="/about"
            className="font-mono text-xs uppercase text-primary hover:text-white transition flex items-center gap-2"
          >
            Read the full story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
