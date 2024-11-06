import { Link } from "react-router-dom";
import WishlistIcon from "../../../assets/img/icons/WishlistIcon";

import styles from "./Wishlist.module.sass";
import { useSelector } from "react-redux";


const Wishlist = ({addProductInWish}) => {
  const allProductWishlist = useSelector(state => state.wish.allProductWishlist)
  
  
  return (
    <div className={styles.wishlist} onClick={addProductInWish}>
      <Link to="/booriva/wishlistPage"  >
      <WishlistIcon />
      
    </Link>
    <div className={styles.allSumBasket}>{allProductWishlist}</div>
    

    </div>
    
  );
};
export default Wishlist;
