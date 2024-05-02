import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.sass";
import { getMenuItems } from "../../../services/menu";


const Menu = ({setIsShow, setMenuId}) => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        getMenuItems().then((res) => setMenu(res));
    }, [])
    return (
        <nav className={styles.menu} >
                {menu.map(({id, name}) =>  
                <Link 
                    to={`/catalog?menuId=${id}`} 
                    onMouseEnter={() => {setIsShow(true); setMenuId(id) }} 
                    onMouseLeave={() => setIsShow(false)} 
                    key={id} 
                    className={styles.list}>
                    {name}  
                </Link> )}
            <Link to="/about_us" className={styles.list} >#Boorivagirls</Link>
        </nav>   
    )
};
export default Menu;