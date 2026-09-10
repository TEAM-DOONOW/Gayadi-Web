import gayadiQr from '../../assets/images/gayadi_qr.png'

export function DownloadQrPanel() {

  return (
    <div className="download-qr-panel">
      <div className="download-qr">
        <img src={gayadiQr} alt="가야디 앱 다운로드 QR 코드" width="180" height="180" />
      </div>
      <img className="download-logo" src="/images/gayadi_logo.png" alt="GAYADI" width="1106" height="226" />
    </div>
  )
}
