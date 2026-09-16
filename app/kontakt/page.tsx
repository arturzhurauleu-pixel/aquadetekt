import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickReportForm from "@/components/QuickReportForm";
import { PhoneCtaInline } from "@/components/PhoneCta";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z nami — telefon, e-mail, formularz zgłoszenia awarii oraz adres.",
  path: "/kontakt",
});

const breadcrumbItems = [
    { name: "Strona główna", url: `${site.domain}/` },
    { name: "Kontakt", url: `${site.domain}/kontakt` },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={[{ name: "Strona główna", href: "/" }, { name: "Kontakt", href: "/kontakt" }]} />
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-950">Kontakt</h1>
          <p className="mt-4 text-brand-700">
            Najszybszy kontakt w sprawie awarii to telefon. Formularz obok możesz wykorzystać do zgłoszeń
            niepilnych lub zapytań ofertowych.
          </p>
          <div className="mt-6">
            <PhoneCtaInline />
          </div>
          <dl className="mt-8 space-y-2 text-sm text-brand-700">
            <div>
              <dt className="font-semibold text-brand-900">Adres</dt>
              <dd>
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">E-mail</dt>
              <dd>{site.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Godziny działania</dt>
              <dd>{site.openingHours}</dd>
            </div>
          </dl>
          <div className="mt-8 flex h-56 items-center justify-center rounded-2xl border border-dashed border-brand-200 bg-brand-50 text-sm text-brand-400">
            [MIEJSCE NA MAPĘ GOOGLE — {site.googleMapsEmbedUrl}]
          </div>
        </div>
        <QuickReportForm />
      </section>
    </>
  );
}
