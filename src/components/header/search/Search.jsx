import { Link } from "react-router-dom";
import SearchIcon from "../../../assets/img/icons/SearchIcon";

import styles from "./Search.module.sass";

const Search = ({setSearchOpen}) => {
    return (
        <Link to={'/Results'}>
            <span  className={styles.search} onClick={() => setSearchOpen(true)}>
            <SearchIcon/>
            
        <div className={styles.searchText}>Поиск</div>
        </span>

        </Link>
        

    )

}
export default Search