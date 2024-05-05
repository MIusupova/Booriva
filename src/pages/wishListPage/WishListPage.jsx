import { Link } from 'react-router-dom';
import Card from '../../components/cards/card';
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import cardSweatshirtImg from '../../assets/img/images/card-sweatshirt.png';
import cardDressImg from '../../assets/img/images/card-dress.png';
import cardBomberImg from '../../assets/img/images/card-bomber.png';
import styles from "./WishListPage.module.sass";

const WishListPage = () => {
    return (
        <div className={styles.wishListPage + ' wrapper'}>
            <div className={styles.wishListTitle}>
                <Title title = 'список желаний' subtitle = 'твой тайный список желаний'/>
                <div className={styles.categoryTitleSvg}></div>
            </div>
            <div className={styles.newItemsCards}>
                <Link to='/cardProductPage' className={styles.sizeCard}><Card image={cardSweatshirtImg} active={true} text='Cвитшот вставка клетка' price='1 099 ₽'/></Link>
                <Link to='/cardProductPage' className={styles.sizeCard}><Card image={cardDressImg} active={true} text='Платье прозрачное в цветочек черное' price='1 299 ₽'/></Link>
                <Link to='/cardProductPage' className={styles.sizeCard + ' ' + styles.deleteCard}><Card image={cardBomberImg} active={true} text='Бомбер Gone Crazy хаки' price='2 499 ₽'/></Link>
            </div>
            <Delivery/>                     
        </div>
    )
}
export default WishListPage