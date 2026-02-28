import '../contact/contact.css'
import { Element } from "react-scroll"
import { CloudinaryImage } from '../common/CloudinaryImage'
import { getCloudinaryPublicId } from '../../config/cloudinaryMapping'

interface ContactItem {
    icon: string;
    content: string;
    url: string;
}

interface AboutLink {
    image: string;
    url: string;
    alt: string;
}

interface ContactProps {
    contactData: ContactItem[];
    aboutLinks: AboutLink[];
}

export const Contact: React.FC<ContactProps> = ({ contactData, aboutLinks }) => {
    return(
        <Element name="contact-sect">
            <section className='contact-section'>
                <h1 className="contact-me-h1">Contact Me</h1>
                <div className='contact-list'>
                    
                    {contactData.map((element: ContactItem) =>
                        <article key={element.content} className='contact-article'>
                            <span className="material-icons">{element.icon}</span>
                            {element.url ? 
                                <a href={element.url}>
                                    <span className='contact-content'>{element.content}</span>  
                                </a> 
                                :
                                <span className='contact-content'>{element.content}</span>  
                            }
                            
                        </article>
                    )}
                </div>
                <div className='bottom-links'>
                    { aboutLinks.map((link: AboutLink) => 
                            <article key={link.url}>
                                <a href={(link.url)} target='_blank' rel="noreferrer">
                                    <CloudinaryImage
                                        publicId={getCloudinaryPublicId(link.alt)}
                                        localSrc={link.image}
                                        alt={link.alt}
                                        loading="lazy"
                                        width={64}
                                        height={64}
                                    />
                                </a>
                            </article>
                        )
                    }
                </div>
            </section>
        </Element>
    )
}