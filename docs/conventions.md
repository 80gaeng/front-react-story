# 팀 작업 기준 초안

## 브랜치 전략
- `main`: 배포 가능한 기준
- `develop`: 통합 작업용
- `feature/*`: 기능 단위 작업

예시:
- `feature/button-base`
- `feature/input-field`

## 커밋 메시지 예시
- `feat: add button component`
- `docs: add storybook writing guide`
- `chore: setup eslint and prettier`
- `fix: correct disabled state in button`

## PR 체크리스트
- [ ] Storybook에서 상태 확인 완료
- [ ] 타입 에러 없음
- [ ] lint 통과
- [ ] 문서 업데이트 완료
- [ ] 리뷰어 지정 완료
