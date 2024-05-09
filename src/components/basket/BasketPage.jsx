import styles from './BasketPage.module.sass'

const BasketPage = ({isBasketOpen, setIsBasketOpen}) => {
    return(
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} onClick={() =>  setIsBasketOpen(false)}></div>

            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}></div>

        </div>
        
        
    )
}

export default BasketPage