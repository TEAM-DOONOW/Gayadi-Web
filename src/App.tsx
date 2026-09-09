import { useRef, useState } from 'react'
import { DownloadContent } from './features/introduction/DownloadContent'

const destinations = [
  { image: 'kyoto', title: '낯선 골목의 설렘', label: 'CITY WALK', place: '교토, 일본' },
  { image: 'beach', title: '아무것도 안 해도 좋은', label: 'SLOW MOMENTS', place: '바다로 떠나는 여행' },
  { image: 'lake', title: '마음이 쉬어가는 곳', label: 'INTO NATURE', place: '알프스의 어느 호숫가' },
  { image: 'road', title: '계획 밖의 즐거움', label: 'ON THE ROAD', place: '우리만의 로드 트립' },
  { image: 'mountain', title: '조금 더 멀리, 함께', label: 'NEW ADVENTURE', place: '산 너머 새로운 풍경' },
]
const schedules = [
  [['10:00', '제주 공항 도착', '설레는 여행의 시작'], ['12:00', '애월에서 점심', '바다 보며 맛있는 한 끼'], ['15:00', '협재 해수욕장', '에메랄드빛 바다 따라 산책']],
  [['09:00', '동네 카페에서 아침', '천천히 시작하는 하루'], ['11:00', '비자림 산책', '숲속에서 깊게 숨 쉬기'], ['17:00', '성산에서 노을 보기', '오늘의 가장 아름다운 순간']],
  [['10:00', '숙소에서 느긋한 아침', '마지막 날도 여유롭게'], ['12:00', '동문시장 구경', '여행의 맛을 담아가기'], ['16:00', '다음 여행을 기약하며', '가야디와 또 만나요']],
]

