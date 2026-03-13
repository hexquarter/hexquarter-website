import Header from "@/components/Header";

import { SimplePool } from '@nostr/tools/pool'
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Markdown from 'react-markdown';
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import { Footer } from "@/components/Footer";

const pool = new SimplePool()
const relays = ['wss://cache2.primal.net/v1', 'wss://nos.lol/', 'wss://nostr.mom/', 'wss://nostrelites.org/', 'wss://relay.damus.io/', 'wss://wot.nostr.party/']

type Article = {
  title: string
  content: string
  date: Date
  summary: string
  image: string
}

const BlogDetails = () => {

  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [article, setArticle] = useState<Article | undefined>(undefined)
  const ran = useRef(false);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const e = await pool.get(relays, { ids: [id] })
        if (!e) return

        const { tags } = e
        const tagsMap = new Map(tags as any)

        const article = {
          id: e.id,
          date: new Date(e.created_at * 1000),
          title: tagsMap.get('title'),
          image: tagsMap.get('image'),
          summary: tagsMap.get('summary'),
          content: e.content
        } as Article

        setArticle(article)
        setLoading(false)
      }
      catch (e) {
        alert(e)
      }
    }

    ran.current = true;
    loadEvents()

  }, [])

  return (
    <div className="min-h-screen px-5 lg:px-20 py-20">
      <Header />
      <main className="flex flex-col gap-10 py-10">
        <section className="">
          <div className="">
            {article &&
              <div className="flex flex-col gap-5">
                <div className="flex"><Link to="/blog" className="text-primary flex items-center gap-2"><ArrowLeftCircle className="" />Back</Link></div>
                <h2 className="text-muted-foreground font-mono uppercase text-sm">{article.date.toDateString()}</h2>
                <div className="flex flex-col justify-between">
                  <h1 className="text-5xl cover md:text-4xl lg:text-5xl mb-8 flex items-center font-[Cal_Sans]">{article.title}</h1>
                </div>
              </div>
            }
            {loading && <div className="flex items-center gap">
              <svg className="mr-3 size-5 bg-violet-400 animate-spin ..." viewBox="0 0 24 24">
              </svg>
              <p>Fetching from <span className="text-violet-400">Nostr</span>...yes completely decentralized </p>
            </div>}          </div>
        </section>
        {article &&
          <div className="flex lg:flex-row flex-col justify-between gap-5 items-start">
            <img src={article.image} className="lg:w-1/3 object-cover lg:object-scale-down border border-muted-foreground/20" />

            <div className="flex flex-col gap-5 text-muted-foreground text-sm bg-card p-10 border border-muted-foreground/20">
              <Markdown components={{
                h2(p) {
                  const { node, ...rest } = p
                  return <h2 className="text-white text-4xl font-[Cal_Sans] border-b-3 border-violet-400 pb-5 mt-10" {...rest} />
                },
                p(p) {
                  const { node, ...rest } = p
                  return <p className=""{...rest} />
                },
                ul(p) {
                  const { node, ...rest } = p
                  return <ul className="list-disc marker:text-violet-400" {...rest} />
                },
                strong(p) {
                  const { node, ...rest } = p
                  return <strong className="text-white font-semibold" {...rest} />
                },
                ol(p) {
                  const { node, ...rest } = p
                  return <ul className="list-decimal marker:text-violet-400" {...rest} />
                }
              }}>{article.content}</Markdown>
            </div>

          </div>
        }
      </main >
      <Footer />
    </div >
  );
};

export default BlogDetails;
