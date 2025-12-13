import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    description:
      "Manage global site settings like company name, logo text, and contact information",
    group: "Settings",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
      required: true,
      defaultValue: "Dr. Princess Parties",
      admin: {
        description: "The main company name displayed throughout the site",
      },
    },
    {
      name: "logoAltText",
      type: "text",
      label: "Logo Alt Text",
      required: true,
      defaultValue: "Dr. Princess Parties Logo",
      admin: {
        description: "Alternative text for the logo (for accessibility)",
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Company Tagline",
      admin: {
        description: "A short tagline or description for your company",
      },
    },
    {
      name: "contactInfo",
      type: "group",
      label: "Contact Information",
      fields: [
        {
          name: "email",
          type: "email",
          label: "Email Address",
        },
        {
          name: "phone",
          type: "text",
          label: "Phone Number",
        },
      ],
    },
    {
      name: "socialMedia",
      type: "group",
      label: "Social Media Links",
      fields: [
        {
          name: "facebook",
          type: "text",
          label: "Facebook URL",
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram URL",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter URL",
        },
      ],
    },
  ],
};
