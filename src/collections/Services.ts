import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Service Title",
    },
    {
      name: "description",
      type: "richText",
      required: true,
      label: "Service Description",
    },
    {
      name: "icon",
      type: "select",
      required: true,
      options: [
        { label: "Party", value: "party" },
        { label: "Birthday Cake", value: "cake" },
        { label: "Crown", value: "crown" },
        { label: "Wand", value: "wand" },
        { label: "Balloon", value: "balloon" },
        { label: "Gift", value: "gift" },
        { label: "Music", value: "music" },
        { label: "Photo", value: "photo" },
      ],
      admin: {
        position: "sidebar",
        description: "Icon type for the service",
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
      name: "link",
      type: "group",
      label: "Optional Link",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Link Text",
        },
        {
          name: "href",
          type: "text",
          label: "Link URL",
        },
      ],
    },
  ],
};
