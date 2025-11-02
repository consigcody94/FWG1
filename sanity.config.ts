import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'FWG Website',

  projectId: 's8by8xgm',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), colorInput()],

  basePath: '/studio',

  schema: {
    types: schemas,
  },
})
