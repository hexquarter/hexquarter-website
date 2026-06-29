import { Quote, Star } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

// const stats = [
//   { value: "10+", label: "Years across decentralized systems" },
//   { value: "3+", label: "Production Bitcoin + Nostr products shipped" },
//   // { value: "15yr", label: "Track record of the foundation we build on" },
//   // { value: "0", label: "Tokens, bridges or governance dependencies" },
// ];

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Samuel (HexQuarter's founder) on an MVP for a Bitcoin project. He was a great asset throughout the process — highly committed, responsive, and always willing to go the extra mile to ensure the end result matched what I needed. I would gladly recommend him to anyone looking for a reliable and dedicated development partner.",
    name: "Jannes du Plooy - CEO ABC2 Wealth and Investments",
    detail: "Brio - Telegram Bitcoin Wallet",
    linkedin: "https://www.linkedin.com/in/jannesdp/"
  },
  {
    quote: "Integrating HexQuarter solution: PriceStr into NotaryBTC was seamless; their signature-verified Nostr feed provides the absolute reliability our bitcoin infrastructure requires",
    name: 'Eriberto Ortiz - CEO & Founder',
    detail: "NotaryBTC - Hardware-certified Bitcoin verification oracle",
    linkedin: "https://www.linkedin.com/in/eriberto-ortiz-ceo"
  },
  // {
  //   quote:
  //     "We spent a year fighting bridge risk and validator drama. One quarter with HexQuarter and our settlement layer is just Bitcoin. We stopped thinking about it.",
  //   name: "Founder, Web3 → Bitcoin migration",
  //   detail: "Architecture audit · Re-platforming",
  // },
  // {
  //   quote:
  //     "They speak CTO, not crypto. Event sourcing, CQRS, message buses — Nostr finally made sense as infrastructure instead of a social toy.",
  //   name: "VP Engineering, fintech infra",
  //   detail: "Nostr advisory · Identity layer",
  // },
];

// const featured = ["Lightning Network", "Nostr", "Smart contracts", "Taproot Assets", "Spark", "Ark", "Stacks"];

export const TrustProof = () => {
  return (
    <section className="px-20 py-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 ">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Track record</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Real Stories. Real Results.
          </h2>
        </div>

        {/* <div className="grid grid-cols-2 lg:grid-cols-6 border border-muted-foreground/20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 lg:p-8 flex flex-col gap-2 border-muted-foreground/20 ${
                i < 3 ? "border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <p className="font-[Cal_Sans] text-4xl lg:text-5xl text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-5 hover:bg-white/5 transition duration-500"
            >
              <div className="flex justify-between items-start">
                <Quote className="h-6 w-6 text-primary/60" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto flex flex-col gap-1 border-t border-muted-foreground/10 pt-4">
                <p className="text-sm font-medium">{t.linkedin ? <a href={t.linkedin} target="_blank" className="flex items-center gap-2"><BsLinkedin />{t.name}</a> : t.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-5">
          <p className="font-mono uppercase tracking-widest text-[10px] text-muted-foreground">
            // Protocols & networks we ship on
          </p>
          <div className="flex flex-wrap gap-3">
            {featured.map((f) => (
              <div
                key={f}
                className="px-4 py-2 border border-muted-foreground/30 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition"
              >
                {f}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
