import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteLayout } from './SiteLayout'


const meta = {
  title: 'Layout/SiteLayout',
  component: SiteLayout,

  args: { children: <main id="main">페이지 콘텐츠</main> },
} satisfies Meta<typeof SiteLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
