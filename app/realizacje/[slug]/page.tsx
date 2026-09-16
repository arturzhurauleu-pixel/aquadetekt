import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { getServiceBySlug } from "@/data/services";
import { getCityBySlug } from "@/data/cities";
import { site } from "@/data/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return buildMetadata({ title: cs.metaTitle, description: cs.metaDescription, path: `/realizacje/${cs.slug}` });
}

export default function Page({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) {
    notFound();
    return null;
  }

  const service = getServiceBySlug(cs.relatedServiceSlug);
  const city = cs.relatedCitySlug ? getCityBySlug(cs.relatedCitySlug) : undefined;

  const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Realizacje", url: `${site.domain}/realizacje` },
    { name: cs.title, url: `${site.domain}/realizacje/${cs.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs
        items={[
          { name: "Strona główna", href: "/" },
          { name: "Realizacje", href: "/realizacje" },
          { name: cs.title, href: `/realizacje/${cs.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950">{cs.title}</h1>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Lokalizacja" value={cs.location} />
          <Field label="Typ budynku" value={cs.buildingType} />
          {cs.customerContext && <Field label="Zleceniodawca" value={cs.customerContext} />}
          {cs.duration && <Field label="Czas realizacji" value={cs.duration} />}
        </dl>

        <Section title="Problem" text={cs.problem} />
        <ListSection title="Objawy" items={cs.symptoms} />
        <Section title="Diagnoza" text={cs.diagnosis} />
        <ListSection title="Zastosowane technologie" items={cs.technology} />
        <Section title="Rozwiązanie" text={cs.solution} />
        <Section title="Efekt" text={cs.result} />
        {cs.measurements && <Section title="Pomiary" text={cs.measurements} />}
        {cs.insuranceDocumentation && <Section title="Dokumentacja dla ubezpieczyciela" text={cs.insuranceDocumentation} />}

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {service && (
            <Link href={`/${service.slug}`} className="font-semibold text-brand-900 underline">
              Zobacz usługę: {service.name}
            </Link>
          )}
          {city && (
            <Link href={`/hydraulik-${city.slug}`} className="font-semibold text-brand-900 underline">
              Zobacz obszar: {city.name}
            </Link>
          )}
        </div>
      </article>
      <EmergencyBanner />
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase text-brand-500">{label}</dt>
      <dd className="text-brand-800">{value}</dd>
    </div>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section className="mt-6">
      <h2 className="font-display text-xl font-bold text-brand-900">{title}</h2>
      <p className="mt-2 text-brand-700">{text}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-6">
      <h2 className="font-display text-xl font-bold text-brand-900">{title}</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-brand-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
