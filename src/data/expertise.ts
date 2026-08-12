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
    headline: "Autonomous agents that pay, settle to access resources.",
    intro: "Agentic payments are a new paradigm for autonomous software agents to pay for services, settle to access resources, and manage their own finances without human intervention.",
    problems: [
      "Autonomous agents need to pay for services and resources without human intervention.",
      "Current payment systems are not designed for autonomous agents, leading to inefficiencies and security risks.",
      "There is a lack of standardization in agentic payment protocols, making interoperability difficult.",
    ],
    approach: [
      "Design payment protocols that allow autonomous agents to initiate and complete transactions securely.",
      "Implement settlement mechanisms that ensure timely and reliable access to resources.",
      "Develop standards for agentic payments to promote interoperability across different platforms and services.",
    ],
    technologies: ["x402", "l402", "Agentic payment protocols", "Autonomous agent frameworks"],
    outcomes: [
      "A secure and efficient payment system for autonomous agents.",
      "Reliable settlement mechanisms that ensure access to resources.",
      "Standardized protocols that enable interoperability across platforms.",
    ]
  },
  {
    slug: "bitcoin",
    name: "Bitcoin",
    eyebrow: "Expertise / 03",
    headline: "Settlement, custody and payments built on the most durable base layer.",
    intro:
      "Bitcoin and Lightning infrastructure for products that need neutral settlement, explicit custody boundaries and long-term protocol stability.",
    problems: [
      "Custody design is treated as a wallet choice rather than an architecture.",
      "Payment flows assume instant finality without modelling reorgs or channel failure.",
      "Accounting and settlement drift apart under real volume.",
      "Compliance and key management are bolted on late.",
    ],
    approach: [
      "Design custody explicitly: single-sig, multi-sig, thresholds, recovery and key ceremonies.",
      "Model settlement and confirmation policy against real business risk.",
      "Separate application accounting from on-chain settlement with reconciliation built in.",
      "Use Lightning where instant, low-cost settlement is genuinely required.",
    ],
    technologies: ["Bitcoin Core", "Lightning", "Multi-sig & PSBT", "Watch-only infrastructure"],
    outcomes: [
      "A custody and settlement architecture you can audit.",
      "Payment flows that behave correctly at the edges.",
      "Infrastructure that doesn't depend on a protocol roadmap.",
    ],
  },
  {
    slug: "nostr",
    name: "Nostr",
    eyebrow: "Expertise / 04",
    headline: "Portable identity and coordination without platform lock-in.",
    intro:
      "Key-based identity, signed events and relay infrastructure — used where applications need coordination and portability without a central platform.",
    problems: [
      "Identity is owned by the platform, so users can't leave with it.",
      "Coordination and messaging require a trusted intermediary.",
      "Relay strategy and data retention are undefined.",
      "Key management is pushed onto users without a recovery story.",
    ],
    approach: [
      "Model identity as keys, and design signing, delegation and recovery around that.",
      "Define which data is public, signed, encrypted or purely local.",
      "Design relay topology, redundancy and retention deliberately.",
      "Keep Nostr at the coordination layer — settlement stays on Bitcoin.",
    ],
    technologies: ["Nostr relays", "Signed events (NIPs)", "Key management", "Relay hosting"],
    outcomes: [
      "Applications where user identity is portable by construction.",
      "Coordination infrastructure with no single point of control.",
      "A clear separation between identity, data and settlement.",
    ],
  },
  {
    slug: "stablecoins",
    name: "Stablecoins",
    eyebrow: "Expertise / 05",
    headline: "Digital-asset and stablecoin infrastructure, designed for compliance and scale.",
    intro:
      "Issuance, treasury, payment and settlement architecture for teams working with stablecoins and tokenized assets across networks.",
    problems: [
      "Issuance and redemption flows are designed without reconciliation in mind.",
      "Multi-network deployments duplicate risk rather than reduce it.",
      "Treasury operations and key control lack separation of duties.",
      "Compliance requirements arrive after the architecture is fixed.",
    ],
    approach: [
      "Map the full lifecycle: issuance, distribution, transfer, redemption, reporting.",
      "Design controls, limits and approval paths into the system, not around it.",
      "Choose networks based on settlement, liquidity and operational cost — not narrative.",
      "Build reconciliation and audit trails as first-class components.",
    ],
    technologies: ["Stablecoin rails", "Custody & treasury tooling", "Payment orchestration", "Audit trails"],
    outcomes: [
      "Payment and settlement infrastructure that passes review.",
      "Operational controls that scale with volume.",
      "A clear path from pilot to regulated production.",
    ],
  }
];
