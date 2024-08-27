import styles from "./SubTitle.module.sass";

const SubTitle = ({ subTitle }) => {
  return <span className={styles.subTitle}>{subTitle}</span>;
};
export default SubTitle;
