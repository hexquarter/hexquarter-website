const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 px-5 lg:px-20 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-muted-foreground/40"
    >
      <div className="py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-mono text-lg font-semibold text-foreground"
        >
          <p className="font-[Cal_Sans] text-2xl"><span className="text-primary">H</span>ex<span className="text-violet-400">Q</span>uarter</p>
        </a>
        <div className="flex gap-10 items-center uppercase font-mono text-xs text-muted-foreground">
          <a href="#stack" className="hover:text-white hidden md:block transition duration-500">Stack</a>
          <a href="#bitcoin" className="hover:text-white hidden md:block transition duration-500">Bitcoin</a>
          <a href="#nostr" className="hover:text-white hidden md:block transition duration-500">Nostr</a>
          <a href="#services" className="hover:text-white hidden md:block transition duration-500">Services</a>
          <a href="#work" className="hover:text-white hidden md:block transition duration-500">Work</a>
          <a href="#why-bitcoin" className="hover:text-white hidden md:block transition duration-500">Why Bitcoin</a>
          <a href="#contact" className="flex flex-col bg-primary px-3 py-2 hover:bg-white hover:text-violet-400 hover:border-black text-white transition duration-500">
            Let's build
          </a>
          <span
            className="absolute -bottom-1 left-0 h-px bg-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
