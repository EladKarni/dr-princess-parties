import type { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "status", "createdAt"],
    group: "Admin",
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Message",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Read", value: "read" },
        { label: "Replied", value: "replied" },
      ],
      admin: {
        position: "sidebar",
        description: "Track the status of this submission",
      },
    },
  ],
};
