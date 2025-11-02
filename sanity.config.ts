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
    // presentationTool commented out due to TypeScript compatibility issues
    // Will be re-enabled after package updates
    // presentationTool({
    //   previewUrl: PREVIEW_URL,
    // }),
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
})
