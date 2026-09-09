import type { ReactNode } from 'react'
import { SiteHeader } from '../components/shared/SiteHeader'
import { SiteFooter } from '../components/shared/SiteFooter'

export function SiteLayout({ children, isDownloadPage = false }: { children: ReactNode; isDownloadPage?: boolean }) {

  return (
    <div className={isDownloadPage ? 'app download-page' : 'app'}>
      <a href="#main" className="skip-link">본문으로 이동</a>
      <SiteHeader isDownloadPage={isDownloadPage} />
      {children}
      <SiteFooter />
    </div>
  )
}
