import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SelectOpen } from "../../App";
import Like from "../../assets/img/icons/like";
import styles from "./card.module.sass";

const Card = ({ id, image, text, price, textSize, priceSize, cardBox }) => {
  const { select, setSelect } = useContext(SelectOpen);
  const [active, setActive] = useState();
  const addProductSelect = () => {
    if (!select.includes(id)) {
      setSelect([...select, id]);
    } else {
      setSelect(select.filter((data) => data !== id));
    }
  };
  useEffect(() => {
    setActive(select.some((item) => item === id));
  }, [select]);
  return (
    <div className={styles[cardBox]}>
      <div className={styles.boxImg}>
        <Link to={`/cardProductPage?id=${id}`}>
          <img src={image} alt="" className={styles.cardImg} />
        </Link>
        <div className={styles.likeBox} onClick={addProductSelect}>
          <Like active={active} />
        </div>
      </div>

      <div className={styles.cardLine}></div>
      <Link to={`/cardProductPage?id=${id}`}>
        <div className={styles.cardDescription}>
          <div className={styles[textSize]}>{text}</div>
          <div className={styles[priceSize]}>{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
