import { useQuery } from '@tanstack/react-query'
import { fetchAppFeatures } from '../../services/app-features'

export function useAppFeatures() {
  return useQuery({
    queryKey: ['introduction', 'features'],
    queryFn: ({ signal }) => fetchAppFeatures(signal),
  })
}
