# 소개 페이지 디자인 확인

- Source: `C:/Users/admin/AppData/Local/Temp/orca-paste-1788940881228-32226491-d932-464f-9e0b-2081e07521cf.png`
- Implementation: `http://127.0.0.1:5173/`
- Desktop section: `C:/Users/admin/AppData/Local/Temp/gayadi-clean-section.png`
- Combined comparison: `C:/Users/admin/AppData/Local/Temp/gayadi-clean-comparison.png`
- Mobile: `C:/Users/admin/AppData/Local/Temp/gayadi-clean-mobile-final.png`
- Viewport: reference and desktop 1713 × 841 px, deviceScaleFactor 1. Combined comparison displays both at the same half scale. Mobile viewport 390 × 844 CSS px, full-page capture.
- State: 소개 섹션 첫 미리보기와 다음 섹션 제목. 참고 제품의 공연 콘텐츠를 복제하지 않고 가야디의 여행 콘텐츠에 시각적 구성을 적용했다.

## 비교 결과

- Typography: 기존 로컬 Pretendard 사용. 섹션 제목 24px, 기능 제목 20px, 설명 15px로 위계 축소. 제목과 라벨, 설명의 중앙 정렬 확인.
- Layout: 800px 폭, 약 304px 높이의 두 칸 미리보기, 10px 테두리 반경, 다음 섹션까지 76px 여백. 참고 이미지의 세로 리듬과 패널 비율 확인. 페이지 중앙 정렬은 의도된 차이.
- Colors: 흰 배경, 회청색 설명, 연한 패널과 테두리, 작은 주황 라벨. 기존 어두운 배경과 큰 그림자 제거.
- Images: 기존 가야디 캐릭터와 여행 사진 재사용. 참고 이미지의 공연용 퍼즐·정산 이미지는 제품 맥락상 적용 대상이 아니다. 늘어짐 없이 표시됨.
- Copy: 여행 준비·일정·기록이라는 실제 소개 내용에 맞춰 짧은 제목과 설명으로 정리. 프롬프트나 구현 설명이 제품 문구에 노출되지 않음.
- Focused comparison: 원본 크기의 첫 기능 섹션에서 제목, 설명, 라벨, 패널 경계를 확인하고 축소 비교 이미지에서 전체 리듬 확인.

## 수정 이력 및 검증

- 초기 모바일 캡처에서 사진 다섯 장이 세 줄을 차지해 소개 콘텐츠가 너무 아래로 밀리는 P2 문제 발견.
- 모바일 갤러리를 가로 스크롤로 변경. 최종 모바일 캡처에서 본문 접근 거리 개선 확인.
- 320, 390, 768, 1713px에서 문서 가로 넘침 없음.
- 브라우저에서 일정 탭, 기억하기 피드백, 정책 모달 및 Escape 닫기, 다운로드 페이지 이동 확인. 런타임 오류 없음.
- 앱 빌드, 변경 컴포넌트 린트, Storybook 빌드 및 60개 스토리 테스트 통과.
- 참고 이미지에 없는 모바일 구성은 기존 콘텐츠를 유지한 반응형 해석이며, 픽셀 단위 복제의 대상이 아니다.
- 남은 P0/P1/P2 사항 없음.

## 후속 부분 수정

- 사용자 추가 지시에 따라 상단 hero만 어두운 배경 `#14151e`로 변경. 제목은 밝은 흰색, 설명은 `#a6adbd`, 링크는 `#d4d8e2`로 조정.
- 추가 참고 이미지: `C:/Users/admin/AppData/Local/Temp/orca-paste-1788941282107-48166589-1bb1-45bf-a45a-0e6de8528c3a.png`
- 브라우저 확인: `C:/Users/admin/AppData/Local/Temp/gayadi-dark-hero.png`, 1029 × 597 CSS px, density 1.
- 기존 배치와 사진 크기를 유지하면서 상단 배경 및 글자 색 변경을 확인. 아래 기능 소개 섹션의 흰 배경은 유지.

## 국내 여행 및 상단 단순화

- 사용자 선택 영역 `section.hero`를 제목, 국내 여행 설명 한 줄, 소개 링크로 단순화. 사진 갤러리·상단 수식어·하단 반복 문구 제거.
- 해외 지명 데이터 제거. 여행 기록 이미지를 지명이 특정되지 않은 바다 이미지로 교체.
- 최신 확인: `C:/Users/admin/AppData/Local/Temp/gayadi-simple-hero.png`, 1022 × 700 CSS px. 모바일 390px 가로 넘침 및 소개 앵커 이동 확인.
- 빌드와 변경 파일 린트, 관련 5개 스토리 파일의 7개 테스트 통과.

## 국내 일러스트 및 스크롤 애니메이션

