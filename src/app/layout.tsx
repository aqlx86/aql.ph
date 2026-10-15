import type { Metadata, Viewport } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const crt = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-crt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnel Q. Labarda",
  description:
    "Web Application Developer, Freelancer. Particularly interested in Open Source Applications",
};

export const viewport: Viewport = {
  themeColor: "#050a06",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={crt.variable}>
      <body>
        {children}
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
