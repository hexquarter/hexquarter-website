import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Nostr } from "@/components/Nostr";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Bitcoin } from "@/components/Bitcoin";
import { WhyBitcoin } from "@/components/WhyBitcoin";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Stack  />
        <Bitcoin />
        <Nostr />
        <Services />
        <Work />
        <WhyBitcoin />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
