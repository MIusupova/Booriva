import { useSelector } from "react-redux";
import BasketIcon from "../../../assets/img/icons/BasketIcon";
import styles from "./Basket.module.sass";



const Basket = ({setIsBasketOpen}) => {
    const allProductBasket = useSelector(state => state.cart.allProductBasket)
    return (
        <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
            <BasketIcon/>
            <div className={styles.allSumBasket}>{allProductBasket}</div>
        </span>

    )

}
export default Basket