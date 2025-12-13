import { getSiteSettings } from "@/util/getSiteSettings";
import type { Metadata } from "next";

export async function generateSiteMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const companyName = settings.companyName || "Dr. Princess Parties";

  return {
    title: {
      default: `Coming Soon | ${companyName}`,
      template: `%s | ${companyName}`,
    },
    description: `Something magical is on the way! ${companyName} is preparing an enchanting experience. Stay tuned for the grand reveal of our magical character experiences.`,
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
      title: `Coming Soon | ${companyName}`,
      description: `Something magical is on the way! ${companyName} is preparing an enchanting experience.`,
      siteName: companyName,
    },
    twitter: {
      card: "summary_large_image",
      title: `Coming Soon | ${companyName}`,
      description: `Something magical is on the way! ${companyName} is preparing an enchanting experience.`,
    },
  };
}
