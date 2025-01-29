import logo from './logo.svg';
import './App.css';
import Header_menu from './components/header_menu';
import Hero from './components/hero';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header_menu />
      </header>
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
