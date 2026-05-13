import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pagodin Burguer — Onde o Samba encontra a Brasa",
  description:
    "Hambúrguer artesanal na parrilla com alma brasileira. No coração do Cordeiro, Recife. Quinta a Domingo, 18h às 23h.",
  keywords: [
    "hamburguer recife",
    "pagodin burguer",
    "hamburgueria artesanal",
    "parrilla",
    "cordeiro recife",
    "burguer recife",
    "samba burguer",
  ],
  openGraph: {
    title: "Pagodin Burguer — Onde o Samba encontra a Brasa",
    description: "Hambúrguer artesanal na parrilla com alma brasileira. Recife - PE.",
    type: "website",
    locale: "pt_BR",
    siteName: "Pagodin Burguer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagodin Burguer",
    description: "Hambúrguer artesanal na parrilla com alma brasileira.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
