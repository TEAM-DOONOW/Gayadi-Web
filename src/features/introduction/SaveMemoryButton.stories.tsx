import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { SaveMemoryButton } from './SaveMemoryButton'


const meta = {
  title: 'Introduction/SaveMemoryButton',
  component: SaveMemoryButton,
  decorators: [(Story) => <div className="feature-copy" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof SaveMemoryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Toggle: Story = {
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    await expect(button).toHaveAttribute('aria-pressed', 'true')
    await expect(canvas.getByRole('status')).toHaveTextContent('이 페이지를 보는 동안 기억해 둘게요.')
    await userEvent.click(button)
    await expect(button).toHaveAttribute('aria-pressed', 'false')
    await expect(canvas.getByRole('status')).toBeEmptyDOMElement()
  },
}
export const Saved: Story = {
  play: async ({ canvas }) => { await userEvent.click(canvas.getByRole('button')) },
}
