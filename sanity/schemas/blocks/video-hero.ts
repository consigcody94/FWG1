import { defineType, defineField } from 'sanity'

export const videoHeroBlock = defineType({
  name: 'videoHero',
  title: 'Video Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video file URL',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File Upload',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'fallbackImage',
      title: 'Fallback Background Image',
      type: 'image',
      description: 'Shown while video loads or on mobile',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      initialValue: 50,
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button (Optional)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
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
      name: 'autoPlay',
      title: 'Auto Play Video',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      title: 'Loop Video',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'disableOnMobile',
      title: 'Disable Video on Mobile',
      type: 'boolean',
      initialValue: true,
      description: 'Show fallback image instead for better performance',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'fallbackImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Video Hero: ${title || 'Untitled'}`,
        subtitle: subtitle,
        media,
      }
    },
  },
})
