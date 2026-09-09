import type { Meta, StoryObj } from '@storybook/react-vite'
import { NoticeDialog } from './NoticeDialog'
import { useState } from 'react'
import { fn } from 'storybook/test'

const meta = {
  title: 'Layout/NoticeDialog',
  component: NoticeDialog,

  args: { title: '개인정보 처리방침', open: false, onClose: fn() },
} satisfies Meta<typeof NoticeDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: { open: true },
  render: function Open(args) {
    const [open, setOpen] = useState(args.open)
    return <>
      <button onClick={() => setOpen(true)}>안내 열기</button>
      <NoticeDialog {...args} open={open} onClose={() => setOpen(false)} />
    </>
  },
}
