import BoorivaLogo from "./../../../assets/img/icons/BoorivaLogo";
import Contacts from "./../contacts/Contacts";
import Search from "./../search/Search";
import SearchProduct from "../../searchProduct/SearchProduct";

import styles from "./MobileHeader.module.sass";
import PhoneContacts from "../../../assets/img/icons/PhoneContacts";

const MobileHeader = ({ searchOpen, setSearchOpen, value, setValue}) => {
   
    return ( 
        
        <div className={styles.mobileHeader}>
            <SearchProduct  setSearchOpen={setSearchOpen} searchOpen={searchOpen} value={value} setValue={setValue}/>
            
            
                <div className={styles.blocktwo}>
                    <div className={styles.phoneContact}>
                        <PhoneContacts/>
                            <a href="tel:+73339999999" className={styles.phoneText}>+7(333) 999 99 99</a>
                    </div>
                    <BoorivaLogo/>
                    <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen} value={value} setValue={setValue}/>

                </div>
                
            </div>
            

    )

}
export default MobileHeader