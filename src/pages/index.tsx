import Hero from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Problem } from "@/components/home/Problem";
import { Ecosystems } from "@/components/home/Ecosystems";
import { Capabilities } from "@/components/home/Capabilities";
import { BitcoinPerspective } from "@/components/home/BitcoinPerspective";
import { WorkPreview } from "@/components/home/WorkPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ApproachPreview } from "@/components/home/ApproachPreview";
import { FounderNote } from "@/components/home/FounderNote";
import { FinalCTA } from "@/components/Primitives";

const Index = () => (
  <PageShell
    title="HexQuarter — Blockchain Architecture & Engineering Studio"
    description="Blockchain architecture and engineering for teams building serious products. 10+ years across Ethereum, Hyperledger, Archethic, Arweave, Bitcoin and decentralized systems."
  >
    <Hero />
    <Problem />
    <Ecosystems />
    <Capabilities />
    <BitcoinPerspective />
    <WorkPreview />
    <ApproachPreview />
    <FounderNote />
    <FinalCTA />
  </PageShell>
);

export default Index;
