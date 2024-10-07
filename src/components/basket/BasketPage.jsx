import { Link } from "react-router-dom";

import ButtonBasketPink from "../../assets/img/icons/ButtonBasketPink";
import CrossButtonBasket from "../../assets/img/icons/СrossButtonBasket";
import styles from "./BasketPage.module.sass";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import BasketBtnSmall from "../../assets/img/icons/BasketBtnSmall";
import { useDispatch, useSelector } from "react-redux";
import { setAllProductBasket, setCart } from "../../redux/cartSlice/cartSlice";

const BasketPage = ({ isBasketOpen, setIsBasketOpen }) => {
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
  return (
    <div className={styles.basket__wrap}>
      <div
        className={
          styles.backdrop + " " + (isBasketOpen && styles.backdrop_open)
        }
        onClick={() => setIsBasketOpen(false)}
      ></div>

      <div
        className={styles.basket + " " + (isBasketOpen && styles.basket_open)}
      >
        <div className={styles.basketBoxOne}>
          <CrossButtonBasket setIsBasketOpen={setIsBasketOpen} />
          <div className={styles.basketBox}>
            <h1 className={styles.basketTitle}>Корзина</h1>
            <div className={styles.products}>
              {products.map((item) => (
                <div className={styles.productsBlock} key={item.id}>
                  <div className={styles.productsCard}>
                    <img src={item.images[0]} alt="" />
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
                        <BasketBtnSmall />
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
            <ButtonBasketPink />
            <div className={styles.text}>{"Оформить заказ"}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
