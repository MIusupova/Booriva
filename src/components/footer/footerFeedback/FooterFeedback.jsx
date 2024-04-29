import { Link } from "react-router-dom";

import girl from "../../../assets/img/images/girl.png";

import styles from "./FooterFeedback.module.sass";

const FooterFeedback = () => {
  return (
    <div className={styles.footerFeedback}>
      <div className={styles.footerFeedbackDisp}>
        <div className={styles.footerFeedbackGirl}>
          <img src={girl} />
        </div>
        <div className={styles.footerFeedbackWrap}>
          <div className={styles.footerFeedbackText}>
            Нам важно знать, что ты думаешь про нас! Просто напиши мне!
          </div>
          <div className={styles.footerFeedbackLink}>
            <Link to="ivan">Написать Иванке</Link>
            <div className={styles.footerFeedbackLine}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFeedback;
