export const Stack = () => {
    return (
        <div id="stack" className="lg:px-20 px-5 py-20 border-muted-foreground/30 border-b-1 flex flex-col gap-10">
            <div className="max-w-4xl flex flex-col gap-10">
                <h3 className="font-mono uppecase text-primary tracking-widest uppercase text-xs">The protocol stack</h3>
                <h2 className="text-6xl lg:text-7xl  2xl:text-8xl font-[Cal_Sans]">Bitcoin isn't just money. <br />It's a <span className="text-primary">platform.</span></h2>
                <div className="flex flex-col gap-2">
                    <p className="text-muted-foreground hover:text-foreground transition duration-500">Most people see Bitcoin as an asset. </p>
                    <p className="text-muted-foreground hover:text-foreground transition duration-500">We see it as the most battle-tested execution environment ever built <br />— and the foundation for an entirely new class of applications</p>
                    <p className="text-muted-foreground hover:text-foreground transition duration-500">Layer by layer, the stack extends its reach without sacrificing the properties that make Bitcoin worth building on.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 2xl:grid-cols-4 w-full ">
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 justify-between gap-10 flex group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white transition duration-500">
                    <div className="flex flex-col gap-7 ">
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Settlement & Security</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>The base. Proof-of-work finality anchors everything above it. </p>
                            <p>$2T+ secured by physics, not governance. </p>
                            <p>The UTXO model keeps state simple, auditable, and self-sovereign.</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white transition duration-500">
                    <div className="flex flex-col gap-7">
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Speed & Interoperability</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Use Lightning as an ubiquitous language across ecosystem to make it faster and secure, allowing to switch context and exit at any time.</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col  border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white transition duration-500">
                    <div className="flex flex-col gap-7">
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Identity & Data coordination</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Where does app data live if not on a server you control? With Nostr, we get a censorship-resistant relay network where every event is cryptographically signed</p>
                            <p>Use it for metadata, user identity, notifications, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="border-1 border-muted-foreground/20 p-5 2xl:p-10 flex justify-between gap-10 group flex-col border-t-1 hover:border-t-primary hover:border-t-3 hover:bg-white transition duration-500">
                    <div className="flex flex-col gap-7">
                        <h4 className="font-[Cal_Sans] text-2xl group-hover:text-black">Programmable assets</h4>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                            <p>Issue assets anchored to Bitcoin's security model. </p>
                            <p>Stablecoins, loyalty tokens, and digital receipts issued on-chain without compromising Bitcoin's base-layer guarantees.</p>
                            <p>Use scripts to deliver state of the art automated rules without introducing consensus risk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}