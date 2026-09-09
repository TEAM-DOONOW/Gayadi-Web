import type { Meta, StoryObj } from '@storybook/react-vite'
import { DownloadQrPanel } from './DownloadQrPanel'


const meta = {
  title: 'Introduction/DownloadQrPanel',
  component: DownloadQrPanel,
  decorators: [(Story) => <div className="download-content" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof DownloadQrPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
