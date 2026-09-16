import Link from "next/link";
import { site } from "@/data/site";
import { PhoneCtaInline } from "./PhoneCta";

const navItems = [
  { href: "/pogotowie-hydrauliczne", label: "Pogotowie hydrauliczne 24h" },
  { href: "/lokalizacja-wyciekow", label: "Lokalizacja wycieków" },
  { href: "/osuszanie-po-zalaniu", label: "Osuszanie po zalaniu" },
  { href: "/obszar-dzialania", label: "Obszar działania" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/o-nas", label: "O nas" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold text-brand-900">
          {site.name}
        </Link>

        <nav className="hidden gap-6 lg:flex" aria-label="Menu główne">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-700 transition hover:text-brand-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <PhoneCtaInline label={site.isAvailable247 ? "📞 Zadzwoń 24/7" : "📞 Zadzwoń"} />
        </div>
      </div>
    </header>
  );
}
