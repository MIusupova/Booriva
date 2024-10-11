
import CrossButtonBasketPink from "../../assets/img/icons/CrossButtonBasketPink";
import styles from "./MobileMenuPink.module.sass";
const MobileMenuPink = ({ isMobileMenuOpen,
    setMobileMenuOpen}) => {
    return (
      <div className={styles.mobileMenuPink  + " " + (isMobileMenuOpen && styles.mobileMenuPink_open)}>
        <CrossButtonBasketPink setMobileMenuOpen={setMobileMenuOpen}/>
        <div className={styles.mobileMenuBlock} >
        <div className={styles.mobileMenuText}>Меню</div>
        <ul className={styles.mobileMenuTextBlox}>
            <li className={styles.mobileMenuTextLi}>Новинки</li>
            <li className={styles.mobileMenuTextLi}>платья</li>
            <li className={styles.mobileMenuTextLi}>верх</li>
            <li className={styles.mobileMenuTextLi}>юбки</li>
            <li className={styles.mobileMenuTextLi}>верхняя одежда</li>
            <li className={styles.mobileMenuTextLi}>мелочи</li>
            <li className={styles.mobileMenuTextLi}>костюмы</li>
            <li className={styles.mobileMenuTextLi}>#Boorivagirls</li>
        </ul>


        </div>
        

        
      </div>
    );
  };
  
  export default MobileMenuPink;