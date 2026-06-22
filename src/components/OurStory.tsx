import { FounderStory } from "./home/FounderStory"
import { PositioningStrip } from "./home/PositioningStrip"
import { TrustProof } from "./TrustProof"
import { Tooltip, TooltipTrigger } from "./ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"

export const OurStory = () => {
    return (
        <div id="why-bitcoin" className="px-5 lg:px-20 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col gap-10 ">
                <h3 className="font-mono uppercase tracking-widest text-sm text-primary">Why Bitcoin ?</h3>
                <div className="flex lg:flex-row flex-col justify-content gap-10 ">
                    <div className="flex flex-col flex-1 gap-10 justify-between">
                        <h2 className="font-[Cal_Sans] text-6xl lg:text-7xl 2xl:text-8xl lg:max-w-2xl">We've seen the full arc. We chose Bitcoin.</h2>
                        <div className="flex gap-5">
                            <div className="lg:flex grid grid-cols-2 lg:grid-cols-4 gap-3">
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <div className="border p-2 flex h-full font-mono text-[10px] text-primary/60 hover:text-primary">Unbattled security model</div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-card p-2 max-w-xl text-muted-foreground border border-muted-foreground/20">
                                        <p className="text-xs">
                                            Bitcoin's proof-of-work security model has compounded for 15 years. No downtime. No governance crisis. No rug. Building on Bitcoin means inheriting a security budget no startup could replicate.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <div className="border p-2 font-mono text-[10px] text-green-400/40 hover:text-green-400">UTXO: Simple State</div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-card items-center flex h-full p-2 max-w-xl text-muted-foreground border border-muted-foreground/20">
                                        <p className="text-xs">
                                            The UTXO model makes application state easier to reason about. Balances are deterministic, auditable, and self-contained. No hidden global state. No reentrancy attacks. Less complexity, fewer failure modes.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <div className="border p-2 font-mono text-[10px] text-yellow-400/40 hover:text-yellow-400">Self custody first</div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-card flex h-full p-2 max-w-xl text-muted-foreground border border-muted-foreground/20">
                                        <p className="text-xs">
                                            Every custodian is a point of failure. Bitcoin makes self-custody practical — and we make it the default. Our architecture decisions start from the assumption that users should hold their own keys.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <div className="border p-2 font-mono text-[10px] text-violet-400/40 hover:text-violet-400">Nostr closes the loop</div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-card flex h-full p-2 max-w-xl text-muted-foreground border border-muted-foreground/20">
                                        <p className="text-xs">
                                            Bitcoin handles the money layer. Nostr handles the data layer. Together they enable a complete application stack with no centralized chokepoint — not even us. That's a new class of product.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col flex-1 gap-10">
                        <p className="border-l-2 border-muted-foreground/20 text-muted-foreground pl-5">The Web3 decade produced real engineering breakthroughs — peer-to-peer networking, applied cryptography, programmable settlement. It also proved that complexity without constraint creates catastrophic attack surface.</p>
                        <p className="border-l-2 border-muted-foreground/20 text-muted-foreground pl-5">We've built across the stack: Web2 SaaS, Ethereum, DeFi protocols. We've seen what happens when the foundation is governance tokens, roadmaps, and validator cartels. <span className="text-white">The assets got confiscated. The bridges got drained. The devs moved on.</span></p>
                        <p className="border-l-2 border-primary text-white pl-5">Bitcoin made a different bet: conservatism over expressiveness, physics over governance, simplicity over feature velocity. That bet has compounded for 15 years. We build on what compounded.</p>
                        <p className="border-l-2 border-muted-foreground/20 text-muted-foreground pl-5">HexQuarter exists to help founders navigate this stack — not just Bitcoin as a payment rail, but as a foundation, with Nostr as the data fabric, and self-custody as the architecture default. <span className="text-white">We build what goes on top.</span></p>
                    </div>
                </div >
                <PositioningStrip />
                <TrustProof />
                {/* <FounderStory /> */}

            </div >
        </div >
    )
}