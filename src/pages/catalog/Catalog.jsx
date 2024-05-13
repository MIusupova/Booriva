import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";
import { Link } from "react-router-dom";
import { getCatalogData } from "../../services/catalog";

import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";
import Card from "../../components/cards/card";

import styles from "./Catalog.module.sass";

const Catalog = () => {
  const location = useLocation();
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const data = getCatalogData(qs.parse(location.search.substring(1)).menuId);
    data.then((res) => {
      res.products ? setCard(res.products) : setCard([]);
      res.menuName ? setTitle(res.menuName) : setTitle("пусто");
    });
  }, [location]);
  return (
    <div className={styles.categoryProduct}>
      <div className={styles.categoryProductBlock + " wrapper"}>
        <CategoryTitle title={title} subtitle={title} />
        <div className={styles.filterCards}>
          <CategoryFilter />.
          <div className={styles.newItemsCards}>
            {card.length > 0 ? (
              card.map(({ id, images, name, price }) => {
                return (
                  <div className={styles.sizeCard}>
                    <Link to={`/cardProductPage?id=${id}`}>
                      <Card
                        cardBox={`cardBox`}
                        textSize={`cardText`}
                        priceSize={`cardPrice`}
                        image={images[0]}
                        text={name}
                        price={`${price} ₽`}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className={styles.textDelete}>
                Товаров данной категории нет~
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
