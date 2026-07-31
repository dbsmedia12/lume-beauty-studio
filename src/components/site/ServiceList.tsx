import { Link } from "@tanstack/react-router";

import { services, type Service } from "@/data/site";

type ServiceListProps = {
  items?: Service[];
  detailed?: boolean;
};

export function ServiceList({ items = services, detailed = false }: ServiceListProps) {
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
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
