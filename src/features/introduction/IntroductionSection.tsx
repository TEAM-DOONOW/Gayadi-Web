import { TravelFeatureCard } from './TravelFeatureCard'

export function IntroductionSection() {

  return (
    <section className="intro section-wrap" id="features" aria-labelledby="intro-title">
      <p className="section-kicker">LESS PLANNING, MORE TRAVELING</p>
      <h2 id="intro-title">여행의 설렘만 챙겨요.<br />나머지는 가야디와 함께.</h2>
      <p className="section-description">흩어져 있던 여행 준비를 한곳에.<br />떠나기 전부터 돌아온 뒤까지, 더 가벼워지는 여행.</p>
      <TravelFeatureCard />
    </section>
  )
}
