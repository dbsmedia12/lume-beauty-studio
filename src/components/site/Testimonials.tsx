import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="container-editorial py-20 lg:py-28">
      <p className="eyebrow">Müşteri Yorumları</p>
      <h2 className="display-lg mt-4 max-w-2xl text-balance">
        Bakımını bize bırakanların deneyimi.
      </h2>

      <ul className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
        {testimonials.map((item) => (
          <li key={item.name}>
            <figure className="flex h-full flex-col border-t border-border pt-8">
              <span className="font-serif text-4xl leading-none text-accent" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-4 font-serif text-xl leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="text-foreground">— {item.name}</span>
                <span className="block text-xs tracking-[0.14em] uppercase">{item.service}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-xs text-muted-foreground">
        Yorumlar, sitenin tanıtım amacıyla hazırlanmış demo içeriğidir.
      </p>
    </section>
  );
}
