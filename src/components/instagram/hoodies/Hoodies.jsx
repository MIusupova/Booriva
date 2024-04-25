import styles from "./Hoodies.module.sass";
import hoodies from "../../../assets/img/images/hoodies.png";
import jacket from "../../../assets/img/images/jacket.png";

const Hoodies = () => {
  return (
    <div className={styles.instagramHoodiesDisp}>
      <div className={styles.instagramHoodies}>
        <img src={hoodies} />
      </div>
      <div className={styles.instagramJacket}>
        <img src={jacket} />
      </div>
      <div className={styles.instagramBoorivaGirlsDesc}>
        <div className={styles.instagramBoorivaGirlsTitle}>#boorivagirls</div>
        <div className={styles.instagramBoorivaGirlsText}>
          Ставь тэг чтобы быть в нашей тусовке.
        </div>
      </div>
    </div>
  );
};

export default Hoodies;
