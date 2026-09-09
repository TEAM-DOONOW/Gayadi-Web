export function BrandLogo({ placement = 'header' }: { placement?: 'header' | 'footer' }) {

  return (
    <a href="/" className={`brand-logo brand-logo-${placement}`} aria-label="가야디 홈">
      <img src="/images/gayadi_logo.png" alt="GAYADI" width="1106" height="226" />
    </a>
  )
}
