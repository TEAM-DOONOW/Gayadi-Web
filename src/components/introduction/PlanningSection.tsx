import { TripPhoto } from './TripPhoto'
import { Itinerary } from './Itinerary'

export function PlanningSection() {

  return (
    <section className="planning section-wrap" aria-labelledby="planning-title">
      <div className="section-heading">
        <span className="pill">여행 일정</span>
        <h2 id="planning-title">머릿속 여행을,<br />한눈에 보이는 일정으로.</h2>
        <p className="section-description">찾아둔 장소도, 꼭 가고 싶은 맛집도.<br />하루하루 담다 보면 우리 여행이 완성돼요.</p>
      </div>
      <div className="itinerary-demo">
        <TripPhoto />
        <Itinerary />
      </div>
    </section>
  )
}
