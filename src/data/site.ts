import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import skincareImg from "@/assets/skincare.jpg";
import manicureImg from "@/assets/manicure.jpg";
import lashesImg from "@/assets/lashes.jpg";
import laserImg from "@/assets/laser.jpg";
import productsImg from "@/assets/products.jpg";
import teamImg from "@/assets/team.jpg";

export const images = {
  hero: heroImg,
  interior: interiorImg,
  skincare: skincareImg,
  manicure: manicureImg,
  lashes: lashesImg,
  laser: laserImg,
  products: productsImg,
  team: teamImg,
};

export const brand = {
  name: "LUMÉ BEAUTY",
  shortName: "LUMÉ",
  city: "İstanbul",
  phoneDisplay: "+90 5XX XXX XX XX",
  phoneHref: "tel:+905000000000",
  email: "info@lumebeauty.com",
  address: "İstanbul, Türkiye",
  instagram: "https://instagram.com",
  whatsapp: "https://wa.me/905000000000?text=Merhaba%2C%20LUM%C3%89%20BEAUTY%20i%C3%A7in%20randevu%20almak%20istiyorum.",
  hours: [
    { days: "Pazartesi – Cumartesi", time: "09:00 – 20:00" },
    { days: "Pazar", time: "10:00 – 18:00" },
  ],
};

export const trustPoints = [
  "Profesyonel bakım deneyimi",
  "Kişiye özel uygulamalar",
  "Modern güzellik çözümleri",
];

export const navigation = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetlerimiz", to: "/hizmetlerimiz" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Galeri", to: "/galeri" },
  { label: "Randevu", to: "/randevu" },
  { label: "İletişim", to: "/iletisim" },
] as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  priceFrom: string;
  image: string;
  imageAlt: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "cilt-bakimi",
    title: "Cilt Bakımı",
    description: "Cildinizin ihtiyacına özel profesyonel bakım uygulamaları.",
    duration: "60 dk",
    priceFrom: "1.200 ₺",
    image: skincareImg,
    imageAlt: "Cilt bakımı uygulaması sırasında yüze serum uygulanan kadın",
    details: [
      "Cilt analizi ile başlayan kişiye özel protokol",
      "Derin temizlik, peeling ve nemlendirme aşamaları",
      "Uygulama sonrası evde bakım önerileri",
    ],
  },
  {
    slug: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    description: "Konforlu ve profesyonel lazer epilasyon deneyimi.",
    duration: "20–45 dk",
    priceFrom: "600 ₺",
    image: laserImg,
    imageAlt: "Modern lazer epilasyon cihazının bulunduğu bakım odası",
    details: [
      "Tüm cilt tiplerine uygun modern teknoloji",
      "Seans öncesi uzman değerlendirmesi",
      "Bölgesel ve tüm vücut seans seçenekleri",
    ],
  },
  {
    slug: "bolgesel-incelme",
    title: "Bölgesel İncelme",
    description: "Vücut şekillendirme ve bölgesel bakım uygulamaları.",
    duration: "45–75 dk",
    priceFrom: "900 ₺",
    image: productsImg,
    imageAlt: "Bölgesel bakım uygulamalarında kullanılan bakım ürünleri",
    details: [
      "Ölçüm ve hedef belirleme ile planlanan program",
      "Cihaz destekli bölgesel uygulamalar",
      "Seans takibi ve yaşam tarzı önerileri",
    ],
  },
  {
    slug: "manikur-pedikur",
    title: "Manikür & Pedikür",
    description: "Bakımlı ve zarif eller ve ayaklar için profesyonel uygulamalar.",
    duration: "45–90 dk",
    priceFrom: "450 ₺",
    image: manicureImg,
    imageAlt: "Nude tonlarında manikür uygulanmış bakımlı kadın elleri",
    details: [
      "Tek kullanımlık ve steril ekipman",
      "Klasik, kalıcı oje ve protez tırnak seçenekleri",
      "El ve ayak bakım ritüelleri",
    ],
  },
  {
    slug: "kas-kirpik",
    title: "Kaş & Kirpik",
    description: "Bakışlarınızı öne çıkaran profesyonel kaş ve kirpik uygulamaları.",
    duration: "30–60 dk",
    priceFrom: "500 ₺",
    image: lashesImg,
    imageAlt: "Doğal kaş ve kirpik uygulaması sonrası yakın plan göz detayı",
    details: [
      "Yüz hatlarına uygun kaş tasarımı",
      "Kirpik lifting ve laminasyon uygulamaları",
      "Doğal ve kalıcı sonuç odaklı çalışma",
    ],
  },
  {
    slug: "ozel-bakimlar",
    title: "Özel Bakımlar",
    description: "Size özel ihtiyaçlara göre planlanan bakım uygulamaları.",
    duration: "Kişiye özel",
    priceFrom: "1.500 ₺",
    image: interiorImg,
    imageAlt: "LUMÉ BEAUTY güzellik merkezinin sakin ve premium karşılama alanı",
    details: [
      "Özel gün ve gelin bakım programları",
      "Birden fazla uygulamanın birleştirildiği ritüeller",
      "Uzman ekiple birlikte planlanan takvim",
    ],
  },
];

