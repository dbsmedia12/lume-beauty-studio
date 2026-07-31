import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { brand, images, trustPoints } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-editorial grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow">İstanbul · Güzellik Merkezi</p>
            <span className="rule-accent mt-5" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl mt-5 text-foreground text-balance">
              Doğal güzelliğiniz,{" "}
              <span className="italic text-accent">LUMÉ</span> dokunuşuyla.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="body-lg mt-5 max-w-md sm:mt-6">
              Kendinize ayırdığınız zamanı özel bir deneyime dönüştürüyoruz.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
              <Button asChild variant="accent" size="xl">
                <Link to="/randevu">Randevu Al</Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Ulaş
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-3 sm:gap-6 lg:mt-12">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-[0.78rem] leading-relaxed tracking-[0.06em] text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden">
            <img
              src={images.hero}
              alt="İstanbul LUMÉ BEAUTY güzellik merkezinde yüz bakımı uygulaması sırasında dinlenen kadın müşteri"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02] sm:aspect-3/2 lg:aspect-4/5"
            />
          </div>
          <figure className="mt-5 hidden max-w-xs border-l border-accent pl-5 lg:block">
            <blockquote className="font-serif text-lg leading-snug text-foreground">
              “Bakım, aceleye getirilmeyecek kadar kişisel bir şeydir.”
            </blockquote>
            <figcaption className="eyebrow mt-3">LUMÉ Bakım Yaklaşımı</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
