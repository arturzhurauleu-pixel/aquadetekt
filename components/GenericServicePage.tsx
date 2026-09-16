import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq, { FaqItem } from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import InsuranceDocumentationSection from "@/components/InsuranceDocumentationSection";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug, type Service } from "@/data/services";
import { site } from "@/data/site";

export default function GenericServicePage({
  service,
  intro,
  bulletsTitle,
  bullets,
  faqItems,
  showInsuranceNote = false,
}: {
  service: Service;
  intro: string;
  bulletsTitle: string;
  bullets: string[];
  faqItems: FaqItem[];
  /** Renders <InsuranceDocumentationSection> (itself a no-op until confirmed) — set for osuszanie-* pages. */
  showInsuranceNote?: boolean;
}) {
  const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Usługi", url: `${site.domain}/uslugi` },
    { name: service.name, url: `${site.domain}/${service.slug}` },
  ];

  // Gdy dwie strony faktycznie oferują to samo (potwierdzone audytem SERP —
  // patrz AUDYT-KONCOWY.md), Service schema tej strony wskazuje na stronę
  // kanoniczną zamiast deklarować dwa osobne byty Service dla tej samej oferty.
  const canonicalTarget = service.canonicalTargetSlug ? getServiceBySlug(service.canonicalTargetSlug) : undefined;
  const serviceSchemaUrl = canonicalTarget ? `${site.domain}/${canonicalTarget.slug}` : `${site.domain}/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: canonicalTarget ? canonicalTarget.name : service.name,
            description: canonicalTarget ? canonicalTarget.metaDescription : service.metaDescription,
            url: serviceSchemaUrl,
          }),
          faqSchema(faqItems),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: "Usługi", href: "/uslugi" },
          { name: service.name, href: `/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {canonicalTarget && (
          <p className="mb-4 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
            To część usługi{" "}
            <Link href={`/${canonicalTarget.slug}`} className="font-semibold text-brand-900 underline">
              {canonicalTarget.name}
            </Link>
            . Poniżej wyjaśniamy ten konkretny etap — pełny zakres i proces znajdziesz na stronie głównej usługi.
          </p>
        )}
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-lg text-brand-700">{intro}</p>
        <div className="mt-6">
          <PhoneCtaInline label="Zapytaj o szczegóły" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">{bulletsTitle}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2 rounded-lg bg-brand-50 p-3 text-sm text-brand-800">
              <span aria-hidden>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <EmergencyBanner />
      {showInsuranceNote && <InsuranceDocumentationSection />}
      <Faq items={faqItems} />
    </>
  );
}
