import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import '../navbar/navbar.css'
interface NavbarProps {
    links: {
        text: string
        url: string
    }[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
    
    const [scroll, setScroll] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < 50);
        });
    }, []);
    
    
    return(
        <nav className={scroll ? 'navbar-nav' : 'navbar-nav scroll-navbar'}>
            {links.map((link: any) =>
                <Link className='prevent-select' 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                isDynamic={true}
                key={link.url}  to={link.url}>{link.text}</Link>
            )}
        </nav>
    )
}