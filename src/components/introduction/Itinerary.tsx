import { useId, useState } from 'react'
import { schedules } from './introduction-data'
import { DayTabs } from './DayTabs'
import { ScheduleList } from './ScheduleList'

export function Itinerary() {
  const [day, setDay] = useState(1)
  const id = useId()
  return (
    <div className="itinerary">
      <div className="itinerary-top">
        <div>
          <span className="small-label">우리의 여행 일정</span>
          <h3>느긋하게, 제주 한 바퀴</h3>
        </div>
        <span className="example-label">미리보기</span>
      </div>
      <DayTabs day={day} count={schedules.length} id={id} onChange={setDay} />
      <ScheduleList items={schedules[day - 1]} id={id} day={day} />
    </div>
  )
}
