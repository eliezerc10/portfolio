import '../experience/experience.css'
import { Element } from "react-scroll"

interface ExperienceProps {
    experiences : {
        year: number,
        company: string,
        role: string,
        techStack: string[]
        achievements: string[]
    }[]
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <Element  className='experience-container' name="experience">
            <section className='exp-section'>
                <h1>Experience</h1>
                <div className='experiences-div'>
                    { experiences.map((experience: any) =>
                        <article className='experience-article' key={experience.index}>
                            <div className="pointer">
                                <span>{experience.year}</span>
                            </div>
                            <div>
                                <div className="circle"></div>
                                <div className="vertical-line"></div>
                            </div>
                            <div>
                                <h3 className='role-title'>{ experience.role }</h3>
                                <h4 className='company-title'>{ experience.company }</h4>
                                <ul>
                                    {experience.achievements.map((achievement:any) => (
                                    <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                            
                        </article>
                    )}  
                </div>
            </section>
        </Element>
    )
}