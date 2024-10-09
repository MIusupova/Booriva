import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";
import { Link } from "react-router-dom";
import { getCatalogData, getCategoryData } from "../../services/catalog";

import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";
import Card from "../../components/cards/card";

import styles from "./Catalog.module.sass";
import { getProductData } from "../../services/product";

const Catalog = () => {
  const location = useLocation();
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState([]);
  const [subTitle, setSubTitle] = useState([]);

  useEffect(() => {
    let data;
    if (location.search.length > 0) {
      const params = qs.parse(location.search.substring(1));
      if (params.menuId) {
        const data = getCatalogData(params.menuId);
        data.then((res) => {
          res.products ? setCard(res.products) : setCard([]);
          res.menuName ? setTitle(res.menuName) : setTitle("пусто");
          res.menuName ? setSubTitle(res.menuName) : setSubTitle("пусто");
        });
      } else if (params.categoryId) {
        data = getCategoryData(params.categoryId);
        data.then((res) => {
          res[0].products ? setCard(res[0].products) : setCard([]);
          setSubTitle(res[0].categoryName);
          setTitle(res[0].menuName);
        });
      }
    } else {
      data.then((res) => {
        setCard(res);
        setTitle("пусто");
        setSubTitle("пусто");
      });
    }
  }, [location]);
  return (
    <div className={styles.categoryProduct}>
      <div className={styles.categoryProductBlock + " wrapper"}>
        <CategoryTitle title={title} subTitle={subTitle} />

        <div className={styles.filterCards}>
          <CategoryFilter />
          <div className={styles.newItemsCards}>
            {card.length > 0 ? (
              card.map(({ id, images, name, price }) => (
                <div className={styles.sizeCard} key={id}>
                  <Link to={`/booriva/cardProductPage?id=${id}`}>
                    <Card
                      cardBox={`cardBox`}
                      textSize={`cardText`}
                      priceSize={`cardPrice`}
                      image={images}
                      text={name}
                      price={`${price} ₽`}
                    />
                  </Link>
                </div>
              ))
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
