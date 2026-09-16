import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("odgrzybianie")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Długotrwałe zawilgocenie sprzyja rozwojowi pleśni i grzybów. Odgrzybianie ma sens dopiero po wyeliminowaniu źródła wilgoci — inaczej problem szybko wróci."
      bulletsTitle="Kiedy warto rozważyć odgrzybianie"
      bullets={[
        "Widoczne przebarwienia i naloty pleśni na ścianach",
        "Charakterystyczny zapach stęchlizny",
        "Nawracające zawilgocenie w tym samym miejscu",
        "Po zakończonym procesie osuszania, jako element domykający sprawę",
      ]}
      faqItems={[
        {
          question: "Czy odgrzybianie ma sens bez wcześniejszego osuszenia?",
          answer:
            "Nie — jeśli źródło wilgoci nie zostało usunięte, pleśń pojawi się ponownie. Odgrzybianie traktujemy jako element następujący po osuszeniu, nie zamiast niego.",
        },
      ]}
    />
  );
}
