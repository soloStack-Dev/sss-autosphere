import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-[0.18em]",
          dark ? "text-orange-300" : "text-royal",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[34px]",
          dark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            dark ? "text-blue-100/75" : "text-body-text",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}