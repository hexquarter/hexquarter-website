import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 px-5 lg:px-20 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-muted-foreground/30">
      <div className="py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg font-semibold text-foreground hex-logo">
          <p className="font-[Cal_Sans] text-2xl">
            <span className="text-primary logo-accent">H</span>ex
            <span className="text-violet-400 logo-accent">Q</span>uarter
          </p>
        </Link>
        <div className="flex gap-8 items-center uppercase font-mono text-xs text-muted-foreground">
          {nav.map((n) => {
            const active = router.pathname === n.href || router.pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`hidden md:block transition duration-500 ${active ? "text-foreground" : "hover:text-foreground"}`}
              >
                {n.label}
              </Link>
            );
          })}
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary px-3 py-2 hover:bg-foreground hover:text-primary text-white transition duration-500"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
