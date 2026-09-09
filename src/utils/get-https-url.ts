export function getHttpsUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' ? parsed.href : ''
  } catch {
    return ''
  }
}
