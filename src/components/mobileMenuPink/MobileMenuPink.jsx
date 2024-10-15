
import { Link } from "react-router-dom";
import CrossButtonBasketPink from "../../assets/img/icons/CrossButtonBasketPink";
import styles from "./MobileMenuPink.module.sass";
import { getMenuItems } from "../../services/menu";
import { useEffect, useState } from "react";
const MobileMenuPink = ({ isMobileMenuOpen,
    setMobileMenuOpen}) => {
        const [menu, setMenu] = useState([]);
        useEffect(() => {
            getMenuItems().then((res) => setMenu(res));
  }, []);
    return (
      <div className={styles.mobileMenuPink  + " " + (isMobileMenuOpen && styles.mobileMenuPink_open)}>
        <CrossButtonBasketPink setMobileMenuOpen={setMobileMenuOpen}/>
        <div className={styles.mobileMenuBlock} >
        <div className={styles.mobileMenuText}>Меню</div>
        <ul className={styles.mobileMenuTextBlox}>
            {menu.map(({ id, name }) => (
          
             <Link to={`/booriva/catalog?menuId=${id}`}><li className={styles.mobileMenuTextLi} key={id}>{name}</li></Link>
            
                
            
        ))}

            <Link to="/booriva/boorivagirls" className={styles.mobileMenuTextLi}>
                #Boorivagirls
            </Link>
        </ul>


        </div>
        

        
      </div>
    );
  };
  
  export default MobileMenuPink;