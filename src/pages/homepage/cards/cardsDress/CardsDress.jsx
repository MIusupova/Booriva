import Card from "../../../../components/cards/card";

import cardDressImg from "../../../../assets/img/images/card-dress.png";

import styles from "./CardsDress.module.sass";
// import styles from "../../../../components/cards/card.module.sass";

const CardsDress = (text) => {
  return (
    <div className={styles.cardsDress}>
      <Card
        image={cardDressImg}
        text="Платье прозрачное в цветочек черное"
        price="1 299 ₴"
      />
    </div>
  );
};

export default CardsDress;
