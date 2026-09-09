import type { Meta, StoryObj } from '@storybook/react-vite'
import { TravelFeatureCard } from './TravelFeatureCard'


const meta = {
  title: 'Introduction/TravelFeatureCard',
  component: TravelFeatureCard,
  decorators: [(Story) => <div className="intro section-wrap" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof TravelFeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
