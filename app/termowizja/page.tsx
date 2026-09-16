import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("termowizja")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Badanie termowizyjne pokazuje różnice temperatury na powierzchni ścian i podłóg, co może wskazywać na obecność wilgoci lub przebieg instalacji ukrytej w warstwach budowlanych."
      bulletsTitle="Zastosowanie termowizji"
      bullets={[
        "Wsparcie w lokalizacji wycieków wody",
        "Wykrywanie miejsc podwyższonej wilgotności",
        "Ocena przebiegu instalacji ogrzewania podłogowego",
        "Diagnostyka mostków termicznych (element diagnostyki budynku)",
      ]}
      faqItems={[
        {
          question: "Czy termowizja sama w sobie potwierdza wyciek?",
          answer:
            "Nie zawsze — obraz termowizyjny wskazuje miejsca podejrzane, które zwykle potwierdzamy dodatkowo pomiarem wilgotności lub inną metodą.",
        },
        {
          question: "Czy badanie termowizyjne wymaga specjalnych warunków?",
          answer:
            "Najlepsze rezultaty daje przy odpowiedniej różnicy temperatur między wodą a otoczeniem — warunki oceniamy indywidualnie przed badaniem.",
        },
      ]}
    />
  );
}
