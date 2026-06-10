const audiences = [
  {
    tag: "01",
    title: "Web3 startups",
    body: "Teams who've already shipped on Ethereum, Solana or L2s and want a foundation that doesn't break under governance or token incentives.",
  },
  {
    tag: "02",
    title: "Bitcoin startups",
    body: "Founders building on Lightning, Spark, Ark, Taproot Assets or Nostr who need senior architecture, not just integrations.",
  },
  {
    tag: "03",
    title: "Fintech & infrastructure",
    body: "Companies exploring decentralized rails for payments, identity or settlement — without taking on crypto-native risk.",
  },
  {
    tag: "04",
    title: "Long-term founders",
    body: "Anyone making an infrastructure decision they expect to live with for the next decade, not the next funding round.",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">Who we work with</h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Built for teams making <span className="text-primary">long-term</span> infrastructure decisions.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-muted-foreground/20">
          {audiences.map((a, i) => (
            <div
              key={a.tag}
              className={`p-6 lg:p-8 flex flex-col gap-4 border-muted-foreground/20 ${
                i < audiences.length - 1 ? "md:border-r" : ""
              } ${i < 2 ? "md:border-b lg:border-b-0" : ""} hover:bg-white/5 transition duration-500`}
            >
              <span className="font-mono text-xs text-muted-foreground/60">{a.tag}</span>
              <h4 className="font-[Cal_Sans] text-2xl">{a.title}</h4>
              <p className="text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
