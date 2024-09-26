import NewItemsPink from "../../../../assets/img/icons/new_items_pink";
import NewItemsBlack from "../../../../assets/img/icons/new_items_black";
import NewItemsVector from "../../../../assets/img/icons/new_items_vector";
import styles from "./headline.module.sass";

const Headline = () => {
  return (
    <div className={styles.headlineBox}>
      <div className={styles.newItemsBox}>
        <NewItemsPink />
        <div className={styles.vectorBox}>
          <NewItemsBlack />
          <NewItemsVector />
        </div>
      </div>
    </div>
  );
};

export default Headline;
