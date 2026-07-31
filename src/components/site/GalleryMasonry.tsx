import { galleryItems } from "@/data/site";

type GalleryProps = { limit?: number };

export function GalleryMasonry({ limit }: GalleryProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-4">
      {items.map((item, index) => (
        <figure key={item.alt} className="group relative break-inside-avoid overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            width={1200}
            height={1200}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/60 to-transparent p-4 text-xs tracking-[0.16em] text-background uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
