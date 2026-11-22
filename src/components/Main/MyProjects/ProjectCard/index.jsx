import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => (
  <article className={styles.card}>
    <div className={styles.media}>
      <img src={project.image} alt={project.alt || `Logo do projeto ${project.name}`} loading="lazy" decoding="async" />
    </div>
    <div className={styles.content}>
      {project.status && <p className={styles.status}>{project.status}</p>}
      <h3>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Ver site: ${project.name}`}>Ver site</a>
        {project.repositorio && <a className={styles.secondary} href={project.repositorio} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório: ${project.name}`}>Repositório</a>}
      </div>
    </div>
  </article>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
    repositorio: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
