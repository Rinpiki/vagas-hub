import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Head from "next/head";
import star from "../../public/icons/star.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workhub",
  description:
    "Explore nosso agregador de sites de vagas, onde ao clicar, o ícone fica verde, indicando que você já visitou o site para aplicar em vagas. Após 24 horas, ele retorna ao seu estado normal. Reunimos os melhores recursos em um único lugar, simplificando o processo de busca por oportunidades de emprego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
