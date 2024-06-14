import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCatalogDataNew } from "../../../services/catalog";
import qs from "qs";
import Headline from "./headline/headline";
import Card from "../../../components/cards/card";
import NewItemsButton from "../../../assets/img/icons/new_items_button";
import styles from "./new_items.module.sass";

const NewItems = () => {
  const [product, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const data = getCatalogDataNew(qs.parse(location.search.substring(1)));
      data.then((res) => {
        setProducts(res.products);
      });
    }
    console.log(product);
  }, [location]);

  return (
    <div className={styles.NewItemsBox}>
      <Headline />
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
      <div className={styles.NewItemsButton}>
        <Link to={`/catalog?menuId=000`}>
          <NewItemsButton />
        </Link>
      </div>
    </div>
  );
};

export default NewItems;
