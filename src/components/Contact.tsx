import { ArrowRight } from "lucide-react"
import { FormEvent, useRef, useState } from "react"

export const Contact = () => {

    const [status, setStatus] = useState<'success' | 'error' | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    const formRef = useRef()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setStatus(undefined)
        setLoading(true)
        
        const formData = new FormData(formRef.current)
        const name = formData.get('name');

        const subject = `${name} sent a message from website`;
        formData.append('subject', subject);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        setLoading(false)

        if (!res.ok) {
            console.log(await res.json())
            setStatus('error')
            return
        }

        setStatus('success')
    }

    return (
        <div id="contact" className="px-5 lg:px-20 py-20 border-muted-foreground/30 border-b-1">
            <div className="flex flex-col gap-10">
                <h3 className="font-mono uppercase tracking-widest text-sm text-primary">Contact</h3>
                <div className="flex lg:flex-row flex-col gap-10 justify-content">
                    <div className="flex flex-col flex-1 gap-5 ">
                        <h2 className="font-[Cal_Sans] text-4xl lg:text-7xl lg:max-w-2xl">Let's build on <span className="text-primary">Bitcoin</span></h2>
                        <p className="text-muted-foreground">Have a product idea that should live on a foundation you can trust? <br />Tell us what you're building — we'll tell you if Bitcoin is the right stack for it.</p>
                        <div className="flex flex-col gap-2 hidden lg:block">
                            <p className="font-mono text-muted-foreground/50 flex items-center gap-2 text-sm hover:text-white"><ArrowRight className="h-3 text-primary" /> <a href="mailto:build@hexquarter.com">build@hexquarter.com</a></p>
                            <p className="font-mono text-muted-foreground/50 flex items-center gap-2 text-sm hover:text-white"><ArrowRight className="h-3 text-violet-400" /> <a href="https://primal.net/p/nprofile1qqszc4ag3v5ftf233s50c4qhwgd7vlavq4amcezdug9f9e62kcdk6vqn2kudp" target="_blank">npub193t63zegjkj4rrpgl32pwusmuel6cptmh3jymcs2jtn54dsmd5cqrrzwr4</a></p>
                        </div>
                    </div>
                    <form ref={formRef} className="flex flex-col flex-1 gap-5 lg:gap-10" method="post" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground/50 font-mono uppercase">Your name</span>
                            <input type="text" placeholder="Satoshi Nakamoto" className="p-2 bg-card border border-muted-foreground/20 text-sm focus:outline focus:outline-primary/40" required name="name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground/50 font-mono uppercase">Email or npub</span>
                            <input type="text" placeholder="hello@you.com or npub1..." className="p-2 bg-card border border-muted-foreground/20 text-sm focus:outline focus:outline-primary/40" required name="email_npub" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground/50 font-mono uppercase">What are you building?</span>
                            <select className="p-2 bg-card border border-muted-foreground/20 text-sm text-muted-foreground focus:text-white focus:outline focus:outline-primary/40" required name="service">
                                <option>Select a category...</option>
                                <option value="bitcoin">Bitcoin-Native Product</option>
                                <option value="nostr">Nostr-Powered Application</option>
                                <option value="architecture">Protocol Architecture</option>
                                <option value="advisory">Advisory</option>
                                <option value="other">Something else</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-muted-foreground/50 font-mono uppercase">Tell us more</span>
                            <textarea className="p-2 bg-card border border-muted-foreground/20 text-sm focus:outline focus:outline-primary/40" rows={3} placeholder="What's the problem you're solving? What stage are you at?" required name="details">
                            </textarea>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex">
                                <button type="submit" disabled={loading} className={`${loading ? 'bg-white text-violet-400' : 'bg-primary hover:cursor-pointer'} px-4 py-2 uppercase font-mono text-xs hover:bg-white hover:text-violet-400`}>{loading ? 'Sending ...' : 'Send message'}</button>
                            </div>
                            {status == 'error' && <p className="text-xs">An error occured, we are sorry we did not receive your message. <br />Please retry in an instant. <br />If the error persists you can contact us directly at <a href="mailto:build@hexquarter.com" className="text-primary">build@hexquarter.com</a></p>}
                            {status == 'success' && <p className="text-xs text-green-400">Thank you for your submission. We will reply to you soon!</p>}
                        </div>
                        <input type="hidden" name="access_key" value="b7a2eddf-6572-49e3-8975-ccd60fcc6227" />
                        <input type="hidden" name="from_name" value="HexQuarter Contact" />
                    </form>
                </div>
            </div>
        </div>
    )
}