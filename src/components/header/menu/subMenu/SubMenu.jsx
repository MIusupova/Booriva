import styles from "./SubMenu.module.sass";
const SubMenu = (isShow) => {
    return(
        <ul  className={styles.submenu + ' ' + (isShow ? styles.show : styles.hidden)}>
            
            
        </ul>      
    )
}
export default SubMenu;