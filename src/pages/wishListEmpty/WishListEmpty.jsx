import WishListEmptyHeart from "../../assets/img/icons/WishlistEmptyHeart";
import WishlistEmptyHeartTwo from "../../assets/img/icons/WishlistEmptyHeartTwo";
import Button from "../../components/button/Button";
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import styles from "./WishListEmpty.module.sass";

const WishListEmpty = () => {
    return (
        <div className={styles.wishListEmpty + ' wrapper'}>
            <div className={styles.wishListTitle}>
                <Title title = 'список желаний' subtitle = 'твой тайный список желаний'/>
                <div className={styles.categoryTitleSvg}></div>
            </div>
            <WishListEmptyHeart/>
            <WishlistEmptyHeartTwo/>
            <div className={styles.wishListEmptyText}>
                <p className={styles.wishListEmptysubText}>Похоже тебе еще ничего не запало </p>
                <p className={styles.wishListEmptysubText}>в сердечко....</p>
            </div>
            
            <Button text = 'На главную'/>
            <Delivery/>
            



        </div>
        
    )
}
export default WishListEmpty