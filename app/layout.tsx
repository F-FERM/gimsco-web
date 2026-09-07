import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const GTM_ID = "GTM-WDWNW6CJ";
const GA_ID = "G-F5F4TDSHQN";

export const metadata: Metadata = {
  title: "GIMSCO",
  description:
    "Gulf International Marine Services Co. - Ship Chandling Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* =====================================================
            GOOGLE TAG MANAGER
        ====================================================== */}

        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* =====================================================
            GOOGLE ANALYTICS
        ====================================================== */}

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          width: "100%",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          background: "#ffffff",
        }}
      >
        {/* =====================================================
            GOOGLE TAG MANAGER - NOSCRIPT
        ====================================================== */}

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        <Navbar />
        {children}

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
