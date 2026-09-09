import { ScrollReveal } from '../shared/ScrollReveal'
import { MemoryVisual } from './MemoryVisual'
import { SaveMemoryButton } from './SaveMemoryButton'

export function MemoriesSection() {
  return (
    <section className="memories-section" aria-labelledby="memories-title">
      <div className="section-wrap memories-inner">
        <ScrollReveal className="feature-copy">
          <span className="pill">여행 기록</span>
          <h2 id="memories-title">다시 꺼내 보고 싶은 여행의 순간</h2>
          <p>좋았던 풍경과 함께한 기억을 모아,<br />언제든 돌아볼 수 있는 우리만의 여행 기록.</p>
        </ScrollReveal>
        <MemoryVisual />
        <div className="memory-action"><SaveMemoryButton /></div>
      </div>
    </section>
  )
}
