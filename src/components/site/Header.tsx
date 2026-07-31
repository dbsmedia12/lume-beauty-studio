import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand, navigation } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled || open
          ? "border-border bg-background/85 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-6 lg:h-18">
        <Link
          to="/"
          className="font-serif text-xl leading-none tracking-[0.28em] text-foreground"
          aria-label={`${brand.name} ana sayfa`}
          onClick={() => setOpen(false)}
        >
          LUMÉ
          <span className="ml-1 align-middle text-[0.55rem] tracking-[0.3em] text-muted-foreground">
            BEAUTY
          </span>
        </Link>

        <nav
          aria-label="Ana menü"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group relative block py-2 text-[0.78rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="default" className="hidden sm:inline-flex">
            <Link to="/randevu">Randevu Al</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobil menü" className="container-editorial flex min-h-full flex-col py-8">
            <ul className="flex flex-col divide-y divide-border">
              {navigation.map((item, index) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 font-serif text-2xl text-foreground"
                  >
                    <span className="text-[0.6rem] tracking-[0.2em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button asChild variant="accent" size="lg">
                <Link to="/randevu" onClick={() => setOpen(false)}>
                  Randevu Al
                </Link>
              </Button>
              <Button asChild variant="line" size="lg">
                <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp'tan Ulaş
                </a>
              </Button>
              <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {brand.city} · {brand.hours[0]?.time}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
