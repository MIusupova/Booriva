import styles from "./CategoryProduct.module.sass";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";
import Card from "../../components/cards/card"
import cardSweatshirtImg from '../../assets/img/images/card-sweatshirt.png'
import cardDressImg from '../../assets/img/images/card-dress.png'
import cardBomberImg from '../../assets/img/images/card-bomber.png'

import styles from "./CategoryProduct.module.sass";

const CategoryProduct = () => {
    return (
        <div className={styles.categoryProduct}>
            <div className={styles.categoryProductBlock + ' wrapper'}>
                <CategoryTitle/>
                <div className={styles.filterCards}>
                    <CategoryFilter/>
                    <div className={styles.newItemsCards}>
                        <div className={styles.newItemsCardsBox}>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                        </div>
                        <div className={styles.newItemsCardsBox}>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                        </div>
                        <div className={styles.newItemsCardsBoxDelete}>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                        </div>
                        <div className={styles.newItemsCardsBoxDelete2}>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                            <Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
export default CategoryProduct