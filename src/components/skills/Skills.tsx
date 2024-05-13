import { Element } from 'react-scroll'
import '../skills/skills.css'
interface SkillsProps {
    skills: {
        img: string,
        name: string
    }[]
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <Element name='skills'>
            <section className='skills-section'>
                <h1>My Skills</h1>
                <div className="skills-container">
                    { skills.map((skill: any) => 
                        <article className="skill-card" key={skill.name}>
                            <img src={skill.img} alt={skill.name} />
                            <h3>{skill.name}</h3>
                        </article>
                    )}
                </div>
            </section>
        </Element>
    )
}