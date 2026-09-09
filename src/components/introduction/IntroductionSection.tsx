import { ScrollReveal } from '../shared/ScrollReveal'
import { TravelFeatureCard } from './TravelFeatureCard'

export function IntroductionSection() {
  return (
    <section className="intro section-wrap" id="features" aria-labelledby="intro-title">
      <ScrollReveal>
      <p className="section-kicker">여행 준비부터 기록까지</p>
      <h2 id="intro-title">번거로운 준비는 가야디에서 한 번에</h2>
      </ScrollReveal>
      <TravelFeatureCard />
    </section>
  )
}
