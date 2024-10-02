import { useContext, useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import { SelectOpen } from "../../App";
import Card from "../../components/cards/card";
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import styles from "./WishListPage.module.sass";

const WishListPage = () => {
  const [product, setProducts] = useState([]);
  const { select, setSelect } = useContext(SelectOpen);
  const setData = async (select, i, product) => {
    if (i < select.length) {
      const data = await getProductData(select[i]);
      product.push(data);
      if (i < select.length - 1) {
        return setData(select, i + 1, product);
      } else {
        return product;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const item = setData(select, 0, []);
    item.then((res) => setProducts(res));
  }, [select]);
  return (
    <div className={styles.wishListPage + " wrapper"}>
      <div className={styles.wishListTitle}>
        <Title title="список желаний" subTitle="твой тайный список желаний" />
        <div className={styles.categoryTitleSvg}></div>
      </div>
      <div className={styles.newItemsCards}>
        {product.map(({ id, images, name, price }) => {
          return (
            <div className={styles.sizeCard}>
              <Card
                id={id}
                cardBox={`cardBox`}
                textSize={`cardText`}
                priceSize={`cardPrice`}
                image={images[0]}
                text={name}
                price={`${price} ₽`}
              />
            </div>
          );
        })}
      </div>
      <Delivery />
    </div>
  );
};

export default WishListPage;
