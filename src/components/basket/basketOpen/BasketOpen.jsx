import { Link } from "react-router-dom";


import styles from "../BasketPage.module.sass"
import { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";

import ButtonBasketPink from "../../../assets/img/icons/ButtonBasketPink";
import BasketBtnSmall from "../../../assets/img/icons/BasketBtnSmall";
import { setAllProductBasket, setCart } from "../../../redux/cartSlice/cartSlice";
import { getProductData } from "../../../services/product";
import BasketRed from "../../../assets/img/icons/BasketRed";


const BasketOpen = () => {
  const [products, setProducts] = useState([]);
  const [allSum, setAllSum] = useState([0]);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const sendData = async (cart, i, products) => {
    if (i < cart.length) {
      const data = await getProductData(cart[i]);
      products.push(data);

      if (i < cart.length - 1) {
        return sendData(cart, i + 1, products);
      } else {
        return products;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    let productsAllSum = 0;
    for (let i = 0; i < products.length; i++) {
      productsAllSum += Number(products[i].price);
    }
    setAllSum(productsAllSum);
    dispatch(setAllProductBasket(products.length));
  }, [products]);

  useEffect(() => {
    const items = sendData(cart, 0, []);
    items.then((res) => setProducts(res));
  }, [cart]);

  const [btn, setBtn] = useState(true)
   

    const newRed = btn ? <ButtonBasketPink/>  :  <BasketRed/>
  return (
    
        <div className={styles.basketBoxOne}>
          
          <div className={styles.basketBox}>
            
            <h1 className={styles.basketTitle}>Корзина</h1>
            <div className={styles.products}>
              {products.map((item) =>(
                <div className={styles.productsBlock} key={item.id}>
                  <div className={styles.productsCard}>
                    {/* <img src={item.images[0]} alt="" />  */}
                  </div>
                  <div className={styles.productsCardText}>
                    <div className={styles.basketBtnText}>
                      <p className={styles.productsName}>
                        {item.name} <br />{" "}
                      </p>
                      <div
                        className={styles.basketBtnsmall}
                        onClick={() =>
                          dispatch(setCart(cart.filter((id) => id !== item.id)))
                        }
                      >
                       <BasketBtnSmall/>
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
              <span className={styles.basketTextBig}>{allSum} ₴</span>
            </div>
            <div className={styles.basketPriceOneTwo}>
              <span className={styles.basketTextSmall}>
                Стоимость доставки:
              </span>
              <span className={styles.basketTextBig}>бесплатно</span>
            </div>
            <div className={styles.basketTextPriceOne}>
              <span className={styles.basketTextPrice}>
                К оплате: . . . . . . .
              </span>
              <span className={styles.basketTextBigPrice}>{allSum} ₴</span>
            </div>
          </div>
          <Link to="/booriva/placingOrder" className={styles.basketBtn}>
          {btn ? <ButtonBasketPink/>  :  <BasketRed/>}
            <div className={styles.text}>{"Оформить заказ"}</div>
          </Link>
        </div>
  );
};

export default BasketOpen;
