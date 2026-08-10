import { PageShell } from "@/components/PageShell";
import { Bitcoin } from "@/components/Bitcoin";
import { Nostr } from "@/components/Nostr";
import { NostrArchitecture } from "@/components/NostrArchitecture";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Stack } from "@/components/Stack";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight, FileDigit, ListCheck, Lock, User, Users } from "lucide-react";

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
      title="The Bitcoin Advantage — HexQuarter"
      description="Bitcoin the most secure event ledger"
    >
      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30 flex justify-between">
        <div className="flex flex-col gap-8">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">The Bitcoin Advantage</h3>
          <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
            Bitcoin as the most <span className="text-primary">secure</span> event ledger.
          </h1>
          <div className="text-muted-foreground">
            A universal foundation for recording verifying, and building mission-critical systems with confidence.
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-primary pl-2">
            <p className="font-mono uppercase text-xs text-muted-foreground">
              Simple. Auditable. Immutable.
            </p>
            <p className="text-muted-foreground text-xs">
              The foundation for trustworthy systems.
            </p>
          </div>
        </div>
      </section>


      <div className="px-5 lg:px-20 py-20 flex gap-10 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-10 flex-1">
          <p className="font-mono uppercase tracking-[6px] text-sm text-center">
            Application layer
          </p>
          <div className="flex gap-0 justify-between">
            <div className="flex-1 flex flex-col gap-5 items-center p-7 bg-card border-r border-muted-foreground/20">
              <User />
              <p className="uppercase text-xs font-mono">Identity</p>
              <div className="h-[1px] w-1/2 bg-primary"></div>
            </div>
            <div className="flex-1 flex flex-col gap-5 items-center p-7 bg-card border-r border-muted-foreground/20">
              <ArrowLeftRight />
              <p className="uppercase text-xs font-mono">Payments</p>
              <div className="h-[1px] w-1/2 bg-primary"></div>

            </div>
            <div className="flex-1 flex flex-col gap-5 items-center p-7 bg-card border-r border-muted-foreground/20">
              <ListCheck />
              <p className="uppercase text-xs font-mono">Audit</p>
              <div className="h-[1px] w-1/2 bg-primary"></div>

            </div>
            <div className="flex-1 flex flex-col gap-5 items-center p-7 bg-card">
              <Users />
              <p className="uppercase text-xs font-mono">Coordination</p>
              <div className="h-[1px] w-1/2 bg-primary"></div>
            </div>

          </div>


          <p className="font-mono uppercase tracking-[6px] text-sm text-center">
            Data layer
          </p>
          <div className="bg-card p-7 flex gap-5 items-center border border-muted-foreground/10">
            <FileDigit />
            <div className="flex flex-col gap-2 flex-1 text-center">
              <p className="uppercase text-2xl font-mono tracking-[6px]">Event Ledger</p>
              <p className="text-muted-foreground text-xs uppercase">
                Ordered. Timestamped. Verifiable. Permanent.
              </p>
            </div>
          </div>

          <p className="font-mono uppercase tracking-[6px] text-sm text-center">
            Foundation layer
          </p>
          <div className="bg-card p-7 flex gap-5 items-center border border-primary">
            <Lock />
            <div className="flex flex-col gap-2 flex-1 text-center">
              <p className="uppercase text-4xl text-primary font-[Cal_Sans] tracking-widest">Bitcoin</p>
              <p className="text-muted-foreground text-xs uppercase">
                Decentralized. Censorship-resistant. Extremely secure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 text-muted-foreground">
          <p>Applications built on Bitcion adds a deeper level of trust.</p>
          <p>The <span className="text-white">Application Layer</span> turns those events into useful systems — identity, payments, audit, coordination, and other workflows that need a reliable source of truth. <br />These applications can operate independently while sharing the same underlying record of what happened..</p>
          <p>The <span className="text-white">Data Layer</span> provides that shared record through an event ledger: ordered, timestamped, and verifiable. <br />Instead of relying on a single database or organization to define history, every event becomes part of a durable, auditable sequence that can be independently verified.</p>
          <p>The <span className="text-white">Foundation Layer</span> anchors that history to Bitcoin — a neutral, decentralized, and censorship-resistant foundation. <br />Bitcoin provides the security and permanence beneath the ledger, allowing applications to build on infrastructure designed to remain trustworthy even when individual systems, organizations, or intermediaries change.</p>
        </div>
      </div>

      <section className="px-5 lg:px-20 py-20">
        <h2 className="text-3xl lg:text-5xl max-w-3xl mb-10 font-bold">
          Applications create value. <br />The ledger creates shared truth. <br /><span className="text-primary">Bitcoin</span> provides the foundation.
        </h2>
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

      {/* <section className="px-5 lg:px-20 py-20">
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
      </section> */}
    </PageShell>
  );
};

export default Approach;
