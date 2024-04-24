import Headline from './headline/headline'
import Card from '../../../components/cards/card'
import cardSweatshirtImg from '../../../assets/img/images/card-sweatshirt.png'
import cardDressImg from '../../../assets/img/images/card-dress.png'
import cardBomberImg from '../../../assets/img/images/card-bomber.png'
import cardTShirtImg from '../../../assets/img/images/card-t-shirt.png'
import NewItemsButton from '../../../assets/img/icons/new_items_button'
import NewItemsButtonText from '../../../assets/img/icons/new_items_buttonText'
import styles from './new_items.module.sass'
import { Link } from 'react-router-dom'

const NewItems = () => {        
    return(
        <div className={styles.NewItemsBox}>
            <Headline/>
            <div className={styles.newItemsCards}>
                <div className={styles.newItemsCardsBox}>
                    <Link to='/products'><Card image={cardSweatshirtImg} text='Cвитшот вставка клетка' price='1 099 ₴'/></Link>
                    <Link to='/products'><Card image={cardDressImg} text='Платье прозрачное в цветочек черное' price='1 299 ₴'/></Link>
                </div>
                <div className={styles.newItemsCardsBox2}>
                    <Link to='/products'><Card image={cardBomberImg} text='Бомбер Gone Crazy хаки' price='2 499 ₴'/></Link>
                    <Link to='/products'><Card image={cardTShirtImg} text='Платье-футболка рыбы в аквариуме' price='899 ₴' boolean='true'/></Link>
                </div>
            </div>
            <Link to='/catalog'>
                <div className={styles.NewItemsButton}>
                    <div className={styles.NewItemsButtonColor}><NewItemsButton/></div>
                    <div className={styles.NewItemsButtonText}><NewItemsButtonText/></div>
                </div>
            </Link>
        </div>
    )
}

export default NewItems