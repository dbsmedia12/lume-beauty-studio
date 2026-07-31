import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { ServiceList } from "@/components/site/ServiceList";

const title = "Hizmetlerimiz | LUMÉ BEAUTY İstanbul";
const description =
  "Cilt bakımı, lazer epilasyon, bölgesel incelme, manikür & pedikür, kaş & kirpik ve özel bakım uygulamaları: süre ve başlangıç fiyatlarıyla LUMÉ BEAUTY hizmetleri.";

export const Route = createFileRoute("/hizmetlerimiz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hizmetlerimiz" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/hizmetlerimiz" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Her uygulama, sizi dinlemekle başlar."
        description="Uygulama süreleri ve başlangıç fiyatları bilgilendirme amaçlıdır; kesin plan ve fiyat, uzman değerlendirmesinin ardından belirlenir."
      />

      <section className="container-editorial py-16 lg:py-24">
        <ServiceList detailed />
      </section>

      <CtaBand />
    </>
  );
}
