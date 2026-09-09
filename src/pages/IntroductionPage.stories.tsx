import type { Meta, StoryObj } from '@storybook/react-vite'
import { IntroductionPage } from './IntroductionPage'


const meta = {
  title: 'Pages/IntroductionPage',
  component: IntroductionPage,

  args: {},
} satisfies Meta<typeof IntroductionPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