- 최신 사용자 참고: `C:/Users/admin/AppData/Local/Temp/orca-paste-1788941517054-b8b13e68-43fd-43ee-a57b-75ca92ef6738.png` (1986 × 543 px).
- 최신 구현: `C:/Users/admin/AppData/Local/Temp/gayadi-illustrated-final.png` (동일 CSS viewport 및 density 1).
- 동일 비율 비교: `C:/Users/admin/AppData/Local/Temp/gayadi-illustrated-comparison-final.png`.
- `src/assets/images/korea-travel-panels.png`: imagegen으로 만든 제주·한옥·경주·부산·설악산 일러스트. 실제 현장 사진이 아닌 여행 테마 표현이며, 한 이미지의 각 영역을 카드로 표시한다.
- 참고의 어두운 배경과 가로 세로형 이미지 나열을 적용. 가야디의 흰 헤더·브랜드·국내 여행 색상과 짧은 문구는 유지한다.
- 첫 비교에서 543px viewport의 카드 하단이 잘리는 P2 문제 확인. 상단 여백·제목 크기·카드 높이를 줄여 최종 동일 viewport에서 카드 전체가 보이도록 수정했다.
- 최종 비교: Pretendard 30px 제목, 짧은 설명, 208 × 250px 카드, 16px 간격, 12px 반경. 국내 풍경 크롭과 텍스트 가독성 확인. 공연 이미지의 주황 단색 표현은 국내 여행 일러스트 색상으로 의도적으로 대체.
- 모바일 390px에서는 166 × 224px 카드와 가로 스크롤. 320·390·1022·1986px 문서 넘침 없음.
- 제목·설명은 IntersectionObserver로 진입 시 한 번만 22px 상승 및 페이드. 화면 밖으로 나가도 상태 유지. 모션 감소 설정 시 숨김·전환 없이 표시.
- 실제 브라우저에서 스크롤 전/후 상태, 한 번만 실행, 모션 감소, 갤러리 키보드 가로 이동, 소개 링크 및 콘솔 오류 없음 확인.
- Storybook 32개 파일·64개 테스트, 앱 및 Storybook 빌드, 타입 검사·변경 파일 린트 통과. 신규 컴포넌트와 훅은 역할별 폴더에 배치.

## 자동 이미지 이동

- 사용자 지시에 따라 수동 가로 스크롤을 제거하고 두 개의 동일한 이미지 그룹을 65초 주기로 연결해 자동 이동하도록 수정.
- 스크롤바 없이 표시하며 마우스 또는 키보드 포커스를 두면 일시정지. 모션 감소 설정에서는 중복 이미지를 숨기고 다섯 장을 정적으로 배치.
- 최신 캡처: `C:/Users/admin/AppData/Local/Temp/gayadi-auto-strip.png`, 1440 × 800px.
- 실제 브라우저에서 transform 변화, overflow hidden, 마우스 일시정지, 390px 문서 넘침 없음, 모션 감소 시 animation none 확인.
- 해당 스토리 2개, 컴포넌트 린트 및 앱 빌드 통과.

## 여행 준비 메시지 영역

- 최신 참고 이미지처럼 자동 이동 이미지 아래에 어두운 배경의 여행 준비 영역을 연결했다. 중앙 질문 주변에 여행지·맛집·숙소·동선·일정·사진 항목을 배치했다.
- `가야디 알아보기` 링크를 제거하고, 새 영역에도 스크롤 진입 애니메이션을 적용했다.
- 확인 이미지: `C:/Users/admin/AppData/Local/Temp/gayadi-preparation-desktop.png`, `C:/Users/admin/AppData/Local/Temp/gayadi-preparation-mobile.png`.
- 320px 및 390px에서 문구와 칩의 겹침 및 가로 넘침 없음. 앱 빌드, 변경 컴포넌트 린트, 관련 Storybook 3개 파일의 6개 테스트 통과.

## 날씨·혼잡도 알림 소개

- 참고 이미지의 중앙 제목과 2열 알림 미리보기 구성을 여행 일정 아래에 적용. 휴대폰·안내 말풍선 그림과 날씨/혼잡도에 따른 코스 변경 제안 알림 두 개를 배치했다.
- 실제 예측이나 알림 발송 연동이 아닌 소개 페이지용 미리보기. 사용자 동의 없이 자동으로 코스를 변경한다는 표현은 사용하지 않았다.
- 데스크톱 및 모바일 확인: `C:/Users/admin/AppData/Local/Temp/gayadi-alerts-desktop.png`, `C:/Users/admin/AppData/Local/Temp/gayadi-alerts-mobile.png`. 320px·390px 가로 넘침 없음.
- 앱 및 Storybook 빌드, 변경 파일 린트, 추가 스토리 4개 테스트 통과.

final result: passed
