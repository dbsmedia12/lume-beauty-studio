import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/site";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Lütfen ad ve soyadınızı yazın." })
    .max(80, { message: "Ad soyad en fazla 80 karakter olabilir." }),
  phone: z
    .string()
    .trim()
    .regex(/^\+90 5\d{2} \d{3} \d{2} \d{2}$/, {
      message: "Telefon numarasını +90 5XX XXX XX XX biçiminde girin.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Geçerli bir e-posta adresi girin." })
    .max(160, { message: "E-posta en fazla 160 karakter olabilir." }),
  service: z.string().min(1, { message: "Bir hizmet seçin." }),
  date: z.string().min(1, { message: "Tercih ettiğiniz tarihi seçin." }),
  time: z.string().min(1, { message: "Tercih ettiğiniz saati seçin." }),
  note: z.string().trim().max(600, { message: "Notunuz en fazla 600 karakter olabilir." }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

/** Formats raw digits into the Turkish mobile pattern: +90 5XX XXX XX XX */
function formatTurkishPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("90")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (!digits) return "";
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 8), digits.slice(8, 10)];
  return `+90 ${parts.filter(Boolean).join(" ")}`.trimEnd();
}

const initial = { name: "", phone: "", email: "", service: "", date: "", time: "", note: "" };

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const fieldClass =
  "h-12 rounded-sm border-border bg-background text-base placeholder:text-muted-foreground focus-visible:ring-accent md:text-sm";

export function AppointmentForm({ defaultService = "" }: { defaultService?: string }) {
  const [values, setValues] = useState({ ...initial, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof typeof initial, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setValues({ ...initial });
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-accent/40 bg-accent-soft/30 p-8 md:p-12"
        aria-live="polite"
      >
        <p className="eyebrow">Teşekkürler</p>
        <h3 className="display-md mt-4 text-foreground">
          Randevu talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </h3>
        <Button variant="line" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>
          Yeni Talep Oluştur
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <Label htmlFor="name" className="eyebrow">
          Ad Soyad
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`mt-3 ${fieldClass}`}
          placeholder="Örn. Zeynep Kaya"
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-xs text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="phone" className="eyebrow">
          Telefon
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", formatTurkishPhone(e.target.value))}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          className={`mt-3 ${fieldClass}`}
          placeholder="+90 5XX XXX XX XX"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-2 text-xs text-destructive">
            {errors.phone}
          </p>
        ) : (
          <p id="phone-hint" className="mt-2 text-xs text-muted-foreground">
            Biçim: +90 5XX XXX XX XX
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="eyebrow">
          E-posta
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`mt-3 ${fieldClass}`}
          placeholder="ornek@eposta.com"
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-xs text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="service" className="eyebrow">
          Hizmet
        </Label>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`mt-3 w-full border px-3 ${fieldClass}`}
        >
          <option value="">Hizmet seçin</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p id="service-error" className="mt-2 text-xs text-destructive">
            {errors.service}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="date" className="eyebrow">
          Tercih edilen tarih
        </Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={(e) => update("date", e.target.value)}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
          className={`mt-3 ${fieldClass}`}
        />
        {errors.date ? (
          <p id="date-error" className="mt-2 text-xs text-destructive">
            {errors.date}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="time" className="eyebrow">
          Tercih edilen saat
        </Label>
        <select
          id="time"
          name="time"
          value={values.time}
          onChange={(e) => update("time", e.target.value)}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
          className={`mt-3 w-full border px-3 ${fieldClass}`}
        >
          <option value="">Saat seçin</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time ? (
          <p id="time-error" className="mt-2 text-xs text-destructive">
            {errors.time}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="note" className="eyebrow">
          Notunuz
        </Label>
        <Textarea
          id="note"
          name="note"
          rows={5}
          value={values.note}
          onChange={(e) => update("note", e.target.value)}
          aria-invalid={Boolean(errors.note)}
          aria-describedby={errors.note ? "note-error" : undefined}
          className="mt-3 rounded-sm border-border bg-background text-base focus-visible:ring-accent md:text-sm"
          placeholder="Beklentileriniz veya sormak istediğiniz bir konu varsa yazabilirsiniz."
        />
        {errors.note ? (
          <p id="note-error" className="mt-2 text-xs text-destructive">
            {errors.note}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" size="xl" className="w-full sm:w-auto">
          Randevu Talebi Gönder
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          Talebiniz bir ön rezervasyondur; kesin randevu telefonla teyit edilir.
        </p>
      </div>
    </form>
  );
}
