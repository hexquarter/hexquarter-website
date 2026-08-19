export type Expertise = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  problems: string[];
  approach: string[];
  technologies: string[];
  outcomes: string[];
  capabilities?: { title: string; body: string }[];
  diagram?: {
    caption: string;
    layers: { label: string; note: string; items: string[] }[];
  };
  flow?: { caption: string; steps: string[] };
};

export const expertise: Expertise[] = [
  {
    slug: "blockchain-architecture",
    name: "Blockchain Architecture",
    eyebrow: "Expertise / 01",
    headline: "Architecture decisions made before the expensive ones.",
    intro:
      "Protocol selection, trust modelling, system boundaries and data architecture — the decisions that determine whether a blockchain system can reach production and stay there.",
    problems: [
      "A protocol was chosen before the trust model was defined.",
      "On-chain and off-chain responsibilities are blurred.",
      "Custody, keys and recovery are undefined or implicit.",
      "Costs, throughput and finality don't match the product's real requirements.",
    ],
    approach: [
      "Define what actually needs consensus, and what does not.",
      "Model trust: who can act, who can censor, who can recover.",
      "Draw explicit system boundaries between settlement, application state and identity.",
      "Evaluate protocols against those constraints — including the option of no blockchain.",
    ],
    technologies: ["Bitcoin", "Ethereum / EVM", "Arweave", "Custom"],
    outcomes: [
      "A documented architecture with explicit trade-offs.",
      "A protocol decision you can defend to a board or an auditor.",
      "An implementation plan sequenced by risk.",
    ],
    diagram: {
      caption: "The four layers we separate before writing any code.",
      layers: [
        { label: "Application", note: "Product logic, UX, accounting", items: ["APIs", "Client apps", "Ledger"] },
        { label: "Identity", note: "Who can act and prove it", items: ["Keys", "Auth", "Delegation"] },
        { label: "Coordination", note: "State that must be shared", items: ["Events", "Queues", "Relays"] },
        { label: "Settlement", note: "What must be final", items: ["Bitcoin", "L2s", "EVM"] },
      ],
    },
  },
  {
    slug: "decentralized-systems",
    name: "Decentralized Systems",
    eyebrow: "Expertise / 02",
    headline: "Distributed systems engineering, not chain tourism.",
    intro:
      "Consensus, replication, cryptography, storage and networking — engineered as a coherent system rather than assembled from tutorials.",
    problems: [
      "Distributed state diverges under real network conditions.",
      "Failure modes are discovered in production instead of in design.",
      "Node operations, upgrades and observability are afterthoughts.",
      "Cryptographic assumptions are inherited without being examined.",
    ],
    approach: [
      "Specify the consistency and availability guarantees the product actually needs.",
      "Design replication, validation and recovery paths explicitly.",
      "Instrument for observability before scale, not after incidents.",
      "Document operational responsibilities alongside the architecture.",
    ],
    technologies: [
      "Consensus design",
      "P2P networking",
      "Cryptographic protocols",
      "Decentralized storage",
      "Event-driven services",
    ],
    outcomes: [
      "Systems with known behaviour under partition and load.",
      "Operational runbooks tied to real failure modes.",
      "Engineering teams able to own the system after handover.",
    ],
  },
  {
    slug: "ai-payments",
    name: "Agentic Payments",
    eyebrow: "Expertise / 06",
    headline: "Machine-payable APIs: metering, settlement and access control.",
    intro:
      "We make existing APIs and products payable by software. Per-request pricing, subscriptions and quotas enforced with Lightning payments, L402 macaroons and x402 — without rewriting your backend.",
    problems: [
      "Billing assumes a human with a card; agents have neither.",
      "API keys can't express quotas, expiry or per-endpoint pricing.",
      "Micro-transactions are uneconomical on card rails and most chains.",
      "Metering, invoicing and access control live in three disconnected systems.",
    ],
    approach: [
      "Map every endpoint to a price, a quota and an expiry — the commercial model before the protocol.",
      "Wrap the existing API in a payment-aware gateway; the origin service stays untouched.",
      "Issue L402 macaroons with caveats (endpoint, rate limit, TTL) bound to a paid Lightning invoice.",
      "Support x402 / HTTP 402 challenge-response so any agent can pay and retry without a human step.",
      "Add subscription and prepaid-balance modes on top of pay-per-call for predictable revenue.",
      "Instrument settlement, refunds and reconciliation against your existing accounting.",
    ],
    technologies: [
      "L402 / macaroons",
      "x402",
      "Lightning (LND, CLN, LDK)",
      "LNURL & BOLT12",
      "API gateways",
      "MCP / agent frameworks",
    ],
    outcomes: [
      "Existing endpoints monetized per call, per quota or per subscription.",
      "Autonomous agents able to buy access with no account, no card and no onboarding.",
      "Auditable settlement and usage records that reconcile with your books.",
    ],
    capabilities: [
      {
        title: "Payment-aware API gateway",
        body: "A thin proxy in front of your service that challenges unpaid requests, verifies macaroons and forwards authorized calls unchanged.",
      },
      {
        title: "Per-endpoint pricing",
        body: "Different prices, quotas and rate limits per route, encoded as macaroon caveats rather than database state.",
      },
      {
        title: "Subscriptions & prepaid balances",
        body: "Recurring Lightning payments and topped-up balances for agents that call continuously.",
      },
      {
        title: "Agent-side integration",
        body: "Client libraries and MCP tooling so your own agents can pay for third-party resources safely, with spend caps.",
      },
    ],
    flow: {
      caption: "L402 request lifecycle, end to end.",
      steps: [
        "Agent calls a paid endpoint",
        "Gateway returns 402 + invoice + macaroon",
        "Agent pays the Lightning invoice",
        "Preimage + macaroon presented as token",
        "Request authorized, usage metered",
      ],
    },
  },
  {
    slug: "bitcoin",
    name: "Bitcoin",
    eyebrow: "Expertise / 03",
    headline: "Bitcoin payments and BTCfi people can actually use.",
    intro:
      "Lightning, statechains and Spark/Ark-style layers, plus Stacks for on-chain BTCfi — engineered with the UX work that decides whether a Bitcoin feature ships or gets abandoned.",
    problems: [
      "Bitcoin payments are technically live but nobody completes a flow.",
      "Channel management, liquidity and backups are pushed onto the user.",
      "Self-custody UX and recovery scare away non-technical customers.",
      "Smart-contract logic is wanted, but nobody wants to leave Bitcoin's security.",
      "Ordinals and inscriptions are treated as a stunt instead of an anchoring primitive.",
    ],
    approach: [
      "Design the money UX first: onboarding, funding, failure, refund and recovery paths.",
      "Choose the right layer per use case — on-chain, Lightning, statechain, Spark or Ark.",
      "Abstract liquidity and channel operations away from the user with managed or self-custodial hybrids.",
      "Use Stacks where programmable BTCfi logic is genuinely required, with clear settlement boundaries.",
      "Anchor commitments, proofs and provenance to Bitcoin via Ordinals/inscriptions or OP_RETURN commitments.",
      "Ship an SDK-level integration so any existing app can accept Bitcoin in days, not quarters.",
    ],
    technologies: [
      "Bitcoin Core",
      "Lightning (LND, CLN, LDK)",
      "Spark",
      "Ark",
      "Statechains",
      "Stacks / Clarity",
      "Ordinals & inscriptions",
      "Multi-sig & PSBT",
      "LNURL, BOLT11 / BOLT12",
    ],
    outcomes: [
      "Bitcoin payment flows with completion rates you can measure and improve.",
      "Instant, low-fee settlement without exposing users to channel mechanics.",
      "BTCfi capability on Stacks with an auditable link back to Bitcoin settlement.",
      "Provenance and proofs anchored to the most trusted layer.",
    ],
    capabilities: [
      {
        title: "Bitcoin payments in any app",
        body: "Drop-in Lightning acceptance for existing web, mobile and SaaS products — invoices, LNURL, refunds and reconciliation included.",
      },
      {
        title: "UX & money design",
        body: "Onboarding, custody choice, funding, failure states and recovery designed for people who do not know what a channel is.",
      },
      {
        title: "Statechains, Spark & Ark",
        body: "Off-chain layers for instant transfers and shared-UTXO scaling where channels or on-chain fees are the wrong tool.",
      },
      {
        title: "BTCfi on Stacks",
        body: "Clarity contracts for lending, escrow and programmable settlement, with explicit assumptions about the Bitcoin link.",
      },
      {
        title: "Anchoring & provenance",
        body: "Ordinals, inscriptions and commitment schemes used to timestamp and prove state on the most durable base layer.",
      },
    ],
    diagram: {
      caption: "How we map a product onto the Bitcoin stack.",
      layers: [
        { label: "Product", note: "What the user actually touches", items: ["Checkout", "Wallet UX", "Recovery"] },
        { label: "Payments", note: "Instant, low-cost transfer", items: ["Lightning", "Spark", "Ark", "Statechains"] },
        { label: "Programmability", note: "Contract logic when required", items: ["Stacks / Clarity", "BTCfi", "Escrow"] },
        { label: "Anchoring", note: "Proofs and provenance", items: ["Ordinals", "Inscriptions", "Commitments"] },
        { label: "Settlement", note: "Final, neutral, durable", items: ["Bitcoin base layer"] },
      ],
    },
  },
  {
    slug: "nostr",
    name: "Nostr",
    eyebrow: "Expertise / 04",
    headline: "Nostr as backend infrastructure, not just a social feed.",
    intro:
      "NIP-level engineering for storage, authentication, synchronization and portable identity — used as the coordination layer of hybrid or fully decentralized systems.",
    problems: [
      "Identity is owned by the platform, so users can't leave with it.",
      "Login, sessions and API auth still depend on a central credential store.",
      "Multi-device sync and offline state are rebuilt from scratch for every product.",
      "Relay strategy, retention and encryption are undefined.",
      "Teams want decentralization without throwing away their existing backend.",
    ],
    approach: [
      "Model identity as keys: signing, delegation (NIP-26), remote signing (NIP-46) and recovery.",
      "Use NIP-98 HTTP auth and NIP-42 relay auth so your backend verifies signatures instead of passwords.",
      "Design the event schema deliberately — replaceable, parameterized and addressable events per data type.",
      "Encrypt private state with NIP-44 and scope what is public, signed, encrypted or purely local.",
      "Plan relay topology: owned relays for product data, public relays for reach, with retention rules.",
      "Run hybrid: keep your database as a cache and index, with Nostr as the portable source of truth.",
    ],
    technologies: [
      "Nostr relays (strfry, nostr-rs-relay)",
      "NIP-01 / 33 event modelling",
      "NIP-42 relay auth",
      "NIP-98 HTTP auth",
      "NIP-44 encryption",
      "NIP-46 remote signing",
      "NIP-07 browser signers",
      "Zaps (NIP-57)",
    ],
    outcomes: [
      "Login and API authentication with no password database to breach.",
      "User identity and data portable across your apps and beyond them.",
      "Multi-device synchronization that works without a central session server.",
      "A clear separation between identity, coordination and settlement.",
    ],
    capabilities: [
      {
        title: "Key-based login",
        body: "Sign-in with NIP-07 extensions, NIP-46 remote signers or embedded keys, mapped cleanly to your existing user model.",
      },
      {
        title: "Backend authentication",
        body: "NIP-98 signed HTTP requests and NIP-42 relay auth replacing session tokens and API keys where it makes sense.",
      },
      {
        title: "Event storage & sync",
        body: "Addressable and replaceable events as a synchronization primitive across devices, clients and services.",
      },
      {
        title: "Relay infrastructure",
        body: "Private, managed or federated relay deployments with retention, moderation and redundancy policies.",
      },
      {
        title: "Hybrid architectures",
        body: "Nostr for identity and coordination, your existing stack for heavy compute and indexing, Bitcoin for settlement.",
      },
    ],
    diagram: {
      caption: "Nostr as the coordination layer of a hybrid system.",
      layers: [
        { label: "Clients", note: "Web, mobile, agents", items: ["NIP-07", "NIP-46 signer", "Local cache"] },
        { label: "Identity", note: "Keys instead of accounts", items: ["npub", "Delegation", "Recovery"] },
        { label: "Coordination", note: "Signed, portable events", items: ["Relays", "NIP-33 events", "NIP-44 encryption"] },
        { label: "Backend", note: "Verification and indexing", items: ["NIP-98 auth", "Indexer", "Cache DB"] },
        { label: "Settlement", note: "Value layer", items: ["Bitcoin", "Lightning zaps"] },
      ],
    },
  },
  {
    slug: "stablecoins",
    name: "Stablecoins",
    eyebrow: "Expertise / 05",
    headline: "Stablecoin integration for apps that move real money.",
    intro:
      "Integrating stablecoins — including USDB on Bitcoin — into dApps, fintech products and treasury operations, with reconciliation, controls and compliance designed in.",
    problems: [
      "Teams want dollar balances without building a bank.",
      "Issuance and redemption flows are designed without reconciliation in mind.",
      "Multi-network deployments duplicate risk rather than reduce it.",
      "Treasury operations and key control lack separation of duties.",
      "Compliance requirements arrive after the architecture is fixed.",
    ],
    approach: [
      "Map the full lifecycle: on-ramp, custody, transfer, redemption, reporting.",
      "Integrate USDB and Bitcoin-native stablecoin rails where settlement should stay on Bitcoin.",
      "Abstract the asset behind a single balance API so the app doesn't care which rail it settles on.",
      "Design controls, limits and approval paths into the system, not around it.",
      "Choose networks based on settlement, liquidity and operational cost — not narrative.",
      "Build reconciliation and audit trails as first-class components.",
    ],
    technologies: [
      "USDB (Bitcoin)",
      "Lightning-settled dollars",
      "EVM stablecoin rails",
      "Custody & treasury tooling",
      "Payment orchestration",
      "Audit trails",
    ],
    outcomes: [
      "Dollar-denominated balances inside your app without custodial guesswork.",
      "Payment and settlement infrastructure that passes review.",
      "Operational controls that scale with volume.",
      "A clear path from pilot to regulated production.",
    ],
    capabilities: [
      {
        title: "dApp integration",
        body: "Stablecoin balances, transfers and payments wired into existing dApps with a consistent SDK surface.",
      },
      {
        title: "USDB on Bitcoin",
        body: "Bitcoin-native dollar rails for products that want stable units without leaving the Bitcoin security model.",
      },
      {
        title: "Fintech & treasury",
        body: "Payouts, collections and treasury movement with limits, approvals and separation of duties.",
      },
      {
        title: "Reconciliation",
        body: "Ledger design and audit trails that match on-chain settlement to application accounting, continuously.",
      },
    ],
    flow: {
      caption: "Stablecoin lifecycle we design and instrument.",
      steps: ["On-ramp / issuance", "Custody & controls", "In-app transfer", "Settlement", "Reconciliation & reporting"],
    },
  },
];
