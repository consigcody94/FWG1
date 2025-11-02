import { defineType, defineField } from 'sanity'

export const teamBlock = defineType({
  name: 'team',
  title: 'Team Members',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'role', title: 'Role/Title', type: 'string' },
          { name: 'bio', title: 'Bio', type: 'text', rows: 4 },
          { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
          { name: 'email', title: 'Email', type: 'string' },
        ],
      }],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      members: 'members',
    },
    prepare({ heading, members }) {
      return {
        title: `Team: ${heading || 'Untitled'}`,
        subtitle: `${members?.length || 0} members`,
      }
    },
  },
})
