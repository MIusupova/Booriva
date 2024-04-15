import NewItemsButton from "../../assets/img/icons/new_items_button";
import styles from "./Button.module.sass";

const Button = ({text}) => {
    return (
        <div className={styles.button}>
            <NewItemsButton/>

            {text}
                      
        </div>
                
    )
}
export default Button