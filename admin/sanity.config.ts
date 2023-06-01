import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'admin',

  projectId: 'ylppjstd',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
