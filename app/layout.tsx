import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ✅ Métadonnées professionnelles pour QuantMerlin Analytics
export const metadata: Metadata = {
  title: "QuantMerlin Analytics | Finance Quantitative & Risk Modeling",
  description: "Spécialiste en modélisation quantitative du risque. Analyse des marchés financiers, trading Forex, crypto et gestion du risque avec une approche data-driven.",
  keywords: "finance quantitative, risk modeling, trading, forex, crypto, analytics, Cameroon",
  authors: [{ name: "QuantMerlin Analytics" }],
  openGraph: {
    title: "QuantMerlin Analytics | Finance Quantitative",
    description: "Prenez le contrôle de vos finances avec une approche professionnelle basée sur les données.",
    url: "https://quantmerlinanalytics.com",
    siteName: "QuantMerlin Analytics",
    locale: "fr_CM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantMerlin Analytics",
    description: "Finance quantitative & risk modeling professionnel",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}