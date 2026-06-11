import { Check, X } from "lucide-react";

const rows = [
  {
    dimension: "Security budget",
    bn: "15 years of compounded proof-of-work",
    w3: "Validator sets, governance tokens, frequent forks",
    bnGood: true,
  },
  {
    dimension: "Settlement guarantees",
    bn: "Physics-based finality on Bitcoin L1",
    w3: "Probabilistic, re-orgs and bridge exploits common",
    bnGood: true,
  },
  {
    dimension: "Identity model",
    bn: "User-owned keypair (npub) across all apps",
    w3: "Wallet-per-chain, custodial accounts, sign-in services",
    bnGood: true,
  },
  {
    dimension: "Data layer",
    bn: "Nostr: signed events, user-owned, portable",
    w3: "Centralized DBs or expensive on-chain storage",
    bnGood: true,
  },
  {
    dimension: "Token / incentive risk",
    bn: "None — no native token beyond BTC itself",
    w3: "Governance tokens, vesting cliffs, VC unlocks",
    bnGood: true,
  },
  {
    dimension: "Operational complexity",
    bn: "Two protocols, both stable for years",
    w3: "New chain, bridge or framework every quarter",
    bnGood: true,
  },
  {
    dimension: "Custody default",
    bn: "Self-custody is the architecture default",
    w3: "Custodians, multisigs-of-custodians, off-ramps",
    bnGood: true,
  },
  {
    dimension: "Regulatory surface",
    bn: "Bitcoin treated as commodity in most jurisdictions",
    w3: "Securities exposure, token registration, sanctions risk",
    bnGood: true,
  },
];

export const ComparisonTable = () => {
  return (
    <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-primary">
            The honest comparison
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            Bitcoin + Nostr <span className="text-primary">vs</span> the broader Web3 stack.
          </h2>
          <p className="text-muted-foreground">
            After a decade across both, this is the side-by-side we wish someone had handed us in 2015.
          </p>
        </div>

        <div className="border border-muted-foreground/20 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr className="text-left">
                <th className="p-4 font-mono uppercase text-xs text-muted-foreground border-b border-muted-foreground/20 w-1/4">
                  Dimension
                </th>
                <th className="p-4 font-mono uppercase text-xs text-primary border-b border-l border-muted-foreground/20">
                  Bitcoin + Nostr
                </th>
                <th className="p-4 font-mono uppercase text-xs text-muted-foreground border-b border-l border-muted-foreground/20">
                  Generic Web3
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.dimension} className="hover:bg-white/5 transition">
                  <td className="p-4 border-t border-muted-foreground/10 align-top">
                    <p className="text-foreground font-medium">{r.dimension}</p>
                  </td>
                  <td className="p-4 border-t border-l border-muted-foreground/10 align-top">
                    <div className="flex gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{r.bn}</span>
                    </div>
                  </td>
                  <td className="p-4 border-t border-l border-muted-foreground/10 align-top">
                    <div className="flex gap-2">
                      <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{r.w3}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-muted-foreground/70 max-w-3xl">
          // We're not anti-Web3. We're pro-foundation. The broader ecosystem produced real engineering
          breakthroughs — we use them where they belong, and we don't pretend they belong everywhere.
        </p>
      </div>
    </section>
  );
};
