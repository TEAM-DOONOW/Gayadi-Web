import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrandLogo } from './BrandLogo'


const meta = {
  title: 'Components/Shared/BrandLogo',
  component: BrandLogo,
  decorators: [(Story) => <div className="site-header" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof BrandLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Footer: Story = {
  args: { placement: 'footer' }, decorators: [(Story) => <div style={{ background: "#f3f4f9", padding: 24 }}>
    <Story />
  </div>]
}
