import type { Meta, StoryObj } from '@storybook/react-vite'
import { DestinationCard } from './DestinationCard'
import { destinations } from './introduction-data'

const meta = {
  title: 'Components/Introduction/DestinationCard',
  component: DestinationCard,
  decorators: [(Story) => <div className="hero" style={{ padding: 24 }}>
    <div style={{ display: "flex", maxWidth: 360 }}>
      <Story />
    </div>
  </div>],
  args: { item: destinations[2] },
} satisfies Meta<typeof DestinationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
