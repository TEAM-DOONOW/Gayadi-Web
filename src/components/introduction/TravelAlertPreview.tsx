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
      <div className="travel-alert-image-panel">
        <img src="/images/alarm.png" alt="비, 장소 혼잡도, 식사 시간을 알려주는 여행 알림 미리보기" width="454" height="297" />
      </div>
    </div>
  )
}
