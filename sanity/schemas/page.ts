import { defineType, defineField, defineArrayMember } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'blocks',
      title: 'Page Content (Drag to Reorder)',
      type: 'array',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'videoHero' }),
        defineArrayMember({ type: 'clientsLogos' }),
        defineArrayMember({ type: 'stats' }),
        defineArrayMember({ type: 'services' }),
        defineArrayMember({ type: 'testimonials' }),
        defineArrayMember({ type: 'content' }),
        defineArrayMember({ type: 'team' }),
        defineArrayMember({ type: 'cta' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
