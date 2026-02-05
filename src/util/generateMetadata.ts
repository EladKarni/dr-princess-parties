import { getSiteSettings } from "@/util/getSiteSettings";
import type { Metadata } from "next";

export async function generateSiteMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const companyName = settings.companyName || "Dr. Princess Parties";

  return {
    title: {
      default: companyName,
      template: `%s | ${companyName}`,
    },
    description: `Bring magic to your celebration with ${companyName}! Professional character appearances, princess parties, and enchanting entertainment for birthdays and special events. Book your magical experience today.`,
    keywords: [
      "princess parties",
      "character appearances",
      "birthday parties",
      "princess entertainment",
      "kids parties",
      "character visits",
      "party entertainment",
    ],
    authors: [{ name: companyName }],
    creator: companyName,
    icons: {
      icon: "/dr-princess-logos.svg",
      shortcut: "/dr-princess-logos.svg",
      apple: "/dr-princess-logos.svg",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://drprincessparties.com/",
      title: companyName,
      description: `Bring magic to your celebration with ${companyName}! Professional character appearances and enchanting entertainment for birthdays and special events.`,
      siteName: companyName,
    },
    twitter: {
      card: "summary_large_image",
      title: companyName,
      description: `Bring magic to your celebration with ${companyName}! Professional character appearances and enchanting entertainment for birthdays and special events.`,
    },
  };
}
