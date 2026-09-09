import { HeroSection } from '../components/introduction/HeroSection'
import { TravelPreparation } from '../components/introduction/TravelPreparation'
import { IntroductionSection } from '../components/introduction/IntroductionSection'
import { PlanningSection } from '../components/introduction/PlanningSection'
import { TravelAlertsSection } from '../components/introduction/TravelAlertsSection'
import { MemoriesSection } from '../components/introduction/MemoriesSection'
import { ClosingSection } from '../components/introduction/ClosingSection'

export function IntroductionPage() {

  return (
    <main id="main">
      <HeroSection />
      <TravelPreparation />
      <IntroductionSection />
      <PlanningSection />
      <TravelAlertsSection />
      <MemoriesSection />
      <ClosingSection />
    </main>
  )
}
