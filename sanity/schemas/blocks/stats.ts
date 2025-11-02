import { defineType, defineField } from 'sanity'

export const statsBlock = defineType({
  name: 'stats',
  title: 'Statistics',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Number', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        title: `Stats: ${items?.length || 0} items`,
      }
    },
  },
})
