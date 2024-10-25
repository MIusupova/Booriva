


import CrossButtonBasket from "../../assets/img/icons/СrossButtonBasket";
import styles from "./BasketPage.module.sass";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";

import { useDispatch, useSelector } from "react-redux";
import { setAllProductBasket, setCart } from "../../redux/cartSlice/cartSlice";

import BasketEmpty from "./basketEmpty/BasketEmpty";
import BasketOpen from "./basketOpen/BasketOpen";

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
        
          <CrossButtonBasket setIsBasketOpen={setIsBasketOpen} />
          <BasketOpen/> 
         
      </div>
    </div>
  );
};

export default BasketPage;
