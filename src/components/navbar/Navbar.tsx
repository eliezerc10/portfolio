import { useState, useEffect, memo } from 'react'
import { Link } from 'react-scroll';
import { throttle } from '../../utils/throttle';
import '../navbar/navbar.css'

interface LinkItem {
    text: string;
    url: string;
    offset: number;
}

interface NavbarProps {
    links: LinkItem[];
}

export const Navbar: React.FC<NavbarProps> = memo(({ links }) => {
    
    const [scroll, setScroll] = useState(true);
    
    useEffect(() => {
        const handleScroll = throttle(() => {
            setScroll(window.scrollY < 50);
        }, 100);

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <nav className={scroll ? 'navbar-nav' : 'navbar-nav scroll-navbar'}>
            {links.map((link: LinkItem) =>
                <Link className='prevent-select' 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={link.offset} 
                duration={500}
                isDynamic={true}
                key={link.url}  to={link.url}>{link.text}</Link>
            )}
        </nav>
    );
});