import { SiteLayout } from './components/layout/SiteLayout'
import { DownloadPage } from './pages/DownloadPage'
import { IntroductionPage } from './pages/IntroductionPage'

function App() {
  const isDownloadPage = window.location.pathname.replace(/\/+$/, '') === '/download'
  return (
    <SiteLayout isDownloadPage={isDownloadPage}>
      {isDownloadPage ? <DownloadPage /> : <IntroductionPage />}
    </SiteLayout>
  )
}

export default App
