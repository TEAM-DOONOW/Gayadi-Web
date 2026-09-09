import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScheduleItem } from './ScheduleItem'


const meta = {
  title: 'Components/Introduction/ScheduleItem',
  component: ScheduleItem,
  decorators: [(Story) => <div className="itinerary">
    <ol className="schedule">
      <Story />
    </ol>
  </div>],
  args: { number: 1, time: '10:00', title: '제주 공항 도착', detail: '설레는 여행의 시작' },
} satisfies Meta<typeof ScheduleItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
