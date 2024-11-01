import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCatalogDataNew } from "../../../services/catalog";
import qs from "qs";
import Headline from "./headline/headline";
import Card from "../../../components/cards/card";
import styles from "./new_items.module.sass";
import NewItemsButton from "../../../assets/img/icons/new_items_button";

const NewItems = () => {
  const [product, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const data = getCatalogDataNew(qs.parse(location.search.substring(1)));
    data.then((res) => {
      setProducts(res.products);
    });
  }, [location]);

  return (
    <div className={styles.NewItemsBox}>
      <Headline />
      <div className={styles.newItemsCards}>
        {product
          .map(({ id, images, name, price }) => {
            return (
              <div className={styles.sizeCard} key={id}>
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
          })
          .slice(0, 4)}
      </div>
      <div className={styles.NewItemsButton}>
        <Link to={`/booriva/catalog?menuId=000`} className={styles.linkButton}>
          <NewItemsButton />
          <div className={styles.categoriesImgAbsoluteButton}>СМОТРЕТЬ ВСЕ</div>
        </Link>
      </div>
    </div>
  );
};

export default NewItems;
