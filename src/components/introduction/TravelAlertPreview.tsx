const alerts = [
  { title: '오후에 비가 예상돼요', description: '해변 산책 대신, 근처 실내 전시 코스로 바꿔볼까요?', time: '지금', icon: 'rain' },
  { title: '다음 장소가 붐빌 것 같아요', description: '조금 더 여유로운 곳을 먼저 들러볼까요?', time: '5분 전', icon: 'people' },
]

export function TravelAlertPreview() {
  return (
    <div className="travel-alert-preview" aria-label="날씨와 혼잡도에 따른 코스 변경 알림 예시">
      <div className="travel-alert-illustration" aria-hidden="true">
        <div className="travel-alert-bubble">미리 알려드려요<span>1</span></div>
        <svg viewBox="0 0 240 230" fill="none">
          <rect x="44" y="20" width="152" height="240" rx="36" stroke="currentColor" strokeWidth="12" />
          <path d="M102 40h36" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          <path d="M92 140v-20a28 28 0 0 1 56 0v20l9 14H83l9-14Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
          <path d="M111 168a10 10 0 0 0 18 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="travel-alert-messages">
        <span className="travel-alert-example">알림 미리보기</span>
        <ul>
          {alerts.map(({ title, description, time, icon }) => (
            <li key={title} className="travel-alert-message">
              <span className="travel-alert-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {icon === 'rain' ? <><path d="M6 14a4 4 0 0 1-1-8 5 5 0 0 1 9-1 4.5 4.5 0 1 1 3 9H6Z" /><path d="m8 17-1 3m6-3-1 3m6-3-1 3" /></> : <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" /></>}
                </svg>
              </span>
              <div><div className="travel-alert-message-heading"><h3>{title}</h3><span>{time}</span></div><p>{description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
