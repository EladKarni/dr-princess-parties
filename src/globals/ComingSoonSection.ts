import type { GlobalConfig } from "payload";

export const ComingSoonSection: GlobalConfig = {
  slug: "coming-soon-section",
  label: "Coming Soon Page",
  admin: {
    description: "Manage the Coming Soon page content",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        const secret = process.env.PAYLOAD_SECRET || "";
        return `${baseUrl}/api/preview?url=${encodeURIComponent("/")}&secret=${encodeURIComponent(secret)}`;
      },
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1000, // Save draft every 1 second while editing
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "isActive",
      type: "checkbox",
      label: "Show Coming Soon Page",
      defaultValue: true,
      admin: {
        description:
          "Toggle to show/hide the coming soon page. When disabled, the main site will be visible.",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      defaultValue: "Coming Soon",
      admin: {
        description: "Main title displayed on the coming soon page",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
      defaultValue: "Something Magical is on the Way",
      admin: {
        description: "Subtitle text below the main title",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      defaultValue:
        "We're preparing an enchanting experience just for you. Stay tuned for the grand reveal!",
      admin: {
        description: "Description text providing more details",
      },
    },
  ],
};
