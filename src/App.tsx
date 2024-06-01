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
    { period: '2022 - Present',
      company: 'Seguros Caracas, C. A.',
      role: 'Semi-senior Web Developer',
      techStack: [
        'Angular', 'Java', 'Typescript', 'Javascript', 'Spring', 'PrimeFaces', 'JSF', 'HTML', 'CSS', 'PL/SQL'
      ],
      achievements: [
        'Web application development with Angular, and REST service with Java to quote company products dynamically, allowing access to information on the different rates by potential clients, policyholders, and insurance advisors.', 
        'REST web service development for issuing RCV, home, and personal accident policies through insurance advisors and company portals. This service allows integration with other companies, representing the generation of new business opportunities.', 
        'Web application development for the management of installation appointments for security devices in vehicles by policyholders, insurance advisors, and internal analysts. Through this application, it is easier to request appointments through the different portals.'
      ]
     },
     { period: '2019 - 2022' ,
      company: 'Seguros Caracas, C. A.',
      role: 'Junior Web Developer',
      techStack: [
        'Java', 'JavaScript', 'Spring', 'PrimeFaces', 'JSF', 'HTML', 'CSS', 'PL/SQL'
      ],
      achievements: [
        'Scam risk reduction in the Automobile industry by conditioning Java and JavaScript on the insured sums of the accessories.',
        'Process facilitation to generate service orders by modifying forms and managing available balances.',
        'Google Maps query library development for Oracle Forms. This library allows Workflow management to calculate the mileage for the road assistance service. Therefore, the company can increase its income by marketing products adapted to the insurance needs.',
        'Different Java web applications adapt to handle different currencies to issue policies in foreign currencies.'
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
