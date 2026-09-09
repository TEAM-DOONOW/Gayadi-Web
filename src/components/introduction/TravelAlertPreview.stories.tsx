import type { Meta, StoryObj } from '@storybook/react-vite'
import { TravelAlertPreview } from './TravelAlertPreview'

const meta = {
  title: 'Components/Introduction/TravelAlertPreview',
  component: TravelAlertPreview,
  decorators: [(Story) => <div style={{ maxWidth: 800, margin: 'auto' }}><Story /></div>],
} satisfies Meta<typeof TravelAlertPreview>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const Mobile: Story = {
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