export const advantages = [
  {
    title: "Uzman ekip",
    text: "Alanında deneyimli, sürekli eğitim alan güzellik uzmanlarıyla çalışıyoruz.",
  },
  {
    title: "Kişiye özel bakım",
    text: "Her cilt ve her beklenti farklıdır; uygulamaları size göre planlıyoruz.",
  },
  {
    title: "Hijyen ve güven",
    text: "Tek kullanımlık ekipman ve şeffaf sterilizasyon süreçleri uyguluyoruz.",
  },
  {
    title: "Kaliteli ürünler",
    text: "Dermatolojik olarak test edilmiş, seçkin profesyonel ürünler kullanıyoruz.",
  },
  {
    title: "Modern uygulamalar",
    text: "Güncel teknolojileri ve kanıtlanmış teknikleri bir arada sunuyoruz.",
  },
  {
    title: "Konforlu deneyim",
    text: "Sakin bir atmosferde, acele etmeden ilerleyen bir bakım deneyimi.",
  },
];

export const testimonials = [
  {
    quote:
      "İlk randevumdan itibaren kendimi çok rahat hissettim. Hem hizmet kalitesi hem de çalışanların ilgisi gerçekten çok iyi.",
    name: "Zeynep K.",
    service: "Cilt Bakımı",
  },
  {
    quote:
      "Lazer epilasyon konusunda çok tereddütlüydüm. Her adımı tek tek anlattılar, süreç beklediğimden çok daha konforlu geçti.",
    name: "Elif D.",
    service: "Lazer Epilasyon",
  },
  {
    quote:
      "Mekânın huzurlu bir yanı var; randevu sonrası sadece bakımlı değil, dinlenmiş de hissediyorum. Artık düzenli gidiyorum.",
    name: "Merve A.",
    service: "Özel Bakımlar",
  },
];

export const galleryItems = [
  { src: interiorImg, alt: "Güzellik merkezinin travertenli karşılama alanı", label: "Merkezimiz" },
  { src: skincareImg, alt: "Profesyonel cilt bakımı uygulaması", label: "Cilt bakımı" },
  { src: manicureImg, alt: "Nude tonlarında manikür detayı", label: "Manikür" },
  { src: productsImg, alt: "Bakım ritüellerinde kullanılan profesyonel ürünler", label: "Ürünler" },
  { src: lashesImg, alt: "Kaş ve kirpik uygulaması sonrası doğal görünüm", label: "Kaş & kirpik" },
  { src: laserImg, alt: "Lazer epilasyon uygulama odası", label: "Uygulama odası" },
  { src: heroImg, alt: "Yüz bakımı sırasında dinlenen müşteri", label: "Bakım deneyimi" },
  { src: teamImg, alt: "LUMÉ BEAUTY uzman ekibi", label: "Ekibimiz" },
];
