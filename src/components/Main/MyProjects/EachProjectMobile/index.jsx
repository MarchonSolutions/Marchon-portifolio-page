import styles from "./EachProjectMobile.module.css";
import PropTypes from 'prop-types';
import {ButtonsArea} from '../../../ButtonsArea'

export const EachProjectMobile = ({ image, description, name, deployLink, repoLink }) => {
  return (
    <div className={styles.myProjects}>
      <img src={image} alt="Imagem da pagina do projeto" className={styles.project__img} />
      <div className={styles.description}>
        <h3>{name}</h3>
        <p>{description}</p>
        <ButtonsArea
          btn1="Deploy"
          btn2="Repositório"
          href1={deployLink}
          href2={repoLink}
        />
      </div>
    </div>
  );
};

EachProjectMobile.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired
}
