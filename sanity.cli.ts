import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'x1c94e5l',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  graphql: [
    {
      playground: true,
      tag: 'experiment',
      workspace: 'bespoke-code',
      id: 'schema-experiment',
    },
  ],
})
