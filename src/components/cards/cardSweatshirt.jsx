import './card.css'
import cardSweatshirtImg from '../../assets/img/images/card-sweatshirt.png'
import Like from '../../assets/img/icons/like'

const CardSweatshirt = () => {
    return(
        <div className='cardBox'>
            <img src={cardSweatshirtImg} alt='sweatshirt' className='cardImg'/>
            <div className='likeBox'><Like/></div>
            <div className='cardLine'></div>
            <div className='cardDescription'>
                <div className='cardText'>Cвитшот вставка<br/> клетка</div>
                <div className='cardPrice'>1 099 ₴</div>
            </div>
        </div>
    )
}

export default CardSweatshirt