import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turismo Fácil",
  description: "Sua viajem para Foz de iguaçu é aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>
        <Header /> {children}
      </body>
    </html>
  );
}
