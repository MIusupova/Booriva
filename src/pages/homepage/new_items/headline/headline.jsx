import styles from './headline.module.sass'
import NewItemsPink from '../../../../assets/img/icons/new_items_pink'
import NewItemsBlack from '../../../../assets/img/icons/new_items_black'
import Vector from '../../../../assets/img/icons/vector'

const Headline = () => {
    return(
        <div className={styles.headlineBox}>
          <div className={styles.newItemsBox}>
            <NewItemsPink/> 
            <div className={styles.vectorBox}>
              <NewItemsBlack/>
              <Vector/>
            </div> 
          </div>
        </div>
    )
}

export default Headline