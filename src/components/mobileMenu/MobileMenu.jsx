import MenuBooriva from "../../assets/img/icons/MenuBooriva";
import styles from "./MobileMenu.module.sass";

const MobileMenu = () => {
    return (
        <nav className={styles.mobileMenu}>
            <div className={styles.mobileMenuItems}>
                <div className={styles.mobileMenuItem}> <MenuBooriva/>
                    <span className={styles.mobileMenuItemText}>Меню</span>
                </div>
                
            </div>

            
        </nav>
    )
}
export default MobileMenu