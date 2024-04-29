import { Link } from 'react-router-dom'
import NewCollection from '../../../assets/img/images/newcol.png'
import styles from'./new_collection.module.sass'

const NewCollectionBox = () => {
    return (
        <div className={styles.new_collection}>
            <Link to='/categoryProduct'><img src={NewCollection} alt='new collection'/></Link>
        </div>
    )
}

export default NewCollectionBox