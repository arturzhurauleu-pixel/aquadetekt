import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import { PhoneCtaInline } from "@/components/PhoneCta";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

const service = getServiceBySlug("lokalizacja-wyciekow")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

const faqItems = [
  {
    question: "Czym jest lokalizacja wycieków bez kucia?",
    answer:
      "To zestaw metod diagnostycznych (m.in. termowizja, korelacja akustyczna, gaz znacznikowy), które pozwalają ustalić miejsce wycieku bez rozkuwania ścian i posadzek.",
  },
  {
    question: "Jak długo trwa lokalizacja wycieku?",
    answer:
      "Zależy od typu instalacji, dostępności miejsc pomiarowych i wielkości powierzchni do zbadania — dokładny czas ustalamy po wstępnym wywiadzie.",
  },
  {
    question: "Czy metoda nieinwazyjna zawsze pozwala uniknąć kucia?",
    answer:
      "W większości przypadków tak, ale ostateczna decyzja o ewentualnym, ograniczonym odkryciu miejsca awarii zapada dopiero po diagnostyce — informujemy o tym przed rozpoczęciem prac.",
  },
  {
    question: "Kto wykonuje lokalizację wycieków w województwie pomorskim?",
    answer: `${site.name} wykonuje lokalizację wycieków wody na terenie ${site.serviceAreaRegion}, w tym w Gdańsku, Gdyni i Sopocie.`,
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
          Rosnący rachunek za wodę, wilgotna plama na ścianie, dźwięk kapiącej wody bez widocznego źródła — to
          częste sygnały ukrytego wycieku. Lokalizujemy źródło problemu, zanim dojdzie do poważniejszych
          uszkodzeń, w miarę możliwości bez naruszania ścian i posadzek.
        </p>
        <div className="mt-6">
          <PhoneCtaInline label="Umów diagnostykę" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Kiedy warto skorzystać z tej usługi</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Nagły wzrost zużycia wody bez wyraźnej przyczyny",
            "Wilgotne lub odbarwione plamy na ścianach czy suficie",
            "Odgłos płynącej wody bez widocznego źródła",
            "Podnosząca się lub pęczniejąca podłoga",
            "Zapach wilgoci lub pleśni bez widocznego zalania",
            "Spadek ciśnienia w instalacji CO",
          ].map((item) => (
            <li key={item} className="flex gap-2 rounded-lg bg-brand-50 p-3 text-sm text-brand-800">
              <span aria-hidden>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Gdzie szukamy wycieków</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <LeakLocationCard
            title="Wycieki pod posadzką"
            text="Instalacje prowadzone w warstwie podłogowej — jeden z najtrudniejszych do zdiagnozowania bez odpowiedniego sprzętu przypadków."
          />
          <LeakLocationCard
            title="Wycieki w ścianach"
            text="Piony i podejścia prowadzone w warstwach ściennych, często ukryte pod glazurą lub tynkiem."
          />
          <LeakLocationCard
            title="Wycieki w instalacji CO"
            text="Nieszczelności grzejników, rozdzielaczy i przewodów centralnego ogrzewania — inna specyfika niż instalacja wodna."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Metody i technologie</h2>
        <p className="mt-2 text-brand-600">
          Metodę dobieramy do sytuacji — rodzaju instalacji, materiału, dostępności miejsc pomiarowych.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <TechCard
            title="Termowizja"
            text="Obrazowanie różnic temperatury, które mogą wskazywać na obecność wilgoci lub przebieg instalacji."
          />
          <TechCard
            title="Korelacja akustyczna"
            text="Nasłuch i analiza dźwięku przepływającej wody w celu ustalenia punktu wycieku."
          />
          <TechCard
            title="Gaz znacznikowy"
            text="Wprowadzenie do instalacji nieszkodliwego gazu, który ujawnia miejsce nieszczelności."
          />
          <TechCard
            title="Pomiary wilgotności"
            text="Punktowe i powierzchniowe pomiary wilgotności ścian i podłóg jako uzupełnienie diagnostyki."
          />
        </div>
        <p className="mt-4 text-sm text-brand-500">
          Dobór konkretnych metod zależy od wyposażenia i sytuacji na miejscu — szczegóły ustalamy podczas
          zgłoszenia.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-brand-900">Obszar działania</h2>
        <p className="mt-2 text-brand-700">
          Lokalizację wycieków wykonujemy na terenie {site.serviceAreaRegion}.{" "}
          <Link href="/obszar-dzialania" className="font-semibold text-brand-800 underline">
            Sprawdź pełny obszar dojazdu
          </Link>
          .
        </p>
      </section>

      <EmergencyBanner />
      <Faq items={faqItems} />
    </>
  );
}

function LeakLocationCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-brand-50 p-5">
      <h3 className="font-semibold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm text-brand-600">{text}</p>
    </div>
  );
}

function TechCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-brand-100 p-5">
      <h3 className="font-semibold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm text-brand-600">{text}</p>
    </div>
  );
}
