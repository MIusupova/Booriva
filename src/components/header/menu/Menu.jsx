import styles from "./Menu.module.css";
const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul  className={styles.menuli}>
                    <li> <a href="" className={styles.list}>Главная</a></li>
                    <li> <a href="" className={styles.list} >Платья</a></li>
                    <li> <a href="" className={styles.list} >Верх</a></li>
                    <li> <a href="" className={styles.list} >Низ</a></li>
                    <li> <a href="" className={styles.list} >Куртки</a></li>
                    <li> <a href="" className={styles.list} >Мелочи</a></li>
                    <li> <a href="" className={styles.list} >Костюмы</a></li>
                    <li> <a href="" className={styles.list} >#Boorivagirls</a></li>
                </ul>        
        </nav>       
    )
};
export default Menu;