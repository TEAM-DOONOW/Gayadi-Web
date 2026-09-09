import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterSocials } from './FooterSocials'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Shared/FooterSocials',
  component: FooterSocials,
  decorators: [(Story) => <div className="footer" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: { onNotice: fn() },
} satisfies Meta<typeof FooterSocials>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
