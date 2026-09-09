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

## CI 및 Vercel 배포

`.github/workflows/ci.yml`에서 다음 순서로 실행합니다.

1. `build`: 의존성 설치 → ESLint → TypeScript 검사 → 빌드 검증
2. `deploy`: CI 성공 후 Vercel 환경 설정을 받아 빌드하고 `--prebuilt`로 배포
3. `notify`: CI 실패 또는 배포 성공·실패 시 Discord 알림

CI 성공만으로는 알림을 보내지 않습니다. CI 실패 시 배포를 건너뜁니다.
main push는 Production, 같은 저장소 PR은 Preview로 배포합니다.
Fork PR과 Dependabot PR은 CI만 실행합니다.
검증과 배포는 같은 커밋을 사용합니다. Vercel 환경 변수를 적용하기 위해
배포 job에서 별도 빌드하며, `--prebuilt`로 서버 측 재빌드는 하지 않습니다.

### 최초 설정

Vercel 프로젝트를 만든 뒤 GitHub Settings → Secrets and variables → Actions에
다음 Repository secrets를 등록하세요.

| Secret | 값 |
| --- | --- |
| `VERCEL_TOKEN` | Vercel 접근 토큰 |
| `VERCEL_ORG_ID` | `.vercel/project.json`의 `orgId` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json`의 `projectId` |
| `DISCORD_WEBHOOK_URL` | Discord 채널 웹훅 URL |

`vercel link`로 프로젝트를 연결하면 `.vercel/project.json`에서 ID를 확인할 수 있습니다.
`.vercel/`은 Git에서 제외합니다. 토큰이나 웹훅 URL은 코드에 저장하지 마세요.
Vercel의 Node.js 버전은 24.x로 설정하세요.
빌드 설정은 `vercel.json`에 Vite / `npm ci` / `npm run build` / `dist`로 지정합니다.

`git.deploymentEnabled: false`로 자동 Git 배포를 비활성화합니다.
이 파일을 배포 대상 브랜치에 반영해야 CI와 독립적인 배포를 막을 수 있습니다.
전환 중 기존 브랜치의 자동 배포까지 중단하려면 Vercel 프로젝트의 Git 연결을 해제하세요.
CLI 배포는 프로젝트 ID와 토큰을 사용하므로 Git 연결 없이 실행할 수 있습니다.
`deployment_status` 이벤트는 구독하지 않아 알림이 중복되지 않습니다.

Vercel Secret 누락은 배포 실패로 표시합니다. Discord Secret이 없거나
Fork/Dependabot PR에서 제공되지 않으면 알림만 건너뜁니다.
취소된 실행과 배포를 건너뛴 성공 실행은 알림을 보내지 않습니다.
알림 전송 실패는 `notify` job에서 확인할 수 있습니다.

### 실제 실행 확인

- CI 실패 시 deploy가 skipped인지 확인
- CI 성공 후 Preview 배포와 결과 알림 1회 확인
- main에서 Production 배포 확인
- Vercel 자동 Git 배포가 별도로 실행되지 않는지 확인

참고: [Vercel GitHub Actions 배포](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel),
[자동 배포 비활성화](https://vercel.com/docs/project-configuration/git-configuration#turning-off-all-automatic-deployments)
