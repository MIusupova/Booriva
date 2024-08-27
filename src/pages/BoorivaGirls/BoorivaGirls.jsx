import Title from "../../components/title/Title";
import styles from "./BoorivaGirls.module.sass";

const BoorivaGirls = () => {
  return (
    <div className={styles.box}>
      <Title title="BOORIVAGIRLS" subtitle="#BOORIVAGIRLS" />
      <div className={styles.text}>
        Мы обожаем встречать booriva на улице. Так как всех не встретишь,
        отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА!
      </div>
    </div>
  );
};
export default BoorivaGirls;
