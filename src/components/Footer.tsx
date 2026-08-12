import Link from "next/link";

const groups = [
  {
    title: "Expertise",
    links: [
      { href: "/expertise/blockchain-architecture", label: "Blockchain Architecture" },
      { href: "/expertise/decentralized-systems", label: "Decentralized Systems" },
      { href: "/expertise/bitcoin", label: "Bitcoin" },
      { href: "/expertise/nostr", label: "Nostr" },
      { href: "/expertise/stablecoins", label: "Stablecoins" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/approach", label: "Approach" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Start a conversation" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="px-5 lg:px-12 py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <Link href="/" className="font-display text-xl font-semibold">
            HexQuarter<span className="text-muted-foreground">.</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Blockchain architecture and engineering.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title} className="lg:col-span-3 flex flex-col gap-3">
            <p className="label">{g.title}</p>
            {g.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="lg:col-span-1 flex flex-col gap-3">
          <p className="label">Contact</p>
          <a
            href="mailto:build@hexquarter.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            build@hexquarter.com
          </a>
        </div>
      </div>
      <div className="px-5 lg:px-12 py-5 border-t border-border flex flex-col md:flex-row gap-2 justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <p>© {new Date().getFullYear()} HexQuarter</p>
        <p>Protocol-agnostic by experience · Bitcoin-specialized by choice</p>
      </div>
    </footer>
  );
};
