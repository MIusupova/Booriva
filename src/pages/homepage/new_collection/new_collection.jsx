import NewCollection from '../../../assets/img/images/newcol.png'
import styles from'./new_collection.module.sass'

const NewCollectionBox = () => {
    return (
        <link to='/catalog'>
            <div className={styles.new_collection}>
                <img src={NewCollection} alt='new collection'/>
            </div>
        </link>
    )
}

export default NewCollectionBox