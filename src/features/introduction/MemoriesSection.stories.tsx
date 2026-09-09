import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoriesSection } from './MemoriesSection'


const meta = {
  title: 'Introduction/MemoriesSection',
  component: MemoriesSection,

  args: {},
} satisfies Meta<typeof MemoriesSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
