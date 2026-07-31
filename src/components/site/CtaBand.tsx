import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { brand } from "@/data/site";

export function CtaBand() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-24">
      <div className="container-editorial flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] tracking-[0.24em] text-primary-foreground/60 uppercase">
            Randevu
          </p>
          <h2 className="display-lg mt-4 text-primary-foreground text-balance">
            Size uygun bir zaman ayıralım.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-primary-foreground/70">
            Randevu talebinizi bırakın; uzman ekibimiz sizinle iletişime geçerek ihtiyacınıza en
            uygun uygulamayı planlasın.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="accent" size="xl">
            <Link to="/randevu">Randevu Al</Link>
          </Button>
          <Button asChild variant="lineLight" size="xl">
            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp'tan Ulaş
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
