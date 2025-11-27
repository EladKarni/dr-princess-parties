import { Metadata } from "next";
import { Parisienne, Inter } from "next/font/google";
import "../globals.css";

const parisienne = Parisienne({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alexis Hester | Dr. Princess Parties",
  description: "Connect with Alexis Hester from Dr. Princess Parties",
};

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="princess" className="scroll-smooth">
      <body className={`${parisienne.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
