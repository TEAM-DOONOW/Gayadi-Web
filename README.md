# Gayadi-Web

여행 앱 가야디를 소개하는 웹 페이지입니다.
React + TypeScript + Tailwind CSS 기반이며 Vite를 사용합니다.

## 개발 시작

Node.js 22.12 이상과 npm이 필요합니다.

```sh
npm ci
npm run dev
```

개발 서버 주소는 터미널에 표시됩니다(기본값: http://localhost:5173).
Windows PowerShell에서 실행 정책 오류가 발생하면 `npm` 대신 `npm.cmd`를 사용하세요.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | TypeScript 검사 및 프로덕션 빌드 (`dist/`) |
| `npm run typecheck` | TypeScript 검사 |
| `npm run lint` | ESLint 검사 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |

## 구조

```text
src/
  App.tsx       # 시작 화면
  main.tsx      # React 진입점
  index.css     # Tailwind 및 전역 스타일
vite.config.ts  # React / Tailwind Vite 플러그인
```

Tailwind는 `@tailwindcss/vite` 플러그인과 CSS의 `@import "tailwindcss"`로
연결되어 있습니다. 컴포넌트의 `className`에 유틸리티 클래스를 사용하세요.

## TanStack Query

`src/main.tsx`의 `QueryClientProvider`에서 앱 전체에 Query Client를 제공합니다.
`src/lib/query-client.ts`에서 클라이언트를 한 번 생성하며, 기본 `staleTime`은
1분, 실패 시 자동 재시도는 1회로 설정합니다. 나머지는 라이브러리 기본값을 사용합니다.

- `src/features/introduction/use-app-features.ts`: `useQuery` 기반 앱 소개 콘텐츠 조회 훅
- `src/features/introduction/AppFeatures.tsx`: 주요 기능 소개 및 로딩·오류·빈 목록 처리
- `public/content/app-features.json`: 실제 API 대신 사용하는 소개 문구 초안

쿼리 키는 `['introduction', 'features']`입니다. `fetch`에 쿼리의 `AbortSignal`을 전달해
요청 취소를 지원하고, HTTP 오류 응답은 예외로 변환합니다.
실제 API를 연결할 때 조회 함수의 URL과 응답 타입을 변경하세요.

개발 서버 실행 후 기본 화면에서 앱 소개를 확인할 수 있습니다.
소개 문구는 실제 앱 사양에 맞춰 JSON 파일에서 수정하세요.
브라우저 개발자 도구에서 요청 지연이나 차단을 설정하면 로딩·오류·재시도를 확인할 수 있습니다.
