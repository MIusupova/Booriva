import VectorPink from "../../../../assets/img/icons/VectorPink";

import styles from "./DeliveryMethodTitle.module.sass";

const DeliveryMethodTitle = () => {
  return (
    <div className={styles.deliveryMethodTitle}>
      <div className={styles.deliveryMethodTitleTwo}>2</div>
      <div className={styles.deliveryMethodVector}>
        <VectorPink />
      </div>
      <div className={styles.deliveryMethodSubtitle}>СПОСОБ ДОСТАВКИ</div>
    </div>
  );
};

export default DeliveryMethodTitle;
