import type { Meta, StoryObj } from '@storybook/react-vite'
import { IntroductionSection } from './IntroductionSection'


const meta = {
  title: 'Components/Introduction/IntroductionSection',
  component: IntroductionSection,

  args: {},
} satisfies Meta<typeof IntroductionSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
