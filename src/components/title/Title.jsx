import Vector from "../../assets/img/icons/vector";
import SubTitle from "../subTitle/SubTitle";

import styles from "./Title.module.sass";

const Title = ({ title, subTitle }) => {
  return (
    <h1 className={styles.title}>
      {title}
      <span className={styles.subTitle}>
        <SubTitle subTitle={subTitle} />
        <Vector />
      </span>
    </h1>
  );
};
export default Title;
