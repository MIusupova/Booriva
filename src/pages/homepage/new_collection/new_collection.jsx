import { Link } from 'react-router-dom'
import NewCollection from '../../../assets/img/images/newcol.png'
import styles from'./new_collection.module.sass'

const NewCollectionBox = () => {
    return (
        <Link to='/catalog'>
            <div className={styles.new_collection}>
                <img src={NewCollection} alt='new collection'/>
            </div>
        </Link>
    )
}

export default NewCollectionBox