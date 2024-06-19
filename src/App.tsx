import './App.css';

import { links } from './data/links';
import { contactData } from './data/contactData';
import { aboutLinks } from './data/aboutLinks';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { Suspense, lazy, useMemo } from 'react';
import { Loading } from './components/loading/Loading';
import useImagesLoaded from './hooks/useImagesLoaded';

const Navbar = lazy(() =>
  import('./components/navbar/Navbar').then(({ Navbar }) => ({ default: Navbar })),
)

const About = lazy(() =>
  import('./components/about/About').then(({ About }) => ({ default: About })),
);

const Skills = lazy(() =>
  import('./components/skills/Skills').then(({ Skills }) => ({ default: Skills })),
);

const Experience = lazy(() =>
  import('./components/experience/Experience').then(({ Experience }) => ({ default: Experience })),
);

const Contact = lazy(() =>
  import('./components/contact/Contact').then(({ Contact }) => ({ default: Contact })),
);

const Regards = lazy(() =>
  import('./components/regards/Regards').then(({ Regards }) => ({ default: Regards })),
);

function App() {

  const imageUrls = useMemo(() => [
    ...aboutLinks.map(link => link.image),
    ...skills.map(skill => skill.img)
  ], []); 

  const imagesLoaded = useImagesLoaded(imageUrls);

  if (!imagesLoaded) {
    return <Loading />;
  }


  return (
    <>
      <Suspense fallback={<Loading />}>
        <header>
          <Navbar links={links} />
        </header>
        <main>
          <About aboutLinks={aboutLinks} />
          <Skills skills={skills} />
          <Experience experiences={experiences} />
          <Contact contactData={contactData} aboutLinks={aboutLinks} />
          <Regards message='Your time is valuable, thank you for sharing it!' />
        </main>
      </Suspense>
    </>
  );
}

export default App;
