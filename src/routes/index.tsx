import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";
import { Hero } from "@/components/site/Hero";
import { InstagramStrip } from "@/components/site/InstagramStrip";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ServiceList } from "@/components/site/ServiceList";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyLume } from "@/components/site/WhyLume";
import { Button } from "@/components/ui/button";

const title = "LUMÉ BEAUTY | İstanbul Güzellik Merkezi";
const description =
  "İstanbul'da profesyonel cilt bakımı, lazer epilasyon, manikür, pedikür ve kişisel bakım hizmetleri. LUMÉ BEAUTY ile kendinize özel güzellik deneyimini keşfedin.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="container-editorial py-20 lg:py-28">
        <SectionIntro
          eyebrow="Hizmetlerimiz"
          title="Cildinize, bakımınıza ve zamanınıza özel uygulamalar."
          description="Her uygulama, uzman değerlendirmesiyle başlar ve size özel bir plana dönüşür."
          action={
            <Button asChild variant="line" size="lg">
              <Link to="/hizmetlerimiz">Tüm Hizmetler</Link>
            </Button>
          }
        />
        <ServiceList />
      </section>

      <WhyLume />

      <section className="container-editorial py-20 lg:py-28">
        <SectionIntro
          eyebrow="Galeri"
          title="Merkezimizden ve uygulamalarımızdan kareler."
          action={
            <Button asChild variant="line" size="lg">
              <Link to="/galeri">Galeriyi Gör</Link>
            </Button>
          }
        />
        <GalleryMasonry limit={6} />
      </section>

      <Testimonials />
      <InstagramStrip />
      <CtaBand />
    </>
  );
}
