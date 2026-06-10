import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const work = [
  {
    status: "In production",
    title: "PriceStr",
    description:
      "Signed Bitcoin price feed delivered over Nostr. Median-aggregated from exchanges, verifiable in one function call.",
    link: "https://pricestr.xyz",
  },
  {
    status: "In production",
    title: "Bitlasso",
    description:
      "Bitcoin-native checkout and loyalty for merchants. Payments through Spark, metadata on Nostr, flat-fee pricing.",
    link: "https://bitlasso.xyz",
  },
];

export const WorkPreview = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Selected work</h3>
            <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
              Products in <span className="text-primary">production.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-xs uppercase text-primary hover:text-white transition flex items-center gap-2"
          >
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {work.map((w) => (
            <a
              key={w.title}
              href={w.link}
              target="_blank"
              rel="noreferrer"
              className="p-8 lg:p-10 border border-muted-foreground/30 bg-card hover:bg-white group flex flex-col gap-6 transition duration-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400/60 rounded-full" />
                <span className="font-mono uppercase text-xs text-green-400">{w.status}</span>
              </div>
              <h3 className="font-[Cal_Sans] text-4xl group-hover:text-black">{w.title}</h3>
              <p className="text-muted-foreground group-hover:text-black/70">{w.description}</p>
              <span className="font-mono text-xs uppercase text-primary group-hover:text-primary flex items-center gap-2">
                Visit {w.title} <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
