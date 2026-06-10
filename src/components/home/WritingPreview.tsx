import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    tag: "Lessons from 10 years in Web3",
    color: "text-violet-400",
    border: "border-violet-400/30",
    items: [
      "Why most blockchain architectures fail",
      "What 10 years in Web3 taught me about decentralization",
      "The cost of decentralization — and how to actually pay it",
    ],
  },
  {
    tag: "Bitcoin + Nostr in practice",
    color: "text-primary",
    border: "border-primary/30",
    items: [
      "Bitcoin as a trust layer, not a payment rail",
      "Nostr for CTOs: event sourcing for distributed systems",
      "Designing self-custody as the default, not a feature",
    ],
  },
  {
    tag: "Future systems",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    items: [
      "What AI agents need from decentralized infrastructure",
      "Machine-to-machine payments on Lightning",
      "Open identity as the missing primitive of the web",
    ],
  },
];

export const WritingPreview = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h3 className="font-mono uppercase tracking-widest text-xs text-violet-400">Writing</h3>
            <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
              Field notes from a decade of <span className="text-violet-400">decentralized systems.</span>
            </h2>
            <p className="text-muted-foreground">
              Lessons, architectures and case studies from across the stack — written for founders,
              CTOs and the people actually building.
            </p>
          </div>
          <Link
            href="/writing"
            className="font-mono text-xs uppercase text-violet-400 hover:text-white transition flex items-center gap-2"
          >
            All writing <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className={`border ${p.border} bg-card p-6 lg:p-8 flex flex-col gap-5 hover:bg-white/5 transition duration-500`}
            >
              <span className={`font-mono uppercase tracking-widest text-[10px] ${p.color}`}>
                // {p.tag}
              </span>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {p.items.map((i) => (
                  <li key={i} className="border-l-2 border-muted-foreground/20 pl-3 hover:text-white hover:border-white/50 transition duration-300">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
