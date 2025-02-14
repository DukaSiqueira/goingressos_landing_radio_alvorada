import type { Metadata } from "next";
import "./globals.css";
import radioIcon from "public/assets/radio.svg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Clube do Ouvinte Coração Missionário",
  description: "Faça parte desta missão de evangelização",
  icons: {
    icon: [
      {
        url: radioIcon.src,
        href: radioIcon.src,
        type: "image/svg+xml",
        sizes: "any",
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
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href={radioIcon.src}
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body>
        <Header />
        <main className="flex flex-col min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
