import styles from'./new_collection.module.sass'
import NewCollection from '../../../assets/img/images/newcol.png'

const NewCollectionBox = () => {
    return (
        <div className={styles.new_collection}>
            <img src={NewCollection} alt='new collection'/>
        </div>
    )
}

export default NewCollectionBox