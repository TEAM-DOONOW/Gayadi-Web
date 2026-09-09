export function DayTabs({ day, count, id, onChange }: {
  day: number
  count: number
  id: string
  onChange: (day: number) => void
}) {
  return <div className="day-tabs" role="tablist" aria-label="여행 날짜">
    {Array.from({ length: count }, (_, index) => index + 1).map(value => (
      <button key={value} role="tab" id={`${id}-day-${value}`}
        aria-selected={day === value} aria-controls={`${id}-panel`}
        tabIndex={day === value ? 0 : -1}
        onClick={() => onChange(value)}
        onKeyDown={event => {
          const next = event.key === 'ArrowRight' ? value % count + 1
            : event.key === 'ArrowLeft' ? (value + count - 2) % count + 1
              : event.key === 'Home' ? 1 : event.key === 'End' ? count : null
          if (next !== null) {
            event.preventDefault()
            onChange(next)
            document.getElementById(`${id}-day-${next}`)?.focus()
          }
        }}>DAY {value}</button>
    ))}
  </div>
}
