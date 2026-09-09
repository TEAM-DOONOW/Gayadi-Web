import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlanningSection } from './PlanningSection'


const meta = {
  title: 'Introduction/PlanningSection',
  component: PlanningSection,

  args: {},
} satisfies Meta<typeof PlanningSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
