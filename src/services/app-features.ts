export type AppFeature = {
  id: number
  title: string
  description: string
}

export async function fetchAppFeatures(signal: AbortSignal): Promise<AppFeature[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}content/app-features.json`, {
    signal,
  })

  if (!response.ok) {
    throw new Error('앱 소개를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.')
  }

  return response.json()
}
