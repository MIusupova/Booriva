import Title from "../../../components/title/Title";

import styles from "./CategoryTitle.module.sass";

const CategoryTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.categoryTitle}>
      <Title title={title} subTitle={subTitle} />
      <div className={styles.categoryTitleSvg}></div>
    </div>
  );
};
export default CategoryTitle;
