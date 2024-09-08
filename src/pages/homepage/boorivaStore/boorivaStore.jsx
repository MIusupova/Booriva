import BoorivaStoreImg from "./boorivaStoreImg/boorivaStoreImg";
import BoorivaStoreText from "./boorivaStoreText/boorivaStoreText";
import Subtitle from "./Subtitle/subtitle";
import BoorivaStoreBigText from "./boorivaStoreBigText/boorivaStoreBigText";
import BoorivaStoreIcons from "./boorivaStoreIcons/boorivaStoreIcons";

import styles from "./boorivaStore.module.sass";

const BoorivaStore = () => {
  return (
    <div className={styles.boorivaStore + " wrapper"}>
      <div className={styles.boorivaStoreCommon}>
        <BoorivaStoreText />
        <div className={styles.boorivaStoreCommon2}>
          <Subtitle />
          <BoorivaStoreIcons />
        </div>
      </div>
      <div className={styles.boorivaStoreCommDisp}>
        <BoorivaStoreImg />
        <BoorivaStoreBigText />
      </div>
    </div>
  );
};

export default BoorivaStore;
