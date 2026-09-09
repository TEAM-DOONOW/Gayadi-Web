import type { Meta, StoryObj } from '@storybook/react-vite'
import { MascotPanel } from './MascotPanel'


const meta = {
  title: 'Components/Introduction/MascotPanel',
  component: MascotPanel,
  decorators: [(Story) => <div className="feature-featured" style={{ padding: 24 }}>
    <Story />
  </div>],
  args: {},
} satisfies Meta<typeof MascotPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
