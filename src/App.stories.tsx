import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import App from './App'

const meta = { title: 'Pages/App', component: App } satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('여행 가야지, 가야디')
    await expect(canvas.getByRole('img', { name: '가야디' })).toBeVisible()
    await expect(canvas.getByRole('tablist', { name: '여행 날짜' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: '여행 시작하기' })).toHaveAttribute('href', '/download')
  },
}
export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
