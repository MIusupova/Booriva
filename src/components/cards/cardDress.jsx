import './card.css'
import cardDressImg from '../../assets/img/images/card-dress.png'
import Like from '../../assets/img/icons/like'

const CardDress = () => {
    return(
        <div className='cardBox'>
            <img src={cardDressImg} alt='sweatshirt' className='cardImg'/>
            <div className='likeBox'><Like/></div>
            <div className='cardLine'></div>
            <div className='cardDescription'>
                <div className='cardText'>Платье прозрачное<br/> в цветочек черное</div>
                <div className='cardPrice'>1 299 ₴</div>
            </div>
        </div>
    )
}

export default CardDress