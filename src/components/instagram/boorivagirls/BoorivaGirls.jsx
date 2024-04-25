import styles from "./BoorivaGirls.module.sass";
import things from "../../../assets/img/images/things.png";
import jacket from "../../../assets/img/images/jacket.png";

const BoorivaGirls = () => {
  return (
    <div className={styles.instagramBoorivaGirls}>
      <div className={styles.instagramImagesWrapTwo}>
        <div className={styles.instagramThings}>
          <img src={things} />
        </div>
        <div className={styles.instagramJacket}>
          <img src={jacket} />
        </div>
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

export default BoorivaGirls;
