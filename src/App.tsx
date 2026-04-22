import { Button } from './components/Button/Button';

function App() {
  return (
    <main className="app-shell">
      <section className="intro-card">
        <p className="eyebrow">React + TypeScript + Storybook</p>
        <h1>컴포넌트 가이드 베이스</h1>
        <p>
          이 프로젝트는 팀이 공통 UI를 스토리북으로 관리하고, Git 기반으로 협업하기 위한
          시작점입니다.
        </p>
        <div className="button-row">
          <Button label="디폴트" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Success" variant="success" />
          <Button label="Warning" variant="warning" />
          <Button label="Critical" variant="critical" />
          <Button label="Disabled" disabled />
        </div>
      </section>
    </main>
  );
}

export default App;
