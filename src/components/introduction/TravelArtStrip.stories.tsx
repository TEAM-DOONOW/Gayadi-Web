import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { TravelArtStrip } from './TravelArtStrip'

const meta = {
  title: 'Components/Introduction/TravelArtStrip',
  component: TravelArtStrip,
  decorators: [(Story) => <div style={{ background: '#14151e', paddingBlock: 24 }}><Story /></div>],
} satisfies Meta<typeof TravelArtStrip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('img')).toHaveLength(5)
    await expect(canvas.getByRole('region')).toHaveAttribute('tabindex', '0')
  },
}
export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
