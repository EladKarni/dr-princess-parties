import type { GlobalConfig } from "payload";

export const LinktreeProfile: GlobalConfig = {
  slug: "linktree-profile",
  label: "Linktree Profile",
  admin: {
    description: "Manage Alexis Hester's Linktree profile page",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        const secret = process.env.PAYLOAD_SECRET || "";
        return `${baseUrl}/api/preview?url=${encodeURIComponent("/linktree")}&secret=${encodeURIComponent(secret)}`;
      },
    },
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "displayName",
      type: "text",
      label: "Display Name",
      required: true,
      defaultValue: "Alexis Hester",
      admin: {
        description: "Name displayed at the top of the profile",
      },
    },
    {
      name: "avatar",
      type: "upload",
      label: "Profile Avatar",
      relationTo: "media",
      required: false,
      admin: {
        description:
          "Optional profile picture (recommended: square image, 400x400px)",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: false,
      maxLength: 50,
      admin: {
        description: "Optional subtitle (e.g., 'Princess Party Entertainer')",
      },
    },
    {
      name: "bio",
      type: "textarea",
      label: "Bio",
      required: false,
      maxLength: 200,
      admin: {
        description: "Short bio or tagline (optional, max 200 characters)",
      },
    },
    {
      name: "links",
      type: "array",
      label: "Links",
      required: true,
      minRows: 1,
      admin: {
        description: "Social media and website links",
        initCollapsed: false,
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: "Button Label",
          required: true,
          admin: {
            description: "Text displayed on the button (e.g., 'Visit Website')",
          },
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
          admin: {
            description: "Full URL including https://",
          },
          validate: (value: unknown) => {
            if (!value) return "URL is required";
            const urlValue = typeof value === "string" ? value : String(value);
            try {
              new URL(urlValue);
              return true;
            } catch {
              return "Please enter a valid URL (include https://)";
            }
          },
        },
        {
          name: "icon",
          type: "select",
          label: "Icon",
          required: false,
          defaultValue: "link",
          options: [
            { label: "Link (default)", value: "link" },
            { label: "Website", value: "website" },
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
            { label: "Venmo", value: "venmo" },
            { label: "Email", value: "email" },
            { label: "Phone", value: "phone" },
            { label: "Crown", value: "crown" },
          ],
          admin: {
            description: "Icon to display on the button",
          },
        },
        {
          name: "variant",
          type: "select",
          label: "Button Style",
          required: false,
          defaultValue: "secondary",
          options: [
            { label: "Primary (Bold Gold Gradient)", value: "primary" },
            { label: "Secondary (White with Border)", value: "secondary" },
            { label: "Outline (Transparent with Border)", value: "outline" },
            { label: "Soft (Pink Background)", value: "soft" },
          ],
          admin: {
            description: "Visual style for this button",
          },
        },
        {
          name: "badge",
          type: "text",
          label: "Badge Text",
          required: false,
          maxLength: 20,
          admin: {
            description: "Optional badge (e.g., 'New!', 'Popular', 'Sale')",
          },
        },
        {
          name: "isFeatured",
          type: "checkbox",
          label: "Featured (Large Card)",
          defaultValue: false,
          admin: {
            description:
              "Display as large card with image instead of pill button",
          },
        },
        {
          name: "thumbnail",
          type: "upload",
          label: "Thumbnail Image",
          relationTo: "media",
          required: false,
          admin: {
            description:
              "Optional image for featured cards (recommended: 400x400px)",
            condition: (data: any, siblingData: any) =>
              siblingData?.isFeatured === true,
          },
        },
        {
          name: "description",
          type: "text",
          label: "Description",
          required: false,
          maxLength: 100,
          admin: {
            description:
              "Short description for featured cards (max 100 characters)",
            condition: (data: any, siblingData: any) =>
              siblingData?.isFeatured === true,
          },
        },
        {
          name: "enabled",
          type: "checkbox",
          label: "Enabled",
          defaultValue: true,
          admin: {
            description: "Uncheck to temporarily hide this link",
          },
        },
      ],
      defaultValue: [
        {
          label: "Visit My Website",
          url: "https://drprincessparties.com",
          icon: "website",
          enabled: true,
        },
        {
          label: "Follow on Instagram",
          url: "https://instagram.com/drprincessparties",
          icon: "instagram",
          enabled: true,
        },
        {
          label: "Like on Facebook",
          url: "https://facebook.com/drprincessparties",
          icon: "facebook",
          enabled: true,
        },
        {
          label: "Venmo Payment",
          url: "https://venmo.com/username",
          icon: "venmo",
          enabled: true,
        },
      ],
    },
    {
      name: "theme",
      type: "group",
      label: "Theme Settings",
      admin: {
        description: "Customize the appearance",
      },
      fields: [
        {
          name: "enableSparkles",
          type: "checkbox",
          label: "Enable Sparkle Animation",
          defaultValue: true,
          admin: {
            description: "Show animated sparkles in the background",
          },
        },
        {
          name: "enableCrown",
          type: "checkbox",
          label: "Show Crown Icon",
          defaultValue: true,
          admin: {
            description: "Display crown icon near the name",
          },
        },
      ],
    },
  ],
};
