import type { Meta, StoryObj } from '@storybook/react-vite'
import { DayTabs } from './DayTabs'
import { useState } from 'react'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Introduction/DayTabs',
  component: DayTabs,
  decorators: [(Story) => <div className="itinerary" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: { day: 1, count: 3, id: 'story-days', onChange: fn() },
} satisfies Meta<typeof DayTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Interactive: Story = {
  render: function Interactive(args) {
    const [day, setDay] = useState(args.day)
    return <DayTabs {...args} day={day} onChange={setDay} />
  },
}
export const LastDay: Story = { args: { day: 3 } }
