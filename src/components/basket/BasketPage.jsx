import { Link } from 'react-router-dom'
import qs from "qs";

import cardSweatshirtImg from '../../../src/assets/img/images/card-sweatshirt.png'
import ButtonBasketPink from '../../assets/img/icons/ButtonBasketPink'
import CrossButtonBasket from '../../assets/img/icons/СrossButtonBasket'

import styles from './BasketPage.module.sass'
import { useEffect, useState } from 'react'
import { getProductData } from '../../services/product'
import BasketBtnSmall from '../../assets/img/icons/BasketBtnSmall';

const BasketPage = ({isBasketOpen, setIsBasketOpen, cart, setCart}) => {
    const [products, setProducts] = useState([])
  
    

    const sendData = async (cart, i, products) => {
        if(i < cart.length) {
            const data = await getProductData(cart[i])
            products.push(data);
            if (i < cart.length - 1){
                return sendData(cart, i +1, products);
            } else {
                return [];
            }
        }
    }
    
    useEffect(() => {
        const items = sendData(cart, 0, []);
        items.then((res) => setProducts(res))
        }, [cart])
    console.log(products);
    return(
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} onClick={() =>  setIsBasketOpen(false)}></div>

            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.basketBoxOne} >
                <CrossButtonBasket setIsBasketOpen={setIsBasketOpen} />
                <div className={styles.basketBox}> 
                        <h1 className={styles.basketTitle}>Корзина</h1>
                        
                       
                        <div className={styles.products}>

                        
                        
                        <div className={styles.productsBlock} >
                        <div className={styles.productsCard} >
                        <img  src={cardSweatshirtImg} alt="" />
                    </div>
                    <div className={styles.productsCardText}>
                        <div className={styles.basketBtnText}>
                            <p className={styles.productsName} >Бомбер Gone Crazy <br /> хаки</p>
                            <BasketBtnSmall/>
                        </div>
                        
                        <p className={styles.productsSize}>S—M</p>
                        <p className={styles.productsPrice}></p>
                    </div>
                    </div>
                            
                      
                            
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
                            <span className={styles.basketTextPrice}>К оплате: . . . . . . .</span>
                            <span className={styles.basketTextBigPrice}>4 998 ₴</span>
                        </div>
                    </div>
                    <Link  to="/" className={styles.basketBtn}>
                        <ButtonBasketPink/>
                        <div className={styles.text}>{'Оформить заказ'}</div>
                    </Link>
                     
                </div>
            </div>
        </div>
    )
}

export default BasketPage