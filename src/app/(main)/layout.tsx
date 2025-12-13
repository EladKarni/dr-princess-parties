import type { Metadata } from "next";
import { Inter, Parisienne } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const parisienne = Parisienne({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Coming Soon | Dr. Princess Parties",
    template: "%s | Dr. Princess Parties",
  },
  description: "Something magical is on the way! Dr. Princess Parties is preparing an enchanting experience. Stay tuned for the grand reveal of our magical character experiences.",
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
    title: "Coming Soon | Dr. Princess Parties",
    description: "Something magical is on the way! Dr. Princess Parties is preparing an enchanting experience.",
    siteName: "Dr. Princess Parties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Dr. Princess Parties",
    description: "Something magical is on the way! Dr. Princess Parties is preparing an enchanting experience.",
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
        {children}
      </body>
    </html>
  );
}
