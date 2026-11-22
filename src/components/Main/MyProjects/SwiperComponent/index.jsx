import "swiper/css";
import "swiper/css/a11y";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import { ProjectCard } from "../ProjectCard";
import styles from "./SwiperComponent.module.css";

export const SwiperComponent = ({ projects }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReducedMotion(event.matches);
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={styles.carousel} role="region" aria-label="Carrossel de projetos">
      <Swiper
        id="projects-slider"
        modules={[A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={20}
        speed={reducedMotion ? 0 : 350}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ slideLabelMessage: "Projeto {{index}} de {{slidesLength}}", itemRoleDescriptionMessage: "slide" }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.slider}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} className={styles.slide} aria-hidden={index !== activeIndex} {...(index !== activeIndex ? { inert: "" } : {})}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls} aria-label="Navegação dos projetos">
        <div className={styles.controlRow}>
          <button type="button" onClick={() => swiperRef.current?.slideTo(activeIndex - 1)} disabled={activeIndex === 0} aria-controls="projects-slider">Anterior</button>
          <p className={styles.counter} aria-live="polite" aria-atomic="true">{activeIndex + 1} de {projects.length}</p>
          <button type="button" onClick={() => swiperRef.current?.slideTo(activeIndex + 1)} disabled={activeIndex === projects.length - 1} aria-controls="projects-slider">Próximo</button>
        </div>
        <div className={styles.pagination}>
          {projects.map((project, index) => (
            <button key={project.id} type="button" className={styles.dot} aria-label={`Mostrar projeto ${index + 1}: ${project.name}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls="projects-slider" onClick={() => swiperRef.current?.slideTo(index)} />
          ))}
        </div>
      </div>
    </div>
  );
};

SwiperComponent.propTypes = { projects: PropTypes.array.isRequired };
