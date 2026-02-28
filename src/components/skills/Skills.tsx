import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../skills/skills.css";
import "swiper/css";
import "swiper/css/bundle";

interface Skill {
  img: string;
  name: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Element name="skills">
      <section className="skills-section">
        <h1>My Skills</h1>
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4} 
            autoplay={{ delay: 1400, disableOnInteraction: false }} 
            speed={400} 
            pagination={{ clickable: true }} 
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {skills.map((skill: Skill) => (
              <SwiperSlide className="skill-card" key={skill.name}>
                <img src={skill.img} alt={skill.name} loading="lazy" />
                <h3>{skill.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
    </Element>
  );
};
