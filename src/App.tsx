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
import { Experience } from './components/experience/Experience';

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

  const experiences = [
    { year: 2019,
      company: 'Seguros Caracas, C. A.',
      role: 'Junior Web Developer',
      techStack: [
        'Java', 'JavaScript', 'Spring', 'PrimeFaces', 'JSF', 'HTML', 'CSS'
      ],
      achievements: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio voluptatem, maxime provident odit soluta quis autem amet illum iusto expedita fugiat consequatur cupiditate, possimus deleniti quaerat, quidem vel aspernatur.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, ab explicabo nemo hic natus quasi vel expedita id officia corrupti illo quibusdam est. Eaque, tenetur? Vel tempora debitis magnam placeat.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, ab explicabo nemo hic natus quasi vel expedita id officia corrupti illo quibusdam est. Eaque, tenetur? Vel tempora debitis magnam placeat.'
      ]
     },
     { year: 2019,
      company: 'Seguros Caracas, C. A.',
      role: 'Junior Web Developer',
      techStack: [
        'Java', 'JavaScript', 'Spring', 'PrimeFaces', 'JSF', 'HTML', 'CSS'
      ],
      achievements: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio voluptatem, maxime provident odit soluta quis autem amet illum iusto expedita fugiat consequatur cupiditate, possimus deleniti quaerat, quidem vel aspernatur.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, ab explicabo nemo hic natus quasi vel expedita id officia corrupti illo quibusdam est. Eaque, tenetur? Vel tempora debitis magnam placeat.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, ab explicabo nemo hic natus quasi vel expedita id officia corrupti illo quibusdam est. Eaque, tenetur? Vel tempora debitis magnam placeat.'
      ]
     }
  ]

  return (
    <>
      <header>
        <Navbar links={links} />
      </header>
      <main>
        <About />
        <Skills skills  ={skills} />
        <Experience experiences={experiences} />
      </main> 
      
    </>
  );
}

export default App;
