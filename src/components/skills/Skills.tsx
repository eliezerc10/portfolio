import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../skills/skills.css";
import "swiper/css";
import "swiper/css/bundle";

interface SkillsProps {
  skills: {
    img: string;
    name: string;
  }[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Element name="skills">
      <section className="skills-section">
        <h1>My Skills</h1>
          <Swiper
            modules={[Pagination, A11y, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4} 
            autoplay={{ delay: 1400, disableOnInteraction: false }} 
            speed={400} 
            pagination={{ clickable: true }} 
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile (1 slide)
              480: { slidesPerView: 2 }, // Bigger phones (2 slides)
              768: { slidesPerView: 3 }, // Tablets (3 slides)
              1024: { slidesPerView: 4 }, // Big screens (4 slides)
            }}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            {skills.map((skill: any) => (
              <SwiperSlide className="skill-card" key={skill.name}>
                <img src={skill.img} alt={skill.name} />
                <h3>{skill.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
    </Element>
  );
};
