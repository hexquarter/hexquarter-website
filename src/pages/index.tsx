import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WorkPreview } from "@/components/home/WorkPreview";
import { WritingPreview } from "@/components/home/WritingPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>HexQuarter — Open-protocol systems on Bitcoin & Nostr</title>
        <meta
          name="description"
          content="HexQuarter designs production systems for payments, identity and user-owned data — built on Bitcoin, Lightning and Nostr."
        />
      </Head>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <PositioningStrip />
        <WhoWeWorkWith />
        <ServicesPreview />
        <WorkPreview />
        <WritingPreview />
        <AboutPreview />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
