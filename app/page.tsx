import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { getServiceBySlug } from "@/data/services";

// Najważniejsze usługi na stronie głównej — pełna lista (w tym frazy long-tail
// typu "wycieki pod posadzką") dostępna jest na /uslugi oraz w stopce.
const HOMEPAGE_SERVICE_SLUGS = [
  "pogotowie-hydrauliczne",
  "hydraulik-24h",
  "lokalizacja-wyciekow",
  "wykrywanie-wyciekow",
  "osuszanie-po-zalaniu",
  "termowizja",
  "pomiary-wilgotnosci",
  "proba-szczelnosci",
  "odgrzybianie",
];
const homepageServices = HOMEPAGE_SERVICE_SLUGS.map((slug) => getServiceBySlug(slug)!).filter(Boolean);
import { cities } from "@/data/cities";
import ServiceCard from "@/components/ServiceCard";
import { PhoneCtaInline } from "@/components/PhoneCta";
import EmergencyBanner from "@/components/EmergencyBanner";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pogotowie hydrauliczne i osuszanie po zalaniu — woj. pomorskie",
  description:
    "Awaria hydrauliczna, lokalizacja wycieków bez kucia, osuszanie po zalaniu. Dojazd na terenie woj. pomorskiego.",
  path: "/",
});

const faqItems = [
  {
    question: "Kto oferuje pogotowie hydrauliczne w woj. pomorskim?",
    answer: `${site.name} obsługuje zgłoszenia awaryjne i planowe na terenie ${site.serviceAreaRegion}, w tym Gdańska, Gdyni i Sopotu oraz okolicznych miejscowości.`,
  },
  {
    question: "Czym różni się lokalizacja wycieku od zwykłej naprawy hydraulicznej?",
    answer:
      "Lokalizacja wycieku to diagnostyka — ustalenie, gdzie dokładnie znajduje się nieszczelność, często bez naruszania ścian czy posadzki. Naprawa to kolejny, osobny etap po ustaleniu miejsca awarii.",
  },
  {
    question: "Jak szybko można uzyskać pomoc?",
    answer:
      "Czas dojazdu zależy od lokalizacji i aktualnego obłożenia zgłoszeń. Zadzwoń, aby ustalić realny czas przyjazdu dla Twojej miejscowości.",
  },
  {
    question: "Co zrobić zaraz po zalaniu, zanim przyjedziecie?",
    answer:
      "Odetnij dopływ wody głównym zaworem, zabezpiecz urządzenia elektryczne w zalanej strefie i, jeśli to możliwe, udokumentuj szkody zdjęciami do zgłoszenia ubezpieczeniowego.",
  },
];

export default function HomePage() {
  const tier1Cities = cities.filter((c) => c.tier === 1);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-brand-950 sm:text-5xl">
              Pogotowie hydrauliczne w województwie pomorskim
            </h1>
            <p className="mt-5 text-lg text-brand-700">
              Hydraulik 24h, lokalizacja wycieków bez kucia oraz osuszanie po zalaniu — dla mieszkań, domów i
              budynków wielorodzinnych na terenie {site.serviceAreaRegion}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneCtaInline label="Zgłoś awarię — zadzwoń" />
              <Link
                href="/lokalizacja-wyciekow"
                className="inline-flex items-center rounded-lg border border-brand-300 px-6 py-3 font-semibold text-brand-800 transition hover:bg-brand-50"
              >
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-brand-900">Nasze usługi</h2>
        <p className="mt-2 max-w-2xl text-brand-600">
          Zakres działań dopasowany do sytuacji — od nagłej awarii po planową diagnostykę instalacji.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-brand-900">Dlaczego warto nas wybrać?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <WhyUsCard
              title="Diagnostyka bez rozkuwania"
              text="W pierwszej kolejności szukamy metody, która pozwoli zlokalizować wyciek bez niszczenia ścian i posadzek."
            />
            <WhyUsCard
              title="Jasny zakres prac"
              text="Przed rozpoczęciem prac wiesz, co dokładnie obejmuje interwencja i jakie są kolejne kroki."
            />
            <WhyUsCard
              title="Kontrola procesu osuszania"
              text="Postęp osuszania potwierdzamy pomiarami wilgotności, a nie tylko szacunkiem na oko."
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-brand-900">Obszar działania</h2>
        <p className="mt-2 max-w-2xl text-brand-600">
          Obsługujemy {site.serviceAreaRegion}, ze szczególnym uwzględnieniem aglomeracji trójmiejskiej.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tier1Cities.map((c) => (
            <Link
              key={c.slug}
              href={`/hydraulik-${c.slug}`}
              className="rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/obszar-dzialania"
            className="rounded-full border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
          >
            Zobacz wszystkie miejscowości →
          </Link>
        </div>
      </section>

      <EmergencyBanner />

      <Faq items={faqItems} />
      <JsonLd data={faqSchema(faqItems)} />
    </>
  );
}

function WhyUsCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm text-brand-600">{text}</p>
    </div>
  );
}
