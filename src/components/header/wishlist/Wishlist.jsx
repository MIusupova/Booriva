import { Link } from "react-router-dom";
import WishlistIcon from "../../../assets/img/icons/WishlistIcon";

import styles from "./Wishlist.module.sass";
import { useSelector } from "react-redux";


const Wishlist = () => {
  const allProductWishlist = useSelector(state => state.wish.allProductWishlist)
  
  
  return (
    <Link to="/booriva/wishlistPage" className={styles.wishlist} >
      <WishlistIcon />
      <div className={styles.allSumBasket}>{allProductWishlist}</div>
    </Link>
  );
};
export default Wishlist;
