import { siteConfig } from "@/lib/site-config";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: siteConfig.socials.facebook,
    Icon: Facebook,
  },
  {
    label: "WhatsApp",
    href: siteConfig.socials.whatsapp,
    Icon: MessageCircle,
  },
];

export function SocialIcons({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className ?? ""}`}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex size-9 items-center justify-center rounded-full transition-colors ${itemClassName ?? ""}`}
        >
          <Icon className="size-4" aria-hidden />
        </a>
      ))}
    </span>
  );
}