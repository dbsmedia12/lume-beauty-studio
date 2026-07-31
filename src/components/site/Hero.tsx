import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { brand, images } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-editorial grid items-center gap-10 py-14 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:py-24">
        <div className="fade-up max-w-xl">
          <p className="eyebrow">İstanbul · Güzellik Merkezi</p>
          <span className="rule-accent mt-6" aria-hidden="true" />
          <h1 className="display-xl mt-6 text-foreground text-balance">
            Doğal güzelliğiniz, LUMÉ dokunuşuyla.
          </h1>
          <p className="body-lg mt-6 max-w-md">
            Kendinize ayırdığınız zamanı özel bir deneyime dönüştürüyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl">
              <Link to="/randevu">Randevu Al</Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp'tan Ulaş
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="eyebrow">Deneyim</dt>
              <dd className="mt-2 font-serif text-2xl">12 yıl</dd>
            </div>
            <div>
              <dt className="eyebrow">Uygulama</dt>
              <dd className="mt-2 font-serif text-2xl">20+</dd>
            </div>
            <div>
              <dt className="eyebrow">Uzman</dt>
              <dd className="mt-2 font-serif text-2xl">8 kişi</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <img
            src={images.hero}
            alt="LUMÉ BEAUTY'de yüz bakımı uygulaması sırasında dinlenen kadın müşteri"
            width={1600}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="aspect-4/5 w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
          />
          <figure className="mt-4 hidden max-w-xs border-l border-accent pl-5 lg:block">
            <blockquote className="font-serif text-lg leading-snug text-foreground">
              “Bakım, aceleye getirilmeyecek kadar kişisel bir şeydir.”
            </blockquote>
            <figcaption className="eyebrow mt-3">LUMÉ Bakım Yaklaşımı</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
