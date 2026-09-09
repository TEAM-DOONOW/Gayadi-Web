import type { Meta, StoryObj } from '@storybook/react-vite'
import { FooterPolicies } from './FooterPolicies'
import { fn } from 'storybook/test'

const meta = {
  title: 'Layout/FooterPolicies',
  component: FooterPolicies,
  decorators: [(Story) => <div className="footer" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: { onNotice: fn() },
} satisfies Meta<typeof FooterPolicies>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
