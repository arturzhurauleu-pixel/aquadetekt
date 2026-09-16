import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Usługi — pogotowie hydrauliczne, lokalizacja wycieków, osuszanie",
  description:
    "Pełny zakres usług: pogotowie hydrauliczne, lokalizacja wycieków bez kucia, osuszanie po zalaniu, termowizja, pomiary wilgotności, próba szczelności.",
  path: "/uslugi",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Usługi", url: `${site.domain}/uslugi` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "Usługi", href: "/uslugi" }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">Usługi</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-700">
          Od nagłej interwencji po planową diagnostykę — pełen zakres działań związanych z awariami wodnymi.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
