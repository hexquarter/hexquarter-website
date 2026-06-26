import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import founderPhoto from "@/assets/founder2.png";

const credibility = [
  "10 years building decentralized systems",
  "Architecture across Web3, DeFi and blockchain infrastructure",
  "Specialized today in Bitcoin, Lightning and Nostr",
  "Builder of multiple production systems (PriceStr, Bitlasso)",
  "Deliberate convergence — chosen, not defaulted to",
];

export const FounderStory = () => {
  return (
    <section className="py-20 border-b border-muted-foreground/30">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            The founder
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl leading-[1.05]">
            A decade of decentralized systems.{" "}<br />
            <span className="text-primary">One deliberate convergence.</span>
          </h2>
          <div className="flex flex-col gap-5 text-muted-foreground">
            <p className="text-lg">
              Samuel spents ten years building decentralized systems — across Ethereum, DeFi,
              infrastructure, blockchain networks and protocols design. <br />After seeing what worked, what compounded, and what
              quietly broke under load.
            </p>
            <p>
              HexQuarter is the result of that arc. Not a Bitcoin or Nostr shop. <br />But a{" "}
              <span className="text-foreground">decentralized systems engineering studio</span> that
              converged on Bitcoin as the trust layer and Nostr as the coordination layer because,
              <br />after a decade of evidence, those are the foundations worth building on.
            </p>
          </div>

          <ul className="flex flex-col gap-3 border-t border-muted-foreground/20 pt-6">
            {credibility.map((c) => (
              <li key={c} className="flex gap-3 items-start">
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="text-sm text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-5 items-center pt-2">
            <Link
              href="/contact"
              className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-foreground hover:text-primary transition duration-500"
            >
              Start a conversation
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative aspect-[4/5] w-1/2 overflow-hidden border border-muted-foreground/30">
            <Image
              src={founderPhoto}
              alt="Samuel — founder of HexQuarter, decentralized systems architect"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
              <p className="font-[Cal_Sans] text-2xl">Samuel</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Founder · Decentralized systems architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
