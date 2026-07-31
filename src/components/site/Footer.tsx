import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { brand, navigation, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <p className="font-serif text-xl tracking-[0.28em]">LUMÉ</p>
          <p className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            Beauty · {brand.city}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Kendinize ayırdığınız zamanı özel bir deneyime dönüştüren, İstanbul merkezli premium
            güzellik merkezi.
          </p>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Instagram
          </a>
        </div>

        <nav aria-label="Alt menü">
          <h2 className="eyebrow">Menü</h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Hizmetler</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/hizmetlerimiz"
                  hash={service.slug}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">İletişim</h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {brand.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={brand.phoneHref} className="transition-colors hover:text-foreground">
                {brand.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${brand.email}`} className="transition-colors hover:text-foreground">
                {brand.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 space-y-1 text-sm text-muted-foreground">
            {brand.hours.map((h) => (
              <p key={h.days}>
                {h.days} · {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LUMÉ BEAUTY. Tüm hakları saklıdır.</p>
          <p>Bu web sitesindeki yorum ve fiyat bilgileri demo içeriktir.</p>
        </div>
      </div>
    </footer>
  );
}
