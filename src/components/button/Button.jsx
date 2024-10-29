
import ButtonWishlist from "../../assets/img/icons/ButtonWishlist";
import styles from "./Button.module.sass";


const Button = ({text}) => {
    
    return (
        <div className={styles.button} >
            <ButtonWishlist/>
            <div className={styles.text}>{text}</div>         
        </div>
                
    )
}
export default Button