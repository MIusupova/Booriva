import './headline.css'
import NewItemsPink from '../../../../assets/img/icons/new_items_pink'
import NewItemsBlack from '../../../../assets/img/icons/new_items_black'
import Vector from '../../../../assets/img/icons/vector'

const Headline = () => {
    return(
        <div className='headlineBox'>
          <div className='newItemsBox'>
            <NewItemsPink/> 
            <div className='vectorBox'>
              <NewItemsBlack/>
              <Vector/>
            </div> 
          </div>
        </div>
    )
}

export default Headline