import WishListBox from "../../assets/img/icons/WishListBox";
import WishListCat from "../../assets/img/icons/WishListCat";
import WishListHeart from "../../assets/img/icons/WishListHeart";

import styles from "./Delivery.module.sass";

const Delivery = () => {
    return (
        <div className={styles.delivery}>
            <div className={styles.deliveryCat}>
                <WishListCat/>
                <div className={styles.deliveryCatBlock}> 
                    <p className={styles.deliveryText} >Отправка день в день</p>
                    <p className={styles.deliverySubtext}>При заказе до 1800</p>
                </div>
            </div>
            <div className={styles.deliveryBox}>
                <WishListBox/>
                <div className={styles.deliveryBoxBlock}> 
                    <p className={styles.deliveryText} >Легкий <p>возврат/обмен</p></p>
                    <p className={styles.deliverySubtext}>В течении 14 дней</p>
                </div>
            </div>
            <div className={styles.deliveryHeart}>
                <WishListHeart/>
                <div className={styles.deliveryHeartBlock}> 
                    <p className={styles.deliveryText} >Сделано <p>в России</p></p>
                    <p className={styles.deliverySubtext}>Прям в Москве</p>
                </div>
            </div>
            
        </div>
        
    )
}
export default Delivery