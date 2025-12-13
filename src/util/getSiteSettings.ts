import { getPayload } from "payload";
import config from "@/payload.config";

let cachedSettings: any = null;
let lastFetch = 0;
const CACHE_DURATION = 60000; // 1 minute cache

export async function getSiteSettings() {
  const now = Date.now();

  // Return cached settings if they exist and are recent
  if (cachedSettings && now - lastFetch < CACHE_DURATION) {
    return cachedSettings;
  }

  try {
    const payload = await getPayload({ config });
    const settings = await payload.findGlobal({
      slug: "site-settings",
      depth: 0,
    });

    cachedSettings = settings;
    lastFetch = now;

    return settings;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    // Return default values if there's an error
    return {
      companyName: "Dr. Princess Parties",
      logoAltText: "Dr. Princess Parties Logo",
      tagline: "",
      contactInfo: {
        email: "",
        phone: "",
      },
      socialMedia: {
        facebook: "",
        instagram: "",
        twitter: "",
      },
    };
  }
}
