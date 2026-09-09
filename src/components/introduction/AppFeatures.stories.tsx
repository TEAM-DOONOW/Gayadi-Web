import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { appFeatureHandlers } from '../../../.storybook/mocks/app-features'
import { AppFeatures } from './AppFeatures'

const meta = {
  title: 'Components/Introduction/AppFeatures',
  component: AppFeatures,
  decorators: [
    (Story) => <div className="mx-auto max-w-3xl px-6 pb-8 text-slate-900"><Story /></div>,
  ],
  beforeEach({ msw }) {
    msw.use(appFeatureHandlers.success())
  },
} satisfies Meta<typeof AppFeatures>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.findByRole('list')).resolves.toBeVisible()
    await expect(canvas.getAllByRole('listitem')).toHaveLength(2)
  },
}

export const Loading: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.loading()) },
  play: async ({ canvas }) => {
    await expect(canvas.findByText('앱 소개를 불러오고 있습니다.')).resolves.toBeVisible()
  },
}

export const Empty: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.empty()) },
  play: async ({ canvas }) => {
    await expect(canvas.findByText('앱 소개를 준비하고 있습니다.')).resolves.toBeVisible()
    await expect(canvas.queryByRole('list')).not.toBeInTheDocument()
  },
}

export const Error: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.error()) },
  play: async ({ canvas }) => {
    await expect(canvas.findByRole('alert')).resolves.toHaveTextContent('앱 소개를 불러오지 못했습니다.')
    await expect(canvas.getByRole('button', { name: '다시 시도' })).toBeEnabled()
  },
}

export const RetrySuccess: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.retry()) },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(await canvas.findByRole('button', { name: '다시 시도' }))
    await expect(canvas.findByRole('list')).resolves.toBeVisible()
    await expect(canvas.queryByRole('alert')).not.toBeInTheDocument()
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument()
  },
}

export const LongContent: Story = {
  beforeEach({ msw }) { msw.use(appFeatureHandlers.longContent()) },
}

export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: 'iphone12', isRotated: false } },
}
