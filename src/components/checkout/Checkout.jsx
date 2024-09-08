import { Link } from "react-router-dom";
import ButtonBasketPink from "../../assets/img/icons/ButtonBasketPink";

import styles from "./Checkout.module.sass";
import VectorPink from "../../assets/img/icons/VectorPink";
import Cancel from "../../assets/img/icons/Cancel";

const Checkout = ({ active, setModalActive, modalActive }) => {
  return (
    <div
      className={active ? styles.modal + " " + styles.active : styles.modal}
      onClick={() => setModalActive(false)}
    >
      <div
        className={
          active
            ? styles.modalContent + " " + styles.active
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cancel}>
          <Cancel modalActive={modalActive} setModalActive={setModalActive} />
        </div>
        <div className={styles.modalDisp}>
          <div className={styles.contactInfaTitle}>
            <div className={styles.contactInfaTitleOne}>СПАСИБО</div>
            <div className={styles.contactInfaVector}>
              <VectorPink />
            </div>
            <div className={styles.contactInfaSubtitle}>
              ВАШ ЗАКАЗ БЫЛ ПРИНЯТ
            </div>
          </div>
          <div className={styles.modalSubtitle}>
            Мы обожаем встречать booriva на улице. Так как всех не встретишь,
            отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА! Ставь
            тэг{" "}
            <Link to="/booriva/about_us" className={styles.span}>
              {" "}
              #boorivagirls
            </Link>{" "}
            чтобы быть в нашей тусовке.
          </div>
          <Link
            to="/booriva/"
            className={styles.basketBtn}
            onClick={() => setModalActive(true)}
          >
            <ButtonBasketPink />
            <div className={styles.text}>{"На главную"}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
