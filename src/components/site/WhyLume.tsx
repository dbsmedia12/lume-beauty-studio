import { Reveal } from "@/components/site/Reveal";
import { advantages, images } from "@/data/site";

export function WhyLume() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-editorial grid gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Neden LUMÉ?</p>
          <h2 className="display-lg mt-4 text-balance">
            Güzellik bakımını bir randevudan fazlası haline getiriyoruz.
          </h2>
          <p className="body-lg mt-5">
            LUMÉ BEAUTY'de her uygulama, ihtiyaçlarınızın dinlenmesiyle başlar. Uzman ekibimiz,
            hijyen standartlarımız ve seçkin ürünlerimizle kalıcı sonuçlar ve konforlu bir deneyim
            sunuyoruz.
          </p>
          <div className="mt-8 overflow-hidden lg:mt-10">
            <img
              src={images.products}
              alt="LUMÉ BEAUTY bakım uygulamalarında kullanılan profesyonel cilt bakım ürünleri"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
            />
          </div>
        </Reveal>

        <dl className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:gap-y-10">
          {advantages.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="border-t border-border pt-5 lg:pt-6">
                <span className="font-serif text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <dt className="mt-2 font-serif text-2xl text-foreground">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
