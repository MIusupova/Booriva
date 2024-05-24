import Like from "../../assets/img/icons/like";
import styles from "./card.module.sass";

const Card = ({ image, text, price, active, textSize, priceSize, cardBox }) => {
  return (
    <div className={styles[cardBox]}>
      <div className={styles.boxImg}>
        <img src={image} alt="" className={styles.cardImg} />
      </div>
      <div className={styles.likeBox}>
        <Like active={active} />
      </div>
      <div className={styles.cardLine}></div>
      <div className={styles.cardDescription}>
        <div className={styles[textSize]}>{text}</div>
        <div className={styles[priceSize]}>{price}</div>
      </div>
    </div>
  );
};

export default Card;
