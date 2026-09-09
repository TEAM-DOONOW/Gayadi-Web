import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScheduleList } from './ScheduleList'
import { schedules } from './introduction-data'

const meta = {
  title: 'Introduction/ScheduleList',
  component: ScheduleList,
  decorators: [(Story) => <div className="itinerary">
    <button role="tab" id="story-schedule-day-1" aria-controls="story-schedule-panel" aria-selected>DAY 1</button>
    <Story />
  </div>],
  args: { items: schedules[0], id: 'story-schedule', day: 1 },
} satisfies Meta<typeof ScheduleList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
