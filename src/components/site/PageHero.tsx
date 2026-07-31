type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border">
      <div className="container-editorial py-14 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <span className="rule-accent mt-5" aria-hidden="true" />
        <h1 className="display-lg mt-5 max-w-3xl text-balance">{title}</h1>
        <p className="body-lg mt-5 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
