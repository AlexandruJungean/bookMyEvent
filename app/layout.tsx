import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "evenimente.com | Servicii Complete pentru Evenimente",
  description: "Platformă marketplace pentru servicii de evenimente în România. Găsește barmani, ospătari, bar mobil, wine corner și multe altele pentru nunta sau evenimentul tău.",
  keywords: "bar mobil, barmani, ospătari, evenimente, nuntă, cocktail bar, wine corner, servicii evenimente România",
  openGraph: {
    title: "evenimente.com | Toate serviciile pentru evenimentul tău",
    description: "Bar mobil & servicii complete pentru evenimente. Prestatori verificați, o singură plată, backup garantat.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
