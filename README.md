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

## Discord 알림

저장소의 Settings → Secrets and variables → Actions에 Repository secret
`DISCORD_WEBHOOK_URL`을 만들고 Discord 채널의 웹훅 URL을 저장하세요.
웹훅 URL은 코드나 커밋에 넣지 않습니다.

`.github/workflows/ci.yml`의 `notify` job은 다음 이벤트를 알립니다.

- CI 워크플로 완료: 성공, 실패, 취소 등의 결과와 실행 링크
- GitHub `deployment_status`: 성공, 실패, 오류 결과와 환경 및 배포/로그 링크

CI 알림은 같은 워크플로에서 `build` job 종료 후 성공·실패 여부와 관계없이 실행합니다.
알림 실패는 `notify` job에 표시되며, `build` job 결과와 구분할 수 있습니다.
배포 상태 이벤트에서는 `build`를 건너뛰고 알림만 전송합니다.
알림 job은 외부 PR 코드를 체크아웃하거나 실행하지 않고 GitHub 이벤트 정보만 사용합니다.
Secret이 없으면 알림을 건너뜁니다. Fork PR 및 Dependabot PR에서는
Repository secret이 제공되지 않아 알림이 생략될 수 있습니다.

## Vercel 배포

Vercel에서 Add New → Project로 GitHub 저장소를 Import하고 다음과 같이 설정하세요.

| 설정 | 값 |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | 저장소 루트 (`./`) |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 24.x |
| Production Branch | `main` |

GitHub 연동으로 main은 Production, 다른 브랜치는 Preview로 자동 배포합니다.
Vercel이 등록하는 GitHub `deployment_status`를 같은 `ci.yml`에서 받아
Discord에 배포 결과와 환경, 배포 URL을 전송합니다. Production과 Preview 모두 알립니다.
GitHub Deployment 연동은 활성화 상태로 유지하세요
(`vercel.json`을 사용하는 경우 `github.deploymentEnabled`를 `false`로 설정하지 않습니다).

배포는 Vercel GitHub 연동에서 수행하므로 Actions에 `VERCEL_TOKEN`을 등록할 필요가 없습니다.
`DISCORD_WEBHOOK_URL`은 GitHub Actions Secret에만 등록하면 됩니다.
CI와 Vercel 배포는 독립적으로 실행되므로 현재 구성은 CI 성공을 기다린 뒤 배포하는 방식이 아닙니다.

워크플로 변경을 푸시하고 Vercel 연동 및 Secret 등록을 완료한 뒤,
PR의 Preview 배포와 main의 Production 배포에서 실제 알림을 확인하세요.

참고: [Vercel GitHub 연동](https://vercel.com/docs/git/vercel-for-github)
