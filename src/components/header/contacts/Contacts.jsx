import AdressHeader from "../../../assets/img/icons/AdressHeader";
import PhoneContacts from "../../../assets/img/icons/PhoneContacts";

import styles from "./Contacts.module.sass";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.adressContact}>
                <AdressHeader/>
                <div className={styles.adressText}>
                    Москва, переулок Арбат 21 
                </div>
            </div>
            <div className={styles.phoneContact}>
                <PhoneContacts/>
                <div className={styles.phoneText}>+8(333) 999 99 99</div>
            </div>
        </div>

    )

}
export default Contacts