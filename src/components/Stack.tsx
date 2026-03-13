export const Stack = () => {
    return (
        <div id="stack" className="lg:px-20 px-5 py-20 border-muted-foreground/30 border-b-1 flex flex-col gap-10">
            <div className="max-w-4xl flex flex-col gap-10">
                <h3 className="font-mono uppecase text-primary tracking-widest uppercase text-xs">The protocol stack</h3>
                <h2 className="text-6xl 2xl:text-8xl font-[Cal_Sans]">Bitcoin isn't just money. <br />It's a <span className="text-primary">platform.</span></h2>
                <div className="flex flex-col gap-2">
                    <p className="text-muted-foreground hover:text-foreground animate">Most people see Bitcoin as an asset. </p>
                    <p className="text-muted-foreground hover:text-foreground animate">We see it as the most battle-tested execution environment ever built <br />— and the foundation for an entirely new class of applications</p>
                    <p className="text-muted-foreground hover:text-foreground animate">Layer by layer, the stack extends its reach without sacrificing the properties that make Bitcoin worth building on.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 2xl:grid-cols-4 w-full ">
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 justify-between gap-10 flex group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white">
                    <div className="flex flex-col gap-7 ">
                        <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground/40 font-mono uppercase text-xs">L1</span>
                            <div className="flex">
                                <div className="flex items-center gap-2 font-mono uppercase text-primary text-xs px-3 py-2 border-primary border-1 tracking-widest">
                                    <div className="group-hover:bg-primary animate bg-primary/30 w-2 h-2 rounded-full"></div> Bitcoin
                                </div>
                            </div>
                        </div>
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Settlement & Security</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>The base. Proof-of-work finality anchors everything above it. </p>
                            <p>$2T+ secured by physics, not governance. </p>
                            <p>The UTXO model keeps state simple, auditable, and self-sovereign.</p>
                        </div>
                    </div>
                    <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">UTXO Model</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">PoW Finality</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Taproot</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Multisig</div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground/40 font-mono uppercase text-xs">L2</span>
                            <div className="flex">
                                <div className="flex items-center gap-2 font-mono uppercase text-yellow-400 text-xs px-3 py-2 border-yellow-400 border-1 tracking-widest">
                                    <div className="group-hover:bg-yellow-400 animate bg-yellow-400/30 w-2 h-2 rounded-full"></div> Lightning / Spark
                                </div>
                            </div>
                        </div>
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Payment & Speed</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Instant, near-zero-fee transactions with full self-custody.</p>
                            <p>Spark extends Lightning with a simpler UX for checkout and micropayments — without introducing custodial risk.</p>
                            <p>Use Lightning as interoperability layer across L2s, forming an ubiquitous language across ecosystem.</p>
                        </div>
                    </div>
                    <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Spark protocol</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Lightning invoices</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Interoperability</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">LNUrl</div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col  border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground/40 font-mono uppercase text-xs">Data</span>
                            <div className="flex">
                                <div className="flex items-center gap-2 font-mono uppercase text-violet-400 text-xs px-3 py-2 border-violet-400 border-1 tracking-widest">
                                    <div className="group-hover:bg-violet-400 animate bg-violet-400/10 w-2 h-2 rounded-full"></div> Nostr
                                </div>
                            </div>
                        </div>
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Identity & Data Fabric</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Where does app data live if not on a server you control? Nostr.</p>
                            <p>A censorship-resistant relay network where every event is cryptographically signed</p>
                            <p>Use it for payment metadata, user identity, notifications, and more.</p>
                        </div>
                    </div>
                    <div className="lg:flex grid grid-cols grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">NIP Standards</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Zaps</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Relay Protocol</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">DM encrypted</div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground/40 font-mono uppercase text-xs">Asset</span>
                            <div className="flex">
                                <div className="flex items-center gap-2 font-mono uppercase text-green-400 text-xs px-3 py-2 border-green-400 border-1 tracking-widest">
                                    <div className="group-hover:bg-green-400 animate bg-green-400/10 w-2 h-2 rounded-full"></div>Tokenization / Script
                                </div>
                            </div>
                        </div>
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Programmable assets</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Issue assets anchored to Bitcoin's security model. </p>
                            <p>Stablecoins, loyalty tokens, and digital receipts issued on-chain without compromising Bitcoin's base-layer guarantees.</p>
                            <p>Use scripts to deliver state of the art automated rules without introducing consensus risk</p>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Taproot assets</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Spark BTKN tokens</div>
                        <div className="border-1 border-muted-foreground/40 px-2 py-1 text-muted-foreground/40 group-hover:text-muted-foreground text-[10px] font-mono">Arkade Script</div>
                    </div>
                </div>
            </div>
        </div >
    )
}