import { Link } from "react-router-dom";
import SearchProductIcon from "../../assets/img/icons/SearchProductIcon";
import styles from "./SearchProduct.module.sass";
import SearchBtn from "../../assets/img/icons/SearchBtn";





const SearchProduct = ({searchOpen, setValue, value}) => {
  
    
    
    return (
        <div className={styles.searcdiv + ' ' +  (searchOpen && styles.searcdiv_open ) } > 
            <input  placeholder="Поиск товаров" className={styles.searcinput} 
            onChange={(event) => setValue(event.target.value)}
            value={value}
            
             /> 
            <Link to={'/Results'}
            >
                <div className={styles.searchIcons}><SearchProductIcon/>
                </div> 
            </Link>
            {value && (
                <SearchBtn value={value} setValue={setValue}/>
            )

            }
            
            
        </div>
    )
}
export default SearchProduct