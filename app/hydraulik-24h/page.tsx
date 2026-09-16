import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("hydraulik-24h")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Hydraulik dostępny również poza standardowymi godzinami pracy — wieczorami, w weekendy i w nocy. To nie tylko poważne awarie: równie często umawiamy w tych godzinach drobniejsze naprawy, które nie mogą czekać do rana, ale nie wymagają trybu pogotowia."
      bulletsTitle="Kiedy warto skorzystać z hydraulika poza godzinami pracy"
      bullets={[
        "Usterka pojawiła się wieczorem lub w weekend, a nie chcesz czekać do poniedziałku",
        "Drobna naprawa (kapiący kran, nieszczelny zawór), którą łatwiej umówić po pracy",
        "Planowa wymiana lub montaż w terminie dopasowanym do Twojego grafiku",
        "Sytuacja pilna, ale nie na tyle poważna, by wymagała pogotowia hydraulicznego",
      ]}
      faqItems={[
        {
          question: "Czym różni się hydraulik 24h od pogotowia hydraulicznego?",
          answer:
            "Pogotowie hydrauliczne to tryb dla poważnych, niekontrolowanych awarii (pęknięta rura, zalanie). Hydraulik 24h to dostępność w szerszych godzinach — również do mniejszych usterek i planowych napraw, które akurat wypadają wieczorem lub w weekend.",
        },
        {
          question: "Czy obsługujecie zarówno mieszkania, jak i domy jednorodzinne?",
          answer: "Tak, zakres obejmuje mieszkania, domy jednorodzinne oraz budynki wielorodzinne.",
        },
      ]}
    />
  );
}
