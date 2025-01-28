import logo from './logo.svg';
import './App.css';
import Header_menu from './components/header_menu';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header_menu />
      </header>
      <section>
        <Hero />
      </section>
    </div>
  );
}

export default App;
