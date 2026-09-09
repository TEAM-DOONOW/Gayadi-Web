import { useState } from 'react'
import { FooterInformation } from './FooterInformation'
import { FooterSocials } from './FooterSocials'
import { NoticeDialog } from './NoticeDialog'

export function SiteFooter() {
  const [notice, setNotice] = useState<string | null>(null)
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <FooterInformation onNotice={setNotice} />
          <FooterSocials onNotice={setNotice} />
        </div>
      </footer>
      <NoticeDialog title={notice ?? ''} open={notice !== null} onClose={() => setNotice(null)} />
    </>
  )
}
