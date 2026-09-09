import type { Meta, StoryObj } from '@storybook/react-vite'
import { TravelAlertsSection } from './TravelAlertsSection'

const meta = {
  title: 'Components/Introduction/TravelAlertsSection',
  component: TravelAlertsSection,
} satisfies Meta<typeof TravelAlertsSection>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
