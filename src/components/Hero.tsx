import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-30 relative h-full lg:min-h-[88vh] pb-20 overflow-hidden lg:px-20 px-5 flex items-center">
      <div className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <video
          src="/bg-video.mp4"
          loop
          muted
          preload="auto"
          playsInline
          autoPlay
          className="absolute top-0 object-cover inset-0 w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-background/85" />

      <div className="flex flex-col gap-10 2xl:gap-16 relative w-full">
        <h2 className="uppercase font-mono text-xs tracking-widest">
          <span className="text-primary">Open-protocol</span> systems design
        </h2>

        <h1 className="lg:text-8xl 2xl:text-9xl text-5xl text-foreground font-[Cal_Sans] max-w-6xl leading-[1]">
          Decentralized systems,
          <br />
          engineered to <span className="text-primary">last.</span>
        </h1>

        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-muted-foreground text-lg lg:text-xl">
            HexQuarter designs production systems for payments, identity and user-owned data — built
            on <span className="text-white">Bitcoin</span>, <span className="text-white">Lightning</span> and{" "}
            <span className="text-violet-400">Nostr</span>.
          </p>
          <p className="text-muted-foreground">
            We build on the strongest decentralized foundations available, so the products on top
            inherit their guarantees instead of inventing new ones.
          </p>
        </div>

        <div className="flex flex-wrap items-center font-mono text-xs uppercase gap-5">
          <Link
            href="/contact"
            className="bg-primary px-4 py-3 hover:bg-white hover:text-primary transition duration-500"
          >
            Start a project
          </Link>
          <Link
            href="/approach"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition duration-500"
          >
            Read the approach <ArrowRight className="h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
