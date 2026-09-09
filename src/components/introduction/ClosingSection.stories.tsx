import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClosingSection } from './ClosingSection'


const meta = {
  title: 'Components/Introduction/ClosingSection',
  component: ClosingSection,

  args: {},
} satisfies Meta<typeof ClosingSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
