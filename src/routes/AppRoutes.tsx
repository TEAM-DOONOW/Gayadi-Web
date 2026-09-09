import { SiteLayout } from '../layouts/SiteLayout'
import { DownloadPage } from '../pages/DownloadPage'
import { IntroductionPage } from '../pages/IntroductionPage'

function AppRoutes() {
  const isDownloadPage = window.location.pathname.replace(/\/+$/, '') === '/download'
  return (
    <SiteLayout isDownloadPage={isDownloadPage}>
      {isDownloadPage ? <DownloadPage /> : <IntroductionPage />}
    </SiteLayout>
  )
}

export default AppRoutes
