import koreaTravelPanels from '../../assets/images/korea-travel-panels.png'

const scenes = [
  '제주의 바다와 등대를 그린 일러스트',
  '서울의 한옥 골목을 그린 일러스트',
  '경주의 고분과 벚꽃을 그린 일러스트',
  '부산의 바닷가 마을을 그린 일러스트',
  '설악산의 산봉우리를 그린 일러스트',
]

export function TravelArtStrip() {
  return (
    <div className="travel-art-strip" role="region" aria-label="국내 여행 풍경, 초점을 맞추면 자동 이동 일시정지" tabIndex={0}>
      <div className="travel-art-track">
        {[0, 1].map(group => (
          <div className="travel-art-group" key={group} aria-hidden={group === 1 ? true : undefined}>
            {[...scenes, ...scenes].map((scene, index) => (
              <div className="travel-art-card" key={index} aria-hidden={index >= scenes.length ? true : undefined}>
                <img src={koreaTravelPanels} alt={group === 0 && index < scenes.length ? scene : ''}
                  width="1536" height="1024" draggable={false}
                  style={{ left: `${-(index % scenes.length) * 100}%` }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
