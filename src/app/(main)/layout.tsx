import type { Metadata } from "next";
import { Inter, Parisienne } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({ subsets: ["latin"] });

const parisienne = Parisienne({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Princess Parties | Magical Character Experiences",
    template: "%s | Dr. Princess Parties",
  },
  description: "Bringing magical princess character experiences to your special events. Professional performers, enchanting costumes, and unforgettable memories for children and families.",
  keywords: ["princess parties", "character appearances", "birthday parties", "princess entertainment", "kids parties", "character visits", "party entertainment"],
  authors: [{ name: "Dr. Princess Parties" }],
  creator: "Dr. Princess Parties",
  icons: {
    icon: "/dr-princess-logos.svg",
    shortcut: "/dr-princess-logos.svg",
    apple: "/dr-princess-logos.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drprincessparties.com/",
    title: "Dr. Princess Parties | Magical Character Experiences",
    description: "Bringing magical princess character experiences to your special events. Professional performers and enchanting costumes.",
    siteName: "Dr. Princess Parties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Princess Parties | Magical Character Experiences",
    description: "Bringing magical princess character experiences to your special events. Professional performers and enchanting costumes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className={`${inter.className} ${parisienne.variable}`}>
        <ScrollReveal />
        <NavBar phoneNumber="(555) 123-4567" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
