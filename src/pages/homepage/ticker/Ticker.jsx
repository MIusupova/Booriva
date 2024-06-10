import styles from "./Ticker.module.sass";

const Ticker = ({ text }) => {
  return (
    <div className={styles.ticker}>
      <ul className={styles.blockticker}>
        <li className={styles.text}>{text}</li>
        <li className={styles.text}>{text}</li>
        <li className={styles.text}>{text}</li>
        <li className={styles.text}>{text}</li>
        <li className={styles.text}>{text}</li>
        <li className={styles.text}>{text}</li>
      </ul>
    </div>
  );
};
export default Ticker;
