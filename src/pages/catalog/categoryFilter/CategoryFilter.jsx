import { Link } from "react-router-dom";
import styles from "./CategoryFilter.module.sass";

const CategoryFilter = () => {
  return (
    <div className={styles.categoryFilter}>
      <p className={styles.filterTitle}>КАТЕГОРИИ:</p>
      <Link to="/booriva/catalog">
        <p className={styles.filterText}>Платья</p>
      </Link>
      <Link to="/booriva/catalog">
        <p className={styles.filterText}>Верх</p>
      </Link>
      <Link to="/booriva/catalog">
        <p className={styles.filterText}>Низ</p>
      </Link>
      <Link to="/booriva/catalog">
        <p className={styles.filterText}>Мелочи</p>
      </Link>
      <Link to="/booriva/catalog">
        <p className={styles.filterText}>Костюмы</p>
      </Link>
    </div>
  );
};
export default CategoryFilter;
