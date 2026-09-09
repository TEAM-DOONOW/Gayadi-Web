import { MemoryVisual } from './MemoryVisual'
import { SaveMemoryButton } from './SaveMemoryButton'

export function MemoriesSection() {

  return (
    <section className="memories-section">
      <div className="section-wrap memories-inner">
        <MemoryVisual />
        <div className="feature-copy">
          <span className="pill">여행 기록</span>
          <h2>여행은 끝나도,<br />우리의 순간은 남으니까.</h2>
          <p>좋았던 풍경과 잊고 싶지 않은 순간을 모아요.<br />언제든 다시 꺼내 볼 수 있는<br />나만의 여행 서랍이 되어줄게요.</p>
          <SaveMemoryButton />
        </div>
      </div>
    </section>
  )
}
