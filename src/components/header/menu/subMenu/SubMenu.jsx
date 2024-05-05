import { useEffect, useState } from "react";

import styles from "./SubMenu.module.sass";
import { getSubMenuItems } from "../../../../services/menu";
import { Link } from "react-router-dom";

const SubMenu = ({isShow, setIsShow, menuId}) => {
    const [subMenu, setSubMenu] = useState([])
    useEffect(() => {
        const data = getSubMenuItems(menuId)
        data.then((res) => setSubMenu(res))
    }, [menuId])
    return(
        subMenu.length > 0 &&
        <ul  className={styles.submenu + ' ' + (isShow ? styles.show : styles.hidden)} onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            <div className={styles.submenuBlock}>
            {
                    subMenu.map(({id, name}) => <li key={id}> <Link to={`/catalog?menuId=${id}`} className={styles.subList}>{name}</Link> </li>)

                }
                </div>
        </ul>      
    )
}
export default SubMenu