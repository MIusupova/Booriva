import { useState } from "react";
import styles from "./DeliveryMethodInput.module.sass";

const DeliveryMethodInput = ({
  adress,
  delivery,
  pickup,
  setDelivery,
  setAdress,
  setPickup,
}) => {
  return (
    <div className={styles.deliveryMethodInput}>
      <div className={styles.input1}>
        <input
          className={styles.inputRadio}
          type="radio"
          id="one"
          name="test"
          value="доставка"
          onChange={(event) => setDelivery(event.target.value)}
        />
        <label className={styles.label} htmlFor="one">
          Доставка в отделение почты
        </label>
      </div>
      <div className={styles.input2}>
        <input
          className={styles.inputRadio}
          type="radio"
          id="two"
          name="test"
          value="самовывоз"
          onChange={(event) => setPickup(event.target.value)}
        />
        <label className={styles.label} htmlFor="two">
          Самовывоз с нашего шоурума —{" "}
          <div className={styles.forFree}>бесплатно</div>
        </label>
      </div>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Введите адресс: "
        value={adress}
        onChange={(event) => setAdress(event.target.value)}
      />
    </div>
  );
};

export default DeliveryMethodInput;
