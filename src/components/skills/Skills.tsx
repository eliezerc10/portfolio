import { memo } from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import { CloudinaryImage } from "../common/CloudinaryImage";
import { getCloudinaryPublicId } from "../../config/cloudinaryMapping";
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

export const Skills: React.FC<SkillsProps> = memo(({ skills }) => {
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
                <CloudinaryImage
                  publicId={getCloudinaryPublicId(skill.name)}
                  localSrc={skill.img}
                  alt={skill.name}
                  loading="lazy"
                  width={175}
                  height={175}
                />
                <h3>{skill.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
    </Element>
  );
});
