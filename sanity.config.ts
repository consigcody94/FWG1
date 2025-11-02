import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { presentationTool } from '@sanity/presentation'
import { codeInput } from '@sanity/code-input'
import { table } from '@sanity/table'
import { media } from 'sanity-plugin-media'
import { schemas } from './sanity/schemas'

// Get the preview URL based on environment
const PREVIEW_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'FWG Website CMS',

  projectId: 's8by8xgm',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Pages
            S.listItem()
              .title('Pages')
              .icon(() => '📄')
              .child(
                S.documentTypeList('page')
                  .title('All Pages')
                  .filter('_type == "page"')
              ),
            S.divider(),
            // Site Settings
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.listItem()
                      .title('General Settings')
                      .child(S.document().schemaType('settings').documentId('settings')),
                    S.listItem()
                      .title('Navigation')
                      .child(S.document().schemaType('navigation').documentId('navigation')),
                    S.listItem()
                      .title('Contact Info')
                      .child(S.document().schemaType('contact').documentId('contact')),
                  ])
              ),
            S.divider(),
            // Jobs
            S.listItem()
              .title('Job Postings')
              .icon(() => '💼')
              .child(S.documentTypeList('job').title('All Jobs')),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: PREVIEW_URL,
        draftMode: {
          enable: '/api/draft',
        },
      },
      name: 'editor',
      title: 'Visual Editor',
      icon: () => '✨',
    }),
    visionTool({
      defaultApiVersion: '2024-01-01',
    }),
    media({
      creditLine: {
        enabled: true,
        excludeSources: [],
      },
    }),
    colorInput(),
    codeInput(),
    table(),
  ],

  basePath: '/studio',

  schema: {
    types: schemas,
  },

  // Document actions
  document: {
    actions: (prev, context) => {
      return prev
    },
  },

  // Tools configuration
  tools: (prev) => {
    return prev.map((tool) => {
      if (tool.name === 'editor') {
        return {
          ...tool,
          options: {
            ...tool.options,
            defaultDocumentNode: (S: any, { schemaType }: any) => {
              if (schemaType === 'page') {
                return S.document().views([
                  S.view.form(),
                  S.view.component(() => null).title('Preview'),
                ])
              }
              return S.document()
            },
          },
        }
      }
      return tool
    })
  },
})
