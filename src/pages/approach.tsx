import { PageShell } from "@/components/PageShell";
import { Bitcoin } from "@/components/Bitcoin";
import { Nostr } from "@/components/Nostr";
import { NostrArchitecture } from "@/components/NostrArchitecture";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Stack } from "@/components/Stack";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FounderStory } from "@/components/home/FounderStory";

const mapping = [
  { q: "Who owns the value?", b: "Bitcoin", n: "—" },
  { q: "How is value transferred?", b: "Lightning / Spark / L1", n: "—" },
  { q: "How is finality achieved?", b: "Proof-of-work", n: "—" },
  { q: "Who are the participants?", b: "—", n: "Nostr identities (npub)" },
  { q: "How do they communicate?", b: "—", n: "Signed events over relays" },
  { q: "How do they synchronize?", b: "—", n: "Event replication" },
  { q: "How do they coordinate?", b: "—", n: "Signed event exchange" },
];

const Approach = () => {
  return (
    <PageShell
      title="Approach — HexQuarter"
      description="Bitcoin as the trust layer. Nostr as the coordination layer. The two foundations we build on, and why."
    >
      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-8 max-w-5xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Approach</h3>
          <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
            We build on the strongest decentralized foundations <span className="text-primary">available.</span>
          </h1>
          <div className="flex flex-col">
            <p className="text-lg text-muted-foreground max-w-3xl">
              After a decade across the decentralized stack, the conclusion is structural, not
              ideological:
            </p>
            <ul className="ml-8 text-muted-foreground text-lg">
              <li className="list-disc"><span className="text-white">Bitcoin</span> is the strongest foundation for
                truth, ownership, settlement and permanence.</li>
              <li className="list-disc"><span className="text-violet-400">Nostr</span>{" "}
                is the strongest foundation for identity, communication, synchronization and coordination.</li>
            </ul>
          </div>
        </div>
        {/* <FounderStory /> */}
      </section>

      <Stack />
      <Bitcoin />
      <Nostr />
      <NostrArchitecture />
      <ComparisonTable />

      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              Mental model
            </h3>
            <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
              Two layers, <span className="text-primary">different questions.</span>
            </h2>
            <p className="text-muted-foreground">
              The clearest way to think about the stack: separate the questions each layer is
              designed to answer.
            </p>
          </div>
          <div className="border border-muted-foreground/20 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr className="text-left font-mono uppercase text-xs">
                  <th className="p-4 border-b border-muted-foreground/20 text-muted-foreground">Question</th>
                  <th className="p-4 border-b border-l border-muted-foreground/20 text-primary">Bitcoin</th>
                  <th className="p-4 border-b border-l border-muted-foreground/20 text-violet-400">Nostr</th>
                </tr>
              </thead>
              <tbody>
                {mapping.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition">
                    <td className="p-4 border-t border-muted-foreground/10 text-white">{row.q}</td>
                    <td className="p-4 border-t border-l border-muted-foreground/10 text-muted-foreground">
                      {row.b}
                    </td>
                    <td className="p-4 border-t border-l border-muted-foreground/10 text-muted-foreground">
                      {row.n}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-20 py-20">
        <div className="border border-muted-foreground/30 bg-card p-10 lg:p-16 flex flex-col gap-6">
          <h2 className="font-[Cal_Sans] text-3xl lg:text-5xl max-w-3xl">
            Want to apply this to your product?
          </h2>
          <Link
            href="/contact"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-white hover:text-primary transition w-fit flex items-center gap-2"
          >
            Start a project <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default Approach;
