import Head from 'next/head';
import Header from "@/components/Header";
import Link from "next/link";
import { SimplePool } from '@nostr/tools/pool';
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { flushSync } from 'react-dom';
import posthog from 'posthog-js';

const pool = new SimplePool();
const relays = ['wss://relay.primal.net', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/'];

type ArticleItem = {
  id: string;
  title: string;
  date: Date;
  summary: string;
  image: string;
};

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const ran = useRef(false);

  useEffect(() => {
    const sub = () => {
      return pool.subscribe(relays, {
        authors: ['2c57a88b2895a5518c28fc5417721be67fac057bbc644de20a92e74ab61b6d30'],
        kinds: [30023],
      }, {
        onevent(e) {
          const { tags } = e;
          const tagsMap = new Map(tags as any);

          const article = {
            id: e.id,
            date: new Date(e.created_at * 1000),
            title: tagsMap.get('title'),
            image: tagsMap.get('image'),
            summary: tagsMap.get('summary'),
          } as ArticleItem;

          setArticles((prev) => [article, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()));
        },
        oneose() {
          setLoading(false);
          flushSync(() => {
            setLoading(false);
          });
        },
      });
    };

    if (ran.current) return;
    ran.current = true;
    sub();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>HexQuarter Blog — Bitcoin & Nostr engineering</title>
        <meta name="description" content="Technical articles and updates about Bitcoin and Nostr engineering from HexQuarter." />
      </Head>
      <Header />
      <main className="flex flex-col px-5 lg:px-20 py-20">
        <section className="py-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-mono uppercase text-muted-foreground">Blog</h2>
            <h1 className="font-display font-semibold text-5xl md:text-4xl lg:text-7xl 2xl:text-8xl text-foreground leading-tight">Insights on Bitcoin & Nost Engineering</h1>
          </div>
        </section>

        {loading && (
          <div className="flex items-center gap">
            <svg className="mr-3 size-5 bg-violet-400 animate-spin ..." viewBox="0 0 24 24">
            </svg>
            <p>Fetching from <span className="text-foreground">Nostr</span>...yes completely decentralized </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {!loading && articles.map((a) => (
            <Link key={a.id} href={`/blog/${a.id}`} onClick={() => posthog.capture('blog_article_clicked', { article_id: a.id, article_title: a.title })} className="h-full p-6 border border-border bg-card hover:bg-card group">
              <div className="flex flex-col gap-5">
                <h3 className="font-display font-semibold text-2xl font-medium text-foreground mb-3 group-hover:text-muted-foreground">
                  {a.title}
                </h3>
                <h2 className="label">{a.date.toDateString()}</h2>
                <img src={a.image} alt={a.title} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
