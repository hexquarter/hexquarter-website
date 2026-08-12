import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/expertise", label: "Expertise" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="px-5 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          HexQuarter<span className="text-muted-foreground">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((n) => {
            const active =
              router.pathname === n.href || router.pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`transition-colors duration-300 ${active ? "text-foreground" : "hover:text-foreground"}`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] border border-primary hover:bg-background hover:text-foreground transition-colors duration-300"
          >
            Discuss your project
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-5 py-6 flex flex-col gap-4 bg-background">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground px-4 py-3 text-xs font-mono uppercase tracking-[0.14em] w-fit"
          >
            Discuss your project
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
