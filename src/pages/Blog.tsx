import Header from "@/components/Header";

import { SimplePool } from '@nostr/tools/pool'
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";

const pool = new SimplePool()
const relays = ['wss://cache2.primal.net/v1', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/']

type ArticleItem = {
  id: string,
  title: string
  date: Date
  summary: string
  image: string
}

const Blog = () => {

  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState<ArticleItem[]>([])
  const ran = useRef(false);
  const navigate = useNavigate()

  useEffect(() => {
    const loadEvents = () => {
      pool.subscribe(relays, {
        authors: ['2c57a88b2895a5518c28fc5417721be67fac057bbc644de20a92e74ab61b6d30'],
        kinds: [30023]
      }, {
        onevent(e) {
          const { tags } = e
          const tagsMap = new Map(tags as any)

          const article = {
            id: e.id,
            date: new Date(e.created_at * 1000),
            title: tagsMap.get('title'),
            image: tagsMap.get('image'),
            summary: tagsMap.get('summary')
          } as ArticleItem

          if (loading) {
            setTimeout(() => {
              setLoading(false)
              setArticles((prev) => [article, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()))
            }, 1000)
          }
          else {
            setArticles((prev) => [article, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()))
          }
        }
      })
    }

    if (ran.current) return;
    ran.current = true;
    loadEvents()

  }, [])

  return (
    <div className="min-h-screen bg-background px-5 lg:px-20 py-20">
      <Header />
      <main className="flex flex-col">
        <section className="py-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-mono uppercase text-muted-foreground">Blog</h2>
            <h1 className="font-[Cal_Sans] text-5xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">Insights on Bitcoin engineering</h1>
          </div>
        </section>

        {loading && <div className="flex items-center gap">
          <svg className="mr-3 size-5 bg-violet-400 animate-spin ..." viewBox="0 0 24 24">
          </svg>
          <p>Fetching from <span className="text-violet-400">Nostr</span>...yes completely decentralized </p>
        </div>}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            <article key={a.id} onClick={() => navigate(`/blog/${a.id}`)}>
              <div className="h-full p-6 border border-muted-foreground/20 bg-card hover:bg-white group hover:cursor-pointer">
                <div className="flex flex-col gap-5">
                  <h3
                    className="font-[Cal_Sans] text-2xl font-medium text-foreground mb-3 group-hover:text-black"
                  >
                    {a.title}
                  </h3>
                  <h2 className="hex-tag">{a.date.toDateString()}</h2>
                  <img src={a.image} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default Blog;
