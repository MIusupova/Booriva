import cardsImg from "../../../../assets/img/images/cardsBigImg.png";

import styles from "./CardsImg.module.sass";

const CardsImg = () => {
  return (
    <div className={styles.cardsImg}>
      <img src={cardsImg} />
    </div>
  );
};

export default CardsImg;
