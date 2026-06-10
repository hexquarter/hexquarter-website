import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    n: "01",
    title: "Architecture & protocol design",
    body: "System design for teams committing to long-term decentralized infrastructure.",
  },
  {
    n: "02",
    title: "Bitcoin & Lightning integration",
    body: "Payments, settlement, custody and asset architecture — production-ready.",
  },
  {
    n: "03",
    title: "Nostr-native systems",
    body: "Identity, event infrastructure, and coordination layers for distributed apps.",
  },
  {
    n: "04",
    title: "Advisory",
    body: "For founders evaluating Web3 → Bitcoin/Nostr migration paths and tradeoffs.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:items-end">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              What we build
            </h3>
            <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
              Engineering across the <span className="text-primary">full stack.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="font-mono text-xs uppercase text-primary hover:text-white transition flex items-center gap-2"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-muted-foreground/20">
          {items.map((s, i) => (
            <Link
              key={s.n}
              href="/services"
              className={`p-6 lg:p-8 flex flex-col gap-4 group hover:bg-white transition duration-500 border-muted-foreground/20 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < items.length - 2 ? "border-b" : ""}`}
            >
              <span className="font-mono text-xs text-muted-foreground/60 group-hover:text-primary">
                {s.n}
              </span>
              <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">{s.title}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-black/70">{s.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
