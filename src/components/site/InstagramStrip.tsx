import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand, galleryItems } from "@/data/site";

export function InstagramStrip() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="border-t border-border bg-secondary/40 py-16 lg:py-28">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">@lumebeauty</p>
            <h2 className="display-lg mt-4">LUMÉ'den kareler</h2>
            <p className="body-lg mt-5">
              Yeni uygulamalarımızı ve güzellik ipuçlarımızı Instagram'da keşfedin.
            </p>
          </div>
          <Button asChild variant="line" size="lg" className="shrink-0">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram aria-hidden="true" />
              Instagram'da Bizi Takip Et
            </a>
          </Button>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <li key={item.alt}>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden"
                aria-label={`Instagram'da görüntüle: ${item.label}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-opacity duration-500 group-hover:opacity-85"
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">
          Instagram akışı demo içerik olarak gösterilmektedir.
        </p>
      </div>
    </section>
  );
}
