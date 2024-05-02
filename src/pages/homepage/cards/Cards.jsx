import CardsOne from "./cardsOne/CardsOne";
import CardsImg from "./cardsImg/CardsImg";

import styles from "./Cards.module.sass";
import CardsDress from "./cardsDress/CardsDress";

const Cards = () => {
  return (
    <div className={styles.cards + " wrapper"}>
      <CardsOne />
      <CardsImg />
      <CardsDress />
    </div>
  );
};

export default Cards;
