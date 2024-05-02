import Simvol from "../../../../assets/img/icons/Simvol";
import HeartBooriva from "../../../../assets/img/icons/HeartBooriva";
import MiniLine from "../../../../assets/img/icons/MiniLine";
import Semicirle from "../../../../assets/img/icons/Semicircle";
import Wave from "../../../../assets/img/icons/Wave";

import styles from "./boorivaStoreBigText.module.sass";

const BoorivaStoreBigText = () => {
  return (
    <div className={styles.boorivaStoreCommDisp}>
      <div className={styles.boorivaStoreIcons}>
        <div className={styles.boorivaStoreSimvol}>
          <Simvol />
        </div>
        <div className={styles.boorivaStoreHeart}>
          <HeartBooriva />
        </div>
        <div className={styles.boorivaStoreLine}>
          <MiniLine />
        </div>
        <div className={styles.boorivaStoreSemircle}>
          <Semicirle />
        </div>
        <div className={styles.boorivaStoreWave}>
          <Wave />
        </div>
      </div>
      <div className={styles.boorivaStoreBigText}>
        Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
        гуляя по Подолу, и примерять что-то из в наличии
      </div>
    </div>
  );
};

export default BoorivaStoreBigText;
