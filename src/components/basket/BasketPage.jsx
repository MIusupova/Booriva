import ButtonBasketPink from '../../assets/img/icons/ButtonBasketPink'
import CrossButtonBasket from '../../assets/img/icons/СrossButtonBasket'
import styles from './BasketPage.module.sass'

const BasketPage = ({isBasketOpen, setIsBasketOpen}) => {
    return(
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} onClick={() =>  setIsBasketOpen(false)}></div>

            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.basketBoxOne} >
                <CrossButtonBasket setIsBasketOpen={setIsBasketOpen} />
                <div className={styles.basketBox}> 
                        <h1 className={styles.basketTitle}>Корзина</h1>
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
                            <span className={styles.basketTextPrice}>К оплате: . . . . . . .</span>
                            <span className={styles.basketTextBigPrice}>4 998 ₴</span>
                        </div>
                    </div>
                    <ButtonBasketPink/>
                    <div className={styles.text}>{'Оформить заказ'}</div> 
            
                </div>
            
                    
            </div>

        </div>
        
        
    )
}

export default BasketPage