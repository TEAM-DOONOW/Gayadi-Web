import { BrandLogo } from './BrandLogo'

export function SiteHeader({ isDownloadPage = false }: { isDownloadPage?: boolean }) {

  return (
    <header className="site-header">
      <div className="nav-inner">
        <BrandLogo />
        <nav aria-label="메인 메뉴">
          <a className="button button-small" href="/download" aria-current={isDownloadPage ? 'page' : undefined}>여행 시작하기</a>
        </nav>
      </div>
    </header>
  )
}
