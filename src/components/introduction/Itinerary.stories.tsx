import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Itinerary } from './Itinerary'


const meta = {
  title: 'Components/Introduction/Itinerary',
  component: Itinerary,

  args: {},
} satisfies Meta<typeof Itinerary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }

export const ChangeDay: Story = {
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('tab', { name: 'DAY 2' }))
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('비자림 산책')
    await expect(canvas.getByRole('tabpanel')).not.toHaveTextContent('제주 공항 도착')
    await userEvent.keyboard('{ArrowRight}')
    await expect(canvas.getByRole('tab', { name: 'DAY 3' })).toHaveFocus()
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('동문시장 구경')
    await userEvent.keyboard('{Home}')
    await expect(canvas.getByRole('tab', { name: 'DAY 1' })).toHaveFocus()
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('제주 공항 도착')
  },
}
export const IndependentInstances: Story = {
  render: () => <>
    <div data-testid="first">
      <Itinerary />
    </div>
    <div data-testid="second">
      <Itinerary />
    </div>
  </>,
  play: async ({ canvas }) => {
    const first = within(canvas.getByTestId('first'))
    const second = within(canvas.getByTestId('second'))
    await userEvent.click(first.getByRole('tab', { name: 'DAY 2' }))
    await expect(first.getByRole('tabpanel')).toHaveTextContent('비자림 산책')
    await expect(second.getByRole('tabpanel')).toHaveTextContent('제주 공항 도착')
    await expect(first.getByRole('tabpanel').id).not.toBe(second.getByRole('tabpanel').id)
  },
}
