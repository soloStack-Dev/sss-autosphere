import Image from "next/image";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export function PageBanner({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  alt,
  children,
}: {
  breadcrumb: Array<{ label: string; href?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-footer-navy">
      {image ? (
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-footer-navy via-footer-navy/90 to-navy/60" aria-hidden />
      <div className="container-sss relative py-14 sm:py-20">
        <Breadcrumb items={breadcrumb} tone="light" />
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-blue-100/80 sm:text-base">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}