import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";
import { InstagramStrip } from "@/components/site/InstagramStrip";
import { PageHero } from "@/components/site/PageHero";

const title = "Galeri | LUMÉ BEAUTY İstanbul Güzellik Merkezi";
const description =
  "LUMÉ BEAUTY'nin İstanbul'daki güzellik merkezinden, uygulama odalarından ve bakım uygulamalarımızdan kareler.";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/galeri" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/galeri" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Merkezimizden ve uygulamalarımızdan kareler."
        description="Mekânımızın atmosferini, uygulama alanlarımızı ve bakım detaylarımızı yakından görün."
      />

      <section className="container-editorial py-16 lg:py-24">
        <GalleryMasonry />
      </section>

      <InstagramStrip />
      <CtaBand />
    </>
  );
}
