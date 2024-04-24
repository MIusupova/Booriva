import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import Card from '../../components/cards/card';
import cardDressImg from '../../assets/img/images/card-dress.png';
import styles from "./WishListPage.module.sass";

const WishListPage = () => {
    return (
        <div className={styles.wishListPage + ' wrapper'}>
            <div className={styles.wishListTitle}>
                <Title title = 'список желаний' subtitle = 'твой тайный список желаний'/>
                <div className={styles.categoryTitleSvg}></div>
                <div className={styles.newItemsCards}>
                    <div className={styles.newItemsCardsBox}>
                        <Card image={cardDressImg} text='Платье прозрачное в цветочек черное' price='1 299 ₴'/>
                        <Card image={cardDressImg} text='Платье прозрачное в цветочек черное' price='1 299 ₴'/>
                        <Card image={cardDressImg} text='Платье прозрачное в цветочек черное' price='1 299 ₴' boolean='false'/>
                    </div>
                </div>
            </div>
            <Delivery/>
        </div>
    )
}
export default WishListPage