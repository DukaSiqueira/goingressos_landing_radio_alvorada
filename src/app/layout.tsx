import type { Metadata } from "next";
import "./globals.css";
import radioIcon from "@/assets/radio.svg";

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
        <link rel="icon" href={radioIcon.src} type="image/svg+xml" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
