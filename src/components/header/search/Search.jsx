import { useState } from "react";
import SearchIcon from "../../../assets/img/icons/SearchIcon";

import styles from "./Search.module.sass";

const Search = ({searchOpen, setSearchOpen}) => {
 
    
    return (
        
            <span  className={styles.search} onClick={() => setSearchOpen(!searchOpen)}>
            <SearchIcon className={styles.searchIcon} setSearchOpen={setSearchOpen} searchOpen={searchOpen}/>
            
        <div className={styles.searchText}>Поиск</div>
        </span>

       
        

    )

}
export default Search