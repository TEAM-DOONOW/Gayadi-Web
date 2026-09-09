import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryVisual } from './MemoryVisual'


const meta = {
  title: 'Components/Introduction/MemoryVisual',
  component: MemoryVisual,

  args: {},
} satisfies Meta<typeof MemoryVisual>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
