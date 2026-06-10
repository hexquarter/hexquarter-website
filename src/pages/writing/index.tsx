import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import { SimplePool } from "@nostr/tools/pool";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { flushSync } from "react-dom";

const pool = new SimplePool();
const relays = [
  "wss://relay.primal.net",
  "wss://nos.lol/",
  "wss://nostr.mom/",
  "wss://nostrelites.org/",
  "wss://relay.damus.io/",
  "wss://wot.nostr.party/",
];

type ArticleItem = {
  id: string;
  title: string;
  date: Date;
  summary: string;
  image: string;
};

const pillars = [
  {
    tag: "Lessons from 10 years in Web3",
    color: "text-violet-400",
    border: "border-violet-400/30",
    body: "Token economy failures, the cost of decentralization, governance, and what compounded vs. what didn't.",
  },
  {
    tag: "Infrastructure & user-owned systems",
    color: "text-primary",
    border: "border-primary/30",
    body: "Why user-owned systems matter. Identity is broken. Decentralization without crypto.",
  },
  {
    tag: "Bitcoin + Nostr in practice",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    body: "Real use cases, diagrams and architectures from production work.",
  },
  {
    tag: "Future systems",
    color: "text-green-400",
    border: "border-green-400/30",
    body: "AI agents and payments, machine-to-machine settlement, open identity.",
  },
];

const Writing = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const ran = useRef(false);

  useEffect(() => {
    const sub = () =>
      pool.subscribe(
        relays,
        {
          authors: ["2c57a88b2895a5518c28fc5417721be67fac057bbc644de20a92e74ab61b6d30"],
          kinds: [30023],
        },
        {
          onevent(e) {
            const tagsMap = new Map(e.tags as any);
            const article = {
              id: e.id,
              date: new Date(e.created_at * 1000),
              title: tagsMap.get("title"),
              image: tagsMap.get("image"),
              summary: tagsMap.get("summary"),
            } as ArticleItem;
            setArticles((prev) =>
              [article, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()),
            );
          },
          oneose() {
            flushSync(() => setLoading(false));
          },
        },
      );

    if (ran.current) return;
    ran.current = true;
    sub();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Writing — HexQuarter</title>
        <meta
          name="description"
          content="Field notes from a decade building decentralized systems. Bitcoin, Nostr, architecture, and the lessons that compounded."
        />
      </Head>
      <Header />
      <main className="flex flex-col pt-20">
        <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
          <div className="flex flex-col gap-8 max-w-5xl">
            <h3 className="font-mono uppercase tracking-widest text-xs text-violet-400">Writing</h3>
            <h1 className="font-[Cal_Sans] text-5xl lg:text-8xl leading-[1]">
              Field notes from a decade in <span className="text-violet-400">decentralized systems.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Lessons, architectures and case studies. Written for founders and CTOs making
              long-term infrastructure decisions — not for the crypto cycle.
            </p>
          </div>
        </section>

        <section className="px-5 lg:px-20 py-20 border-b border-muted-foreground/30">
          <div className="flex flex-col gap-10">
            <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
              Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.tag}
                  className={`border ${p.border} bg-card p-6 flex flex-col gap-3 hover:bg-white/5 transition`}
                >
                  <span className={`font-mono uppercase tracking-widest text-[10px] ${p.color}`}>
                    // {p.tag}
                  </span>
                  <p className="text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 lg:px-20 py-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-mono uppercase tracking-widest text-xs text-muted-foreground">
                Latest essays
              </h3>
              <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">From the relays.</h2>
            </div>

            {loading && (
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="size-2 bg-violet-400 rounded-full animate-pulse" />
                <p>
                  Fetching from <span className="text-violet-400">Nostr</span> — yes, completely
                  decentralized.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {!loading &&
                articles.map((a) => (
                  <Link
                    key={a.id}
                    href={`/blog/${a.id}`}
                    className="p-6 border border-muted-foreground/20 bg-card hover:bg-white group flex flex-col gap-4 transition duration-500"
                  >
                    <h3 className="font-[Cal_Sans] text-2xl text-foreground group-hover:text-black">
                      {a.title}
                    </h3>
                    <span className="font-mono text-xs uppercase text-muted-foreground group-hover:text-black/60">
                      {a.date.toDateString()}
                    </span>
                    {a.image && (
                      <img src={a.image} alt={a.title} className="aspect-video object-cover" />
                    )}
                    <p className="text-sm text-muted-foreground group-hover:text-black/70">
                      {a.summary}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Writing;
