import { ScrollReveal } from '../shared/ScrollReveal'
import { MascotPanel } from './MascotPanel'

export function TravelFeatureCard() {
  return (
    <article className="feature-featured">
      <ScrollReveal className="feature-copy">
        <span className="pill">나만의 여행</span>
        <h3>가고 싶은 곳이 여행이 되는 순간</h3>
        <p>여행지와 날짜만 정하면,<br />흩어져 있던 여행 준비를 한곳에서.</p>
      </ScrollReveal>
      <div className="feature-preview">
        <MascotPanel />
        <div className="trip-summary">
          <img src="/images/beach.jpg" alt="제주 여행의 맑은 바다" loading="lazy" />
          <h4>우리의 다음 여행, 제주</h4>
          <p>제주 · 2박 3일</p>
          <a className="text-button" href="/download">첫 여행 만들어 보기</a>
        </div>
      </div>
    </article>
  )
}
