import type { Metadata } from "next";
import { Inter, Parisienne } from "next/font/google";
import "../globals.css";
import { generateSiteMetadata } from "@/util/generateMetadata";

const inter = Inter({ subsets: ["latin"] });

const parisienne = Parisienne({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  return await generateSiteMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className={`${inter.className} ${parisienne.variable}`}>
        {children}
      </body>
    </html>
  );
}
