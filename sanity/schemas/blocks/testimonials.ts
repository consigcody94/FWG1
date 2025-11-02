import { defineType, defineField } from 'sanity'

export const testimonialsBlock = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 4 },
          { name: 'author', title: 'Author Name', type: 'string' },
          { name: 'role', title: 'Author Title', type: 'string' },
          { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
        ],
      }],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      testimonials: 'testimonials',
    },
    prepare({ heading, testimonials }) {
      return {
        title: `Testimonials: ${heading || 'Untitled'}`,
        subtitle: `${testimonials?.length || 0} testimonials`,
      }
    },
  },
})
