
import styles from "./CategoryProduct.module.sass";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";

const CategoryProduct = () => {
    return (
        <div className={styles.categoryProduct}>
            <div className={styles.categoryProductBlock + ' wrapper'}>
                <CategoryTitle/>
                <div className={styles.filterCards}>
                    <CategoryFilter/>
                </div>
            </div>
            
            
        </div>
    )
}
export default CategoryProduct