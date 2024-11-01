import { Link } from "react-router-dom";
import WishlistIcon from "../../../assets/img/icons/WishlistIcon";

import styles from "./Wishlist.module.sass";


const Wishlist = () => {
  
  
  return (
    <Link to="/booriva/wishlistPage" className={styles.wishlist}>
      <WishlistIcon />
      <div className={styles.allSumBasket}>0</div>
    </Link>
  );
};
export default Wishlist;
