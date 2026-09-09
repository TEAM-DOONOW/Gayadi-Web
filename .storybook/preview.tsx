import type { Preview } from '@storybook/react-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { mswLoader } from 'msw-storybook-addon/csf3'
import { StoryProviders } from './StoryProviders'
import '../src/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  loaders: [mswLoader()],
  decorators: [
    (Story, context) => (
      <StoryProviders key={context.id}>
        <Story />
      </StoryProviders>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    // Each iframe isolates the MSW handlers and query cache in documentation.
    docs: { story: { inline: false, height: '600px' } },
    viewport: { options: INITIAL_VIEWPORTS },
    options: { storySort: { order: ['Pages', 'Introduction'] } },
  },
}

export default preview
