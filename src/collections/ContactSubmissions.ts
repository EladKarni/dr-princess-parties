import type { CollectionConfig } from "payload";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== "create") return doc;
        const to = process.env.CONTACT_NOTIFY_EMAIL || "DrPrincessParties@gmail.com";
        try {
          await req.payload.sendEmail({
            to,
            replyTo: doc.email,
            subject: `New party inquiry from ${doc.name}`,
            html: `
              <h2>New contact form submission</h2>
              <p><strong>Name:</strong> ${escapeHtml(doc.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(doc.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(doc.phone) || "Not provided"}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space:pre-wrap">${escapeHtml(doc.message)}</p>
            `,
          });
        } catch (err) {
          req.payload.logger.error({ err, msg: "Failed to send contact notification email" });
        }
        return doc;
      },
    ],
  },
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
