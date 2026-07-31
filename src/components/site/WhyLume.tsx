import { advantages, images } from "@/data/site";

export function WhyLume() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-editorial grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow">Neden LUMÉ?</p>
          <h2 className="display-lg mt-4 text-balance">
            Güzellik bakımını bir randevudan fazlası haline getiriyoruz.
          </h2>
          <p className="body-lg mt-6">
            LUMÉ BEAUTY'de her uygulama, ihtiyaçlarınızın dinlenmesiyle başlar. Uzman ekibimiz,
            hijyen standartlarımız ve seçkin ürünlerimizle kalıcı sonuçlar ve konforlu bir deneyim
            sunuyoruz.
          </p>
          <img
            src={images.products}
            alt="Bakım uygulamalarında kullanılan profesyonel cilt bakım ürünleri"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
            className="mt-10 aspect-4/3 w-full object-cover"
          />
        </div>

        <dl className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-12">
          {advantages.map((item, index) => (
            <div key={item.title} className="border-t border-border pt-6">
              <span className="font-serif text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="mt-3 font-serif text-2xl text-foreground">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
