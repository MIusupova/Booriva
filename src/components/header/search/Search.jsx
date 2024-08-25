import SearchIcon from "../../../assets/img/icons/SearchIcon";

import styles from "./Search.module.sass";

const Search = ({setSearchOpen}) => {
    return (
        <span   className={styles.search} onClick={() => setSearchOpen(true)}>
            <SearchIcon/>
            
        <div className={styles.searchText}>Поиск</div>
        </span>

    )

}
export default Search