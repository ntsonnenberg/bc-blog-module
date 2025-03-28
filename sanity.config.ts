import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags'

export default defineConfig({
  name: 'bespoke-code',
  title: 'Bespoke Code',
  projectId: 'x1c94e5l',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), media(), tags({})],
  schema: {
    types: schemaTypes,
  },
})
