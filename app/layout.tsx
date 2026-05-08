import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayasan KNMU | Peduli Alam, Cerdaskan Bangsa",

  description:
    "Yayasan Karya Nyata Mandiri Utama bergerak dalam bidang pertanian, peternakan, dan lingkungan hidup untuk masa depan berkelanjutan.",

  keywords: [
    "yayasan",
    "lingkungan",
    "pertanian",
    "peternakan",
    "KNMU",
    "yayasan riau",
  ],

  openGraph: {
    title: "Yayasan KNMU",

    description:
      "Dari Bumi, Oleh Rakyat, Untuk Masa Depan.",

    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={plusJakarta.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}