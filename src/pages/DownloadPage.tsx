import { DownloadContent } from '../components/download/DownloadContent'

export function DownloadPage() {

  return (
    <main id="main" className="download-main">
      <section className="download-card" aria-labelledby="download-title">
        <DownloadContent />
      </section>
    </main>
  )
}
