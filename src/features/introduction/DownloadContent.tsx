import { DownloadQrPanel } from './DownloadQrPanel'

// Set this to the official app download landing page or store URL when available.
export const APP_DOWNLOAD_URL = ''

export function DownloadContent({ url = APP_DOWNLOAD_URL }: { url?: string }) {
  let downloadUrl = ''
  try {
    const parsed = new URL(url)
    if (parsed.protocol === 'https:') downloadUrl = parsed.href
  } catch { /* No official download link has been configured yet. */ }

  return <div className="download-content">
    <h1 id="download-title">다음 여행은 가야디 앱에서 시작해요!</h1>
    <p id="download-description">{downloadUrl ? '휴대폰 카메라로 QR 코드를 찍고 앱을 다운로드해요.' : '곧 가야디 앱으로 만나요. 다운로드 링크를 준비하고 있어요.'}</p>
    <DownloadQrPanel />
    {downloadUrl && <a className="download-direct" href={downloadUrl} target="_blank" rel="noopener noreferrer">휴대폰으로 보고 있다면, 바로 다운로드 ↗</a>}
  </div>
}
