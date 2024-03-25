import './new_items.css'
import Headline from './headline/headline'
import CardSweatshirt from '../../../components/cards/cardSweatshirt'
import CardDress from '../../../components/cards/cardDress'
import CardBomber from '../../../components/cards/cardBomber'
import CardTShirt from '../../../components/cards/cardT-shirt'
import NewItemsButton from '../../../assets/img/icons/new_items_button'
import NewItemsButtonText from '../../../assets/img/icons/new_items_buttonText'

const NewItems = () => {
    return(
        <div className="NewItems-box">
            <Headline/>
            <div className='newItemsCards'>
                <div className='newItemsCardsBox'>
                    <CardSweatshirt/>
                    <CardDress/>
                </div>
                <div className='newItemsCardsBox2'>
                    <CardBomber/>
                    <CardTShirt/>
                </div>
            </div>
            <div className='NewItemsButton'>
                <div className='NewItemsButtonColor'><NewItemsButton/></div>
                <div className='NewItemsButtonText'><NewItemsButtonText/></div>
            </div>
        </div>
    )
}

export default NewItems