import type { GlobalConfig } from "payload";

export const TestimonialsSection: GlobalConfig = {
  slug: "testimonials-section",
  label: "Testimonials Section",
  admin: {
    description: "Manage the testimonials section content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section Title",
      required: true,
      defaultValue: "What Families Say",
    },
    {
      name: "subtitle",
      type: "text",
      label: "Section Subtitle",
      required: false,
      defaultValue: "Testimonials",
    },
    {
      name: "reviewCount",
      type: "number",
      label: "Total Review Count",
      required: false,
      defaultValue: 150,
      admin: {
        description: "Number of total reviews to display",
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
        description: "Average rating (1-5 stars)",
      },
    },
    {
      name: "statisticsHeadline",
      type: "text",
      label: "Statistics Headline",
      required: false,
      admin: {
        description: "Optional headline for statistics display",
      },
    },
  ],
};
