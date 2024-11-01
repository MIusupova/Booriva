import { useContext, useEffect, useState } from "react";
import styles from "./characteristics.module.sass";

import NewItemsButton from "../../../assets/img/icons/new_items_button";
import Line from "./line/Line";
import { useDispatch, useSelector } from "react-redux";
import { setSize, chooseSizes } from "../../../redux/sizeSlice/sizeSlice";

const Characteristics = ({ name, price, details, desc, addProductInCart }) => {
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const chooseSize = (event) => {
    dispatch(chooseSizes(event.target.value));
  };

  useEffect(() => {}, [size]);

  return (
    <div className={styles.characteristics}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.price}>{price} ₽</h2>
      <div className={styles.sizeCont}>
        <p className={styles.chooseSize}>Выбрать размер:</p>
        <form id="check" className={styles.sizes}>
          <div className={styles.flexSize}>
            <input
              type="radio"
              value="XS - S"
              id="xs"
              name="size"
              className={styles.sizeIn}
              checked={size === "XS - S"}
              onChange={handleChange}
              onClick={chooseSize}
            />
            <label
              htmlFor="xs"
              className={`${styles.size} ${
                size === "XS - S" ? styles.selected : ""
              }`}
            >
              {" "}
              XS - S
            </label>
          </div>
          <div className={styles.flexSize}>
            <input
              type="radio"
              value="S - M"
              id="s"
              name="size"
              className={styles.sizeIn}
              checked={size === "S - M"}
              onChange={handleChange}
              onClick={chooseSize}
            />
            <label
              htmlFor="s"
              className={`${styles.size} ${
                size === "S - M" ? styles.selected : ""
              }`}
            >
              {" "}
              S - M
            </label>
          </div>
          <div className={styles.flexSize}>
            <input
              type="radio"
              value="M - L"
              id="m"
              name="size"
              className={styles.sizeIn}
              checked={size === "M - L"}
              onChange={handleChange}
              onClick={chooseSize}
            />
            <label
              htmlFor="m"
              className={`${styles.size} ${
                size === "M - L" ? styles.selected : ""
              }`}
            >
              {" "}
              M - L
            </label>
          </div>
          <div className={styles.flexSize}>
            <input
              type="radio"
              value="L - XL"
              id="l"
              name="size"
              className={styles.sizeIn}
              checked={size === "L - XL"}
              onChange={handleChange}
              onClick={chooseSize}
            />
            <label
              htmlFor="l"
              className={`${styles.size} ${
                size === "L - XL" ? styles.selected : ""
              }`}
            >
              {" "}
              L - XL
            </label>
          </div>
        </form>
        <div className={styles.button} onClick={addProductInCart}>
          <div to={`/booriva/catalog?menuId=000`} className={styles.linkButton}>
            <NewItemsButton />
            <div className={styles.categoriesImgAbsoluteButton}>В КОРЗИНУ</div>
          </div>
        </div>
        <p className={styles.description}>{desc}</p>
        <div className={styles.line}>
          <Line />
        </div>
        <div className={styles.consist}>
          <span>Состав: </span> {details}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
