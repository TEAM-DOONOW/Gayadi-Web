import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test'
import { SiteFooter } from './SiteFooter'


const meta = {
  title: 'Components/Shared/SiteFooter',
  component: SiteFooter,

  args: {},
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }

export const PolicyDialog: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: '개인정보 처리방침' })
    await userEvent.click(trigger)
    let dialog = canvas.getByRole('dialog')
    await expect(dialog).toHaveAccessibleName('개인정보 처리방침')
    await userEvent.click(within(dialog).getByRole('button', { name: '확인' }))
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
    await expect(trigger).toHaveFocus()
    await userEvent.click(canvas.getByRole('button', { name: '서비스 이용약관' }))
    dialog = canvas.getByRole('dialog')
    await expect(dialog).toHaveAccessibleName('서비스 이용약관')
    // Synthetic keyboard events do not trigger the browser's native dialog cancellation.
    fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }))
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
  },
}
