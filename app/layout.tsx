//hooks
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

//css
import "./globals.css";

//components
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "HSKtravel | All-Inclusive Holiday Packages & Exotic Destinations",
  description:
    "Discover unbeatable all-inclusive holiday packages with HSKtravel. Explore top travel destinations, book last-minute deals, and start your dream vacation today.",
  keywords:
    "HSKtravel, all-inclusive holidays, exotic destinations, travel deals, last-minute travel, vacation packages, holiday deals, luxury travel, budget travel, summer travel",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
