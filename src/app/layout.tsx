import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" data-theme="light" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
