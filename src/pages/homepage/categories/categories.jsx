import { Link } from 'react-router-dom'
import Tshirt from '../../../assets/img/images/category-t-shirt.png'
import TshirtText from '../../../assets/img/icons/category-t-shirt-text'
import Bottom from '../../../assets/img/images/category-bottom.png'
import BottomText from '../../../assets/img/icons/category-bottom-text'
import Up from '../../../assets/img/images/category-up.png'
import UpText from '../../../assets/img/icons/category-up-text'
import Dress from '../../../assets/img/images/category-dress.png'
import DressText from '../../../assets/img/icons/category-dress-text'
import Costume from '../../../assets/img/images/category-costume.png'
import CostumeText from '../../../assets/img/icons/category-costume-text'
import Hoodie from '../../../assets/img/images/category-hoodie.png'
import HoodieText from '../../../assets/img/icons/category-hoodie-text'
import styles from './categories.module.sass'

const Categories = () => {
    return(
        <div className={styles.categories}>
            <div className={styles.categoriesBox}>
                <div className={styles.categoriesImgRelative}><img className={styles.imgBig} src={Tshirt} alt='Tshirt' /><div className={`${styles.categoriesImgAbsolute} ${styles.Tshirt}`}><Link to='/categoryProduct'><TshirtText/></Link></div></div>
                <div className={styles.categoriesBoxSmall}>
                    <div className={styles.categoriesImgRelative}><img className={styles.imgSmall} src={Bottom} alt='Bottom' /><div className={`${styles.categoriesImgAbsolute} ${styles.Bottom}`}><Link to='/categoryProduct'><BottomText/></Link></div></div>
                    <div className={styles.categoriesImgRelative}><img className={styles.imgSmall} src={Up} alt='Up' /><div className={`${styles.categoriesImgAbsolute} ${styles.Up}`}><Link to='/categoryProduct'><UpText/></Link></div></div>
                </div>
            </div>
            <div className={styles.categoriesBox}>
                <div className={styles.categoriesBoxSmall}>
                    <div className={styles.categoriesImgRelative}><img className={styles.imgSmall} src={Dress} alt='Dress' /><div className={`${styles.categoriesImgAbsolute} ${styles.Dress}`}><Link to='/categoryProduct'><DressText/></Link></div></div>
                    <div className={styles.categoriesImgRelative}><img className={styles.imgSmall} src={Costume} alt='Costume' /><div className={`${styles.categoriesImgAbsolute} ${styles.Costume}`}><Link to='/categoryProduct'><CostumeText/></Link></div></div>
                </div>
                <div className={styles.categoriesImgRelative}><img className={styles.imgBig} src={Hoodie} alt='Hoodie' /><div className={`${styles.categoriesImgAbsolute} ${styles.Hoodie}`}><Link to='/categoryProduct'><HoodieText/></Link></div></div>
            </div>
        </div>
    )
}

export default Categories