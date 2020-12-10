import './App.css';
import ClassTimer from './components/ClassTimer';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Hook Tutor</h4>
      </header>
    <main className="App-main">
      <FocusInput />
      <ClassTimer />
      <HookTimer />
    </main>
    <footer className="App-footer">by Nabebndu</footer>
    </div>
  );
}

export default App;
