export function FooterSocials({ onNotice }: { onNotice: (title: string) => void }) {

  return (
    <nav className="footer-socials" aria-label="가야디 소셜 채널">
      {[['instagram', '인스타그램'], ['discord', '디스코드'], ['chat', '문의 채널']].map(([icon, label]) => icon === 'discord' ? (
        <a key={icon} href="https://discord.gg/E75YQrAxDT" aria-label="가야디 디스코드" title="가야디 디스코드">
          <img src="/icons/discord.svg" alt="" width="20" height="20" />
        </a>
      ) : (
        <button key={icon} aria-label={`${label} 안내`} title={`${label} 준비 중`} onClick={() => onNotice(label)}>
          <img src={`/icons/${icon}.svg`} alt="" width="20" height="20" />
        </button>
      ))}
    </nav>
  )
}
