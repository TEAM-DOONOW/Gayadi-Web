import type { Meta, StoryObj } from '@storybook/react-vite'
import { DownloadPage } from './DownloadPage'


const meta = {
  title: 'Pages/DownloadPage',
  component: DownloadPage,
  decorators: [(Story) => <div className="app download-page" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof DownloadPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
