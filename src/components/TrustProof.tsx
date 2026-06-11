import { Quote, Star } from "lucide-react";

const stats = [
  { value: "10+", label: "Years across decentralized systems" },
  { value: "3", label: "Production Bitcoin + Nostr products shipped" },
  { value: "15yr", label: "Track record of the foundation we build on" },
  { value: "0", label: "Tokens, bridges or governance dependencies" },
];

const testimonials = [
  {
    quote:
      "HexQuarter took our payment architecture from a moving target to a system we actually trust. The Lightning + Nostr split made our backend smaller, not bigger.",
    name: "CTO, Bitcoin-native fintech",
    detail: "Lightning settlement · Nostr event bus",
  },
  {
    quote:
      "We spent a year fighting bridge risk and validator drama. One quarter with HexQuarter and our settlement layer is just Bitcoin. We stopped thinking about it.",
    name: "Founder, Web3 → Bitcoin migration",
    detail: "Architecture audit · Re-platforming",
  },
  {
    quote:
      "They speak CTO, not crypto. Event sourcing, CQRS, message buses — Nostr finally made sense as infrastructure instead of a social toy.",
    name: "VP Engineering, fintech infra",
    detail: "Nostr advisory · Identity layer",
  },
];

const featured = ["Lightning Network", "Spark", "Nostr", "Taproot Assets", "Ark", "Cashu"];

export const TrustProof = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Track record</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            We've already shipped what we <span className="text-primary">recommend.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-muted-foreground/20">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-5 hover:bg-white/5 transition duration-500"
            >
              <div className="flex justify-between items-start">
                <Quote className="h-6 w-6 text-primary/60" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3 w-3 text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto flex flex-col gap-1 border-t border-muted-foreground/10 pt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
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
        </div>
      </div>
    </section>
  );
};
