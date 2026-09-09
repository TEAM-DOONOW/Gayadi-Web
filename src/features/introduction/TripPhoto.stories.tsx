import type { Meta, StoryObj } from '@storybook/react-vite'
import { TripPhoto } from './TripPhoto'


const meta = {
  title: 'Introduction/TripPhoto',
  component: TripPhoto,
  decorators: [(Story) => <div className="itinerary-demo" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof TripPhoto>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
