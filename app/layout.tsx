import type { Metadata } from "next";
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
        <Navbar />

        {children}
         <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
