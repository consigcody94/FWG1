import { defineType, defineField } from 'sanity'

export const clientsLogosBlock = defineType({
  name: 'clientsLogos',
  title: 'Clients/Logos Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Client Name', validation: (Rule) => Rule.required() },
            { name: 'logo', type: 'image', title: 'Logo', options: { hotspot: true }, validation: (Rule) => Rule.required() },
            { name: 'url', type: 'url', title: 'Website URL (optional)' },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'displayStyle',
      title: 'Display Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Marquee (Auto-scroll)', value: 'marquee' },
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      title: 'Columns (Grid only)',
      type: 'number',
      options: {
        list: [3, 4, 5, 6],
      },
      initialValue: 4,
      hidden: ({ parent }) => parent?.displayStyle === 'marquee',
    }),
    defineField({
      name: 'logoSize',
      title: 'Logo Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'grayscale',
      title: 'Grayscale Effect',
      type: 'boolean',
      initialValue: true,
      description: 'Logos in grayscale, color on hover',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'padding',
      title: 'Section Padding',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'md',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      logoCount: 'logos.length',
    },
    prepare({ heading, logoCount }) {
      return {
        title: `Clients/Logos: ${heading || 'Untitled'}`,
        subtitle: `${logoCount || 0} logos`,
      }
    },
  },
})
