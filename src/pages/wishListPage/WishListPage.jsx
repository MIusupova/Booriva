import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import styles from "./WishListPage.module.sass";

const WishListPage = () => {
    return (
        <div className={styles.wishListPage + ' wrapper'}>
            <div className={styles.wishListTitle}>
                <Title title = 'список желаний' subtitle = 'твой тайный список желаний'/>
                <div className={styles.categoryTitleSvg}></div>
            </div>
            <Delivery/>
                      
                    
        </div>
    )
}
export default WishListPage