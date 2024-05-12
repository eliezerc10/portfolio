import personalPic from '../../assets/images/profilePic.png'
import '../about/about.css'
interface AboutProps {
    
}
export const About: React.FC<AboutProps> = ({}) => {
    return(
        <>
            <section className="about-sec">
                <div className="description">
                    <p className='main-description'>I'M <span>Eliezer Castillo</span>
                        <br></br>
                        FULL-STACK WEB DEVELOPER
                    </p>
                    <button className='btn'>Contact me</button>
                </div>
                <img className="about-img" src={personalPic} alt="foto de perfil" />
            </section>
            <section className='about-of-sec'>
                <h1>About</h1>
                <div className='about-description'>  
                    <div className='text-line'></div>
                    <p>
                        As a <b>Full Stack Developer</b> with over <b>four years of experience</b>, 
                        I'm driven by a passion for crafting innovative technological solutions and tackling new challenges. 
                        Throughout my career, I’ve acquired a robust understanding of various technologies, enabling me to 
                        approach projects with <b>confidence and efficacy</b>. My <b>focus lies in finding creative and 
                        efficient solutions to problems</b>, blending technical skills with a strong work ethic. Additionally, 
                        I believe <b>clear and effective communication is paramount in any work environment</b>, allowing me 
                        to collaborate effectively with colleagues and clients to ensure project success.
                    </p>
                </div>
            </section>
            </>
        
    )
}