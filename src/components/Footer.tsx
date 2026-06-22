import Link from "next/link";

const links = [
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <div className="py-10 lg:px-20 px-5 border-t border-muted-foreground/20 flex lg:flex-row flex-col gap-5 justify-between">
      <div className="flex flex-col gap-3">
        <Link href="/" className="font-[Cal_Sans] text-2xl">
          <span className="text-primary">H</span>ex<span className="text-violet-400">Q</span>uarter
        </Link>
        <p className="text-xs text-muted-foreground max-w-xs">
          Open-protocol systems on Bitcoin, Lightning and Nostr.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 text-xs text-muted-foreground items-start lg:items-center">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-white transition duration-500">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1 text-xs text-muted-foreground lg:items-end">
        <a href="mailto:contact@hexquarter.com" className="hover:text-white transition duration-500">
          contact@hexquarter.com
        </a>
        <p>© {new Date().getFullYear()} HexQuarter</p>
      </div>
    </div>
  );
};
