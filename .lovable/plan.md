# HexQuarter Repositioning Plan

## Strategic decision: multi-page, not single-page

A single page worked for a portfolio site. The new positioning has **three distinct audiences** (Web3 founders, Bitcoin startups, fintech/CTOs) and **a founder-led content engine**. That requires real pages — for SEO, for outbound link targets ("I recently wrote about Y"), and for separating the *studio offer* from *Samuel's voice*.

```text
/                    Home — positioning + proof, single conversion path
/approach            Bitcoin as trust layer + Nostr as coordination layer
/services            What we build (engagement types)
/work                Case studies / use cases
/writing             Founder-led essays (the trust engine)
/writing/[slug]      Individual essays (already scaffolded under /blog)
/about               Samuel's story — 10 years across Web3 → Bitcoin & Nostr
/contact             Start a project
```

Header nav: Approach · Services · Work · Writing · About · **Start a project**

## Narrative spine (used across pages)

> **We build systems on top of the strongest decentralized foundations available.**
> Bitcoin = settlement, ownership, permanence.
> Nostr = identity, communication, coordination.

No "I switched from Web3" story on the homepage. That belongs on `/about` and inside essays. Homepage leads with **value and architecture**, not biography.

## Page-by-page content

### `/` Home
1. **Hero** — "Decentralized systems, engineered to last." Sub: "Open-protocol architecture for payments, identity and user-owned applications. Built on Bitcoin, Lightning and Nostr."
2. **Positioning strip** — two columns: *Bitcoin: the trust layer* / *Nostr: the coordination layer* (one-liners only, link to `/approach`).
3. **Who we work with** — Web3 startups · Bitcoin startups · Fintechs exploring decentralized systems · Founders making long-term infra decisions.
4. **What we build** — 4 service tiles → `/services`.
5. **Selected work** — 2–3 case study cards → `/work`.
6. **Writing** — latest 3 essays → `/writing`. This is the trust generator.
7. **About Samuel** — short bio block + portrait link → `/about`.
8. **CTA** — Start a project.

Removes the current Bitcoin/Nostr deep-dive sections from the homepage (they move to `/approach`) so the home reads as a studio, not a manifesto.

### `/approach` — the substance page
Two long sections, parallel structure:

- **Bitcoin — the trust layer**
  - Settlement · Anchoring · Ownership · Verification · Security
  - Diagram: Bitcoin L1 → Lightning → Statechains → Taproot Assets → Ordinals (reuse existing `Bitcoin.tsx` content, retitled).
- **Nostr — the coordination layer**
  - Identity · Communication · Synchronization · Coordination · Data
  - CTO framing: "standardized, cryptographically signed event model — identity, comms, sync and coordination infra for distributed systems. Think event sourcing, CQRS and message bus, but user-owned and portable."
  - Diagram (reuse existing `Nostr.tsx` flow).
- **Mental model** — side-by-side table: *Bitcoin answers / Nostr answers*.

### `/services`
Reframe existing services around engagement types:
- **Architecture & protocol design** — system design for teams committing to long-term infra.
- **Bitcoin & Lightning integration** — payments, settlement, custody architecture.
- **Nostr-native systems** — identity, event infra, coordination layers.
- **Advisory** — for founders evaluating Web3 → Bitcoin/Nostr migration paths.

Each: outcome, when to engage, deliverables.

### `/work`
Case studies (reuse existing `Work.tsx` data, restructure as cards linking to detail pages later). Each card: client type, problem, architecture, outcome.

### `/writing` (new)
Index of essays organized by the four content pillars:
1. **Lessons from 10 years in Web3** — token failures, governance, cost of decentralization.
2. **Infrastructure & user-owned systems** — why it matters, identity is broken, decentralization without crypto.
3. **Bitcoin + Nostr in practice** — real use cases, diagrams, case studies.
4. **Future systems** — AI agents + payments, M2M payments, open identity.

Reuse existing `/blog` route under the hood; surface as `/writing` with pillar filters. Seed with 3–4 placeholder essay stubs (title + dek + pillar) so the section feels alive and gives outbound something to link to.

### `/about`
Samuel-first. This is where the Web3 → Bitcoin & Nostr arc lives, framed as *earned conviction*, not conversion story:
- Decade across multiple chains.
- What worked, what didn't (governance, token incentives, infra complexity, security, scaling).
- Why the convergence on Bitcoin + Nostr.
- What he helps teams do today.

### `/contact`
Keep existing form, tighten copy to match new positioning.

## Design / system changes
- Keep current dark + orange identity, animations, type stack.
- Add a `PageShell` wrapper for new pages so header/footer stay consistent.
- Add a `PillarTag` and `EssayCard` component for `/writing`.
- Trim homepage animations slightly — denser content needs the page to load fast and scan clean.

## Technical notes
- Next.js Pages Router already in place — add `src/pages/approach.tsx`, `services.tsx`, `work.tsx`, `writing/index.tsx`, `about.tsx`, `contact.tsx`. `/blog` stays as the article route or gets aliased to `/writing/[slug]`.
- Move existing `Bitcoin.tsx` and `Nostr.tsx` sections off `/` and into `/approach`.
- Update `Header.tsx` nav to page links; keep smooth-scroll anchors only on `/approach`.
- Update `<title>` / meta per page; single H1 per page; JSON-LD `Person` on `/about`, `Organization` on `/`.
- No backend work required. No new dependencies.

## Out of scope for this pass
- Writing real long-form essays (stubs only).
- CMS — essays stay as MDX/static for now.
- Analytics, newsletter capture (can add after structure lands).

## Open question before I build
Should `/writing` ship with 3–4 **placeholder stubs** I draft from the positioning brief, or do you want to supply the titles/deks yourself so the voice is authentically yours from day one?
