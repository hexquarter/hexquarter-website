const useCases = [
    {
        title: 'Bitcoin L1 — Settlement Base',
        tag: 'Always-on',
        iconColor: 'bg-primary',
        items: [
            'Proof-of-work finality — immutable, physics-backed',
            'UTXO model — deterministic, auditable state',
            'Taproot — key aggregation + conditional script execution'
        ]
    },
    {
        title: 'Statechains — Off-chain Scalability',
        tag: 'L2',
        tagTextColor: 'text-yellow-400',
        tagBorderColor: 'border-yellow-400/20',
        iconColor: 'bg-yellow-400',
        items: [
            'Spark — self-custody payments, instant finality, no channel mgmt',
            'Ark / Arkadeos — shared UTXO pools, non-interactive off-chain txs, scripting',
            'Transfers = ownership moved without on-chain footprint'
        ]
    },
    {
        title: 'Taproot assets - Tokenization',
        tag: 'Asset',
        tagTextColor: 'text-green-400',
        tagBorderColor: 'border-green-400/20',
        iconColor: 'bg-green-400',
        items: [
            'Stablecoins issued on Bitcoin, moved via Spark & Lightning',
            'Loyalty tokens & digital receipts — on-chain, self-sovereign',
            'Asset metadata anchored to Taproot outputs'
        ]
    },
    {
        title: 'Ordinals & Inscriptions — On-chain Data',
        tag: 'Anchoring',
        tagTextColor: 'text-blue-400',
        tagBorderColor: 'border-blue-400/20',
        iconColor: 'bg-blue-400',
        items: [
            'Arbitrary data inscribed to individual satoshis',
            'Immutable content addressing anchored to PoW security',
            'Provenance & ownership without external indexers'
        ]
    }
]

export const Bitcoin = () => {
    return (
        <div id="bitcoin" className="lg:px-20 px-5 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col lg:gap-10">
                <div className="flex lg:flex-row flex-col justify-between gap-10">
                    <div className="flex-1 flex flex-col gap-10">
                        <h3 className="font-mono uppecase tracking-widest uppercase text-sm text-muted-foreground font-lighter text-primary/60">Bitcoin engineering</h3>
                        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-[Cal_Sans] max-w-2xl">Bitcoin as a programmable <span className="text-primary">settlement layer</span></h2>
                        <div className="flex flex-col gap-5 ">
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">Bitcoin's conservatism is a feature, not a limitation. The constraints force precision.</p>
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">New generation of protocols has unlocked programmability without introducing consensus risk or trusted third parties.</p>
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">We work at the intersection of modern Bitcoin stacks<br />
                                Each layer inherits Bitcoin's security model completely.</p>
                            <p className="text-muted-foreground hover:text-foreground/80 transition duration-500">We use scripts to deliver automated settlement rules
                            <br />and state transitions to increase user experience.</p>
                            <p>Just Bitcoin — doing more than most people think it can.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5 pt-5 lg:w-1/3">
                        <p className="text-muted-foreground/50 uppercase font-mono text-sm tracking-widest px-5">// Bitcoin as execution environment</p>
                        {useCases.map((u, i) => (
                            <div key={i} className="flex flex-col group border-muted-foreground/20 border-1 group transition duration-500">
                                <header className="flex justify-between p-3 text-sm border-b-1 border-muted-foreground/20 font-mono text-white/60 group-hover:bg-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 ${u.iconColor} rounded-full`}></div>{u.title}
                                    </div>
                                    <div className={`uppercase ${u.tagTextColor ? `${u.tagTextColor}` : 'text-muted-foreground/30'} border ${u.tagBorderColor ? u.tagBorderColor : 'border-muted-foreground/20'} text-[10px] px-2 py-1`}>{u.tag}</div>
                                </header>
                                <div className="flex flex-col gap-2 p-5 bg-card group-hover:bg-white/10 transition duration-500">
                                    {u.items.map((item, i2) => (
                                        <p className="text-xs text-muted-foreground" key={i2}>- {item}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}