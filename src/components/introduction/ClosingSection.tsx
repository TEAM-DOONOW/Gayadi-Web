import { ScrollReveal } from '../shared/ScrollReveal'

export function ClosingSection() {

  return (
    <section className="closing">
      <ScrollReveal className="closing-copy">
      <p className="section-kicker">이제, 떠날 준비 됐나요?</p>
      <h2>다음 여행도 가야디와 함께</h2>
      <p>새로운 풍경, 새로운 순간. 시작은 여기서.</p>
      </ScrollReveal>
      <div className="closing-actions">
        <a className="button button-secondary" href="#features">가야디 둘러보기</a>
        <a className="button" href="/download">나의 첫 여행 만들기
        </a>
      </div>
    </section>
  )
}
