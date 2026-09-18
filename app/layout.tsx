import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}