import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";
import { getCatalogData } from "../../services/catalog";

import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";
import Card from "../../components/cards/card";

import styles from "./Catalog.module.sass";

const Catalog = () => {
  const location = useLocation();
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState([]);
  const [subTitle, setSubTitle] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.search) {
      const data = getCatalogData(
        qs.parse(location.search.substring(1)).menuId
      );
      data.then((res) => {
        res.products ? setCard(res.products) : setCard([]);
        res.menuName ? setTitle(res.menuName) : setTitle("пусто");
        res.categoryName
          ? setSubTitle(res.categoryName)
          : setSubTitle(res.menuName);
      });
    } else {
      navigate("/mistake");
    }
  }, [location]);
  return (
    <div className={styles.categoryProduct}>
      <div className={styles.categoryProductBlock + " wrapper"}>
        <CategoryTitle title={title} subtitle={subTitle} />
        <div className={styles.filterCards}>
          <CategoryFilter />
          <div className={styles.newItemsCards}>
            {card.length > 0 ? (
              card.map(({ id, images, name, price }) => {
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
