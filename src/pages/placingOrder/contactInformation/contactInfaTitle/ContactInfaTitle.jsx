import VectorPink from "../../../../assets/img/icons/VectorPink";
import styles from "./ContactInfaTitle.module.sass";

const ContactInfaTitle = () => {
  return (
    <div className={styles.contactInfaTitle}>
      <div className={styles.contactInfaTitleOne}>1</div>
      <div className={styles.contactInfaVector}>
        <VectorPink />
      </div>
      <div className={styles.contactInfaSubtitle}>КОНТАКТНЫЕ ДАННЫЕ</div>
    </div>
  );
};

export default ContactInfaTitle;
