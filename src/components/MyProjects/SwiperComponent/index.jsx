import styles from './Swiper.module.css';
import projects from '../../../mocks/my-projects.json';
import { EachProject } from '../../MyProjects/EachProject';
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const SwiperComponent = () => {
    return (
        <Swiper 
            modules={[Pagination]}
            pagination={{clickable: true}}
            className={styles.swiper__container} 
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index} className={styles.slide__item}>
                    <EachProject 
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        deployLink={project.deploy}
                        repoLink={project.repositorio}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}