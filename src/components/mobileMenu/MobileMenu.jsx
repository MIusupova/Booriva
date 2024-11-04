import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuBooriva from "../../assets/img/icons/MenuBooriva";
import MobileMenuArrow from "../../assets/img/icons/MobileMenuArrow";
import MobileMenuBasket from "../../assets/img/icons/MobileMenuBasket";
import MobileMenuHeart from "../../assets/img/icons/MobileMenuHeart";
import styles from "./MobileMenu.module.sass";
const MobileMenu = ({isBasketOpen, setIsBasketOpen, isMobileMenuOpen, setMobileMenuOpen }) => {
    const allProductBasket = useSelector(state => state.cart.allProductBasket)
    const allProductWishlist = useSelector(state => state.wish.allProductWishlist)
    return (
        <nav className={styles.mobileMenu}>
            <div className={styles.mobileMenuItems}>
                <div className={styles.mobileMenuItem} isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} onClick={() => setMobileMenuOpen(true)}> <MenuBooriva/>
                    <span className={styles.mobileMenuItemText}>Меню</span>
                </div>
                <div className={styles.mobileMenuItem}> <MobileMenuArrow/>
                    <span className={styles.mobileMenuItemText}>Написать</span>
                </div>
                <div className={styles.mobileMenuItem} isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} onClick={()=> setIsBasketOpen(true)}> <MobileMenuBasket/>
                    <span className={styles.mobileMenuItemText}>Корзина</span>
                    <div className={styles.allSumBasket}>{allProductBasket}</div>
                </div>
                <Link to="/booriva/wishlistPage" className={styles.mobileMenuItem}>
          {" "}
          <MobileMenuHeart />
          <span className={styles.mobileMenuItemText}>Wishlist</span>
          <div className={styles.allSumBasket}>{allProductWishlist}</div>
        </Link>
                

            </div>

            
        </nav>
    )
}
export default MobileMenu

 
