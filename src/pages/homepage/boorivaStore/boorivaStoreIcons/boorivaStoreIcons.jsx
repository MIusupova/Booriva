import Semicirle from "../../../../assets/img/icons/Semicircle";
import MiniArrow from "../../../../assets/img/icons/MiniArrow";
import HeartBooriva from "../../../../assets/img/icons/HeartBooriva";

import styles from "./boorivaStoreIcons.module.sass";

const BoorivaStoreIcons = () => {
  return (
    <div className={styles.boorivaStoreIcons}>
      <div className={styles.boorivaStoreSemircle}>
        <Semicirle />
      </div>
      <div className={styles.boorivaStoreArrow}>
        <MiniArrow />
        <div className={styles.boorivaStoreArrow2}>
          <MiniArrow />
        </div>
      </div>
      <div className={styles.boorivaStoreHeart}>
        <HeartBooriva />
      </div>
    </div>
  );
};

export default BoorivaStoreIcons;
