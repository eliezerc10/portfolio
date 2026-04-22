import { memo } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { Element, scroller } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import personalPic from '../../assets/images/profilePic.webp'
import { CloudinaryImage } from '../common/CloudinaryImage'
import { ScrollReveal } from '../common/ScrollReveal'
import { createRevealTransition, createRevealVariants } from '../common/motion'
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

const heroItemVariants = createRevealVariants({ distance: 18 })
const heroItemTransition = createRevealTransition({ duration: 0.5 })
const heroImageMotionProps = {
    initial: { opacity: 1, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: createRevealTransition({ duration: 0.65 }),
}

export const About: React.FC<AboutProps> = memo(({ aboutLinks }) => {
    
    const { t } = useTranslation();
    const shouldReduceMotion = useReducedMotion()
    const heroItemMotionProps = shouldReduceMotion
        ? {}
        : {
            initial: 'hidden' as const,
            animate: 'visible' as const,
            variants: heroItemVariants,
            transition: heroItemTransition,
        }
    const imageMotionProps = shouldReduceMotion ? {} : heroImageMotionProps
    
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
                    <m.h1 className='main-description' {...heroItemMotionProps}>
                        <span className='hero-heading-line'>
                            {t('hero.greeting')} <span className='hero-name'>{t('hero.name')}</span>
                        </span>
                        <span className='hero-heading-line hero-role'>{t('hero.title')}</span>
                    </m.h1>
                    <m.p className='hero-subtitle' {...heroItemMotionProps}>
                        {t('hero.subtitle')}
                    </m.p>
                    <m.button
                        className='btn'
                        onClick={scrollToContacts}
                        aria-label="Scroll to contact section"
                        {...heroItemMotionProps}
                    >
                        {t('hero.contactBtn')}
                    </m.button>
                </div>
                
                <m.div className="about-img-motion" {...imageMotionProps}>
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
                </m.div>
                
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
                <ScrollReveal className='about-of-sec'>
                    <h1>{t('about.title')}</h1>
                    <div className='about-description'>  
                        <div className='text-line'></div>
                        <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
                    </div>
                </ScrollReveal>
            </Element>
        </>
        
    )
});
