import { Link } from "react-router-dom";
import BasketEmptyImg from "../../../assets/img/icons/BasketEmptyImg";
import styles from "./BasketEmpty.module.sass";
import ButtonBasketPink from "../../../assets/img/icons/ButtonBasketPink";

const BasketEmpty = () => {
    return (
        <div className={styles.basketEmpty}>
            <h1 className={styles.basketEmptyTitle}>Корзина</h1>
            <div className={styles.basketEmptyImgg}><BasketEmptyImg/></div>
             <br />
            <span className={styles.basketEmptyText}>Твоя корзина пуста, но это никогда не поздно исправить:)</span>
            <Link to="/booriva" className={styles.basketBtn}>
                <ButtonBasketPink/>
                <div className={styles.text}>{"За покупками"}</div>
          </Link>
            
                  
        </div>
                
    )
}
export default BasketEmpty