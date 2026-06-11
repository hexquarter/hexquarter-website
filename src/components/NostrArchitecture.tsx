import { Database, GitBranch, Key, Network, Radio, Server, Shuffle, Workflow } from "lucide-react";

const primitives = [
  {
    icon: <Key className="h-5 w-5" />,
    title: "Keypair = identity",
    body:
      "Every actor is a secp256k1 keypair. The public key (npub) is the identity — portable across every relay, every client, every product. No account creation, no email, no password reset.",
  },
  {
    icon: <Radio className="h-5 w-5" />,
    title: "Events = signed messages",
    body:
      "Everything in Nostr is an event: a JSON blob signed by a keypair. Messages, profiles, payments metadata, application state — all the same primitive. Cryptographic provenance comes for free.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Relays = dumb pipes",
    body:
      "Relays are append-only event stores with subscription filters. They don't run logic, they don't validate semantics. That simplicity is the feature — it's why the protocol can scale horizontally without coordination.",
  },
  {
    icon: <Shuffle className="h-5 w-5" />,
    title: "Clients = sovereign",
    body:
      "Clients choose which relays to read from, which to write to, and how to interpret events. There is no canonical client, no canonical state. Users move between apps without losing identity, data or social graph.",
  },
];

const ctoMapping = [
  {
    legacy: "Event sourcing",
    nostr: "Nostr events are the source of truth — already signed, already timestamped, already portable.",
  },
  {
    legacy: "CQRS",
    nostr: "Writes go to relays as events. Reads use filters/subscriptions. The split is built into the protocol.",
  },
  {
    legacy: "Message bus (Kafka, NATS, RabbitMQ)",
    nostr: "Relays + subscriptions are a user-owned, cross-organization message bus. No broker to operate.",
  },
  {
    legacy: "Service-to-service auth",
    nostr: "NIP-42 / signed events: every message is authenticated end-to-end by the producer's key.",
  },
  {
    legacy: "User identity / SSO",
    nostr: "npub is the SSO. Same identity in every app, owned by the user, not the platform.",
  },
  {
    legacy: "Cross-service synchronization",
    nostr: "Replicate by subscribing to the same filter from multiple relays. Eventual consistency, conflict-free for append-only event streams.",
  },
];

const flow = [
  { actor: "Client", action: "Signs event with user's private key" },
  { actor: "Relay set", action: "Stores event, serves it to any subscriber matching the filter" },
  { actor: "Other clients", action: "Subscribe with filters → receive event → verify signature locally" },
  { actor: "Your backend (optional)", action: "Subscribes as just another client. No special access." },
];

export const NostrArchitecture = () => {
  return (
    <section id="nostr-architecture" className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h3 className="font-mono uppercase tracking-widest text-xs text-violet-400">
            Nostr architecture
          </h3>
          <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
            What it actually <span className="text-violet-400">is</span>, under the hood.
          </h2>
          <p className="text-muted-foreground">
            Nostr is not a social network. It's a minimal protocol for signed events over relays —
            small enough to fit in a weekend and powerful enough to replace whole categories of
            backend infrastructure.
          </p>
        </div>

        {/* Primitives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {primitives.map((p) => (
            <div
              key={p.title}
              className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-4 hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-violet-400/40 text-violet-400 rounded-md">
                  {p.icon}
                </div>
                <h4 className="font-[Cal_Sans] text-xl">{p.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col gap-5">
          <p className="font-mono uppercase tracking-widest text-[10px] text-muted-foreground">
            // The full event lifecycle
          </p>
          <div className="border border-muted-foreground/20 bg-card">
            {flow.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 p-5 lg:p-6 ${
                  i < flow.length - 1 ? "border-b border-muted-foreground/10" : ""
                } hover:bg-white/5 transition`}
              >
                <div className="flex items-center gap-3 min-w-[180px]">
                  <span className="font-mono text-xs text-muted-foreground/60">
                    0{i + 1}
                  </span>
                  <span className="font-mono uppercase text-xs text-violet-400 tracking-wider">
                    {step.actor}
                  </span>
                </div>
                <p className="text-sm text-foreground/90 flex-1">{step.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTO mapping */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 max-w-3xl">
            <h3 className="font-[Cal_Sans] text-3xl lg:text-4xl">
              For CTOs: <span className="text-violet-400">what Nostr replaces</span>
            </h3>
            <p className="text-muted-foreground">
              If you've built distributed systems before, you've already built half of Nostr.
              It maps cleanly onto patterns you already know.
            </p>
          </div>
          <div className="border border-muted-foreground/20 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-card">
                <tr className="text-left">
                  <th className="p-4 font-mono uppercase text-xs text-muted-foreground border-b border-muted-foreground/20 w-1/3">
                    You already know
                  </th>
                  <th className="p-4 font-mono uppercase text-xs text-violet-400 border-b border-l border-muted-foreground/20">
                    Nostr equivalent
                  </th>
                </tr>
              </thead>
              <tbody>
                {ctoMapping.map((row) => (
                  <tr key={row.legacy} className="hover:bg-white/5 transition">
                    <td className="p-4 border-t border-muted-foreground/10 text-foreground font-medium align-top">
                      {row.legacy}
                    </td>
                    <td className="p-4 border-t border-l border-muted-foreground/10 text-muted-foreground align-top">
                      {row.nostr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why it complements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-3">
            <Network className="h-5 w-5 text-violet-400" />
            <h4 className="font-[Cal_Sans] text-xl">Complements, not replaces</h4>
            <p className="text-sm text-muted-foreground">
              Nostr slots beside your existing services. Use it for identity, eventing and sync
              while keeping your Postgres and your APIs.
            </p>
          </div>
          <div className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-3">
            <GitBranch className="h-5 w-5 text-violet-400" />
            <h4 className="font-[Cal_Sans] text-xl">Append-only, conflict-free</h4>
            <p className="text-sm text-muted-foreground">
              Events are immutable and signed. Replication is trivial. Most CRDT pain disappears
              because the data model is event streams, not mutable state.
            </p>
          </div>
          <div className="border border-muted-foreground/20 bg-card p-6 lg:p-8 flex flex-col gap-3">
            <Database className="h-5 w-5 text-violet-400" />
            <h4 className="font-[Cal_Sans] text-xl">User-owned data, by default</h4>
            <p className="text-sm text-muted-foreground">
              Because identity is a keypair and storage is replaceable, users keep their data when
              they change apps. The platform-lock problem stops being your problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
