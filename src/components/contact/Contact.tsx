import '../contact/contact.css'
import { Element } from "react-scroll"

interface ContactProps {
    contactData: {
        icon: string,
        content: string 
    }[],
    aboutLinks: {
        image:string,
        url: string,
        alt:string
    }[]
}

export const Contact: React.FC<ContactProps> = ({ contactData, aboutLinks }) => {
    return(
        <Element name="contact-sect">
            <section className='contact-section'>
                <h1 className="contact-me-h1">Contact Me</h1>
                <div className='contact-list'>
                    
                    {contactData.map((element:any, i) =>
                        <article key={i} className='contact-article'>
                            <span className="material-icons">{element.icon}</span>
                            <span className='contact-content'>{element.content}</span>  
                        </article>
                    )}
                </div>
                <div className='bottom-links'>
                    { aboutLinks.map((link: any, i) => 
                            <article key={i}>
                                <a href={(link.url)} target='_blank' rel="noreferrer">
                                    <img src={link.image} alt={link.alt} />
                                </a>
                            </article>
                        )
                    }
                </div>
            </section>
        </Element>
    )
}