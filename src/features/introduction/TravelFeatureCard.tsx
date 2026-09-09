import { MascotPanel } from './MascotPanel'

export function TravelFeatureCard() {

  return (
    <article className="feature-featured">
      <div className="feature-copy">
        <span className="pill">나만의 여행</span>
        <h3>“우리, 어디 가야디?”<br />그 한마디에서 시작.</h3>
        <p>가고 싶은 곳과 날짜만 정해 보세요.<br />막연했던 여행이 나만의 여정이 되는 순간,<br />든든한 여행 친구가 함께할게요.</p>
        <a className="text-button" href="/download">첫 여행 만들어 보기 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <MascotPanel />
    </article>
  )
}
