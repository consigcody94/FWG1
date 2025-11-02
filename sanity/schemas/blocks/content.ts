import { defineType, defineField } from 'sanity'

export const contentBlock = defineType({
  name: 'content',
  title: 'Rich Content',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'color',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
    }),
    defineField({
      name: 'maxWidth',
      title: 'Max Width',
      type: 'string',
      options: {
        list: [
          { title: 'Narrow', value: 'narrow' },
          { title: 'Medium', value: 'medium' },
          { title: 'Wide', value: 'wide' },
          { title: 'Full', value: 'full' },
        ],
      },
      description: 'Content container width',
    }),
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare({ body }) {
      const hasContent = body && body.length > 0
      return {
        title: `Rich Content`,
        subtitle: hasContent ? 'Has content' : 'Empty',
      }
    },
  },
})
