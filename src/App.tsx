import './App.css';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
function App() {

  const links = [
    { text: 'About', url: '/about' },
    { text: 'Experience', url: '/experience' },
    { text: 'Skills', url: '/skills' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <Navbar links={links} />
      <About />
    </>
  );
}

export default App;
