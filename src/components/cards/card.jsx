import styles from "./card.module.sass";
import Like from "../../assets/img/icons/like";

const CardBomber = ({ image, text, price, boolean }) => {
  const active = false;
  return (
    <div className={styles.cardBox + " " + (boolean ? styles.cardTshirt : "")}>
      <img src={image} alt="" className={styles.cardImg} />
      <div className={styles.likeBox}>
        <Like active={active} />
      </div>
      <div className={styles.cardLine}></div>
      <div className={styles.cardDescription}>
        <div className={styles.cardText}>{text}</div>
        <div className={styles.cardPrice}>{price}</div>
      </div>
    </div>
  );
};

export default CardBomber;
