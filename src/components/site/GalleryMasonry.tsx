import { Reveal } from "@/components/site/Reveal";
import { galleryItems } from "@/data/site";

type GalleryProps = { limit?: number };

/** Varied spans give the grid an editorial rhythm instead of a uniform mosaic. */
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
];

export function GalleryMasonry({ limit }: GalleryProps) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="mt-12 grid auto-rows-[13rem] grid-cols-1 gap-3 sm:grid-cols-4 sm:auto-rows-[11rem] lg:auto-rows-[13rem] lg:gap-4">
      {items.map((item, index) => (
        <Reveal
          key={item.alt}
          delay={(index % 4) * 60}
          className={`group relative overflow-hidden ${spans[index % spans.length]}`}
        >
          <figure className="size-full">
            <img
              src={item.src}
              alt={`${item.alt} — İstanbul LUMÉ BEAUTY güzellik merkezi`}
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/70 to-transparent p-4 text-xs tracking-[0.16em] text-background uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.label}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
