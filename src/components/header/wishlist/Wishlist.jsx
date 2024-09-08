import { Link } from "react-router-dom";
import WishlistIcon from "../../../assets/img/icons/WishlistIcon";

import styles from "./Wishlist.module.css";

const Wishlist = () => {
  return (
    <Link to="/booriva/wishlistPage" className={styles.wishlist}>
      <WishlistIcon />
    </Link>
  );
};
export default Wishlist;
