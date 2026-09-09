export function ScheduleItem({ time, title, detail, number }: { time: string; title: string; detail: string; number: number }) {

  return (
    <li>
      <span className="stop-number">{number}</span>
      <div>
        <span className="schedule-time">{time}</span>
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </li>
  )
}
