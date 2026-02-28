import { useState, useEffect, memo } from 'react'
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { throttle } from '../../utils/throttle';
import { LanguageToggle } from './LanguageToggle';
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
    const { t } = useTranslation();
    const [scroll, setScroll] = useState(true);
    
    useEffect(() => {
        const handleScroll = throttle(() => {
            setScroll(globalThis.scrollY < 50);
        }, 100);

        globalThis.addEventListener("scroll", handleScroll);
        
        return () => {
            globalThis.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <nav className={scroll ? 'navbar-nav' : 'navbar-nav scroll-navbar'} aria-label="Main navigation">
            <div className="navbar-content">
                {links.map((link: LinkItem) =>
                    <Link className='prevent-select' 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={link.offset} 
                    duration={500}
                    isDynamic={true}
                    key={link.url}  
                    to={link.url}
                    aria-label={`Maps to ${t(`nav.${link.url}`)} section`}
                    role="button"
                    tabIndex={0}>{t(`nav.${link.url}`)}</Link>
                )}
                <div className="navbar-separator"></div>
                <LanguageToggle />
            </div>
        </nav>
    );
});