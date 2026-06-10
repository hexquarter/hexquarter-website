import { PageShell } from "@/components/PageShell";
import { WhyBitcoin } from "@/components/WhyBitcoin";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const arc = [
  {
    year: "2014 — 2018",
    title: "Early decentralized systems",
    body: "First-generation smart contracts, applied cryptography, P2P networks. Building from first principles when most of the tooling didn't exist yet.",
  },
  {
    year: "2018 — 2022",
    title: "Across the stack",
    body: "DeFi protocols, L1/L2 architectures, custody systems. Seeing — close-up — what governance, incentive games and validator cartels actually cost in production.",
  },
  {
    year: "2022 — today",
    title: "Convergence on Bitcoin & Nostr",
    body: "After a decade of evidence, focusing where the foundations compound. Bitcoin for settlement, ownership and permanence. Nostr for identity, communication and coordination.",
  },
];

const About = () => {
  return (
    <PageShell
      title="About — HexQuarter"
      description="HexQuarter is led by Samuel — a blockchain engineer and architect who deliberately converged on Bitcoin and Nostr after a decade across the decentralized stack."
    >
      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-8 max-w-5xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">About</h3>
          <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
            Expertise earned through <span className="text-primary">experience</span>, not ideology.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            HexQuarter is led by <span className="text-white">Samuel</span> — a blockchain engineer
            and architect with a decade of experience building decentralized systems across multiple
            ecosystems. The focus on Bitcoin and Nostr is a conclusion, not a starting point.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              The arc
            </h3>
            <h2 className="font-[Cal_Sans] text-4xl lg:text-5xl">
              A decade across the <span className="text-primary">decentralized</span> stack.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col">
            {arc.map((a, i) => (
              <div
                key={a.year}
                className={`flex flex-col lg:flex-row gap-4 lg:gap-10 py-8 ${
                  i < arc.length - 1 ? "border-b border-muted-foreground/20" : ""
                }`}
              >
                <span className="font-mono text-xs uppercase text-primary lg:w-40 shrink-0 pt-1">
                  {a.year}
                </span>
                <div className="flex flex-col gap-3">
                  <h4 className="font-[Cal_Sans] text-2xl">{a.title}</h4>
                  <p className="text-muted-foreground">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyBitcoin />

      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h3 className="font-mono uppercase tracking-widest text-xs text-violet-400">Today</h3>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
              Helping teams build production-ready systems for{" "}
              <span className="text-primary">payments</span>,{" "}
              <span className="text-violet-400">identity</span> and user-owned data.
            </h2>
            <p className="text-muted-foreground">
              Most of the work is upstream of code — selecting the right protocol surface, designing
              for sovereignty from the start, and avoiding the failure modes of the last decade.
              When code is needed, we ship it.
            </p>
            <p className="text-muted-foreground border-l-2 border-primary pl-5">
              The conclusion after ten years: build on what compounded.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-20 py-20">
        <div className="border border-muted-foreground/30 bg-card p-10 lg:p-16 flex flex-col gap-6">
          <h2 className="font-[Cal_Sans] text-3xl lg:text-5xl max-w-3xl">
            Want to talk through your stack?
          </h2>
          <Link
            href="/contact"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-white hover:text-primary transition w-fit flex items-center gap-2"
          >
            Get in touch <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
