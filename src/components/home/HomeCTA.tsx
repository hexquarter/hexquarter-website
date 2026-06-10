import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const HomeCTA = () => {
  return (
    <section className="px-5 lg:px-20 py-24">
      <div className="border border-muted-foreground/30 bg-card p-10 lg:p-16 flex flex-col gap-8">
        <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Start a project</h3>
        <h2 className="font-[Cal_Sans] text-4xl lg:text-7xl max-w-4xl">
          Building on a foundation you can <span className="text-primary">trust?</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Tell us what you're building. We'll tell you, honestly, whether Bitcoin and Nostr are the
          right foundations for it.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="bg-primary px-5 py-3 font-mono uppercase text-xs hover:bg-white hover:text-primary transition duration-500 flex items-center gap-2"
          >
            Get in touch <ArrowRight className="h-3 w-3" />
          </Link>
          <Link
            href="/approach"
            className="font-mono uppercase text-xs text-muted-foreground hover:text-white transition flex items-center gap-2"
          >
            Read the approach
          </Link>
        </div>
      </div>
    </section>
  );
};
