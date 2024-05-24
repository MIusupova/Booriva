import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import Card from "../../components/cards/card";
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import styles from "./WishListPage.module.sass";

const WishListPage = ({ select, setSelect }) => {
  const [product, setProducts] = useState([]);

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
  console.log(product);
  return (
    <div className={styles.wishListPage + " wrapper"}>
      <div className={styles.wishListTitle}>
        <Title title="список желаний" subtitle="твой тайный список желаний" />
        <div className={styles.categoryTitleSvg}></div>
      </div>
      <div className={styles.newItemsCards}>
        {product.map(({ images, name, price }) => {
          return (
            <Link to="/cardProductPage" className={styles.sizeCard}>
              <Card
                cardBox={`cardBox`}
                textSize={`cardText`}
                priceSize={`cardPrice`}
                active={true}
                image={images[0]}
                text={name}
                price={`${price} ₽`}
              />
            </Link>
          );
        })}
      </div>
      <Delivery />
    </div>
  );
};

export default WishListPage;
