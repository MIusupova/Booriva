import './card.css'
import cardTShirtImg from '../../assets/img/images/card-t-shirt.png'
import Like from '../../assets/img/icons/like'

const CardTShirt = () => {
    return(
        <div className='cardBox cardT-shirt'>
            <img src={cardTShirtImg} alt='sweatshirt' className='cardImg'/>
            <div className='likeBox'><Like/></div>
            <div className='cardLine'></div>
            <div className='cardDescription'>
                <div className='cardText'>Платье-футболка рыбы<br/> в аквариуме</div>
                <div className='cardPrice'>899 ₴</div>
            </div>
        </div>
    )
}

export default CardTShirt