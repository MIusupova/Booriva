import Title from "../../../components/title/Title";

import styles from "./CategoryTitle.module.sass";

const CategoryTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.categoryTitle}>
      <Title title={title} subtitle={subtitle} />
      <div className={styles.categoryTitleSvg}></div>
    </div>
  );
};
export default CategoryTitle;
