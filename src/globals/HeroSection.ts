import type { GlobalConfig } from "payload";

export const HeroSection: GlobalConfig = {
  slug: "hero-section",
  label: "Hero",
  admin: {
    description: "Manage the main hero section on the homepage",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        return `${baseUrl}/api/preview?global=hero-section`;
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      defaultValue: "Making Dreams Come True",
      admin: {
        description: "Main headline displayed in the hero section",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
      defaultValue: "Dr. Princess Parties",
      admin: {
        description: "Subheading text above the main title",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: false,
      defaultValue:
        "Bringing magical princess character experiences to your special events",
      admin: {
        description: "Optional description text below the title",
      },
    },
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
      required: false,
      admin: {
        description: "Background image for the hero section",
      },
    },
    {
      name: "backgroundPosition",
      type: "text",
      label: "Background Position",
      defaultValue: "center center",
      admin: {
        description: 'CSS background position (e.g., "center", "65% center")',
      },
    },
    {
      name: "overlay",
      type: "checkbox",
      label: "Enable Overlay",
      defaultValue: true,
      admin: {
        description:
          "Add dark overlay to background for better text readability",
      },
    },
    {
      name: "overlayOpacity",
      type: "number",
      label: "Overlay Opacity",
      min: 0,
      max: 100,
      defaultValue: 40,
      admin: {
        description: "Overlay opacity percentage (0-100)",
      },
    },
    {
      name: "primaryCTA",
      type: "group",
      label: "Primary Call-to-Action",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Button Text",
          defaultValue: "Book Now",
        },
        {
          name: "href",
          type: "text",
          label: "Button Link",
          defaultValue: "#contact",
        },
      ],
    },
    {
      name: "secondaryCTA",
      type: "group",
      label: "Secondary Call-to-Action",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Button Text",
          defaultValue: "View Characters",
        },
        {
          name: "href",
          type: "text",
          label: "Button Link",
          defaultValue: "#characters",
        },
      ],
    },
  ],
};
