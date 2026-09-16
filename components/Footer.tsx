import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-800 bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-brand-300">{site.address.street}</p>
          <p className="text-sm text-brand-300">
            {site.address.postalCode} {site.address.city}
          </p>
          <p className="mt-3 text-sm">
            <a href={site.phoneHref} className="text-white hover:underline">
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${site.email}`} className="text-brand-300 hover:underline">
              {site.email}
            </a>
          </p>
          <p className="mt-3 text-xs text-brand-400">{site.openingHours}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Usługi</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-brand-300 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Obszar działania</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/hydraulik-${c.slug}`} className="text-brand-300 hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Firma</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/o-nas" className="text-brand-300 hover:text-white">
                O nas
              </Link>
            </li>
            <li>
              <Link href="/realizacje" className="text-brand-300 hover:text-white">
                Realizacje
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-brand-300 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-brand-300 hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-brand-300 hover:text-white">
                Kontakt
              </Link>
            </li>
            {site.googleBusinessProfileUrl && (
              <li>
                <a
                  href={site.googleBusinessProfileUrl}
                  className="text-brand-300 hover:text-white"
                  rel="noopener noreferrer"
                >
                  Profil Google
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 py-4 text-center text-xs text-brand-400">
        © {new Date().getFullYear()} {site.name}. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
