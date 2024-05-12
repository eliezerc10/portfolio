import '../navbar/navbar.css'
interface NavbarProps {
    links: {
        text: string
        url: string
    }[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return(
        <nav className="navbar-nav">
            {links.map((link: any) =>
                <a  key={link.url} href={link.url}>{link.text}</a>
            )}
        </nav>
    )
}