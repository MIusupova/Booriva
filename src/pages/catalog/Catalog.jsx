import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import qs from 'qs';


import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";

import styles from "./Catalog.module.sass";
import { getCatalogData } from "../../services/catalog";


const Catalog = () => {
    const location = useLocation()
    useEffect(() => {
        const data = getCatalogData(qs.parse(location.search.substring(1)).menuId)
    }, [location])
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
export default Catalog