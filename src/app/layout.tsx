import type { Metadata } from "next";
import "@/style/globals.css";
import HeaderSection from "@/components/core/HeaderSection";
import FooterSection from "@/components/core/FooterSection";

export const metadata: Metadata = {
  title: "Genuine Graphics",
  description: "Genuine Graphics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#0A0A0A] w-screen overflow-x-hidden`}
      >
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
