import './App.css';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import AngularLogo from './assets/images/Angular-logo.png'
import JavaLogo from './assets/images/Java-logo.png'
import JavascriptLogo from './assets/images/JavaScript-logo.png'
import TypescriptLogo from './assets/images/Typescript-logo.png'
import ReactLogo from './assets/images/React-logo.png'
import SpringLogo from './assets/images/Spring-logo.png'
import BootstrapLogo from './assets/images/Bootstrap-logo.png'
import PlsqlLogo from './assets/images/Plsql-logo.png'

function App() {

  const links = [
    { text: 'About', url: 'about' },
    { text: 'Experience', url: 'experience' },
    /* { text: 'Skills', url: 'skills' }, */
    { text: 'Contact', url: 'contact' },
  ];

  const skills = [
    { img: JavascriptLogo, name: 'Javascript' },
    { img: TypescriptLogo, name: 'Typescript' },
    { img: JavaLogo, name: 'Java' },
    { img: AngularLogo, name: 'Angular' },
    { img: ReactLogo, name: 'React' },
    { img: SpringLogo, name: 'Spring' },
    { img: PlsqlLogo, name: 'PL/SQl' },
    { img: BootstrapLogo, name: 'Bootstrap' },
  ]

  return (
    <>
      <Navbar links={links} />
      <About />
      <Skills skills  ={skills} />
    </>
  );
}

export default App;