function App() {
  const isDownloadPage = window.location.pathname.replace(/\/+$/, '') === '/download'
  const [day, setDay] = useState(1)
  const [saved, setSaved] = useState(false)
  const footerDialog = useRef<HTMLDialogElement>(null)
  const [footerNotice, setFooterNotice] = useState('')
  function showFooterNotice(title: string) {
    setFooterNotice(title)
    footerDialog.current?.showModal()
  }

  return <div className={isDownloadPage ? 'app download-page' : 'app'}>
    <a href="#main" className="skip-link">본문으로 이동</a>
    <header className="site-header"><div className="nav-inner"><a href="/" className="brand-logo brand-logo-header" aria-label="가야디 홈"><img src="/images/gayadi_logo.png" alt="GAYADI" width="1106" height="226" /></a><nav aria-label="메인 메뉴"><a className="button button-small" href="/download" aria-current={isDownloadPage ? 'page' : undefined}>여행 시작하기</a></nav></div></header>
    {isDownloadPage ? <main id="main" className="download-main"><section className="download-card" aria-labelledby="download-title"><DownloadContent /></section></main> : <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">떠나고 싶은 순간부터, 오래 기억할 순간까지</p><h1 id="hero-title">다음 여행,<br className="mobile-break" /> 가야디와 함께<span className="orange">.</span></h1><p className="hero-description">계획은 가볍게, 설렘은 가득하게.<br className="mobile-break" /> 우리만의 여행을 시작해 보세요.</p></div>
        <div className="destination-gallery" aria-label="여행에서 만날 풍경">{destinations.map(item => <figure className="destination-card" key={item.image}><img src={`/images/${item.image}.jpg`} alt={item.place} fetchPriority={item.image === 'lake' ? 'high' : 'auto'} /><figcaption><span>{item.label}</span><h2>{item.title}</h2><p>{item.place}</p></figcaption></figure>)}</div>
        <div className="hero-bottom"><p>어디로 떠날까? 고민되는 날에도</p><a href="#features" className="scroll-link">가야디가 함께할게요 <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="intro section-wrap" id="features" aria-labelledby="intro-title">
        <p className="section-kicker">LESS PLANNING, MORE TRAVELING</p><h2 id="intro-title">여행의 설렘만 챙겨요.<br />나머지는 가야디와 함께.</h2><p className="section-description">흩어져 있던 여행 준비를 한곳에.<br />떠나기 전부터 돌아온 뒤까지, 더 가벼워지는 여행.</p>
        <article className="feature-featured"><div className="feature-copy"><span className="pill">나만의 여행</span><h3>“우리, 어디 가야디?”<br />그 한마디에서 시작.</h3><p>가고 싶은 곳과 날짜만 정해 보세요.<br />막연했던 여행이 나만의 여정이 되는 순간,<br />든든한 여행 친구가 함께할게요.</p><a className="text-button" href="/download">첫 여행 만들어 보기 <span aria-hidden="true">↗</span></a></div><div className="mascot-panel"><img src="/images/travel-puppy.png" alt="주황색 배낭을 메고 지도를 든 가야디 강아지 여행 친구" loading="lazy" /><span className="mascot-caption">준비됐어? 같이 가야디!</span></div></article>
      </section>
      <section className="planning section-wrap" aria-labelledby="planning-title"><div className="section-heading"><span className="pill">여행 일정</span><h2 id="planning-title">머릿속 여행을,<br />한눈에 보이는 일정으로.</h2><p className="section-description">찾아둔 장소도, 꼭 가고 싶은 맛집도.<br />하루하루 담다 보면 우리 여행이 완성돼요.</p></div>
        <div className="itinerary-demo"><div className="trip-photo"><img src="/images/beach.jpg" alt="맑은 바다와 하얀 모래사장" loading="lazy" /><div><span>MY NEXT JOURNEY</span><h3>바다 보러 가야디</h3><p>제주 · 2박 3일</p></div></div><div className="itinerary"><div className="itinerary-top"><div><span className="small-label">우리의 여행 일정</span><h3>느긋하게, 제주 한 바퀴</h3></div><span className="example-label">미리보기</span></div><div className="day-tabs" role="tablist" aria-label="여행 날짜">{[1, 2, 3].map(value => <button key={value} role="tab" id={`day-${value}`} aria-selected={day === value} aria-controls="day-panel" onClick={() => setDay(value)}>DAY {value}</button>)}</div><ol className="schedule" id="day-panel" role="tabpanel" aria-labelledby={`day-${day}`} tabIndex={0}>{schedules[day - 1].map(([time, title, detail], index) => <li key={title}><span className="stop-number">{index + 1}</span><div><span className="schedule-time">{time}</span><h4>{title}</h4><p>{detail}</p></div></li>)}</ol></div></div>
      </section>
      <section className="memories-section"><div className="section-wrap memories-inner"><div className="memory-visual"><img src="/images/lake.jpg" alt="여행 기록에 담긴 알프스 호수 풍경" loading="lazy" /><div className="memory-note"><span>OUR TRAVEL DIARY</span><p>사진 한 장에 담긴,<br />그날의 우리.</p><span>다시 꺼내 보고 싶은 순간</span></div></div><div className="feature-copy"><span className="pill">여행 기록</span><h2>여행은 끝나도,<br />우리의 순간은 남으니까.</h2><p>좋았던 풍경과 잊고 싶지 않은 순간을 모아요.<br />언제든 다시 꺼내 볼 수 있는<br />나만의 여행 서랍이 되어줄게요.</p><button className={`save-button ${saved ? 'is-saved' : ''}`} aria-pressed={saved} onClick={() => setSaved(!saved)}>{saved ? '이 여행을 기억해 뒀어요' : '이런 여행, 기억해 두기'}<span aria-hidden="true">{saved ? '✓' : '+'}</span></button><p className="save-feedback" role="status">{saved ? '이 페이지를 보는 동안 기억해 둘게요.' : ''}</p></div></div></section>
      <section className="closing"><p className="section-kicker">YOUR NEXT CHAPTER</p><h2>일상은 잠시 내려놓고,<br />우리, 여행 가야디.</h2><p>새로운 풍경, 새로운 순간. 시작은 여기서.</p><div className="closing-actions"><a className="button button-secondary" href="#features">가야디 둘러보기</a><a className="button" href="/download">나의 첫 여행 만들기 <span aria-hidden="true">↗</span></a></div></section>
    </main>}
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-information">
          <a href="/" className="brand-logo brand-logo-footer" aria-label="가야디 홈"><img src="/images/gayadi_logo.png" alt="GAYADI" width="1106" height="226" /></a>
          <p className="footer-copyright">Copyright © Gayadi. All Rights Reserved</p>
          <div className="footer-details">
            <p>너의 모든 여행에, 가야디.</p>
            <p>여행 계획부터 소중한 순간의 기록까지 함께하는 여행 서비스</p>
            <p>사업자 정보 및 공식 문의 채널 준비 중</p>
          </div>
          <nav className="footer-policies" aria-label="서비스 정책">
            <button onClick={() => showFooterNotice('개인정보 처리방침')}>개인정보 처리방침</button>
            <span aria-hidden="true">|</span>
            <button onClick={() => showFooterNotice('서비스 이용약관')}>서비스 이용약관</button>
          </nav>
        </div>
        <nav className="footer-socials" aria-label="가야디 소셜 채널">
          {[['instagram', '인스타그램'], ['discord', '디스코드'], ['chat', '문의 채널']].map(([icon, label]) => icon === 'discord' ? (
            <a key={icon} href="https://discord.gg/E75YQrAxDT" aria-label="가야디 디스코드" title="가야디 디스코드">
              <img src="/icons/discord.svg" alt="" width="20" height="20" />
            </a>
          ) : (
            <button key={icon} aria-label={`${label} 안내`} title={`${label} 준비 중`} onClick={() => showFooterNotice(label)}>
              <img src={`/icons/${icon}.svg`} alt="" width="20" height="20" />
            </button>
          ))}
        </nav>
      </div>
    </footer>
    <dialog ref={footerDialog} className="trip-dialog footer-dialog" aria-labelledby="footer-dialog-title" onClick={event => { if (event.target === event.currentTarget) footerDialog.current?.close() }}>
      <button className="dialog-close" aria-label="닫기" onClick={() => footerDialog.current?.close()}>닫기</button>
      <span className="pill">준비 중</span>
      <h2 id="footer-dialog-title">{footerNotice}</h2>
      <p>아직 준비 중인 페이지예요.<br />준비가 완료되면 이곳에서 안내해 드릴게요.</p>
      <button className="button" onClick={() => footerDialog.current?.close()}>확인</button>
    </dialog>
  </div>
}
export default App

