import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand, navigation } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="container-editorial flex h-18 items-center justify-between gap-6 py-4">
        <Link
          to="/"
          className="font-serif text-xl leading-none tracking-[0.28em] text-foreground"
          aria-label={`${brand.name} ana sayfa`}
        >
          LUMÉ
          <span className="ml-1 align-middle text-[0.55rem] tracking-[0.3em] text-muted-foreground">
            BEAUTY
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative py-2 text-[0.8rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
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
        <div className="fixed inset-x-0 top-18 bottom-0 z-50 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobil menü" className="container-editorial py-8">
            <ul className="flex flex-col divide-y divide-border">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-5 font-serif text-2xl text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
