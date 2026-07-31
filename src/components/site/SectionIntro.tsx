import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionIntroProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={align === "center" ? "" : "max-w-2xl"}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-lg mt-4 text-foreground text-balance">{title}</h2>
        {description ? <p className="body-lg mt-5 max-w-xl">{description}</p> : null}
      </div>
      {action ? <div className={align === "center" ? "mt-8" : "shrink-0"}>{action}</div> : null}
    </div>
  );
}
