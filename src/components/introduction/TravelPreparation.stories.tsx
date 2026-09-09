import type { Meta, StoryObj } from '@storybook/react-vite'
import { TravelPreparation } from './TravelPreparation'

const meta = {
  title: 'Components/Introduction/TravelPreparation',
  component: TravelPreparation,
} satisfies Meta<typeof TravelPreparation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
