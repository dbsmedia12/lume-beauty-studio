import { Link } from "@tanstack/react-router";
import { CalendarDays, MessageCircle } from "lucide-react";

import { brand } from "@/data/site";

/** Sticky bottom action bar on small screens + discreet WhatsApp access on desktop. */
export function MobileActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <Link
          to="/randevu"
          className="flex min-h-14 items-center justify-center gap-2 bg-accent text-xs tracking-[0.16em] text-accent-foreground uppercase"
        >
          <CalendarDays className="size-4" aria-hidden="true" />
          Randevu Al
        </Link>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 text-xs tracking-[0.16em] text-foreground uppercase"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan ulaşın"
        className="fixed right-6 bottom-6 z-40 hidden size-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-accent hover:text-accent md:flex"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
    </>
  );
}
