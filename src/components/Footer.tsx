import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="py-10 lg:px-20 px-5  flex lg:flex-row flex-col gap-5 justify-between">
            <div className="flex flex-col gap-5 md:border-0 border-b border-b-muted-foreground/20 pb-5">
                <p className="font-[Cal_Sans] text-2xl"><span className="text-primary">H</span>ex<span className="text-violet-400">Q</span>uarter</p>
                <div className="flex flex-col gap-2">
                    <Link to='/blog' className="hover:text-white text-xs text-muted-foreground transition duration-500">Blog</Link>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 text-xs text-muted-foreground md:border-0 border-b border-b-muted-foreground/20 pb-5 ">
                <Link to='#stack' className="hover:text-white transition duration-500">Stack</Link>
                <Link to='#bitcoin' className="hover:text-white transition duration-500">Bitcoin</Link>
                <Link to='#nostr' className="hover:text-white transition duration-500">Nostr</Link>
                <Link to='#services' className="hover:text-white transition duration-500">Services</Link>
                <Link to='#work' className="hover:text-white transition duration-500">Work</Link>
                <Link to='#contact' className="hover:text-white transition duration-500">Contact</Link>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} HexQuarter</p>
            </div>
        </div>
    )
}