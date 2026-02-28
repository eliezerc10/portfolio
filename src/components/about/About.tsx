import { memo } from 'react'
import { Element, scroller } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import personalPic from '../../assets/images/profilePic.webp'
import { CloudinaryImage } from '../common/CloudinaryImage'
import { getCloudinaryPublicId } from '../../config/cloudinaryMapping'
import '../about/about.css'

interface AboutLink {
    image: string;
    url: string;
    alt: string;
}

interface AboutProps {
    aboutLinks: AboutLink[];
}

export const About: React.FC<AboutProps> = memo(({ aboutLinks }) => {
    
    const { t } = useTranslation();
    
    const scrollToContacts = () => {
        scroller.scrollTo('contact', {
            duration: 500,
            offset:90,
            smooth: true
        })
    }
    
    return(
        <>
            <section  className="about-sec">
                <div className="description">
                    <p className='main-description'>{t('hero.greeting')} <span>{t('hero.name')}</span>
                        <br></br>
                        {t('hero.title')}
                    </p>
                    <button className='btn' onClick={scrollToContacts} aria-label="Scroll to contact section">{t('hero.contactBtn')}</button>
                </div>
                
                <CloudinaryImage
                    publicId={getCloudinaryPublicId('profilePic')}
                    localSrc={personalPic}
                    alt="profile pic"
                    className="about-img"
                    loading="eager"
                    fetchPriority="high"
                    width={529}
                    height={529}
                /> 
                
                <div className='social-media-line'>
                    <div className='vertical-line'></div>
                    { aboutLinks.map((link: AboutLink) => 
                            <article key={link.url}>
                                <a href={(link.url)} target='_blank' rel="noreferrer" aria-label={`Visit my ${link.alt} profile`}>
                                    <CloudinaryImage
                                        publicId={getCloudinaryPublicId(link.alt)}
                                        localSrc={link.image}
                                        alt={`${link.alt} icon`}
                                        loading="lazy"
                                        width={44}
                                        height={44}
                                    />
                                </a>
                            </article>
                        )
                    }
                    
                </div>
            </section>
            <Element name='about'>
                <section  className='about-of-sec'>
                    <h1>{t('about.title')}</h1>
                    <div className='about-description'>  
                        <div className='text-line'></div>
                        <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
                    </div>
                </section>
            </Element>
        </>
        
    )
});