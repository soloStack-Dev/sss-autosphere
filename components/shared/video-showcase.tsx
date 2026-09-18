import { Clapperboard, PlayCircle } from "lucide-react";

/**
 * Modern centred video showcase — rounded frame, soft glow, overlay caption.
 * Autoplays muted on loop so it reads clearly as motion (browsers allow muted
 * autoplay); native controls let the visitor pause or scrub.
 */
export function VideoShowcase({
  src,
  poster,
  title,
  badge = "SSS Auto Spares",
  caption,
  className,
}: {
  src: string;
  poster?: string;
  title: string;
  badge?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-footer-navy shadow-card-hover ring-1 ring-white/10">
        <div
          className="pointer-events-none absolute -inset-x-16 -top-24 h-48 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(36,86,216,0.35),transparent)]"
          aria-hidden
        />
        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-md">
          <span className="size-1.5 animate-pulse rounded-full bg-white" aria-hidden />
          Video
        </span>
        <video
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          className="relative aspect-video w-full object-cover"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded videos — download the clip to view it.
        </video>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent px-5 pb-4 pt-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy shadow-sm">
            <Clapperboard className="size-3 text-royal" aria-hidden />
            {badge}
          </span>
          <figcaption className="mt-2 text-sm font-bold text-white drop-shadow">
            {title}
          </figcaption>
          {caption ? (
            <p className="mt-0.5 text-[12px] leading-snug text-blue-100/85">{caption}</p>
          ) : null}
        </div>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12px] font-semibold text-muted-text">
        <PlayCircle className="size-4 text-royal" aria-hidden />
        Now playing — a quick walk through SSS Auto Spares
      </p>
    </figure>
  );
}