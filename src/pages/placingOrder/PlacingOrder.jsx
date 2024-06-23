import { useState } from "react";

import ButtonBasketPink from "../../assets/img/icons/ButtonBasketPink";
import ContactInfa from "./contactInformation/ContactInfa";
import DeliveryMethod from "./deliveryMethod/DeliveryMethod";
import Checkout from "../../components/checkout/Checkout";
import BasketPage from "../../components/basket/BasketPage.module.sass";

import styles from "./PlacingOrder.module.sass";
import BasketBtnSmall from "../../assets/img/icons/BasketBtnSmall";
import postSendMessage from "../../services/sendMessage";

const PlacingOrder = ({ products, cart, setCart }) => {
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

    console.log(data);
  };

  const deliveryMethod = () => {
    let data2 = { email: adress, delivery: delivery, pickup: pickup };

    console.log(data2);
  };

  const confirmOrder = () => {
    if (
      name.trim() !== "" &&
      surname.trim() !== "" &&
      tel.trim() !== "" &&
      email.trim() !== "" &&
      adress.trim() !== "" &&
      (delivery.trim() !== "" || pickup.trim() !== "")
    ) {
      contactDetails();
      deliveryMethod();
      setModalActive(true);
      ///
      fetch(
        "https://api.telegram.org/bot7308317685:AAFQwpCOIxxkSBZgpdfvc7pfEhHwWlhm8mI/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=utf-8" },
          body: JSON.stringify({
            chat_id: "5428827985",
            parse_mode: "html",
            text: `<b>Новый заказ! </b>
            <b>Имя: ${name}</b>,
            <b>Фамилия: ${surname}</b>,
            <b>Номер: ${tel}</b>,
            <b>Емайл: ${email}</b>,
            <b>Адресс: ${adress}</b>
            <b>Доставка: ${delivery}</b>,
            <b>Подобрать: ${pickup}</b>`,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => (res.ok ? setModalActive(true) : console.log("Error")));
    } else {
      console.log("ЗАПОЛНИТЕ ПОЛЯ!!!");
    }
  };
  return (
    <div className={styles.placingOrder + " wrapper"}>
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
        <button className={styles.basketBtn} onClick={confirmOrder}>
          <ButtonBasketPink />
          <div className={styles.text}>{"Подтвердить заказ"}</div>
        </button>
      </div>

      <div className={styles.basketBoxOne}>
        <div className={styles.basketBox}>
          <h1 className={styles.basketTitle}>ТОВАРЫ В КОРЗИНЕ:</h1>
          <div className={styles.products}>
            {products.map((item) => (
              <div className={styles.productsBlock}>
                <div className={styles.productsCard}>
                  <img src={item.images[0]} alt="" />
                </div>
                <div className={styles.productsCardText}>
                  <div className={styles.basketBtnText}>
                    <p className={styles.productsName}>
                      {item.name} <br />{" "}
                    </p>
                    <div className={styles.mg}>
                      <div
                        className={styles.basketBtnsmall}
                        onClick={() =>
                          setCart(cart.filter((id) => id !== item.id))
                        }
                      >
                        <BasketBtnSmall />
                      </div>
                    </div>
                  </div>
                  <p className={styles.productsSize}>S—M</p>
                  <p className={styles.productsPrice}>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.basketPrice}>
          <div className={styles.basketPriceOne}>
            <span className={styles.basketTextSmall}>Cумма заказа:</span>
            <span className={styles.basketTextBig}>4 998 ₴</span>
          </div>
          <div className={styles.basketPriceOne}>
            <span className={styles.basketTextSmall}>Стоимость доставки:</span>
            <span className={styles.basketTextBig}>бесплатно</span>
          </div>
          <div className={styles.basketTextPriceOne}>
            <span className={styles.basketTextPrice}>
              К оплате: . . . . . . .
            </span>
            <span className={styles.basketTextBigPrice}>4 998 ₴</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacingOrder;
