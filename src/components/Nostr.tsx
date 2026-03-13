import { AppWindow, ArrowDown, LayoutDashboard, Network, User, Zap } from "lucide-react"

const process = [
    {
        hint: 'start session',
        title: 'User / Merchant',
        subtitle: 'Holds keypair - same key on Bitcoin + Nostr',
        icon: <User />
    },
    {
        hint: 'payment intent',
        title: 'Spark / Lightning',
        subtitle: 'Self-custody payment, settled on Bitcoin',
        icon: <Zap />,
        color: 'primary'
    },
    {
        hint: 'payment confirmed → event published',
        title: 'Nostr Relay',
        subtitle: 'Signed metadata & state — all verifiable',
        icon: <Network />,
        color: 'violet-400'
    },
    {
        hint: 'queryable by any client',
        title: 'Your App / Dashboard',
        subtitle: 'Reads directly from relay — no proprietary backend required',
        icon: <LayoutDashboard />
    }
]

export const Nostr = () => {
    return (
        <div id="nostr" className="lg:px-20 px-5 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col lg:gap-10">
                <div className="flex lg:flex-row flex-col justify-between gap-10">
                    <div className="flex-1 flex flex-col gap-10">
                        <h3 className="font-mono uppecase tracking-widest uppercase text-sm text-muted-foreground font-lighter text-violet-400/40">Nostr expertise</h3>
                        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-[Cal_Sans] max-w-2xl">The missing <br /><span className="text-violet-400">data layer</span> for sovereign apps.</h2>
                        <div className="flex flex-col gap-5">
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">Every Bitcoin payment needs context — a receipt, a timestamp, a merchant identity. <br />Centralized servers are the obvious solution, and the obvious failure point. Nostr eliminates that tradeoff.
                            </p>
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">We've built production systems using Nostr as the event bus for payment metadata, merchant profiles, and application state.</p>
                            <p>The result: products where no intermediary — including us — sits between the user and their data.</p>
                        </div>
                    </div>
                    <div className="flex-1 bg-card group border-muted-foreground/20 border-1 flex flex-col gap-5 pt-5 lg:w-1/3 justify-between">
                        <p className="text-muted-foreground/50 uppercase font-mono text-sm tracking-widest px-5">// How Bitcoin + Nostr fit together</p>
                        <div className="flex flex-col">
                            {process.map((p, i, list) => (
                                <div key={i} className={`flex ${i < list.length-1 ? 'border-b-1' : ''} border-muted-foreground/20 py-5 px-5 flex-col gap-5 hover:bg-white/10 transition duration-500`}>
                                    {p.hint && <p className="text-muted-foreground/50 font-mono text-xs tracking-widest ml-15 flex gap-2 items-center"><ArrowDown className="h-3 w-3" />{p.hint}</p>}
                                    <div className="flex gap-5 tems-center ">
                                        <div className={`p-3 border-1 ${p.color ? `border-${p.color}` : 'border-muted-foreground/30'}  rounded-xl`}>
                                            <div className={`h-5 w-5 flex items-center ${p.color ? `text-${p.color}` : ''} `}>{p.icon}</div>
                                        </div>
                                        <div className="flex flex-col gap-2 text-sm">
                                            <p className={`text-${p.color}`}>{p.title}</p>
                                            <p className="text-muted-foreground">{p.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}