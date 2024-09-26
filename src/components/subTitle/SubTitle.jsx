import styles from "./SubTitle.module.sass";

const SubTitle = ({ subTitle }) => {
  return <span className={styles.SubTitle}>{subTitle}</span>;
};
export default SubTitle;
