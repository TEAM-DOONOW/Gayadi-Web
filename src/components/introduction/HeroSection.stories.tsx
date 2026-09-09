import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroSection } from './HeroSection'


const meta = {
  title: 'Components/Introduction/HeroSection',
  component: HeroSection,

  args: {},
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = { globals: { viewport: { value: 'iphone12', isRotated: false } } }
