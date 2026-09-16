import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import InsuranceDocumentationSection from "@/components/InsuranceDocumentationSection";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

const service = getServiceBySlug("osuszanie-po-zalaniu")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faqItems = [
  {
    question: "Jak długo trwa osuszanie po zalaniu?",
    answer:
      "To zależy od skali zalania, rodzaju materiałów budowlanych i warunków w pomieszczeniu. Orientacyjny czas podajemy po pomiarach wilgotności wykonanych na miejscu.",
    learnMoreHref: "/blog/jak-dlugo-trwa-osuszanie-po-zalaniu",
    learnMoreLabel: "Pełny poradnik: od czego zależy czas osuszania",
  },
  {
    question: "Czy można mieszkać w lokalu w trakcie osuszania?",
    answer:
      "W wielu przypadkach tak, choć praca urządzeń osuszających wiąże się z hałasem i podwyższoną temperaturą w pomieszczeniu. Ustalamy to indywidualnie w zależności od sytuacji.",
  },
  {
    question: "Czy ubezpieczenie pokrywa koszty osuszania po zalaniu?",
    answer:
      "Zależy od zakresu polisy — warto zgłosić szkodę do ubezpieczyciela możliwie szybko i udokumentować zalanie zdjęciami przed rozpoczęciem prac.",
  },
  {
    question: "Kto wykonuje osuszanie po zalaniu w województwie pomorskim?",
    answer: `${site.name} wykonuje osuszanie mieszkań, domów i budynków po zalaniu na terenie ${site.serviceAreaRegion}.`,
  },
];

const breadcrumbItems = [
  { name: "Strona główna", url: `${site.domain}/` },
  { name: "Usługi", url: `${site.domain}/uslugi` },
  { name: service.name, url: `${site.domain}/${service.slug}` },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url: `${site.domain}/${service.slug}`,
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
        <h1 className="font-display text-3xl font-bold text-brand-950 sm:text-4xl">{service.h1}</h1>
        <p className="mt-4 text-lg text-brand-700">
          Po zalaniu liczy się czas — im szybciej rozpocznie się osuszanie ścian, podłóg i posadzek, tym mniejsze
          ryzyko trwałych uszkodzeń konstrukcji i rozwoju pleśni.
        </p>
        <div className="mt-6">
          <PhoneCtaInline label="Zgłoś zalanie" />
        </div>
      </section>

      <ProcessSteps
        title="Jak wygląda proces osuszania"
        steps={[
          "Oględziny miejsca zalania i wstępna ocena skali zawilgocenia.",
          "Lokalizacja źródła wilgoci — jeśli przyczyna nie jest oczywista, wykonujemy diagnostykę.",
          "Pomiar wilgotności ścian, podłóg i powietrza jako punkt odniesienia dla dalszych prac.",
          "Zabezpieczenie miejsca — odsunięcie mebli, zabezpieczenie elementów wrażliwych na wilgoć.",
          "Dobór urządzeń osuszających do warunków (rodzaj materiału, powierzchnia, temperatura).",
          "Osuszanie właściwe, z regularnym monitorowaniem postępu.",
          "Kontrolne pomiary wilgotności potwierdzające osiągnięcie bezpiecznego poziomu.",
          "Zakończenie procesu i podsumowanie — w tym informacja o ewentualnym ryzyku wtórnych uszkodzeń.",
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Co obejmuje osuszanie</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Osuszanie ścian", text: "Usuwanie wilgoci z murów i tynków po zalaniu lub długotrwałym zawilgoceniu." },
            { title: "Osuszanie podłóg i posadzek", text: "W tym posadzek pływających i warstw pod wykończeniem podłogowym.", href: "/osuszanie-podposadzkowe" },
            { title: "Usuwanie skutków zalania", text: "Pierwsza faza reakcji na zalanie — zabezpieczenie miejsca, zanim rozpocznie się właściwe osuszanie.", href: "/usuwanie-skutkow-zalania" },
            { title: "Pomiary kontrolne", text: "Regularna kontrola wilgotności w trakcie i po zakończeniu osuszania.", href: "/pomiary-wilgotnosci" },
          ].map((item) =>
            item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl bg-brand-50 p-5 transition hover:bg-brand-100"
              >
                <h3 className="font-semibold text-brand-900">{item.title} →</h3>
                <p className="mt-2 text-sm text-brand-600">{item.text}</p>
              </Link>
            ) : (
              <div key={item.title} className="rounded-xl bg-brand-50 p-5">
                <h3 className="font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-600">{item.text}</p>
              </div>
            )
          )}
        </div>
      </section>

      <InsuranceDocumentationSection />

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Ryzyko pleśni i dalszych uszkodzeń</h2>
        <p className="mt-3 text-brand-700">
          Niedosuszone ściany i podłogi sprzyjają rozwojowi pleśni i grzybów, a długotrwałe zawilgocenie może
          osłabiać elementy konstrukcyjne budynku. Dlatego proces osuszania kończymy dopiero po potwierdzeniu
          pomiarami, że wilgotność wróciła do bezpiecznego poziomu — a nie na podstawie samej oceny wizualnej.
        </p>
      </section>

      <EmergencyBanner />
      <Faq items={faqItems} />
    </>
  );
}
