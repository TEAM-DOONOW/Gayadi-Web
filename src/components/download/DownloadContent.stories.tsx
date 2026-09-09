import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { DownloadContent } from './DownloadContent'


const meta = {
  title: 'Components/Download/DownloadContent',
  component: DownloadContent,
  decorators: [(Story) => <div className="download-card" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof DownloadContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Ready: Story = {
  args: { url: 'https://example.com/download' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link')).toHaveAttribute('href', 'https://example.com/download')
    await expect(canvas.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
  },
}
export const InvalidUrl: Story = {
  args: { url: 'not-a-url' },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('link')).not.toBeInTheDocument()
    await expect(canvas.getByText(/다운로드 링크를 준비/)).toBeVisible()
  },
}
export const InsecureUrl: Story = { ...InvalidUrl, args: { url: 'http://example.com/download' } }
