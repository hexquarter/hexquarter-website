import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { OurStory } from "@/components/OurStory";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FounderStory } from "@/components/home/FounderStory";
import { TrustProof } from "@/components/TrustProof";
import { Products } from "@/components/Products";
import { WorkWithUs } from "@/components/home/WorkWithUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FAQ } from "@/components/home/FAQ";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>HexQuarter — Decentralized systems engineered to last</title>
        <meta
          name="description"
          content="HexQuarter is a decentralized systems engineering studio. We design payment, identity and coordination systems on Bitcoin and Nostr — led by a founder with a decade across the decentralized stack."
        />
      </Head>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <OurStory />
        <PositioningStrip />
        <ComparisonTable />
        <TrustProof />
        <Products />
        <WorkWithUs />
        <ServicesPreview />
        <FAQ />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
