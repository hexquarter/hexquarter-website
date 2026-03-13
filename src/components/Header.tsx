import { motion } from "framer-motion";
import Logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="lg:px-20 px-5 fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-muted-foreground/40"
    >
      <div className="py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-mono text-lg font-semibold text-foreground"
        >
          <p className="font-[Cal_Sans] text-2xl"><span className="text-primary">H</span>ex<span className="text-violet-400">Q</span>uarter</p>
        </a>
        <div className="flex gap-10 items-center uppercase font-mono text-xs text-muted-foreground">
          <Link to='#stack' className="hover:text-white hidden md:block">Stack</Link>
          <Link to='#bitcoin' className="hover:text-white hidden md:block">Bitcoin</Link>
          <Link to='#nostr' className="hover:text-white hidden md:block">Nostr</Link>
          <Link to='#services' className="hover:text-white hidden md:block">Services</Link>
          <Link to='#work' className="hover:text-white hidden md:block">Work</Link>
          <Link to='#why-bitcoin' className="hover:text-white hidden md:block">Why Bitcoin</Link>
          <Link to='#contact' className="flex flex-col bg-primary px-3 py-2 hover:bg-white hover:text-violet-400 hover:border-black text-white">
            Let's build
          </Link>
          <span
            className="absolute -bottom-1 left-0 h-px bg-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
