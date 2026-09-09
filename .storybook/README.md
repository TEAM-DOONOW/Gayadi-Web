# Storybook

프로젝트 루트에서 실행합니다.

```sh
npm run storybook
```

http://localhost:6006 에서 Canvas, Docs, 접근성 패널을 확인하세요.
기존 Vite 설정과 Tailwind 스타일을 공유하며 Viewport 도구로 화면 크기를 바꿀 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run storybook` | 개발 서버 실행 |
| `npm run build-storybook` | 정적 빌드 (`storybook-static/`) |
| `npm run test-storybook` | Chromium에서 스토리 렌더링 및 상호작용 검사 |

- `Pages/App`: 전체 소개 페이지와 모바일 화면
- `Pages/IntroductionPage`, `Pages/DownloadPage`: 페이지 콘텐츠와 모바일 화면
- `Layout/*`: 로고, 헤더, 푸터 정보·정책·소셜 채널, 안내 모달, 공통 레이아웃
- `Introduction/*`: 섹션, 여행 카드·갤러리, 일정 탭·목록·항목, 여행 기록, 다운로드 안내·QR 패널
- `Introduction/Itinerary`: 날짜 클릭·키보드 전환과 여러 인스턴스의 상태 독립성
- `Introduction/SaveMemoryButton`: 저장·해제와 피드백
- `Layout/SiteFooter`: 정책 모달 열기·닫기·취소 이벤트 및 포커스 복귀
- `Introduction/DownloadContent`: 준비 중, HTTPS 링크, 잘못된 URL, HTTP URL

분리된 UI는 각 컴포넌트 옆의 스토리에서 확인할 수 있습니다. Controls로 props를 변경하고,
Interactions 패널에서 상태 전환 검증을 확인하세요. 다운로드 Ready 스토리는 예시 URL을 사용합니다.
- `Introduction/AppFeatures`: 기본 목록, 로딩, 빈 목록, 오류, 재시도 성공, 긴 문구, 모바일

스토리는 컴포넌트 옆의 `*.stories.tsx`에 작성합니다. `preview.tsx`에서
스토리마다 독립적인 Query Client를 제공하며 오류 상태를 바로 확인하도록 자동 재시도를 끕니다.
`mocks/app-features.ts`의 고정 예시 데이터와 MSW 핸들러를 `beforeEach`에서 적용합니다.
Docs의 스토리는 iframe으로 격리하여 여러 상태의 모킹과 캐시가 섞이지 않도록 합니다.

브라우저 테스트를 처음 실행할 때 Chromium을 설치하세요.

```sh
npx playwright install chromium
npm run test-storybook
```

`RetrySuccess`는 오류 후 버튼을 눌러 정상 목록으로 복구되는지 검사합니다.
CI에서도 정적 빌드와 브라우저 테스트를 실행합니다.
MSW 서비스 워커는 `.storybook/public/`에 두며 MSW 업데이트 후
`npx msw init .storybook/public --save`로 갱신하세요.

참고: [React + Vite 설정](https://storybook.js.org/docs/get-started/frameworks/react-vite),
[네트워크 모킹](https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-network-requests).
