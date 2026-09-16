import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getCityBySlug } from "@/data/cities";
import { site } from "@/data/site";

const coreServices = [
  { slug: "pogotowie-hydrauliczne", name: "Pogotowie hydrauliczne 24h" },
  { slug: "hydraulik-24h", name: "Hydraulik 24h" },
  { slug: "lokalizacja-wyciekow", name: "Lokalizacja wycieków" },
  { slug: "wykrywanie-wyciekow", name: "Wykrywanie wycieków" },
  { slug: "osuszanie-po-zalaniu", name: "Osuszanie po zalaniu" },
];

/** Metadata builder for a literal `app/hydraulik-{citySlug}/page.tsx` route. */
export function cityHubMetadata(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/hydraulik-${city.slug}`,
  });
}

/** Page body for a literal `app/hydraulik-{citySlug}/page.tsx` route. */
export default function CityHubPage({ citySlug }: { citySlug: string }) {
  const city = getCityBySlug(citySlug);
  if (!city) {
    notFound();
    return null;
  }

  // Miasta tier 1 (Gdańsk, Gdynia, Sopot) mają dedykowane podstrony usługowo-lokalne
  // (np. /pogotowie-hydrauliczne-gdansk/); pozostałe linkują do ogólnych stron usług.
  const servicesForCity = coreServices
    .filter((s) => city.localServicePages.length === 0 || city.localServicePages.includes(s.slug))
    .map((s) => ({
      ...s,
      href: city.localServicePages.includes(s.slug) ? `/${s.slug}-${city.slug}` : `/${s.slug}`,
    }));

  const faqItems = [
    {
      question: `Kto oferuje pogotowie hydrauliczne ${city.nameLocative}?`,
      answer: `${site.name} obsługuje zgłoszenia awaryjne i planowe ${city.nameLocative} oraz okolicy, w ramach obszaru działania obejmującego ${site.serviceAreaRegion}.`,
    },
    {
      question: `Jak długo trwa dojazd ${city.nameLocative}?`,
      answer: city.distanceNote,
    },
    {
      question: `Jakie usługi są dostępne ${city.nameLocative}?`,
      answer: `Pogotowie hydrauliczne, lokalizacja wycieków bez kucia oraz osuszanie po zalaniu — pełny zakres znajdziesz w sekcji Usługi.`,
    },
  ];

  const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Obszar działania", url: `${site.domain}/obszar-dzialania` },
    { name: city.name, url: `${site.domain}/hydraulik-${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), localBusinessSchema(), faqSchema(faqItems)]} />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: "Obszar działania", href: "/obszar-dzialania" },
          { name: city.name, href: `/hydraulik-${city.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">
          Hydraulik 24h {city.nameLocative} — pogotowie hydrauliczne i osuszanie po zalaniu
        </h1>
        <p className="mt-4 text-lg text-brand-700">{city.localAngle}</p>
        <div className="mt-6">
          <PhoneCtaInline label="Zgłoś awarię" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Usługi dostępne {city.nameLocative}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesForCity.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="rounded-xl border border-brand-100 p-5 font-semibold text-brand-800 hover:bg-brand-50"
            >
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Najczęstsze zgłoszenia {city.nameLocative}</h2>
        <ul className="mt-4 space-y-2">
          {city.commonIssues.map((issue) => (
            <li key={issue} className="flex gap-2 rounded-lg bg-brand-50 p-3 text-sm text-brand-800">
              <span aria-hidden>•</span>
              {issue}
            </li>
          ))}
        </ul>
      </section>

      {city.districts && (
        <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-brand-900">Obsługiwane dzielnice</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.districts.map((d) => (
              <span key={d} className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700">
                {d}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Dojazd i kontakt</h2>
        <p className="mt-3 text-brand-700">{city.distanceNote}</p>
      </section>

      <EmergencyBanner />
      <Faq items={faqItems} title={`Pytania o usługi ${city.nameLocative}`} />
    </>
  );
}
