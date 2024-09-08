import styles from "./Results.module.sass";
import Title from "../title/Title";
import Card from "../cards/card";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import qs from "qs";
import axios from "axios";

const Results = ({ value }) => {
  const [product, setProducts] = useState([]);

  const getProductData = (search) => {
    axios
      .get(`https://6569c6cede53105b0dd7a33a.mockapi.io/product?name=${search}`)
      .then((responce) => {
        console.log(responce);

        setProducts(responce.data);
      });
  };

  useEffect(() => {
    const search = qs.parse(window.location.search.substring(1)).search;
    getProductData(search);
  }, []);

  const filterProducts = product.filter((item) => {
    return item.name.toLowerCase().includes(value);
  });

  return (
    <div className={styles.results + " wrapper"}>
      <div className={styles.resultsTitle}>
        <Title title="Результаты" subtitle="Найдено..." />
        <div className={styles.categoryTitleSvg}></div>
      </div>
      <div className={styles.products}>
        {product.map(({ id, name, images, price }) => (
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
        ))}
      </div>
    </div>
  );
};
export default Results;
