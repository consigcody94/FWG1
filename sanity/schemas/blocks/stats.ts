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
          { name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'prefix', title: 'Prefix (optional)', type: 'string', placeholder: '$' },
          { name: 'suffix', title: 'Suffix (optional)', type: 'string', placeholder: '+, M, K' },
          { name: 'subtext', title: 'Subtext (optional)', type: 'string', placeholder: 'since 2004' },
          { name: 'icon', title: 'Icon Name (optional)', type: 'string', description: 'Lucide icon name' },
        ],
      }],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Horizontal Row', value: 'horizontal' },
          { title: 'Grid', value: 'grid' },
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'animated',
      title: 'Animated Counter',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSeparators',
      title: 'Show Separators',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
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
