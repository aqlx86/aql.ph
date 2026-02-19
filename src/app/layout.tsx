import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { TooltipProvider } from "@/components/ui/8bit/tooltip";

export const metadata: Metadata = {
  title: "Arnel Q. Labarda",
  description:
    "Web Application Developer, Freelancer. Particularly interested in Open Source Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <TooltipProvider>{children}</TooltipProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-67526894-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-67526894-1');
          `}
        </Script>
      </body>
    </html>
  );
}
