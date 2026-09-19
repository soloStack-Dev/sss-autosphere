import { Breadcrumb } from "@/components/layout/breadcrumb";

export function LegalDoc({
  title,
  eyebrow,
  updated,
  sections,
}: {
  title: string;
  eyebrow: string;
  updated: string;
  sections: Array<{ heading: string; body: React.ReactNode }>;
}) {
  return (
    <section className="section-pad bg-white">
      <div className="container-sss max-w-3xl">
        <Breadcrumb items={[{ label: title }]} tone="dark" />
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-royal">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">{title}</h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-text">
          Last updated: {updated}
        </p>
        <div className="mt-8 space-y-6">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-extrabold text-navy">{s.heading}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-body-text">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}