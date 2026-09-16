import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GenericServicePage from "@/components/GenericServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("osuszanie-podposadzkowe")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function Page() {
  return (
    <GenericServicePage
      service={service}
      intro="Osuszanie warstw pod posadzką pływającą jest jedną z bardziej wymagających form osuszania — wilgoć bywa uwięziona pod wykończeniem podłogowym, co utrudnia naturalne odparowanie."
      bulletsTitle="Kiedy potrzebne jest osuszanie podposadzkowe"
      bullets={[
        "Zalanie, które przeniknęło pod panele lub parkiet",
        "Wilgoć uwięziona pod wylewką po awarii instalacji",
        "Podejrzenie zawilgocenia potwierdzone pomiarem wilgotności",
      ]}
      faqItems={[
        {
          question: "Czy osuszanie podposadzkowe wymaga demontażu podłogi?",
          answer:
            "Zależy od sytuacji — czasem stosuje się nawiewniki wtłaczające powietrze pod posadzkę bez pełnego demontażu, a decyzję podejmujemy po ocenie na miejscu.",
        },
      ]}
    />
  );
}
