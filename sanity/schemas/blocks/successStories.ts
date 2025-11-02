import { defineType, defineField } from "sanity";

export const successStoriesBlock = defineType({
  name: "successStories",
  title: "Success Stories Block",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Success Stories",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "stories",
      title: "Success Stories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "client",
              title: "Client Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo Path",
              type: "string",
              description: "Path to client logo (e.g., /assets/clients/commerce.png)",
            }),
            defineField({
              name: "summary",
              title: "Summary",
              type: "text",
              rows: 3,
              description: "Brief overview of the project",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "details",
              title: "Details",
              type: "array",
              of: [{ type: "text", rows: 2 }],
              description: "List of accomplishments or project details",
            }),
          ],
          preview: {
            select: {
              title: "client",
              subtitle: "summary",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Success Stories Block",
        subtitle: "Client case studies and testimonials",
      };
    },
  },
});
