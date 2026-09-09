import type { destinations } from './introduction-data'

export function DestinationCard({ item }: { item: (typeof destinations)[number] }) {

  return (
    <figure className="destination-card" key={item.image}>
      <img src={`/images/${item.image}.jpg`} alt={item.place} fetchPriority={item.image === 'lake' ? 'high' : 'auto'} />
      <figcaption>
        <span>{item.label}</span>
        <h2>{item.title}</h2>
        <p>{item.place}</p>
      </figcaption>
    </figure>
  )
}
