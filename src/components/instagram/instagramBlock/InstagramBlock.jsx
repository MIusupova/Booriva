import styles from "./InstagramBlock.module.sass";
import shirt from "../../../assets/img/images/shirt.png";
import raincoat from "../../../assets/img/images/raincoat.png";
import things from "../../../assets/img/images/things.png";
import jacket from "../../../assets/img/images/jacket.png";

const InstagramBlock = () => {
  return (
    <div className={styles.instagramBlock}>
      <div className={styles.instagramFirst}>
        <div className={styles.instagramTitle}>Instagram</div>
        <div className={styles.instagramText}>
          Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще
        </div>
      </div>
      <div className={styles.instagramImagesWrap}>
        <div className={styles.instagramShirt}>
          <img src={shirt} />
        </div>
        <div className={styles.instagramRaincoat}>
          <img src={raincoat} />
        </div>
      </div>
      <div className={styles.instagramImagesWrapTwo}>
        <div className={styles.instagramThings}>
          <img src={things} />
        </div>
        <div className={styles.instagramJacket}>
          <img src={jacket} />
        </div>
      </div>
      <div className={styles.instagramThingsTwo}>
        <img src={things} />
      </div>
    </div>
  );
};

export default InstagramBlock;
