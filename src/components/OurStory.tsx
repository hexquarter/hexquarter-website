import Link from "next/link"
import { FounderStory } from "./home/FounderStory"
import { PositioningStrip } from "./home/PositioningStrip"
import { TrustProof } from "./TrustProof"
import { Tooltip, TooltipTrigger } from "./ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"

export const OurStory = () => {
    return (
        <div id="why-bitcoin" className="px-5 lg:px-20 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col gap-10 ">
                <h3 className="font-mono uppercase tracking-widest text-sm text-primary">Our story</h3>
                <h2 className="font-[Cal_Sans] text-4xl lg:text-6xl">
                    A decade of decentralized systems. <br />One deliberate convergence.
                </h2>
                <FounderStory />
                <div className="border-t border-muted-foreground/30 pt-10 flex lg:flex-row flex-col justify-content gap-10 ">
                    <div className="flex flex-col flex-1 gap-10 justify-between">
                        <h2 className="font-[Cal_Sans] text-4xl ">We've seen the full arc. We chose Bitcoin.</h2>
                        <div className="flex flex-col flex-1 gap-3">
                            <p className="text-muted-foreground">The Web3 decade produced remarkable engineering breakthroughs: peer-to-peer networking, applied cryptography and programmable settlement.</p>
                            <p className="text-muted-foreground">It also revealed the cost of unnecessary complexity.</p>
                            <p className="text-muted-foreground">We've seen foundations built on governance tokens, validator incentives and cross-chain bridges. We've watched assets get frozen, bridges exploited, and ecosystems lose momentum as developers chased the next narrative.</p>
                            <p className="text-muted-foreground text-white">Bitcoin made a different bet: </p>
                            <ul>
                                <li className="list-disc ml-5">Conservatism over expressiveness.</li>
                                <li className="list-disc ml-5">Physics over governance.</li>
                                <li className="list-disc ml-5">Simplicity over feature velocity.</li>
                            </ul>
                            <p className="text-muted-foreground">That bet has compounded for more than fifteen years.</p>
                        </div>
                        <div className="flex gap-5">
                            <div className="lg:flex grid grid-cols-2 lg:grid-cols-4 gap-3">
                                <div className="border p-2 flex h-full font-mono text-[10px] text-primary">Battle-tested security</div>
                                <div className="border p-2 font-mono text-[10px] text-green-400">Simple, auditable</div>
                                <div className="border p-2 font-mono text-[10px] text-yellow-400">Ownership by default</div>
                                <div className="border p-2 font-mono text-[10px] text-violet-400">Open identity & communication</div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className="flex flex-col gap-5">
                    <h2 className="font-[Cal_Sans] text-4xl ">Why HexQuarter exists ?</h2>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                        <p>HexQuarter is the result of that convergence.</p>
                        <p>Not as Bitcoin or Nostr shop, but because, after a decade building across the decentralized stack, <br />these are the foundations we trust to build products that don't depend on someone else's platform.</p>
                        <p className="text-white mt-5">We help internet businesses build products where users own what matters:</p>
                        <ul className="text-white">
                            <li className="list-disc ml-5">Identity</li>
                            <li className="list-disc ml-5">Payment</li>
                            <li className="list-disc ml-5">Audience</li>
                            <li className="list-disc ml-5">Data</li>
                        </ul>
                        <p className="mt-5"><span className="font-bold text-white/70">Bitcoin</span> becomes the trust layer.</p>
                        <p><span className="font-bold text-white/70">Nostr</span> becomes the coordination layer.</p>
                        <p><span className="font-bold text-white/70">Self-custody</span> becomes the default.</p>
                        <p className="mt-5 text-white">We build what comes next.</p>
                        <Link href='/approach' className="mt-5">
                            <button className="bg-primary cursor-pointer p-3 text-white uppercase font-mono text-xs hover:bg-white hover:text-primary">Discover our approach</button>
                        </Link>
                    </div>
                </div>

                {/* <PositioningStrip /> */}
            </div >
        </div >
    )
}