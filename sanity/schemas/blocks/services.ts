import { defineType, defineField } from 'sanity'

export const servicesBlock = defineType({
  name: 'services',
  title: 'Services Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Service Name', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'icon', title: 'Icon/Image', type: 'image', options: { hotspot: true } },
        ],
      }],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      services: 'services',
    },
    prepare({ heading, services }) {
      return {
        title: `Services: ${heading || 'Untitled'}`,
        subtitle: `${services?.length || 0} services`,
      }
    },
  },
})
