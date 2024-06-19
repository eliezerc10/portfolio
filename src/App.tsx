import './App.css';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Contact } from './components/contact/Contact';
import { Regards } from './components/regards/Regards';
import { links } from './data/links';
import { contactData } from './data/contactData';
import { aboutLinks } from './data/aboutLinks';
import { skills } from './data/skills';
import { experiences } from './data/experiences';

function App() {

  return (
    <>
      <header>
        <Navbar links={links} />
      </header>
      <main>
        <About aboutLinks={aboutLinks}/>
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact contactData={contactData} aboutLinks={aboutLinks}/>
        <Regards message='Your time is valuable, thank you for sharing it!'/>
      </main> 
      
    </>
  );
}

export default App;
