import SearchIcon from "../../../assets/img/icons/SearchIcon";

import styles from "./Search.module.sass";

const Search = ({searchOpen, setSearchOpen}) => {
    
    return (
        
            <span  className={styles.search} onClick={() => setSearchOpen(!searchOpen)}>
            <SearchIcon/>
            
        <div className={styles.searchText}>Поиск</div>
        </span>

       
        

    )

}
export default Search