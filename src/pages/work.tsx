import { PageShell } from "@/components/PageShell";
import { Work } from "@/components/Work";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustProof } from "@/components/TrustProof";

const WorkPage = () => {
  return (
    <PageShell
      title="Work — HexQuarter"
      description="Selected case studies of production systems built on Bitcoin, Lightning and Nostr."
    >
      <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
        <div className="flex flex-col gap-8 max-w-5xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Work</h3>
          <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
            Production systems on <span className="text-primary">Bitcoin</span> and{" "}
            <span className="text-violet-400">Nostr.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Selected examples of what the stack looks like in production — payments, signed data
            feeds, merchant tooling — shipped and live.
          </p>
        </div>
      </section>

      <Work />

      <ServicesPreview />

      <section className="px-5 lg:px-20 py-20">
        <div className="border border-muted-foreground/30 bg-card p-10 lg:p-16 flex flex-col gap-6">
          <h2 className="font-[Cal_Sans] text-3xl lg:text-5xl max-w-3xl">
            Got something similar in mind?
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

export default WorkPage;
