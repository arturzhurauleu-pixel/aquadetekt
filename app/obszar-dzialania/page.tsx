import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cities } from "@/data/cities";

export const metadata: Metadata = buildMetadata({
  title: "Obszar działania — województwo pomorskie",
  description:
    "Sprawdź, w których miejscowościach woj. pomorskiego świadczymy pogotowie hydrauliczne, lokalizację wycieków i osuszanie po zalaniu.",
  path: "/obszar-dzialania",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Obszar działania", url: `${site.domain}/obszar-dzialania` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "Obszar działania", href: "/obszar-dzialania" }]} />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">
          Obszar działania — {site.serviceAreaRegion}
        </h1>
        <p className="mt-4 text-lg text-brand-700">
          Obsługujemy zgłoszenia z całego {site.serviceAreaRegion}, ze szczególnym uwzględnieniem
          aglomeracji trójmiejskiej.
        </p>

        {/* Miejsce na osadzoną mapę Google — patrz site.googleMapsEmbedUrl */}
        <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-brand-200 bg-brand-50 text-sm text-brand-400">
          [MIEJSCE NA MAPĘ GOOGLE — {site.googleMapsEmbedUrl}]
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/hydraulik-${c.slug}`}
              className="rounded-xl border border-brand-100 px-4 py-3 text-sm font-medium text-brand-800 hover:bg-brand-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
