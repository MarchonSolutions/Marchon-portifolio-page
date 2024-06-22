import styles from './MyProjects.module.css';
import { SwiperComponent } from "./SwiperComponent"

export const MyProjects = () => {
    return (
        <section className={styles.myProjects}>
            <SwiperComponent/> 
        </section>
    )
}