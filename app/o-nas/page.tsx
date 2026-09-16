import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "O nas",
  description:
    "Kim jesteśmy i jak pracujemy przy awariach hydraulicznych, lokalizacji wycieków i osuszaniu po zalaniu.",
  path: "/o-nas",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "O nas", url: `${site.domain}/o-nas` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "O nas", href: "/o-nas" }]} />
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950">O nas</h1>
        <p className="mt-4 text-brand-700">
          {site.name} zajmuje się interwencjami hydraulicznymi, lokalizacją wycieków bez kucia oraz osuszaniem
          po zalaniu na terenie {site.serviceAreaRegion}.
        </p>
        <p className="mt-4 text-brand-700">
          W pracy stawiamy na metodyczne podejście: w pierwszej kolejności sprawdzamy, czy da się zdiagnozować
          źródło problemu bez naruszania ścian i posadzek, a proces osuszania potwierdzamy pomiarami
          wilgotności, a nie samą oceną wizualną. Pełny opis historii firmy i zespołu opublikujemy w tym
          miejscu wkrótce.
        </p>
      </section>
    </>
  );
}
