import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const Section = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`px-5 lg:px-12 py-20 lg:py-28 border-b border-border ${className}`}>
    {children}
  </section>
);

export const Eyebrow = ({ index, children }: { index?: string; children: ReactNode }) => (
  <p className="label flex items-center gap-3">
    {index && <span className="text-foreground">{index}</span>}
    {children}
  </p>
);

export const PageHero = ({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) => (
  <Section className="pt-28 lg:pt-36">
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 flex flex-col gap-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-4xl lg:text-7xl leading-[0.98] font-semibold max-w-4xl">
          {title}
        </h1>
        {intro && <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </div>
  </Section>
);

export const CTALink = ({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) =>
  variant === "solid" ? (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-background hover:text-foreground transition-colors duration-300"
    >
      {children} <ArrowRight className="h-3 w-3" />
    </Link>
  ) : (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
    >
      {children} <ArrowRight className="h-3 w-3" />
    </Link>
  );

export const FlowDiagram = ({ steps }: { steps: string[] }) => (
  <div className="border border-border">
    <div className="grid md:grid-cols-5">
      {steps.map((s, i) => (
        <div
          key={s}
          className="p-6 border-b md:border-b-0 md:border-r last:border-r-0 border-border flex flex-col gap-4 hover:bg-card transition-colors duration-300"
        >
          <span className="font-mono text-[11px] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base font-medium leading-snug">{s}</span>
        </div>
      ))}
    </div>
  </div>
);

export const FinalCTA = () => (
  <section className="px-5 lg:px-12 py-24 lg:py-32">
    <div className="flex flex-col gap-8 max-w-4xl">
      <Eyebrow>Start a conversation</Eyebrow>
      <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1]">
        Have a blockchain system to build?
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        Tell us what you&apos;re trying to achieve. We&apos;ll help you determine whether blockchain
        is the right foundation, which architecture fits, and what it takes to get to production.
      </p>
      <div className="flex flex-wrap gap-4">
        <CTALink href="/contact">Start a conversation</CTALink>
        <CTALink href="/work" variant="ghost">
          Explore our work
        </CTALink>
      </div>
    </div>
  </section>
);
