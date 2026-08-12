import Image from "next/image";
import { Section, Eyebrow, CTALink } from "@/components/Primitives";
import founderPhoto from "@/assets/founder2.png";

export const FounderNote = () => (
  <Section>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-4">
        <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-border">
          <Image
            src={founderPhoto}
            alt="Samuel, founder of HexQuarter and blockchain systems architect"
            fill
            sizes="(min-width: 1024px) 25vw, 60vw"
            className="object-cover grayscale"
          />
        </div>
        <p className="mt-4 font-display text-lg font-medium">Samuel</p>
        <p className="label">Founder · Blockchain systems architect</p>
      </div>

      <div className="lg:col-span-8 flex flex-col gap-6">
        <Eyebrow index="07">Founder</Eyebrow>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-[1.02] max-w-2xl">
          Protocol-agnostic by experience. Bitcoin-specialized by choice.
        </h2>
        <div className="flex flex-col gap-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          <p>
            I&apos;ve spent more than ten years building decentralized systems — smart-contract
            platforms, permissioned enterprise networks, application-specific protocols,
            decentralized storage and Bitcoin infrastructure.
          </p>
          <p>
            That range is the point. It&apos;s what makes it possible to recommend an architecture
            honestly instead of defending a single ecosystem.
          </p>
          <p className="text-foreground">
            HexQuarter exists to do the hard part well: designing systems that survive contact with
            production, users and time.
          </p>
        </div>
        <div className="pt-2">
          <CTALink href="/about" variant="ghost">
            About the studio
          </CTALink>
        </div>
      </div>
    </div>
  </Section>
);
