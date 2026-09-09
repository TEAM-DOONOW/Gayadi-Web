import { ScrollReveal } from '../shared/ScrollReveal'
import { TripPhoto } from './TripPhoto'
import { Itinerary } from './Itinerary'

export function PlanningSection() {

  return (
    <section className="planning section-wrap" aria-labelledby="planning-title">
      <ScrollReveal className="section-heading">
        <span className="pill">여행 일정</span>
        <h2 id="planning-title">하루하루, 한눈에 보이는 여행 일정</h2>
        <p className="section-description">찾아둔 장소부터 꼭 가고 싶은 맛집까지,<br />날짜별로 정리하면 여행 준비 끝.</p>
      </ScrollReveal>
      <div className="itinerary-demo">
        <TripPhoto />
        <Itinerary />
      </div>
    </section>
  )
}
