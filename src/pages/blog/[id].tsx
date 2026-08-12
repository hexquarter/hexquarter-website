import Head from 'next/head';
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { SimplePool } from '@nostr/tools/pool';
import { useEffect, useRef, useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { marked, Tokens } from 'marked';

const renderer = new marked.Renderer();
renderer.heading = ({ text, depth }) => {
  const styles: Record<number, string> = {
    2: 'text-foreground text-4xl font-display font-semibold border-b-3 border-violet-400 pb-3 mb-5 mt-10',
    3: 'text-foreground text-2xl font-display font-semibold mt-8',
  };
  return `<h${depth} class="${styles[depth] ?? ''}">${text}</h${depth}>`;
};

renderer.code = ({ text }) => {
  return `<pre class="bg-white p-5 overflow-x-auto text-sm rounded-xl border-muted-foreground/20"><code>${text}</code></pre>`;
}

renderer.table = (e) => {
  console.log(e)
  return `<table class="table-auto w-full border-collapse my-5">
    <thead>
      <tr>
        ${e.header.map((h) => `<th class="border-b border-r px-3 border-muted-foreground/20 text-left pb-2 text-foreground">${h.text}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${e.rows.map((row) => `<tr>${row.map((c) => `<td class="border-b border-r px-3 last:border-r-0 py-3 border-muted-foreground/20 py-2 text-foreground/70">${c.text}</td>`).join('')}</tr>`).join('')}
    </tbody>
  </table>`;
}

renderer.paragraph = (e) => {
  const text = e.tokens.map((t) => {
    if (t.type == 'text') {
      return `${t.text}`;
    }
    if (t.type == 'strong') {
      return `<strong class="font-bold">${t.text}</strong>`;
    }
    if (t.type == 'br') {
      return `<br />`;
    }
    return '';
  }).join(' ');

  return `<p class="text-foreground">${text}</p>`;
};
renderer.list = (e) => {
  const { ordered } = e;
  const tag = ordered ? 'ol' : 'ul';
  const cls = ordered
    ? 'list-decimal marker:text-muted-foreground'
    : 'list-disc marker:text-muted-foreground';

  const items = e.items.map((i) => {
    const nestedItem = (i.tokens[0] as Tokens.Generic).tokens[0];
    if (nestedItem.type == 'text') {
      return `<li>${nestedItem.text}</li>`;
    }
    if (nestedItem.type == 'link') {
      return `<li><a href='${nestedItem.href}' target="_blank" class="hover:underline text-foreground/90">${nestedItem.tokens[0].type == 'strong' ? nestedItem.tokens[0].text : 'LINK'}</a></li>`;
    }
    return '';
  });

  return `<${tag} class="${cls} my-3 ml-8 text-foreground">${items.join('')}</${tag}>`;
};

renderer.link = ({ href, title }) => {
  return `<a href='${href}' target="_blank">${title}</a>`;
};

marked.use({ renderer });

export function MarkdownRenderer({ content }: { content: string }) {
  const html = marked(content) as string;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

const pool = new SimplePool();
const relays = ['wss://cache2.primal.net/v1', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/'];

type Article = {
  title: string;
  content: string;
  date: Date;
  summary: string;
  image: string;
};

const BlogDetails = () => {
  const router = useRouter();
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const ran = useRef(false);

  useEffect(() => {
    if (!id || ran.current) return;
    ran.current = true;

    const loadEvents = async () => {
      try {
        const e = await pool.get(relays, { ids: [id] });
        if (!e) return;

        const { tags } = e;
        const tagsMap = new Map(tags as any);

        const article = {
          id: e.id,
          date: new Date(e.created_at * 1000),
          title: tagsMap.get('title'),
          image: tagsMap.get('image'),
          summary: tagsMap.get('summary'),
          content: e.content,
        } as Article;

        setArticle(article);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    loadEvents();
  }, [id]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>{article ? `${article.title} — HexQuarter` : 'Blog — HexQuarter'}</title>
        <meta name="description" content={article ? article.summary : 'Technical articles about Bitcoin and Nostr from HexQuarter.'} />
      </Head>
      <Header />
      <main className="flex flex-col gap-10 px-5 lg:px-20 py-30">
        <section>
          <div>
            {article && (
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <Link href="/blog" className="text-foreground flex items-center gap-2">
                    <ArrowLeftCircle />Back
                  </Link>
                </div>
                <h2 className="text-muted-foreground font-mono uppercase text-sm">{article.date.toDateString()}</h2>
                <div className="flex flex-col justify-between">
                  <h1 className="text-5xl cover md:text-4xl lg:text-7xl mb-8 flex items-center font-display font-semibold">{article.title}</h1>
                </div>
              </div>
            )}
            {loading && (
              <div className="flex items-center gap">
                <svg className="mr-3 size-5 bg-violet-400 animate-spin ..." viewBox="0 0 24 24" />
                <p>Fetching from <span className="text-foreground">Nostr</span>...yes completely decentralized </p>
              </div>
            )}
          </div>
        </section>
        {article && (
          <div className="flex flex-col justify-between gap-5 items-start mx-auto">
            <img src={article.image} alt={article.title} className="object-cover max-h-100 w-full border border-muted-foreground/20" />
            <div className="flex flex-col gap-5 text-muted-foreground text-base bg-card p-10 border border-muted-foreground/20">
              <MarkdownRenderer content={article.content} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;
