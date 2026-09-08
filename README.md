# Gayadi-Web

React + TypeScript + Tailwind CSS 기반의 웹 애플리케이션입니다. Vite를 사용합니다.

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
