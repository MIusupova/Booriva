import { Link } from "react-router-dom";
import styles from "./../../../components/basket/BasketPage";
const BasketBtnSmall = () => {
  return (
    <Link>
        <svg className={styles.basketBtnSmall} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="#FDA3C4"/>
            <path d="M8.65625 3.02344L3.23141 8.2394" stroke="white" stroke-width="0.608696" stroke-linecap="round"/>
            <path d="M3.33594 2.92188L8.5519 8.34672" stroke="white" stroke-width="0.608696" stroke-linecap="round"/>
        </svg>
    </Link>
    
   
  );
};
export default BasketBtnSmall;