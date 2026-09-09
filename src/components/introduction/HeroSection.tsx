import { DestinationGallery } from './DestinationGallery'

export function HeroSection() {

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">떠나고 싶은 순간부터, 오래 기억할 순간까지</p>
        <h1 id="hero-title">다음 여행,<br className="mobile-break" /> 가야디와 함께<span className="orange">.</span>
        </h1>
        <p className="hero-description">계획은 가볍게, 설렘은 가득하게.<br className="mobile-break" /> 우리만의 여행을 시작해 보세요.</p>
      </div>
      <DestinationGallery />
      <div className="hero-bottom">
        <p>어디로 떠날까? 고민되는 날에도</p>
        <a href="#features" className="scroll-link">가야디가 함께할게요 <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
