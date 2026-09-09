// Replace this asset with the supplied QR image when available.
const APP_DOWNLOAD_QR_IMAGE = '/images/download-qr-placeholder.svg'

export function DownloadQrPanel() {

  return (
    <div className="download-qr-panel">
      <div className="download-qr">
        <img src={APP_DOWNLOAD_QR_IMAGE} alt="앱 다운로드 QR 임시 이미지" width="180" height="180" />
      </div>
      <img className="download-logo" src="/images/gayadi_logo.png" alt="GAYADI" width="1106" height="226" />
    </div>
  )
}
