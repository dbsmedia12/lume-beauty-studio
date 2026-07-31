import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/site";

const title = "İletişim | LUMÉ BEAUTY İstanbul Güzellik Merkezi";
const description =
  "LUMÉ BEAUTY iletişim bilgileri: İstanbul adresi, telefon, e-posta, WhatsApp ve çalışma saatleri. Randevu ve bilgi için bize ulaşın.";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/iletisim" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/iletisim" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın."
        description="Sorularınız, randevu talebiniz veya uygulama önerileri için buradayız."
      />

      <section className="container-editorial grid gap-14 py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-24">
        <div>
          <h2 className="display-md">İletişim bilgileri</h2>
          <dl className="mt-8 space-y-8">
            <div className="flex gap-4 border-t border-border pt-6">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="eyebrow">Adres</dt>
                <dd className="mt-2 text-base">{brand.address}</dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-border pt-6">
              <Phone className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="eyebrow">Telefon</dt>
                <dd className="mt-2 text-base">
                  <a href={brand.phoneHref} className="underline-offset-4 hover:underline">
                    {brand.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-border pt-6">
              <Mail className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="eyebrow">E-posta</dt>
                <dd className="mt-2 text-base">
                  <a
                    href={`mailto:${brand.email}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {brand.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 border-t border-border pt-6">
              <Clock className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="eyebrow">Çalışma saatleri</dt>
                <dd className="mt-2 space-y-1 text-base">
                  {brand.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}
                      <span className="block text-sm text-muted-foreground">{h.time}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ink" size="lg">
              <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                WhatsApp'tan Ulaş
              </a>
            </Button>
            <Button asChild variant="line" size="lg">
              <Link to="/randevu">Randevu Al</Link>
            </Button>
          </div>

          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Instagram'da bizi takip edin
          </a>
        </div>

        <div>
          <h2 className="display-md">Konum</h2>
          <div className="mt-8 flex aspect-4/3 w-full flex-col items-center justify-center border border-border bg-secondary/60 p-8 text-center">
            <MapPin className="size-6 text-accent" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl">Harita yakında eklenecek</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Google Haritalar üzerinden yol tarifi bu alanda yayına alınacaktır. Bu süreçte adres
              ve ulaşım bilgisi için bizi arayabilirsiniz.
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Merkezimiz toplu taşımaya yakın bir konumdadır; randevu öncesinde otopark ve ulaşım
            hakkında bilgi almak için WhatsApp'tan yazabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
