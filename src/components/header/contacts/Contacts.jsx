
import AdressHeader from "../../../assets/img/icons/AdressHeader";
import PhoneContacts from "../../../assets/img/icons/PhoneContacts";

import styles from "./Contacts.module.sass";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.adressContact}>
                <AdressHeader/>
                <a href="https://maps.app.goo.gl/5V8HWf6FMfUFKwj26" target=" blank" className={styles.adressText}>
                    Москва, переулок Арбат 21 
                </a>
            </div>
            <div className={styles.phoneContact}>
                <PhoneContacts/>
                <a href="tel:+73339999999" className={styles.phoneText}>+7(333) 999 99 99</a>
            </div>
        </div>

    )

}
export default Contacts