import { destinations } from './introduction-data'
import { DestinationCard } from './DestinationCard'

export function DestinationGallery() {

  return (
    <div className="destination-gallery" aria-label="여행에서 만날 풍경">{destinations.map(item => <DestinationCard key={item.image} item={item} />)}</div>
  )
}
