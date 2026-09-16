import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { lokalizacjaBezKuciaService as service } from "@/data/service-lokalizacja-bez-kucia";

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Zanim zdecydujemy się na jakiekolwiek naruszenie ściany czy posadzki, sprawdzamy, czy da się zlokalizować wyciek metodami nieinwazyjnymi. To pierwszy krok w każdej naszej diagnostyce."
      bulletsTitle="Kiedy metoda nieinwazyjna sprawdza się najlepiej"
      bullets={[
        "Instalacje ukryte pod posadzką pływającą",
        "Piony i podejścia w warstwach ściennych",
        "Instalacje CO z dostępem do rozdzielaczy",
        "Sytuacje, w których wykończenie wnętrza jest kosztowne lub trudne do odtworzenia",
      ]}
      faqItems={[
        {
          question: "Czy lokalizacja bez kucia jest droższa niż tradycyjna metoda?",
          answer:
            "Koszt diagnostyki nieinwazyjnej bywa wyższy niż samo rozkucie, ale często niższy niż łączny koszt rozkucia, naprawy i odtworzenia wykończenia.",
        },
        {
          question: "Czy ta metoda działa przy każdym typie instalacji?",
          answer:
            "Nie zawsze — skuteczność zależy od materiału rur, rodzaju wykończenia i dostępności miejsc pomiarowych. Oceniamy to indywidualnie.",
        },
      ]}
    />
  );
}
