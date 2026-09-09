import { delay, http, HttpResponse } from 'msw'

// Keep story data stable when the production introduction copy changes.
const features = [
  {
    id: 1,
    title: '나의 여행을 한곳에',
    description: '새로운 여행을 추가하고, 여행 목록을 한눈에 확인해 보세요.',
  },
  {
    id: 2,
    title: '나를 담은 프로필',
    description: '프로필을 설정하고 나만의 여행을 시작해 보세요.',
  },
]

const endpoint = '*/content/app-features.json'

export const appFeatureHandlers = {
  success: () => http.get(endpoint, () => HttpResponse.json(features)),
  empty: () => http.get(endpoint, () => HttpResponse.json([])),
  loading: () => http.get(endpoint, async () => {
    await delay('infinite')
    return HttpResponse.json(features)
  }),
  error: () => http.get(endpoint, () => new HttpResponse(null, { status: 503 })),
  longContent: () => http.get(endpoint, () => HttpResponse.json(features.map((feature) => ({
    ...feature,
    title: `${feature.title} — 함께 떠나는 새로운 여행의 시작`,
    description: feature.description.repeat(5),
  })))),
  retry: () => {
    let attempts = 0
    return http.get(endpoint, async () => {
      attempts += 1
      if (attempts === 1) return new HttpResponse(null, { status: 503 })
      await delay(500)
      return HttpResponse.json(features)
    })
  },
}
