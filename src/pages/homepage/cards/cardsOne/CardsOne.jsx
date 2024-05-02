import Card from "../../../../components/cards/card";
import bamperCards from "../../../../assets/img/images/bamperCards.png";
import cardsBlouse from "../../../../assets/img/images/cardsBlouse.png";

import styles from "./CardsOne.module.sass";

const CardsOne = () => {
  return (
    <div className={styles.cardsCommon}>
      <Card image={bamperCards} text="Бомбер Gone Crazy хаки" price="2 499 ₴" />
      <Card
        image={cardsBlouse}
        text="Платье-футболка рыбы в аквариуме"
        price="899 ₴"
        boolean="true"
      />
    </div>
  );
};

export default CardsOne;
