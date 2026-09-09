import { TravelArtStrip } from './TravelArtStrip'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>여행 가야지,</span>
          <img className="hero-logo" src="/images/gayadi_logo.png" alt="가야디" width="1106" height="226" />
        </h1>
        <p className="hero-description">계획부터 기록까지, 한 번에 가야디.</p>
      </div>
      <TravelArtStrip />
    </section>
  )
}
