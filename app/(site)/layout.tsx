import { SiteProviders } from "@/components/layout/site-providers";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { EnquiryDrawer } from "@/components/layout/enquiry-drawer";
import { Toaster } from "@/components/layout/toaster";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteProviders>
      <div className="flex min-h-screen flex-col">
        <AnnouncementBar />
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingActions />
        <EnquiryDrawer />
        <Toaster />
      </div>
    </SiteProviders>
  );
}