import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-30 relative h-full lg:h-screen pb-10 overflow-hidden lg:px-20 px-5">
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

      <div className="absolute inset-0 bg-background opacity-80" />

      <div className="flex flex-col xl:gap-20 gap-10 relative">
        <div className="lg:max-w-6xl flex flex-col gap-10 lg:gap-10 2xl:gap-20 justify-between">
          <h2 className="uppercase font-mono text-xs tracking-widest uppercase ">
            <span className="text-primary">Bitcoin</span> & <span className="text-violet-400">Nostr</span> Engineering
          </h2>

          <h1 className="lg:text-8xl 2xl:text-9xl text-6xl text-foreground font-[Cal_Sans]">
            The foundation is <span className="text-primary">Bitcoin.</span>
            <br />
            We build what goes on top.
          </h1>

          <div className="flex flex-col gap-5">
            <p className="text-gray-100 text-muted-foreground text-lg hover:text-white/80 transition duration-500">
              Products built on Bitcoin don't depend on promises, governance votes, or custodians.
              <br />They inherit 15 years of hardened security — overeign applications, decentralized by design..
            </p>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              <span className="text-white">Build on <span className="text-primary">Bitcoin as platform</span>, <span className="text-violet-400">Nostr as fabric.</span></span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center font-mono text-xs uppercase gap-5">
            <a href="#contact" className="bg-primary px-4 py-3 hover:shadow-lg hover:bg-white hover:text-violet-400 hover:cursor-pointer transition duration-500">Start a project</a>
            <a href="#stack" className="text-muted-foreground hover:text-foreground transition flex items-center transition duration-500">Explore the stack <ArrowRight className="h-2" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
