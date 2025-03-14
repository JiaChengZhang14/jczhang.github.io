import logo from './logo.svg';
import './App.css';
import Header_menu from './components/header_menu';
import Hero from './components/hero';
import Skills from './components/skills';
import WorkHistory from './components/WorkHistory';

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <Header_menu />
      </header>

      <div className='hero-section'>
        <Hero />
      </div>


      <div className="skills-section">
        <Skills />
      </div>


      <div className="work-history-section">
        <div>
          <h2>Experience</h2>
        </div>
        <WorkHistory
          enterprise="Airbus"
          title="Software Engineer"
          description="I worked in an international team and developed a project for SAP ERP with ABAP. I've also maintained an existing Android application "
          logo="https://companieslogo.com/img/orig/AIR.PA-9f3a3975.png?t=1720244490"
        />
        <WorkHistory
          enterprise="Hanyu | Trainlang"
          title="Full Stack Developer (Contract)"
          description="Implementación de soluciones full stack para clientes diversos."
          logo="https://media.licdn.com/dms/image/v2/C4E0BAQHpWNUttCb1zA/company-logo_200_200/company-logo_200_200/0/1668760302152/trainlang_logo?e=2147483647&v=beta&t=FQ4PZs_GfZqUan88joZzj5tqyUrWvecj8O7M84th4mU"
        />
      </div>


    </div>
  );
}

export default App;
