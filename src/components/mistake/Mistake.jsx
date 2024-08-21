import { Link } from "react-router-dom";
import Dragon from "../../assets/img/icons/Dragon";
import MistakeButton from "../../assets/img/icons/MistakeButton";
import Ticker from "../../pages/homepage/ticker/Ticker";
import styles from "./Mistake.module.sass";

const Mistake = () => {
  return (
    <div>
      <div className={styles.dragonBox}>
        <Dragon />
      </div>
      <Ticker text={`Похоже, что-то пошло не так...`} />
      <div className={styles.text}>
        Страница не найдена, но у нас есть еще много всего интересного
      </div>
      <div className={styles.mistakeButton}>
        <Link to="/">
          <MistakeButton />
        </Link>
      </div>
    </div>
  );
};

export default Mistake;
