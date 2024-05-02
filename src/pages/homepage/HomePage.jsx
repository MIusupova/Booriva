import NewItems from "./new_items/new_items";
import NewCollectionBox from "./new_collection/new_collection";
import Ticker from "./ticker/Ticker";
import Categories from "./categories/categories";
import Cards from "./cards/Cards";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Categories />
      <NewItems />
      <NewCollectionBox />
      <Ticker />
      <Cards />
    </div>
  );
};
export default HomePage;
