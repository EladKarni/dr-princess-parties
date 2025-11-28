import type { GlobalConfig } from "payload";

export const TestimonialsSection: GlobalConfig = {
  slug: "testimonials-section",
  label: "Testimonials Section",
  admin: {
    description: "Manage the Testimonials section content on the homepage",
    livePreview: {
      url: () => {
        const baseUrl =
          process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
        return `${baseUrl}/api/preview?global=testimonials-section`;
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
      required: false,
      defaultValue: "What Families Say",
      admin: {
        description: "Main heading for the testimonials section",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Section Subtitle",
      required: false,
      defaultValue: "Testimonials",
      admin: {
        description: "Subtitle text above the main title",
      },
    },
    {
      name: "reviewCount",
      type: "number",
      label: "Total Review Count",
      required: false,
      defaultValue: 150,
      admin: {
        description: "Number of total reviews to display (e.g., 150)",
      },
    },
    {
      name: "averageRating",
      type: "number",
      label: "Average Rating",
      required: false,
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        description: "Average star rating (1-5)",
      },
    },
    {
      name: "statisticsHeadline",
      type: "text",
      label: "Statistics Headline",
      required: false,
      admin: {
        description: "Custom headline for statistics (leave empty to use default format)",
        placeholder: "⭐ 150+ Five-Star Reviews from Happy Families",
      },
    },
  ],
};
