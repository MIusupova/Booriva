import SearchProductIcon from "../../assets/img/icons/SearchProductIcon";
import styles from "./SearchProduct.module.sass";

const SearchProduct = ({searchOpen}) => {
    return (
        <div className={styles.searcdiv + ' ' + (searchOpen && styles.searcdiv_open)} > 
            <input  placeholder="Поиск товаров" className={styles.searcinput} /> 
            <div className={styles.searchIcons}><SearchProductIcon/></div> 
        </div>
    )
}
export default SearchProduct