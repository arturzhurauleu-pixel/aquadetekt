import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("usuwanie-skutkow-zalania")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  // Canonical wskazuje na /osuszanie-po-zalaniu — patrz canonicalTargetSlug
  // w data/services.ts oraz uzasadnienie w AUDYT-KONCOWY.md.
  path: service.canonicalTargetSlug ? `/${service.canonicalTargetSlug}` : `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Usuwanie skutków zalania to działania towarzyszące osuszaniu — od zabezpieczenia miejsca zdarzenia po ograniczenie ryzyka dalszych uszkodzeń, zanim rozpocznie się właściwe osuszanie."
      bulletsTitle="Co obejmuje usuwanie skutków zalania"
      bullets={[
        "Zabezpieczenie mebli i elementów wyposażenia przed dalszym zawilgoceniem",
        "Wstępne osuszenie powierzchniowe (np. odessanie wody)",
        "Ocena elementów zagrożonych (podłogi, listwy, zabudowy)",
        "Przygotowanie miejsca do dalszego osuszania właściwego",
      ]}
      faqItems={[
        {
          question: "Czy usuwanie skutków zalania to to samo co osuszanie?",
          answer:
            "To pierwszy etap reakcji na zalanie — zabezpieczenie i wstępne działania. Właściwe osuszanie z pomiarami wilgotności to kolejny, szerszy etap procesu.",
        },
      ]}
    />
  );
}
