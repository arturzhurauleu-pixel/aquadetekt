import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import { caseStudies } from "@/data/case-studies";
import { PhoneCtaInline } from "@/components/PhoneCta";

export const metadata: Metadata = buildMetadata({
  title: "Realizacje",
  description: "Przykłady zrealizowanych zleceń: lokalizacja wycieków i osuszanie po zalaniu.",
  path: "/realizacje",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Realizacje", url: `${site.domain}/realizacje` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "Realizacje", href: "/realizacje" }]} />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950">Realizacje</h1>

        {caseStudies.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-brand-200 bg-brand-50 p-8 text-center">
            <p className="text-brand-700">
              Pracujemy nad publikacją pierwszych opisów zrealizowanych zleceń — z opisem problemu, diagnozy i
              zastosowanych metod. Wrócimy tu, gdy będziemy mieć zgodę klientów na udostępnienie szczegółów.
            </p>
            <div className="mt-6 flex justify-center">
              <PhoneCtaInline label="Zapytaj o podobny przypadek" />
            </div>
          </div>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={`/realizacje/${cs.slug}`}
                  className="block rounded-xl border border-brand-100 p-5 hover:bg-brand-50"
                >
                  <h2 className="font-semibold text-brand-900">{cs.title}</h2>
                  <p className="mt-1 text-sm text-brand-600">{cs.location}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
