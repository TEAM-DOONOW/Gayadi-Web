import type { Meta, StoryObj } from '@storybook/react-vite'
import { DestinationGallery } from './DestinationGallery'


const meta = {
  title: 'Components/Introduction/DestinationGallery',
  component: DestinationGallery,
  decorators: [(Story) => <div className="hero" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof DestinationGallery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
