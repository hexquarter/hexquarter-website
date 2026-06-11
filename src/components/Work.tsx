import { Activity, BarChart2, Bitcoin, CheckCircle, Lock, Network, Repeat, Shield, TrendingUp, Zap } from "lucide-react"

const work = [
    {
        status: 'in production',
        title: 'PriceStr',
        description: 'Signed Bitcoin price feed for Nostr. Median‑aggregated from exchanges, delivered via dedicated or public relays. No API keys, no database — the signature is truth. Free tier + Pro paid in sats.',
        link: 'https://pricestr.xyz',
        items: [
            {
                text: "Median aggregation from Binance, Kraken, Coinbase, Uniswap, Chainlink, Hyperliquid",
                icon: Activity,
                borderColor: "border-primary/40",
                textColor: "text-primary"
            },
            {
                text: "Cryptographically signed events — verify in one function call",
                icon: Shield,
                borderColor: "border-violet-400/40",
                textColor: "text-violet-400/90"
            },
            {
                text: "Nostr relay distribution — any relay, no vendor lock",
                icon: Network,
                borderColor: "border-yellow-600/40",
                textColor: "text-yellow-600"
            },
            {
                text: "Free tier: 60s BTC/USD via public relays",
                icon: CheckCircle
            },
            {
                text: "Pro tier: 10s updates, forex pairs, webhooks",
                icon: Bitcoin
            },
            {
                text: "Enterprise: private relay, custom pairs, SLA",
                icon: TrendingUp
            }
        ]
    },
    {
        status: 'in production',
        title: 'Bitlasso',
        description: 'Bitcoin-native checkout and loyalty for merchants. Payments flow through Spark with full self-custody. Payment metadata, receipts, and merchant identity live on Nostr relays. Flat-fee pricing. Zero platform risk.',
        link: 'https://bitlasso.xyz',
        items: [
            {
                text: 'Spark Protocol — self-custody payments & BTKN tokens',
                icon: Zap,
                borderColor: 'border-yellow-600/40',
                textColor: 'text-yellow-600'
            },
            {
                text: 'Nostr — payment metadata & identity',
                icon: Network,
                borderColor: 'text-violet-400/40',
                textColor: 'text-violet-400/90'
            },
            {
                text: 'Bitcoin L1 — settlement anchor',
                icon: Bitcoin,
                borderColor: 'border-primary/40',
                textColor: 'text-primary'
            },
            {
                text: 'Zero custodial risk — keys stay with merchant',
                icon: Lock
            },
            {
                text: 'Flat-fee pricing',
                icon: BarChart2
            },
            {
                text: 'Merchant loyalty — built-in',
                icon: Repeat
            }
        ]
    },
    // {
    //     status: 'in production',
    //     title: 'Brio',
    //     description: 'Non-custodial Bitcoin wallet built as a Telegram MiniApp, allowing users to send and receive Bitcoin directly in chat — no separate app. Using Spark and Lightning Network for instant payments and keeps keys encrypted client-side, merging Bitcoin’s security with Telegram’s social UX.',
    //     link: 'https://t.me/brio_btc_bot',
    //     items: [
    //         {
    //             text: 'Spark Protocol — self-custody payments',
    //             icon: Zap,
    //             borderColor: 'border-yellow-600/40',
    //             textColor: 'text-yellow-600'
    //         },
    //         {
    //             text: 'Bitcoin L1 — settlement anchor',
    //             icon: Bitcoin,
    //             borderColor: 'border-primary/40',
    //             textColor: 'text-primary'
    //         },
    //         {
    //             text: 'Zero custodial risk — keys stay with merchant',
    //             icon: Lock
    //         },
    //         {
    //             text: 'Telegram native with established user base',
    //             icon: Send
    //         },
    //     ]
    // }
]

export const Work = () => {
    return (
        <div id="work" className="px-5 lg:px-20 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col gap-10">
                <h3 className="font-mono uppercase tracking-widest text-sm text-primary">Proof of work</h3>
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                    {work.map((w, i) => (
                        <div key={i} className="p-5 lg:p-10 border group bg-card hover:bg-white border-muted-foreground/40 flex flex-col lg:flex-row lg:gap-50 gap-10 transition duration-500">
                            <div className="flex-1 flex flex-col gap-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400/40 rounded-full"></div>
                                    <span className="font-mono uppercase text-xs text-green-400">{w.status}</span>
                                </div>
                                <h3 className="font-[Cal_Sans] text-4xl group-hover:text-black">{w.title}</h3>
                                <p className="text-muted-foreground">{w.description}</p>
                                <a href={w.link} target='_blank' className="font-mono text-primary uppercase text-xs">Visit {w.title}</a>
                            </div>
                            <div className="flex flex-col flex-1 gap-2">
                                {w.items.map((item, i2) => (
                                    <div key={i2} className={`font-mono text-xs border ${item.borderColor || 'border-muted-foreground/40'} ${item.textColor || 'text-muted-foreground'} p-3 flex items-center gap-2`}><item.icon className="h-4" /> {item.text}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}