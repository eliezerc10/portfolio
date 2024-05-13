import { Element } from 'react-scroll'
import personalPic from '../../assets/images/profilePic.png'
import '../about/about.css'
interface AboutProps {
    
}
export const About: React.FC<AboutProps> = ({}) => {
    return(
        <>
            <section  className="about-sec">
                <div className="description">
                    <p className='main-description'>I'M <span>Eliezer Castillo</span>
                        <br></br>
                        FULL-STACK WEB DEVELOPER
                    </p>
                    <button className='btn'>Contact me</button>
                </div>
                <img className="about-img" src={personalPic} alt="foto de perfil" />
            </section>
            <Element name='about'>
                <section  className='about-of-sec'>
                    <h1>About</h1>
                    <div className='about-description'>  
                        <div className='text-line'></div>
                        <p>
                            As a <strong>Full Stack Developer</strong> with over <strong>four years of experience</strong>, 
                            I'm driven by a passion for crafting innovative technological solutions and tackling new challenges. 
                            Throughout my career, I’ve acquired a robust understanding of various technologies, enabling me to 
                            approach projects with <strong>confidence and efficacy</strong>. My <strong>focus lies in finding creative and 
                            efficient solutions to problems</strong>, blending technical skills with a strong work ethic. Additionally, 
                            I believe <strong>clear and effective communication is paramount in any work environment</strong>, allowing me 
                            to collaborate effectively with colleagues and clients to ensure project success.
                        </p>
                    </div>
                </section>
            </Element>
            
            </>
        
    )
}