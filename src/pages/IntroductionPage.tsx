import { HeroSection } from '../components/introduction/HeroSection'
import { IntroductionSection } from '../components/introduction/IntroductionSection'
import { PlanningSection } from '../components/introduction/PlanningSection'
import { MemoriesSection } from '../components/introduction/MemoriesSection'
import { ClosingSection } from '../components/introduction/ClosingSection'

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
