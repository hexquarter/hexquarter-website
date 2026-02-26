import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Video from "../../public/bg-video.mp4";
import TextReveal from "./animations/TextReveal";
import FloatingOrb from "./animations/FloatingOrb";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={sectionRef} className="hex-section pt-24 md:pt-32 lg:pt-40 relative h-screen overflow-hidden">
      {/* Parallax video background */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: videoY, scale: videoScale }}
      >
        <video 
          src={Video} 
          loop 
          muted 
          preload="auto" 
          playsInline 
          autoPlay 
          className="absolute top-0 object-cover inset-0 w-full h-full"
        />
      </motion.div>
      
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
       
      {/* Floating orbs with parallax */}
      <motion.div style={{ y: orb1Y }}>
        <FloatingOrb className="top-20 -left-20" size="lg" delay={0} />
      </motion.div>
      <motion.div style={{ y: orb2Y }}>
        <FloatingOrb className="bottom-40 right-10" size="md" delay={2} />
      </motion.div>
      <motion.div style={{ y: orb3Y }}>
        <FloatingOrb className="top-1/2 left-1/3" size="sm" delay={4} />
      </motion.div>
      
      {/* Content with parallax */}
      <motion.div 
        className="hex-container relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          <motion.p 
            className="hex-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bitcoin Engineering
          </motion.p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8">
            <TextReveal text="Bitcoin-native applications." delay={0.3} />
            <br />
            <span className="text-muted-foreground">
              <TextReveal text="Designed for permanence." delay={0.6} />
            </span>
          </h1>
          
          <motion.p 
            className="hex-body max-w-2xl mb-8 text-gray-100 text-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            We build software where Bitcoin serves as the security, settlement, and trust layer. 
            <br />Leverage Bitcoin <strong className="text-primary">as the foundation</strong>.
          </motion.p>
          
          <motion.p 
            className="text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            A <motion.span 
              className="text-primary inline-block"
              animate={{ 
                textShadow: [
                  "0 0 0px hsl(var(--primary))",
                  "0 0 20px hsl(var(--primary))",
                  "0 0 0px hsl(var(--primary))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Bitcoin-only
            </motion.span> engineering firm. 
          </motion.p>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2"
          animate={{ borderColor: ["hsla(var(--muted-foreground), 0.4)", "hsla(var(--primary), 0.6)", "hsla(var(--muted-foreground), 0.4)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
