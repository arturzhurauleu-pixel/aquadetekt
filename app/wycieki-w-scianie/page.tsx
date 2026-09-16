import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("wycieki-w-scianie")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Piony i podejścia prowadzone w ścianach są często ukryte pod glazurą lub tynkiem — nieszczelność potrafi ujawnić się dopiero po jakimś czasie, w postaci wilgotnej plamy."
      bulletsTitle="Objawy wycieku w ścianie"
      bullets={[
        "Wilgotna lub odbarwiona plama na ścianie",
        "Odspajający się tynk lub pęczniejąca farba",
        "Zapach wilgoci bez widocznego źródła",
        "Wilgoć pojawiająca się cyklicznie w tym samym miejscu",
      ]}
      faqItems={[
        {
          question: "Czy wyciek w ścianie zawsze widać na tej samej ścianie, w której jest awaria?",
          answer:
            "Nie zawsze — woda może spływać w warstwach ściennych i ujawniać się w innym miejscu niż faktyczne źródło, dlatego diagnostyka jest tak istotna.",
        },
      ]}
    />
  );
}
