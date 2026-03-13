export const Services = () => {
    return (
        <div id="services" className="px-5 lg:px-20 py-20 pb-10 border-muted-foreground/30 border-b-1">
            <div className="flex-1 flex flex-col gap-10">
                <h3 className="font-mono uppecase tracking-widest uppercase text-sm text-muted-foreground/80">what we build ?</h3>
                <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-[Cal_Sans] max-w-5xl">Sovereign products, <br /><span className="text-primary">start to finish.</span></h2>

                <div className="flex flex-col gap-0">
                    <div className="grid gap-5 lg:grid-cols-12 justify-between group hover:bg-white hover:border-t-primary hover:border-t-3 p-5 border-b-1 border-muted-foreground/30 transition duration-500">
                        <div className="col-span-1 text-muted-foreground/50 text-sm group-hover:text-primary">01</div>
                        <div className="col-span-10 flex flex-col gap-5">
                            <p className="font-[Cal_Sans] text-2xl group-hover:text-primary">Bitcoin-Native Products</p>
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">End-to-end product engineering anchored on Bitcoin. <br />From multi-sig custody solutions to Lightning-powered SaaS and on-chain settlement systems.</p>
                                <p className="text-muted-foreground">Issue programmable mechanims anchored to real Bitcoin transactions for settlements, escrow and automated agreements </p>
                            </div>
                            <p className="text-white/50 group-hover:text-black group-hover:font-semibold">When you need finality, not just confirmation - with on-chain verifiability</p>
                            <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-2">
                                <div className="border-1 border-primary/40 px-2 py-1 text-primary/60 group-hover:text-primary text-xs">UTXO & script design patterns</div>
                                <div className="border-1 border-primary/40 px-2 py-1 text-primary/60 group-hover:text-primary text-xs">Timelock & multisig</div>
                                <div className="border-1 border-primary/40 px-2 py-1 text-primary/60 group-hover:text-primary text-xs">Lightning & L2 statechains</div>
                                <div className="border-1 border-primary/40 px-2 py-1 text-primary/60 group-hover:text-primary text-xs">Tokenization & Anchoring</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-12 justify-between group hover:bg-white hover:border-t-violet-400 hover:border-t-3 p-5 border-b-1 border-muted-foreground/30 transition duration-500">
                        <div className="col-span-1 text-muted-foreground/50 text-sm">02</div>
                        <div className="col-span-10 flex flex-col gap-5">
                            <p className="font-[Cal_Sans] text-2xl group-hover:text-violet-400">Nostr-Powered Application Data Layers</p>
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">Replace SaaS with open protocols from identity, messaging to social.</p>
                                <p className="text-muted-foreground">Using Nostr as an event bus for application state — all cryptographically signed and relay-distributed. <br />Custom relay infrastructure for your specific use case.</p>
                            </div>
                            <p className="text-white/50 group-hover:text-black group-hover:font-semibold">When you need censorship-resistant, portable, and social features owned by users from the start.</p>
                            <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-2">
                                <div className="border-1 border-violet-400/40 px-2 py-1 text-violet-400/60 group-hover:text-violet-400 text-xs">Unified-Identity</div>
                                <div className="border-1 border-violet-400/40 px-2 py-1 text-violet-400/60 group-hover:text-violet-400 text-xs">Censorship-Messaging</div>
                                <div className="border-1 border-violet-400/40 px-2 py-1 text-violet-400/60 group-hover:text-violet-400 text-xs">Social economy</div>
                                <div className="border-1 border-violet-400/40 px-2 py-1 text-violet-400/60 group-hover:text-violet-400 text-xs">Sovereign Infrastructure</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-12 justify-between group hover:bg-white hover:border-t-muted-foreground hover:border-t-3 p-5 transition duration-500">
                        <div className="col-span-1 text-muted-foreground/50 text-sm">03</div>
                        <div className="col-span-10 flex flex-col gap-5">
                            <p className="font-[Cal_Sans] text-2xl group-hover:text-black">Protocol Architecture & Technical Advisory</p>
                            <div className="flex flex-col">
                                <p className="text-muted-foreground">Already building? <br />We help teams evaluate which layer of the stack to build on, design for sovereignty from the start, and avoid the common failure modes of Web3-era architecture applied to Bitcoin.</p>
                            </div>
                            <p className="text-white/50 group-hover:text-black group-hover:font-semibold">When you need to bridge Bitcoin, Lightning, and Nostr into unified products.</p>
                            <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-2">
                                <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/60 group-hover:text-muted-foreground text-xs">Advisory</div>
                                <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/60 group-hover:text-muted-foreground text-xs">System design</div>
                                <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/60 group-hover:text-muted-foreground text-xs">Product-first</div>
                                <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/60 group-hover:text-muted-foreground text-xs">Long-term vision</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}