import { Link } from "react-router-dom";
import BasketEmptyImg from "../../../assets/img/icons/BasketEmptyImg";
import styles from "./BasketEmpty.module.sass";
import ButtonBasketPink from "../../../assets/img/icons/ButtonBasketPink";
import { useState } from "react";
import BasketRed from "../../../assets/img/icons/BasketRed";

const BasketEmpty = () => {
    const [btn, setBtn] = useState(true)
    const BtnRed = () => {
        setBtn(!btn)
    }

    const newRed = btn ? <ButtonBasketPink/> : <BasketRed/>

    return (
        <div className={styles.basketEmpty}>
            <h1 className={styles.basketEmptyTitle}>Корзина</h1>
            <div className={styles.basketEmptyImgg}><BasketEmptyImg/></div>
             <br />
            <span className={styles.basketEmptyText}>Твоя корзина пуста, но это никогда не поздно исправить:)</span>
            <Link to="/booriva" className={styles.basketBtn } onClick={BtnRed}>
                {btn ?  <ButtonBasketPink/> : <BasketRed/>}
                <div className={styles.text}>{"За покупками"}</div>
          </Link>
            
                  
        </div>
                
    )
}
export default BasketEmpty