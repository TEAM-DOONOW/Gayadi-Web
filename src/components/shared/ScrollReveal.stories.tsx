import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { ScrollReveal } from './ScrollReveal'

const meta = {
  title: 'Components/Shared/ScrollReveal',
  component: ScrollReveal,
  args: { children: <h2>국내 여행 계획부터 기록까지</h2> },
} satisfies Meta<typeof ScrollReveal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const OnScroll: Story = {
  decorators: [(Story) => <div style={{ paddingTop: '120vh', paddingBottom: '40vh' }}><Story /></div>],
  play: async ({ canvas }) => {
    const heading = canvas.getByRole('heading')
    const reveal = heading.parentElement!
    await waitFor(() => expect(reveal).toHaveAttribute('data-revealed', 'false'))
    heading.scrollIntoView({ block: 'center', behavior: 'instant' })
    await waitFor(() => expect(reveal).toHaveAttribute('data-revealed', 'true'))
    window.scrollTo({ top: 0, behavior: 'instant' })
    await expect(reveal).toHaveAttribute('data-revealed', 'true')
  },
}
