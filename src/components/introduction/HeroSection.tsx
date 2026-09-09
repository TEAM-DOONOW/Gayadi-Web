import { TravelArtStrip } from './TravelArtStrip'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">다음 여행,<br className="mobile-break" /> 가야디와 함께</h1>
        <p className="hero-description">국내 여행 계획부터 기록까지.</p>
      </div>
      <TravelArtStrip />
    </section>
  )
}
