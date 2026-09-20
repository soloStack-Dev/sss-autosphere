import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const defaultUrl = process.env.APP_URL
  ? process.env.APP_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : siteConfig.siteUrl;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: siteConfig.name,
  url: `${defaultUrl}/`,
  telephone: `+91-${siteConfig.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 45/39, South Coovam River Road, Pudupet",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600002",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-21:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.map.lat,
    longitude: siteConfig.map.lng,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${siteConfig.displayName} | ${siteConfig.location}`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.displayName,
  keywords: [
    "SSS Auto Spares",
    "car spare parts Chennai",
    "auto parts Chennai",
    "used car spares",
    "old vehicle parts",
    "scrap vehicle purchasing",
  ],
  openGraph: {
    title: `${siteConfig.displayName} | ${siteConfig.location}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.displayName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}