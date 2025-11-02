import { defineType, defineField } from "sanity";

export const clientsBlock = defineType({
  name: "clients",
  title: "Clients Block",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Our Trusted Federal Agency Clients",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
    },
    {
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Client Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "logo",
              title: "Logo Path",
              type: "string",
              description: "Path to logo image (e.g., /assets/clients/commerce.png)",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "website",
              title: "Website",
              type: "string",
              description: "Client website domain (e.g., commerce.gov)",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "website",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Clients Block",
        subtitle: "Display client logos",
      };
    },
  },
});
