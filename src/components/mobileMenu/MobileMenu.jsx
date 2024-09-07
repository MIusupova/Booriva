import MenuBooriva from "../../assets/img/icons/MenuBooriva";
import MobileMenuArrow from "../../assets/img/icons/MobileMenuArrow";
import MobileMenuBasket from "../../assets/img/icons/MobileMenuBasket";
import MobileMenuHeart from "../../assets/img/icons/MobileMenuHeart";
import styles from "./MobileMenu.module.sass";

const MobileMenu = () => {
    return (
        <nav className={styles.mobileMenu}>
            <div className={styles.mobileMenuItems}>
                <div className={styles.mobileMenuItem}> <MenuBooriva/>
                    <span className={styles.mobileMenuItemText}>Меню</span>
                </div>
                <div className={styles.mobileMenuItem}> <MobileMenuArrow/>
                    <span className={styles.mobileMenuItemText}>Написать</span>
                </div>
                <div className={styles.mobileMenuItem}> <MobileMenuBasket/>
                    <span className={styles.mobileMenuItemText}>Корзина</span>
                </div>
                <div className={styles.mobileMenuItem}> <MobileMenuHeart/>
                    <span className={styles.mobileMenuItemText}>Wishlist</span>
                </div>
                

            </div>

            
        </nav>
    )
}
export default MobileMenu