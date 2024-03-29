import { useState } from "react";
import BoorivaLogo from "../../assets/img/icons/BoorivaLogo";
import styles from "./Header.module.css";
import Basket from "./basket/Basket";
import Contacts from "./contacts/Contacts";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import Wishlist from "./wishlist/Wishlist";
import SubMenu from "./menu/subMenu/SubMenu";

const Header = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={styles.header}>
            <div className={styles.block + ' wrapper'}>
                <div className={styles.blocktwo}>
                    <Contacts/>
                    <BoorivaLogo/>
                    <Search/>
                    <div className={styles.blockthree}>
                        <Wishlist/>
                        <Basket/>
                    </div>
                    
                </div>
                <div className={styles.menu}>
                    <Menu setIsShow={setIsShow}/>
                </div>
                <SubMenu/>
            </div>
        </div>

    )

}
export default Header