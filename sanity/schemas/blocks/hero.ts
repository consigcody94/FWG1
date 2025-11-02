import { defineType, defineField } from 'sanity'

export const heroBlock = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'badge',
      title: 'Badge/Label (optional)',
      type: 'string',
      description: 'Small label above title (e.g., "Since 2004")',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button (optional)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color (if no image)',
      type: 'color',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Override default text color',
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'height',
      title: 'Section Height',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Medium (60vh)', value: '60vh' },
          { title: 'Large (80vh)', value: '80vh' },
          { title: 'Full Screen (100vh)', value: '100vh' },
        ],
      },
      initialValue: '80vh',
    }),
    defineField({
      name: 'overlayPattern',
      title: 'Overlay Pattern',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Grid', value: 'grid' },
          { title: 'Diagonal Lines', value: 'diagonal' },
          { title: 'Dots', value: 'dots' },
        ],
      },
      initialValue: 'none',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        subtitle: subtitle,
      }
    },
  },
})
