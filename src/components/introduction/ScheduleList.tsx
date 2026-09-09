import { ScheduleItem } from './ScheduleItem'

export function ScheduleList({ items, id, day }: { items: string[][]; id: string; day: number }) {

  return (
    <ol className="schedule" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-day-${day}`} tabIndex={0}>
      {items.map(([time, title, detail], index) => <ScheduleItem key={title} time={time} title={title} detail={detail} number={index + 1} />)}
    </ol>
  )
}
