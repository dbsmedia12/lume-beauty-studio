import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { WhyLume } from "@/components/site/WhyLume";
import { images } from "@/data/site";

const title = "Hakkımızda | LUMÉ BEAUTY İstanbul";
const description =
  "LUMÉ BEAUTY, İstanbul'da kişiye özel bakım anlayışını, hijyen standartlarını ve uzman ekibini bir araya getiren premium bir güzellik merkezidir.";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hakkimizda" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/hakkimizda" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Dinleyerek başlıyoruz",
    text: "İlk randevunuzda beklentilerinizi, cilt geçmişinizi ve günlük rutininizi konuşuyoruz. Uygulama planı bu sohbetin ardından şekilleniyor.",
  },
  {
    title: "Abartısız sonuçlar",
    text: "Amacımız sizi değiştirmek değil; doğal görünümünüzü daha bakımlı, daha dinlenmiş ve daha güvenli bir şekilde ortaya çıkarmak.",
  },
  {
    title: "Şeffaf süreç",
    text: "Kullandığımız ürünleri, seans sayısını ve fiyatlandırmayı baştan paylaşıyoruz. Sürpriz yok, net bir yol haritası var.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="İstanbul'un kalbinde, sakin bir bakım alanı."
        description="LUMÉ BEAUTY, güzellik bakımını hızlı bir işlem değil, kendinize ayırdığınız özel bir zaman olarak gören bir merkez."
      />

      <section className="container-editorial grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <img
          src={images.interior}
          alt="LUMÉ BEAUTY güzellik merkezinin traverten detaylı karşılama alanı"
          width={1408}
          height={1008}
          loading="lazy"
          decoding="async"
          className="aspect-4/3 w-full object-cover"
        />
        <div className="max-w-xl">
          <h2 className="display-md">Bir bakım anlayışı, altı uygulama alanı</h2>
          <div className="body-lg mt-6 space-y-5">
            <p>
              2012'den bu yana İstanbul'da, cilt bakımından lazer epilasyona, el ve ayak bakımından
              kaş ve kirpik uygulamalarına uzanan geniş bir alanda hizmet veriyoruz. Ekibimizin
              tamamı düzenli olarak eğitim alıyor ve uygulamalarını güncel protokollerle
              sürdürüyor.
            </p>
            <p>
              Mekânımızı, kliniğin güvenilirliğiyle bir evin sıcaklığını birleştirecek şekilde
              tasarladık: sade yüzeyler, doğal ışık ve sizi acele ettirmeyen bir randevu akışı.
            </p>
          </div>

          <dl className="mt-10 space-y-8">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <dt className="font-serif text-2xl">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-editorial pb-16 lg:pb-24">
        <div className="grid gap-12 border-t border-border pt-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Ekibimiz</p>
            <h2 className="display-md mt-4">Deneyimli uzmanlar, tek bir standart</h2>
            <p className="body-lg mt-5">
              Cilt bakım uzmanlarımız, lazer uygulama sertifikasına sahip teknisyenlerimiz ve tırnak
              bakım ekibimiz aynı hijyen ve müşteri deneyimi standardını paylaşıyor.
            </p>
          </div>
          <img
            src={images.team}
            alt="LUMÉ BEAUTY'nin krem rengi üniformalı uzman ekibi"
            width={1008}
            height={1312}
            loading="lazy"
            decoding="async"
            className="aspect-3/2 w-full object-cover"
          />
        </div>
      </section>

      <WhyLume />
      <CtaBand />
    </>
  );
}
