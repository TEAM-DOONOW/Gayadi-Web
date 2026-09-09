export function FooterPolicies({ onNotice }: { onNotice: (title: string) => void }) {

  return (
    <nav className="footer-policies" aria-label="서비스 정책">
      <button onClick={() => onNotice('개인정보 처리방침')}>개인정보 처리방침</button>
      <span aria-hidden="true">|</span>
      <button onClick={() => onNotice('서비스 이용약관')}>서비스 이용약관</button>
    </nav>
  )
}
