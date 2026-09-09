import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { appFeatureHandlers } from '../.storybook/mocks/app-features'
import App from './App'

const meta = {
  title: 'Pages/App',
  component: App,
  beforeEach({ msw }) {
    msw.use(appFeatureHandlers.success())
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('다음 여행, 가야디와 함께')
    await expect(canvas.findByRole('list')).resolves.toBeVisible()
  },
}

export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}

export const Loading: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.loading()) },
}

export const Error: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.error()) },
}

export const Empty: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.empty()) },
}
