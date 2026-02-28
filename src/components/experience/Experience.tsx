import '../experience/experience.css'
import { Element } from "react-scroll"

interface ExperienceItem {
    period: string;
    company: string;
    role: string;
    techStack: string[];
    achievements: string[];
}

interface ExperienceProps {
    experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <Element  className='experience-container' name="experience">
            <section className='exp-section'>
                <h1>Experience</h1>
                <div className='experiences-div'>
                    { experiences.map((experience: ExperienceItem) =>
                        <article className='experience-article' key={`${experience.company}-${experience.role}`}>
                            <div>
                                <div className="circle"></div>
                                <div className="vertical-line"></div>
                            </div>
                            <div>
                                <h3 className='role-title'><strong>{ experience.role }</strong> <br /> <span>({experience.period})</span></h3>
                                <h5 className='company-title'>{ experience.company }</h5>
                                <ul>
                                    {experience.achievements.map((achievement: string, index: number) => (
                                    <li key={`${experience.company}-achievement-${index}`}>{achievement}</li>
                                    ))}
                                </ul>
                                <ul><strong>Tech Stack:</strong> {experience.techStack.join(", ")}.</ul>
                            </div>
                        </article>
                    )}  
                </div>
            </section>
        </Element>
    )
}