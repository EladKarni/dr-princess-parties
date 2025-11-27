import type { CollectionConfig } from "payload";

export const Characters: CollectionConfig = {
  slug: "characters",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "featured", "order", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Character Name",
      admin: {
        description: 'Name of the character (e.g., "Elsa", "Cinderella")',
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Character Description",
      admin: {
        description: "Brief description of the character and what they offer",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Character Image",
      admin: {
        description: "Main image of the character",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Princess", value: "princess" },
        { label: "Superhero", value: "superhero" },
        { label: "Fairy", value: "fairy" },
        { label: "Other", value: "other" },
      ],
      defaultValue: "princess",
      admin: {
        description: "Category of the character",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured Character",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Featured characters appear in the main carousel",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Lower numbers appear first",
      },
    },
    {
      name: "available",
      type: "checkbox",
      label: "Currently Available",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description:
          "Whether this character is currently available for booking",
      },
    },
  ],
};
