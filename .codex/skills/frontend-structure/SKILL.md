---
name: frontend-structure
description: Gayadi-Web의 React 코드에서 파일을 생성·이동하거나 컴포넌트를 분리할 때 src 폴더 역할과 기능별 components 구조를 적용한다. 페이지, 공통 레이아웃, 커스텀 훅, API 로직, 스타일 및 Storybook 스토리의 배치를 결정할 때 사용한다.
---

# Frontend Structure

Gayadi-Web의 프론트엔드 코드를 아래 구조로 구성한다. 새 파일과 작업 대상 파일에 적용하며, 구조 규칙을 읽었다는 이유만으로 관련 없는 기존 코드를 일괄 이동하지 않는다.

## src 폴더 구조

```text
src/
├── assets/
├── components/
├── pages/
├── hooks/
├── utils/
├── routes/
├── layouts/
├── stores/
├── services/
├── style/
├── App.tsx
└── main.tsx
```

| 폴더 / 파일 | 용도 및 배치 기준 |
| --- | --- |
| `assets/` | 코드에서 import하는 이미지, 폰트, SVG 등 정적 리소스 |
| `components/` | 페이지를 구성하는 작은 UI와 재사용 가능한 컴포넌트. 기능별 폴더 및 `shared/`로 분류 |
| `pages/` | 라우팅 단위의 한 화면. 레이아웃과 기능별 컴포넌트를 조합 |
| `hooks/` | 재사용하는 `useXXX` 커스텀 훅. 기능 전용 훅은 기능별 하위 폴더로 분류 가능 |
| `utils/` | 포맷터, 변환, 검증 등 React와 독립적인 유틸 함수 |
| `routes/` | 경로 정의, 라우터 설정 및 라우팅 관련 코드 |
| `layouts/` | 헤더·푸터·본문 영역 등을 조합하는 페이지 공통 레이아웃 |
| `stores/` | 여러 컴포넌트 또는 페이지에서 공유하는 클라이언트 상태와 상태 관리 설정 |
| `services/` | API 클라이언트, fetch 요청, 응답 처리 등 네트워크 로직과 관련 환경 설정 |
| `style/` | 전역 CSS, 테마, 공통 스타일 및 컴포넌트별 CSS. 폴더명은 단수형 `style` 사용 |
| `App.tsx` | 앱 수준의 화면·라우팅·레이아웃 조합 |
| `main.tsx` | React 마운트 및 앱 초기화 진입점 |

실제 코드가 필요한 폴더부터 만든다. 폴더를 채우기 위해 라우터나 상태 관리 라이브러리를 새로 설치하지 않는다.

`public/`에 이미 있고 `/images/...`, `/fonts/...`처럼 고정 URL로 제공되는 리소스는 별도 이전 요청 없이 옮기지 않는다. 리소스를 `assets/`로 옮기는 작업에서는 import, CSS URL, preload, Storybook 정적 리소스 설정까지 함께 확인한다.

## components는 기능별로 구분

컴포넌트를 `components/` 바로 아래에 모두 나열하지 않는다. 화면의 기능·도메인을 나타내는 폴더를 만들고, 여러 기능에서 쓰는 UI는 `shared/`에 둔다.

사용자가 제공한 구조 예시:

```text
components/
├── compatibility/
├── onboarding/
├── question/
├── result/
├── shared/
└── unboxing/
```

위 폴더명은 다른 제품의 기능별 분류 예시이며, Gayadi-Web에 그대로 생성해야 하는 목록이 아니다. 현재 제품의 기능명에 맞춰 다음과 같이 적용한다.

```text
src/
├── components/
│   ├── introduction/
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.stories.tsx
│   │   ├── DestinationCard.tsx
│   │   └── DestinationCard.stories.tsx
│   ├── download/
│   │   ├── DownloadContent.tsx
│   │   ├── DownloadContent.stories.tsx
│   │   ├── DownloadQrPanel.tsx
│   │   └── DownloadQrPanel.stories.tsx
│   └── shared/
│       ├── BrandLogo.tsx
│       ├── BrandLogo.stories.tsx
│       ├── SiteHeader.tsx
│       ├── SiteFooter.tsx
│       └── NoticeDialog.tsx
├── pages/
│   ├── IntroductionPage.tsx
│   └── DownloadPage.tsx
├── layouts/
│   ├── SiteLayout.tsx
│   └── SiteLayout.stories.tsx
└── style/
    └── index.css
```

- 폴더는 소문자 영문으로 명명하고 여러 단어는 kebab-case로 연결한다. React 컴포넌트 파일은 `PascalCase.tsx`, 훅은 `use-xxx.ts` 형식을 사용한다.
- `shared/`에는 기능을 가로질러 공유하는 UI를 둔다. 한 기능에서만 사용하는 카드·탭·섹션은 그 기능 폴더에 둔다.
- 레이아웃을 구성하는 헤더·푸터 UI는 `components/shared/`, 이를 조합하고 페이지 콘텐츠를 받는 `SiteLayout`은 `layouts/`에 둔다.
- UI 분리는 독립적인 역할, 반복 사용, 상태 관리 또는 Storybook에서 확인할 의미가 있는 단위를 기준으로 한다. 모든 태그를 별도 파일로 분리하지 않는다.
- 한 컴포넌트에서만 사용하는 상태는 해당 컴포넌트에 유지한다. 로직을 재사용할 필요가 있을 때 `hooks/`로 옮기고, 여러 화면에서 공유해야 할 때 `stores/`를 고려한다.
- API 요청은 `services/`, 요청을 사용하는 React 훅은 `hooks/`로 나눈다. 기능별 정적 표시 데이터와 타입은 해당 기능 폴더에 둘 수 있다.
- 새 UI를 기존 `features/` 또는 `components/layout/` 구조로 확장하지 않는다. 해당 영역을 재구성하는 요청에서는 위 역할별 위치로 이동한다.

## Storybook 배치

- 컴포넌트 옆에 같은 이름의 `ComponentName.stories.tsx`를 둔다. 페이지 및 레이아웃 스토리도 해당 파일 옆에 둔다.
- 스토리 제목은 `Pages/IntroductionPage`, `Layouts/SiteLayout`, `Components/Shared/BrandLogo`, `Components/Introduction/DestinationCard`처럼 역할과 기능을 표현한다.
- 기본 상태 외에 의미 있는 props·상태와 반응형 화면을 제공한다. 클릭·선택·열기·닫기 등 상태 전환이 있는 UI는 필요한 `play` 검증을 포함한다.
- 분리된 컴포넌트가 실제 화면과 같은 스타일로 보이도록 필요한 컨테이너와 provider를 스토리 decorator에 제공한다.
- 기존 전역 Storybook 설정과 provider를 재사용하며, 로딩·오류 등 컴포넌트에서 더 이상 표현하지 않는 스토리는 실제 동작에 맞게 정리한다.

## 구조 변경 시 확인

1. 현재 파일·import·스타일·스토리를 확인하고 작업 범위에 맞는 목적지를 정한다.
2. 파일 이동과 함께 앱 진입점, import 경로, CSS 참조, 스토리 제목 및 관련 문서를 수정한다.
3. 기존 경로를 검색해 누락된 참조를 확인한다. 파일명 대소문자도 일치시킨다.
4. 변경에 맞춰 타입 검사, 린트, 앱 빌드를 실행한다. 스토리를 변경했다면 Storybook 빌드와 관련 상호작용 테스트도 확인한다.
5. 최종 구조, 검증 결과와 아직 적용하지 않은 기존 구조가 있다면 그 범위를 설명한다.
