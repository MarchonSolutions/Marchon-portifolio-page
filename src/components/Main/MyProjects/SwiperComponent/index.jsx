import "swiper/css";
import "swiper/css/pagination";
import PropTypes from "prop-types";
import { EachProjectMobile } from "../EachProjectMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SeeMore } from "../../../SeeMore";

export const SwiperComponent = ({ projects }) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="swiper__container"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <EachProjectMobile
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            deployLink={project.deploy}
            repoLink={project.repositorio}
          />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <SeeMore />
      </SwiperSlide>
    </Swiper>
  );
};

SwiperComponent.propTypes = {
  projects: PropTypes.object.isRequired,
};
