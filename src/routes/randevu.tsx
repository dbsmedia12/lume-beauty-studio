import { createFileRoute } from "@tanstack/react-router";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { brand, services } from "@/data/site";

const title = "Randevu Al | LUMÉ BEAUTY İstanbul";
const description =
  "LUMÉ BEAUTY randevu talebi formu: hizmetinizi, tercih ettiğiniz tarih ve saati seçin; İstanbul'daki uzman ekibimiz sizinle iletişime geçsin.";

export const Route = createFileRoute("/randevu")({
  validateSearch: (search: Record<string, unknown>) => ({
    hizmet: typeof search["hizmet"] === "string" ? (search["hizmet"] as string) : undefined,
  }),

  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/randevu" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/randevu" }],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  const { hizmet } = Route.useSearch();
  const defaultService = services.some((s) => s.slug === hizmet) ? (hizmet as string) : "";

  return (
    <>
      <PageHero
        eyebrow="Randevu"
        title="Randevu talebinizi bırakın."
        description="Formu doldurduktan sonra ekibimiz sizinle iletişime geçerek uygun saati birlikte netleştirir."
      />

      <section className="container-editorial grid gap-14 py-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-24">
        <div>
          <h2 className="sr-only">Randevu talep formu</h2>
          <AppointmentForm defaultService={defaultService} />
        </div>

        <aside className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <h2 className="display-md">Nasıl ilerliyoruz?</h2>
          <ol className="mt-8 space-y-8">
            {[
              {
                step: "01",
                title: "Talebinizi alıyoruz",
                text: "Form bize ulaştığında hizmet ve zaman tercihinizi inceliyoruz.",
              },
              {
                step: "02",
                title: "Sizi arıyoruz",
                text: "Çalışma saatleri içinde telefonla iletişime geçip uygunluğu teyit ediyoruz.",
              },
              {
                step: "03",
                title: "Randevunuz hazır",
                text: "Uygulama öncesi hazırlık önerilerini paylaşıyoruz.",
              },
            ].map((item) => (
              <li key={item.step} className="border-t border-border pt-5">
                <span className="font-serif text-sm text-accent">{item.step}</span>
                <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 bg-secondary/60 p-6">
            <p className="eyebrow">Daha hızlı iletişim</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Acil bir talebiniz varsa WhatsApp üzerinden yazabilir veya bizi arayabilirsiniz.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button asChild variant="ink" size="lg">
                <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Ulaş
                </a>
              </Button>
              <Button asChild variant="line" size="lg">
                <a href={brand.phoneHref}>{brand.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
