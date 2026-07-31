import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="container-editorial py-16 lg:py-28">
      <Reveal>
        <p className="eyebrow">Müşteri Yorumları</p>
        <h2 className="display-lg mt-4 max-w-2xl text-balance">
          Bakımını bize bırakanların deneyimi.
        </h2>
      </Reveal>

      <ul className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-3 lg:mt-14">
        {testimonials.map((item, index) => (
          <Reveal as="li" key={item.name} delay={index * 70}>
            <figure className="flex h-full flex-col border-t border-border pt-6 lg:pt-8">
              <span className="rule-accent" aria-hidden="true" />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="text-foreground">{item.name}</span>
                <span className="mt-1 block text-xs tracking-[0.14em] uppercase">
                  {item.service}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 text-xs text-muted-foreground">
        Yorumlar, sitenin tanıtım amacıyla hazırlanmış demo içeriğidir.
      </p>
    </section>
  );
}
