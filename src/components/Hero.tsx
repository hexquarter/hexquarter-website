import Link from "next/link";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";
import { Button } from "./ui/button";

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
        {/* <h2 className="uppercase font-mono text-xs tracking-widest">
          <span className="text-primary">Open-protocol</span> systems design
        </h2> */}

        <h1 className="lg:text-8xl 2xl:text-9xl text-5xl text-foreground font-[Cal_Sans] max-w-6xl leading-[1]">
          Build products users <span className="text-primary">actually own</span>.
        </h1>

        <div className="flex flex-col gap-4 max-w-4xl">
          <p className="text-white text-xl">
            We help internet businesses own what matters:
            <br />• identity <br />• payments <br />• audience • data
          </p>
          <p className="text-white/70">
            Using Bitcoin, Lightning and Nostr—not because they're fashionable, but because they've proven themselves.
          </p>
        </div>

        <div className="flex flex-wrap items-center font-mono text-xs uppercase gap-5">
          <Link
            href="https://cal.com/hexquarter/strategit-fit"
            target="blank"
            className="flex bg-primary px-4 py-3 hover:bg-white hover:text-primary transition duration-500"
          // className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition duration-500"
          >
            Book an architecture review <ArrowRight className="h-3" />
          </Link>
          <Link
            href="#products"
            className="lex bg-primary px-4 py-3 bg-white text-violet-400 hover:bg-violet-400 hover:text-white transition duration-500"
            onClick={() => posthog.capture('hero_cta_clicked', { cta_label: 'Start a project' })}
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
