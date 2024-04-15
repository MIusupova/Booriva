import styles from "./CategoryFilter.module.sass";

const CategoryFilter = () => {
    return (
        <div className={styles.categoryFilter}>
            <p className={styles.filterTitle}>КАТЕГОРИИ:</p>
            <a  href="#"><p className={styles.filterText}>Платья</p></a>
            <a  href="#"><p className={styles.filterText}>Верх</p></a>
            <a  href="#"><p className={styles.filterText}>Низ</p></a>
            <a  href="#"><p className={styles.filterText}>Мелочи</p></a>
            <a  href="#"><p className={styles.filterText}>Костюмы</p></a>          
        </div>
                
    )
}
export default CategoryFilter