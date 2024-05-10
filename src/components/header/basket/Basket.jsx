import BasketIcon from "../../../assets/img/icons/BasketIcon";

import styles from "./Basket.module.sass";

const Basket = ({setIsBasketOpen}) => {
    return (
        <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
            <BasketIcon/>
        </span>

    )

}
export default Basket