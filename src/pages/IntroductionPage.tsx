import { HeroSection } from '../features/introduction/HeroSection'
import { IntroductionSection } from '../features/introduction/IntroductionSection'
import { PlanningSection } from '../features/introduction/PlanningSection'
import { MemoriesSection } from '../features/introduction/MemoriesSection'
import { ClosingSection } from '../features/introduction/ClosingSection'

export function IntroductionPage() {

  return (
    <main id="main">
      <HeroSection />
      <IntroductionSection />
      <PlanningSection />
      <MemoriesSection />
      <ClosingSection />
    </main>
  )
}
