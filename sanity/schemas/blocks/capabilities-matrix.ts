import { defineType, defineField } from 'sanity'

export const capabilitiesMatrixBlock = defineType({
  name: 'capabilitiesMatrix',
  title: 'Capabilities Matrix',
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
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
            { name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name (e.g., Shield, Cloud, Lock)' },
            { name: 'stat', type: 'string', title: 'Stat/Metric (optional)', placeholder: '15+ Years' },
            { name: 'link', type: 'string', title: 'Link URL (optional)' },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Grid Layout',
      type: 'string',
      options: {
        list: [
          { title: '2x2 (4 items)', value: '2' },
          { title: '3x3 (9 items)', value: '3' },
          { title: '4x4 (16 items)', value: '4' },
        ],
      },
      initialValue: '3',
    }),
    defineField({
      name: 'hoverEffect',
      title: 'Hover Effect',
      type: 'string',
      options: {
        list: [
          { title: 'Lift', value: 'lift' },
          { title: 'Glow', value: 'glow' },
          { title: 'Scale', value: 'scale' },
        ],
      },
      initialValue: 'lift',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Glass', value: 'glass' },
        ],
      },
      initialValue: 'solid',
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
      initialValue: 'lg',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      capCount: 'capabilities.length',
    },
    prepare({ heading, capCount }) {
      return {
        title: `Capabilities Matrix: ${heading || 'Untitled'}`,
        subtitle: `${capCount || 0} capabilities`,
      }
    },
  },
})
