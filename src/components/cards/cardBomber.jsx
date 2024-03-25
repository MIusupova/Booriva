import './card.css'
import cardBomberImg from '../../assets/img/images/card-bomber.png'
import Like from '../../assets/img/icons/like'

const CardBomber = () => {
    return(
        <div className='cardBox'>
            <img src={cardBomberImg} alt='sweatshirt' className='cardImg'/>
            <div className='likeBox'><Like/></div>
            <div className='cardLine'></div>
            <div className='cardDescription'>
                <div className='cardText'>Бомбер Gone Crazy<br/> хаки</div>
                <div className='cardPrice'>2 499 ₴</div>
            </div>
        </div>
    )
}

export default CardBomber