import { ScrollReveal } from '../shared/ScrollReveal'
import { TravelAlertPreview } from './TravelAlertPreview'

export function TravelAlertsSection() {
  return (
    <section className="travel-alerts section-wrap" aria-labelledby="travel-alerts-title">
      <ScrollReveal className="section-heading">
        <span className="pill">여행 중 알림</span>
        <h2 id="travel-alerts-title">날씨도, 붐비는 시간도 미리 알려드려요</h2>
        <p className="section-description">날씨와 혼잡도를 예측해,<br />상황에 맞는 여행 코스로 변경을 제안해요.</p>
      </ScrollReveal>
      <TravelAlertPreview />
    </section>
  )
}
