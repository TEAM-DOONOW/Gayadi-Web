import { ScrollReveal } from '../shared/ScrollReveal'

const tasks = ['여행지 찾아보기', '맛집 저장하기', '숙소 비교하기', '동선 정리하기', '일정 공유하기', '사진 모아두기']

export function TravelPreparation() {
  return (
    <section className="travel-preparation" aria-labelledby="preparation-title">
      <ScrollReveal className="preparation-content">
        <h2 id="preparation-title">여행 준비,<br />아직도 따로<br />하고 있나요?</h2>
        <ul className="preparation-tasks" aria-label="흩어져 있는 여행 준비">
          {tasks.map(task => <li key={task}>{task}</li>)}
        </ul>
      </ScrollReveal>
    </section>
  )
}
