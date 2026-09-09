import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteHeader } from './SiteHeader'


const meta = {
  title: 'Layout/SiteHeader',
  component: SiteHeader,

  args: {},
} satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Download: Story = {
  args: { isDownloadPage: true }, decorators: [(Story) => <div className="download-page">
    <Story />
  </div>]
}
