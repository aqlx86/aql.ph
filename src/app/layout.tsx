import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      </head>
      <body className="is-preload">
        {children}
        <Script id="preload-script" strategy="afterInteractive">
          {`
            if ("addEventListener" in window) {
              window.addEventListener("load", function () {
                document.body.className = document.body.className.replace(
                  /\\bis-preload\\b/,
                  ""
                );
              });
              document.body.className += navigator.userAgent.match(/(MSIE|rv:11\\.0)/)
                ? " is-ie"
                : "";
            }
          `}
        </Script>
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
