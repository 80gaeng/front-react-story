# front-react-story

React + TypeScript + Storybook 기반의 컴포넌트 가이드 프로젝트 베이스입니다.

## 1. 권장 시작 방식

```bash
npm install
npm run dev
npm run storybook
```

## 2. 기술 스택

- React
- TypeScript
- Vite
- Storybook
- ESLint
- Prettier

## 3. 폴더 구조

```text
front-react-story/
├─ .github/
├─ .storybook/
├─ docs/
├─ src/
│  ├─ components/
│  │  └─ Button/
│  └─ styles/
├─ package.json
└─ README.md
```

## 4. 협업 규칙 제안

- 컴포넌트는 `src/components/컴포넌트명` 단위로 관리
- 최소 파일 세트: `Component.tsx`, `Component.stories.ts`, 필요시 `Component.css`
- Pull Request 단위는 가능하면 작게 유지
- Storybook에서 상태를 먼저 확인한 뒤 앱 화면에 연결

## 5. 첫 작업 추천 순서

1. Button / Input / Badge / Modal 같은 공통 UI 우선 제작
2. Storybook 문서화 규칙 정하기
3. GitHub PR 템플릿과 브랜치 전략 정하기
4. 배포가 필요하면 Chromatic 또는 정적 호스팅 연결

## 6. Notion 연동

`docs/notion-task-template.md` 파일을 Notion 페이지에 붙여 넣으면 바로 작업 보드 초안을 만들 수 있습니다.
