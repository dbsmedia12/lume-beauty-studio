import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { services, type Service } from "@/data/site";

type ServiceListProps = {
  items?: Service[];
  detailed?: boolean;
  /** Editorial numbered rows (homepage) instead of the image grid. */
  variant?: "grid" | "editorial";
};

export function ServiceList({
  items = services,
  detailed = false,
  variant = "grid",
}: ServiceListProps) {
  if (variant === "editorial") {
    return (
      <ul className="mt-12 lg:mt-16">
        {items.map((service, index) => (
          <Reveal as="li" key={service.slug} delay={index * 50}>
            <Link
              to="/hizmetlerimiz"
              hash={service.slug}
              className="group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 border-t border-border py-6 transition-colors hover:bg-secondary/40 sm:gap-x-6 lg:grid-cols-[3rem_1.1fr_auto_auto_auto] lg:items-center lg:gap-8 lg:py-7"
              aria-label={`${service.title} hizmetini incele`}
            >
              <span className="font-serif text-sm text-accent lg:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="display-md text-foreground transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="col-start-2 hidden h-16 w-24 shrink-0 overflow-hidden lg:col-start-auto lg:block">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={480}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              </div>

              <div className="col-start-2 flex items-baseline gap-6 lg:col-start-auto lg:flex-col lg:items-end lg:gap-1">
                <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {service.duration}
                </span>
                <span className="text-sm text-foreground">
                  <span className="text-muted-foreground">Başlangıç </span>
                  {service.priceFrom}
                </span>
              </div>

              <span className="col-start-2 flex items-center gap-1.5 text-xs tracking-[0.14em] text-accent uppercase lg:col-start-auto">
                Detaylar
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, index) => (
        <li key={service.slug} id={service.slug} className="scroll-mt-28">
          <article>
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1200}
                height={900}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-3/4 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
              <h3 className="display-md text-foreground">{service.title}</h3>
              <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {service.duration}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {detailed ? (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-foreground">
                <span className="text-muted-foreground">Başlangıç </span>
                {service.priceFrom}
              </p>
              {detailed ? (
                <Link
                  to="/randevu"
                  search={{ hizmet: service.slug }}
                  className="text-xs tracking-[0.14em] text-accent uppercase underline-offset-4 hover:underline"
                >
                  Randevu Al
                </Link>
              ) : (
                <Link
                  to="/hizmetlerimiz"
                  hash={service.slug}
                  className="text-xs tracking-[0.14em] text-accent uppercase underline-offset-4 hover:underline"
                >
                  Detayları Gör
                </Link>
              )}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
