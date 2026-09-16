import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq, { type FaqItem } from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import InsuranceDocumentationSection from "@/components/InsuranceDocumentationSection";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import type { Service } from "@/data/services";
import type { City } from "@/data/cities";
import { site } from "@/data/site";

export default function LocalServicePage({
  service,
  city,
  intro,
  faqExtra = [],
}: {
  service: Service;
  city: City;
  /** Unikalny akapit łączący usługę z lokalnym kontekstem miasta — nie kopiować między miastami. */
  intro: string;
  faqExtra?: FaqItem[];
}) {
  const path = `/${service.slug}-${city.slug}`;
  const title = `${service.name} ${city.nameLocative}`;

  const faqItems = [
    {
      question: `Kto świadczy usługę: ${service.name.toLowerCase()} ${city.nameLocative}?`,
      answer: `${site.name} realizuje tę usługę ${city.nameLocative} oraz w okolicznych miejscowościach, w ramach obszaru działania obejmującego ${site.serviceAreaRegion}.`,
    },
    ...faqExtra,
    {
      question: `Jak umówić się na wizytę ${city.nameLocative}?`,
      answer: "Najszybciej telefonicznie — ustalimy szczegóły i orientacyjny czas dojazdu.",
    },
  ];

  const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: city.name, url: `${site.domain}/hydraulik-${city.slug}` },
    { name: title, url: `${site.domain}${path}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema({ name: title, description: intro, url: `${site.domain}${path}` }),
          faqSchema(faqItems),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: city.name, href: `/hydraulik-${city.slug}` },
          { name: title, href: path },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-brand-700">{intro}</p>
        <div className="mt-6">
          <PhoneCtaInline label="Zadzwoń teraz" />
        </div>
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
        <h2 className="font-display text-2xl font-bold text-brand-900">
          Najczęstsze zgłoszenia {city.nameLocative}
        </h2>
        <ul className="mt-4 space-y-2">
          {city.commonIssues.map((issue) => (
            <li key={issue} className="flex gap-2 rounded-lg bg-brand-50 p-3 text-sm text-brand-800">
              <span aria-hidden>•</span>
              {issue}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Więcej o tej usłudze</h2>
        <p className="mt-3 text-brand-700">
          Pełny opis usługi, metod i procesu znajdziesz na stronie ogólnej:{" "}
          <Link href={`/${service.slug}`} className="font-semibold text-brand-900 underline">
            {service.name}
          </Link>
          . Zobacz też{" "}
          <Link href={`/hydraulik-${city.slug}`} className="font-semibold text-brand-900 underline">
            pełny zakres usług {city.nameLocative}
          </Link>
          .
        </p>
      </section>

      <EmergencyBanner />
      {service.slug === "osuszanie-po-zalaniu" && <InsuranceDocumentationSection />}
      <Faq items={faqItems} title={`Pytania o ${service.name.toLowerCase()} ${city.nameLocative}`} />
    </>
  );
}
