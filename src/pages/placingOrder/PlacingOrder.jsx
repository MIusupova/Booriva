import { Link } from "react-router-dom";
import { useState } from "react";

import ButtonBasketPink from "../../assets/img/icons/ButtonBasketPink";
import ContactInfa from "./contactInformation/ContactInfa";
import DeliveryMethod from "./deliveryMethod/DeliveryMethod";
import Checkout from "../../components/checkout/Checkout";
import BasketPage from "../../components/basket/BasketPage";

import styles from "./PlacingOrder.module.sass";
import BasketRed from "../../assets/img/icons/BasketRed";

const PlacingOrder = () => {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const [delivery, setDelivery] = useState("");
  const [adress, setAdress] = useState("");
  const [pickup, setPickup] = useState("");

  const contactDetails = () => {
    let data = { name: name, surname: surname, tel: tel, email: email };
  };

  const deliveryMethod = () => {
    let data2 = { email: adress, delivery: delivery, pickup: pickup };
  };

  const confirmOrder = () => {
    if (
      name.trim() !== "" &&
      surname.trim() !== "" &&
      tel.trim() !== "" &&
      email.trim() !== ""
    ) {
      contactDetails();
      deliveryMethod();
      setModalActive(true);
    } else {
      console.log("ЗАПОЛНИТЕ ПОЛЯ!!!");
    }
  };

  const [btn, setBtn] = useState(true)
    

    const newRed = btn ? <ButtonBasketPink/> : <BasketRed/>

  return (
    <div className={styles.placingOrder}>
      <Checkout active={modalActive} setModalActive={setModalActive} />
      <div className={styles.infa}>
        <ContactInfa
          modalActive={modalActive}
          setModalActive={setModalActive}
          setName={setName}
          setSurname={setSurname}
          setTel={setTel}
          setEmail={setEmail}
          name={name}
          surname={surname}
          tel={tel}
          email={email}
        />
        <DeliveryMethod
          modalActive={modalActive}
          setModalActive={setModalActive}
          email={email}
          adress={adress}
          delivery={delivery}
          pickup={pickup}
          setDelivery={setDelivery}
          setAdress={setAdress}
          setPickup={setPickup}
        />
      </div>
      <button className={styles.basketBtn} onClick={() => {confirmOrder() }}> {/* Можно передать еще одну функцию в онклик*/}
      {btn ?  <ButtonBasketPink/> : <BasketRed/>}
        <div className={styles.text}>{"Подтвердить заказ"}</div>
      </button>
      {/* <BasketPage /> */}
    </div>
  );
};

export default PlacingOrder;
