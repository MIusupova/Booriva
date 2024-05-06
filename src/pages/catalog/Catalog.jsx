import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from 'qs';
import { Link } from 'react-router-dom'
import { getCatalogData } from "../../services/catalog";

import CategoryFilter from "./categoryFilter/CategoryFilter";
import CategoryTitle from "./categoryTitle/CategoryTitle";
import Card from '../../components/cards/card'

import styles from "./Catalog.module.sass";


const Catalog = () => {
    const location = useLocation()
    const [card, setCard] = useState([])
    console.log(qs.parse(location.search.substring(1)))
    useEffect(() => {
        const data = getCatalogData(qs.parse(location.search.substring(1)).menuId)
        data.then((res) => {
            console.log(location);
            setCard(res.card)
        })
    }, [location])
    return (
        <div className={styles.categoryProduct}>
        </div>
    )
}
export default Catalog