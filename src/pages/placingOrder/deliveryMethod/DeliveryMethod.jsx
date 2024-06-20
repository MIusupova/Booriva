import DeliveryMethodInput from "./deliveryMethodInput/DeliveryMethodInput";
import DeliveryMethodTitle from "./deliveryMethodTitle/DeliveryMethodTitle";

import styles from "./DeliveryMethod.module.sass";

const DeliveryMethod = ({
  adress,
  delivery,
  pickup,
  setDelivery,
  setAdress,
  setPickup,
}) => {
  return (
    <div className={styles.deliveryMethod}>
      <DeliveryMethodTitle />
      <DeliveryMethodInput
        adress={adress}
        delivery={delivery}
        pickup={pickup}
        setDelivery={setDelivery}
        setAdress={setAdress}
        setPickup={setPickup}
      />
    </div>
  );
};

export default DeliveryMethod;
