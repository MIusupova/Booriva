
import styles from "./Results.module.sass";
import Title from "../title/Title";
import Card from "../cards/card";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import axios from 'axios'



const Results = ({value}) => {
    
    
    const [product, setProducts] = useState([]);
    
    const getProductData = () => {
        axios.get('https://6569c6cede53105b0dd7a33a.mockapi.io/product')
        .then((responce) => {
            setProducts(responce.data)
        })
    }


    useEffect(() => {
        getProductData()
      }, []);

      const filterProducts = product.filter(item => {
        return item.name.toLowerCase().includes(value)
      })

    return (
        <div className={styles.results + " wrapper"}>
      <div className={styles.resultsTitle}>
        <Title title="Результаты" subtitle='Найдено...' />
        <div className={styles.categoryTitleSvg}></div>

      </div>
      <div className={styles.products}>

        {
            filterProducts.map(({id, name, images, price} ) =>
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
            )
        }

      </div>
            
          
      </div>

    )
}
export default Results