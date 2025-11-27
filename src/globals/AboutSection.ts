import type { GlobalConfig } from "payload";

export const AboutSection: GlobalConfig = {
  slug: "about-section",
  label: "About Section",
  admin: {
    description: "Manage the About section content on the homepage",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        return `${baseUrl}/api/preview?global=about-section`;
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
      label: "Section Title",
      required: true,
      defaultValue: "About Dr. Princess Parties",
      admin: {
        description: "Main heading for the about section",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Section Subtitle",
      required: false,
      defaultValue: "Who We Are",
      admin: {
        description: "Subtitle above the main title",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      defaultValue:
        "We bring the magic of beloved characters to life at your special events! With professional performers, enchanting costumes, and unforgettable experiences, Dr. Princess Parties creates memories that last a lifetime for children and families.",
      admin: {
        description: "Main description text for the about section",
      },
    },
    {
      name: "image",
      type: "upload",
      label: "Section Image",
      relationTo: "media",
      required: false,
      admin: {
        description: "Image displayed in the about section",
      },
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
      defaultValue: "About Dr. Princess Parties",
      admin: {
        description: "Alternative text for the image",
      },
    },
    {
      name: "imagePosition",
      type: "select",
      label: "Image Position",
      defaultValue: "right",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      admin: {
        description: "Position of the image relative to the text",
      },
    },
    {
      name: "stats",
      type: "array",
      label: "Statistics",
      maxRows: 4,
      fields: [
        {
          name: "value",
          type: "text",
          label: "Stat Value",
          required: true,
          admin: {
            placeholder: "500+",
          },
        },
        {
          name: "label",
          type: "text",
          label: "Stat Label",
          required: true,
          admin: {
            placeholder: "Happy Families",
          },
        },
      ],
      defaultValue: [
        { value: "500+", label: "Magical Parties" },
        { value: "15+", label: "Characters" },
        { value: "5+", label: "Years of Magic" },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "Call to Action",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Button Text",
          defaultValue: "Learn More",
        },
        {
          name: "href",
          type: "text",
          label: "Button Link",
          defaultValue: "#services",
        },
      ],
    },
  ],
};
